import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State, City } from "country-state-city";

import { fetchData, fetchDataAll } from "../../../helpers/query";

import { getLanguageNames } from "language-list";
import options from "./data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../../context/Provider";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import {
  RELATION_TYPE,
  RELATION_TYPE_2,
  RELATION_TYPE_AS,
  TITLE,
} from "../../../constants/enum";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";
import {
  AddRelationInfo,
  AddRelationInfo2,
  GetAllRelationByCategory,
  GetAllRelationByCategory2,
  GetAllRelationByLevel,
  GetAllRelationByRelationType,
  GetAllRelationInfo,
  GetRelationInfo,
  UpdateRelationInfo,
} from "../../../context/actions/user/user.action";
import AutoSuggestInput from "../../formInput/autoSuggest.text";
import { selectProps } from "../../../helpers/selectProps";

const ParentForm = (props) => {
  const { userId, relationType, relationCategory, dt } = props;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [isEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [Region, setRegion] = useState([]);
  const [city, setCity] = useState([]);
  const [picFile, setpicFile] = useState([]);
  const [docFile, setdocFile] = useState(null);
  const [selCity, setselCity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selRegion, setselRegion] = useState("");
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [listChild, setListChild] = useState([]);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [level, setLevel] = useState("1");
  const [relateType, setRelateType] = useState("");
  const [showParent, setShowParent] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  const [rowsData, setRowsData] = useState([{}]);
  const [tblData, setTblData] = useState([]);

  const onChangeWifeInfo = async (relationType, e) => {
    e.target.value !== "" ? setEdit(true) : IsEditAction();

    getRelationInfo(relationType, e.target.value);
  };
  const IsEditAction = () => {
    setEdit(false);
    reset();
  };

  const getRelationInfo = (relationType, relationId) => {
    fetchDataAll(`user/getRelationByCategory/${relationId}/${relationType}`)(
      (user) => {
        alert(user);

        const fields = [
          "RelationId",
          "FirstName",
          "MiddleName",
          "LastName",
          "MaidenName",
        ];
        fields.forEach((field) => setValue(`objItem[0].${field}`, user[field]));

        const fields1 = [
          "RelationDetailId",
          "Mobile",
          "Email",
          "Sex",
          "Age",
          "DOB",
          "BloodGroup",
          "MaritalStatus",
          "Language",
          "Occupation",
          "EmploymentStatus",
          "FamilyName",
          "Kindred",
          "Clan",
          "Tribe",
          "ProfilePicture",
          "CoverPicture",
          "City",
          "HomeTown",
          "LGA",
          "State",
          "Country",
        ];
        fields1.forEach((field1) =>
          setValue(`objItem[0].${field1}`, user["relation_detail"][field1])
        );
        setEmail(user);
        // setcompanyId(user["CompanyId"]);
        setRegion(
          (Region) =>
            (Region = State.getStatesOfCountry(
              user["relation_detail"]["Country"]
            ))
        );
        // selectCity(user["City"]);
        setselRegion(user["relation_detail"]["State"]);

        setCity(
          (city) =>
            (city = City.getCitiesOfState(
              user["relation_detail"]["Country"],
              user["relation_detail"]["State"]
            ))
        );

        setselCity(user["relation_detail"]["City"]);
      }
    )((err) => {
      toast.error(err);
    });
  };

  const addTableRows = () => {
    const rowsInput = {
      FirstName: "",
      LastName: "",
      MiddleName: "",
      NickName: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const loadTableRows = (objItemDt = null) => {
    const rowsInput = {
      FirstName: "",
      LastName: "",
      MiddleName: "",
      NickName: "",
    };

    if (objItemDt.length > 0) {
      const newChildArray = objItemDt.map(
        selectProps("FirstName", "MiddleName", "LastName", "NickName")
      );

      const fields = [
        "RelationId",
        "FirstName",
        "MiddleName",
        "LastName",
        "NickName",
      ];
      const fields1 = [
        "RelationDetailId",
        "Mobile",
        "Email",
        "Sex",
        "Age",
        "DOB",
        "BloodGroup",
        "MaritalStatus",
        "Language",
        "Occupation",
        "EmploymentStatus",
        "FamilyName",
        "Kindred",
        "Clan",
        "Tribe",
        "ProfilePicture",
        "CoverPicture",
        "City",
        "HomeTown",
        "LGA",
        "State",
        "Country",
      ];
      objItemDt?.map((item, index) => {
        setRowsData([...newChildArray]);
        fields.forEach((field) =>
          setValue(`objItem[${index}].${field}`, item[field])
        );

        fields1.forEach((field1) =>
          setValue(
            `objItem[${index}].${field1}`,
            item["relation_detail"][field1]
          )
        );

        setRegion(
          (Region) =>
            (Region = State.getStatesOfCountry(
              item["relation_detail"]["Country"]
            ))
        );
        // selectCity(user["City"]);
        setselRegion(item["relation_detail"]["State"]);

        setCity(
          (city) =>
            (city = City.getCitiesOfState(
              item["relation_detail"]["Country"],
              item["relation_detail"]["State"]
            ))
        );

        setselCity(item["relation_detail"]["City"]);
      });
      //}
    } else {
      setRowsData([...rowsData]);
    }
    // objItemData
    //   ? setRowsData([...rowsData, objItemData])
    //   : setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };
  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
  };

  const selectCity = async (e) => {
    setCity((city) => (city = City.getCitiesOfState(country, e.target.value)));
  };

  const SelectGender = async (e) => {
    e.target.value !== null && setGender(e.target.value);
  };

  const SelectLevel = (e) => {
    const arr = e.target.value.split(",");
    setListChild([]);

    if (arr[1] !== null) {
      setShowParent(true);
      setLevel(arr[0]);
      setRelateType(arr[1]);
      let rLevel = 0;
      arr[1] === "child"
        ? (rLevel = parseInt(arr[0]))
        : arr[1] === "sibling"
        ? (rLevel = parseInt(arr[0]))
        : arr[1] === "spouse"
        ? (rLevel = parseInt(arr[0]))
        : arr[1] === "parent"
        ? (rLevel = parseInt(arr[0]))
        : (rLevel = parseInt(arr[0]));

      GetAllRelationByLevel(userId, parseInt(rLevel))
        .then((res) => {
          listChild.length = 0;
          console.log("data", res?.data);
          setListChild(res?.data);
        })
        .catch((e) => {});
    } else {
      setShowParent(false);
    }
  };

  const getRelationType = (category, level) => {
    let strRelation = "";
    category === "parent" && level === "1"
      ? (strRelation = " Parent")
      : level === "0"
      ? (strRelation = " Sibling")
      : category === "parent" && level === "2"
      ? (strRelation = " Grand Parent")
      : category === "parent" && level === "3"
      ? (strRelation = " Great Grand Parent")
      : (strRelation = " Not Found");
    return strRelation;
  };

  const popupCloseHandlerImage = (e) => {
    setVisibilityImage(e);
  };
  const onChangePicHandler = async (e) => {
    setpicFile((picFile) => e.target.files[0]);
  };

  const {
    register: register,
    formState: { errors },
    reset,
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const {
    register: registerWork,
    formState: { errors8 },
    setValue: setValue7,
    handleSubmit: handleWork,
  } = useForm();

  const {
    userDispatch,
    relationDispatch,
    userState: {
      createUser: {
        data: createData,
        loading: createLoading,
        error: createError,
      },

      Users: { data: parentUsers, loading: parentLoading, error: parentError },
    },
    relationState: {
      createRelation: {
        data: relationData,
        loading: relationLoading,
        error: relationError,
      },
    },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // loadTableRows(dt);

    GetAllRelationByCategory2(
      userId,
      relationCategory
    )((res) => {
      setTblData(res.data);
    })((e) => {
      toast.error(e.message);
    });

    GetAllRelationByCategory(userId, relationCategory)(userDispatch);
    parentUsers?.length === 1 &&
      GetRelationInfo(relationType, parentUsers?.data[0].RelationId);
  }, [dt]);

  function onSubmit(formdata) {
    setLoading(true);
    isEdit === false
      ? addRelationAction(formdata)
      : updateRelationAction(formdata);
  }

  const addRelationAction = (formdata) => {
    AddRelationInfo(formdata)(userDispatch);
    createData && toast.success(createData?.message);
    createError && toast.error(createError);

    // AddRelationInfo2(formdata)((res) => {
    //   setLoading(false);

    //   toast.success(res?.message);
    // })((e) => {
    //   setLoading(false);
    //   toast.error(e.message);
    // });
  };

  const updateRelationAction = (formdata) => {
    UpdateRelationInfo(formdata)(relationDispatch);
    relationData && toast.success(relationData?.message);
    relationError && toast.error(relationError);
  };
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <div className="input-group mb-3">
        <input
          ref={ref}
          type="text"
          className="form-control datepicker"
          value={value}
          onClick={onClick}
          placeholder="Click to enter date"
          required
        />
        <div className="input-group-append">
          <span className="input-group-text" style={{ height: "54px" }}>
            <i className="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    );
  });
  CustomInput.displayName = "CustomInput";
  console.log("paternal", tblData);
  console.log("getRelationInfo", picFile);
  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title}</h3>

        <input
          type="hidden"
          name="UserId"
          value={props.userId}
          className="form-control"
          {...register("UserId")}
        />

        <div class="row">
          <div className="form-group row">
            {tblData?.length > 0 && (
              <>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group" style={{ float: "right" }}>
                    <label>Select Relation To Update</label>

                    <select
                      name="Wife"
                      className="form-control"
                      // readOnly={readOnly}
                      id="Wife"
                      onChange={(e) => onChangeWifeInfo(relationType, e)}
                    >
                      <option value="">-- Select -- </option>
                      {tblData?.map((item) => (
                        <option key={item.RelationId} value={item.RelationId}>
                          {item?.FirstName +
                            " " +
                            item?.LastName +
                            " |" +
                            getRelationType(item?.RelationType, item?.Level)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="col-md-12 alert alert-success">
                    <h6 style={{ textAlign: "right" }}> </h6>
                  </div>
                </div>
              </>
            )}

            <div className="col-md-12">
              {/* <div className="col-md-12 alert alert-success">
                <h6 style={{ textAlign: "right" }}>
                  {" "}
                  <button
                    type="button"
                    class="default-btn"
                    onClick={addTableRows}
                  >
                    + Add{" "}
                    {props.relationType === "paternal"
                      ? "Paternal "
                      : "Maternal "}
                    Info
                  </button>
                </h6>
              </div> */}
            </div>
          </div>
          {rowsData?.map((objItem, index) => (
            <>
              <input
                type="hidden"
                name={`objItem[${index}].RelationId`}
                className="form-control"
                {...register(`objItem[${index}].RelationId`)}
              />
              <input
                type="hidden"
                name={`objItem[${index}].RelationDetailId`}
                className="form-control"
                {...register(`objItem[${index}].RelationDetailId`)}
              />
              <input
                type="hidden"
                name={`objItem[${index}].Level`}
                value={level}
                className="form-control"
                {...register(`objItem[${index}].Level`)}
              />

              <input
                type="hidden"
                name={`objItem[${index}].RelationCategory`}
                value={props.relationCategory}
                className="form-control"
                {...register(`objItem[${index}].RelationCategory`)}
              />
              {index === 1 && (
                <div className="form-group row">
                  <div
                    className="col-md-12 alert alert-success"
                    style={{ textAlign: "right" }}
                  ></div>
                </div>
              )}
              {isEdit === false && (
                <>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Relationship Type</label>
                      <select
                        name={`objItem[${index}].RelationType`}
                        className="form-select"
                        {...register(`objItem[${index}].RelationType`)}
                        onChange={SelectLevel}
                      >
                        <option value="">Select Relationship</option>
                        {RELATION_TYPE_2.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
              {showParent && (
                <>
                  <div class="col-lg3 col-md-3">
                    <div class="form-group">
                      <label>Is Related To</label>
                      <select
                        name={`objItem[${index}].RefId`}
                        className="form-select"
                        {...register(`objItem[${index}].RefId`)}
                      >
                        <option value="">Choose Relation</option>

                        {listChild?.map((item) => (
                          <option
                            key={item?.RelationId}
                            value={item?.RelationId}
                          >
                            {item?.FirstName + " " + item?.LastName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3">
                    <div class="form-group">
                      <label>As</label>
                      <select
                        name={`objItem[${index}].RelatedAs`}
                        className="form-select"
                        {...register(`objItem[${index}].RelatedAs`)}
                      >
                        <option value="">Choose Relation</option>

                        {RELATION_TYPE_AS?.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Gender</label>
                  <select
                    class="form-select"
                    name={`objItem[${index}].Sex`}
                    onchange={SelectGender}
                    {...register("Sex", {
                      required: true,
                    })}
                  >
                    <option selected="1">Gender</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Title</label>
                  <select
                    name={`objItem[${index}].Title`}
                    className="form-select"
                    {...register(`objItem[${index}].Title`)}
                  >
                    <option value="">--Title--</option>
                    {TITLE.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    name={`objItem[${index}].FirstName`}
                    {...register(`objItem[${index}].FirstName`)}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Middle name"
                    name={`objItem[${index}].MiddleName`}
                    {...register(`objItem[${index}].MiddleName`)}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    name={`objItem[${index}].LastName`}
                    {...register(`objItem[${index}].LastName`)}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>NickName</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="NickName"
                    id={`objItem[${index}].NickName`}
                    name={`objItem[${index}].NickName`}
                    {...register(`objItem[${index}].NickName`)}
                  />
                </div>
              </div>

              {gender === "2" && (
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Maiden Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Maiden Name"
                      name={`objItem[${index}].MaidenName`}
                      {...register(`objItem[${index}].MaidenName`)}
                    />
                  </div>
                </div>
              )}

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Family Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Family Name"
                    name={`objItem[${index}].FamilyName`}
                    {...register(`objItem[${index}].FamilyName`)}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Language</label>
                  <AutoSuggestInput
                    name={`objItem[${index}].Language`}
                    className={"form-control"}
                    dataSource={options}
                    {...register(`objItem[${index}].Language`)}
                  />
                  {/* <Typeahead
                    id="ddLanguage"
                    name="ddLanguage"
                    onChange={setSelected}
                    options={options}
                    placeholder="Choose a language"
                    selected={selected}
                   
                  /> 
              <select
                class="form-select"
                name="Language"
                {...register("Language", {
                  required: true,
                })}
              >
                <option selected="0">Language</option>

                {options.map((item, index) => (
                  <option
                    key={index}
                    //   selected={seldeliveryCity === item.isoCode}
                    value={item.code}
                  >
                    {item.label}
                  </option>
                ))}
              </select>*/}
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Tribe</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tribe"
                    name={`objItem[${index}].Tribe`}
                    {...register(`objItem[${index}].Tribe`)}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Clan</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Clan"
                    name={`objItem[${index}].Clan`}
                    {...register(`objItem[${index}].Clan`)}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Kindred</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Kindred"
                    name={`objItem[${index}].Kindred`}
                    {...register(`objItem[${index}].Kindred`)}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Country</label>
                  <select
                    name={`objItem[${index}].Country`}
                    className="form-select"
                    {...register(`objItem[${index}].Country`, {
                      required: true,
                    })}
                    onChange={selectCountry}
                  >
                    <option value="">Select Country</option>
                    {countries.map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>State</label>

                  <select
                    name={`objItem[${index}].State`}
                    className="form-select"
                    id="State"
                    {...register(`objItem[${index}].State`)}
                    onChange={selectCity}
                  >
                    <option value=""> Select Region/State </option>
                    {Region.map((item) => (
                      <option
                        key={item.isoCode}
                        selected={selRegion === item.isoCode}
                        value={item.isoCode}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>City</label>

                  <select
                    name={`objItem[${index}].City`}
                    className="form-control"
                    // readOnly={readOnly}
                    id="City"
                    {...register(`objItem[${index}].City`)}
                  >
                    <option value=""> Select City </option>
                    {city.map((item) => (
                      <option
                        key={item.isoCode}
                        selected={selCity === item.name}
                        value={item.isoCode}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Village/Town</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="HomeTown"
                    name={`objItem[${index}].HomeTown`}
                    {...register(`objItem[${index}].HomeTown`)}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Address</label>
                  <textarea
                    type="text"
                    name={`objItem[${index}].Address`}
                    class="form-control"
                    placeholder="Address"
                    {...register(`objItem[${index}].Address`)}
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                {index > 0 && (
                  <div className="form-group row">
                    <div
                      className="col-md-12 alert alert-success"
                      style={{ textAlign: "right" }}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-danger right"
                        onClick={() => deleteTableRows(index)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}

          <div class="col-lg-12 col-md-12">
            <button
              type="submit"
              class="default-btn"
              disabled={isEdit ? relationLoading : createLoading}
            >
              {isEdit
                ? relationLoading && <i className="fa fa-spinner fa-spin"></i>
                : createLoading && (
                    <i className="fa fa-spinner fa-spin"></i>
                  )}{" "}
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(ParentForm), { ssr: false });
