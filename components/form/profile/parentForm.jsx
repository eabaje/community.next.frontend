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
import { RELATION_TYPE, RELATION_TYPE_2, TITLE } from "../../../constants/enum";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";
import { AddRelationInfo } from "../../../context/actions/user/user.action";
import AutoSuggestInput from "../../formInput/autoSuggest.text";

const ParentForm = (props) => {
  const { userId, relationType } = props;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [Region, setRegion] = useState([]);
  const [city, setCity] = useState([]);
  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);
  const [selCity, setselCity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selRegion, setselRegion] = useState("");
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  const [rowsData, setRowsData] = useState([{}]);
  const [childData, setChildData] = useState([{}]);

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
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

  const popupCloseHandlerImage = (e) => {
    setVisibilityImage(e);
  };
  const onChangePicHandler = async (e) => {
    setpicFile((picFile) => e.target.files[0]);
  };
  const changePassword = async () => {
    setShowPassword(!showPassword);
  };
  const changeAccount = async () => {
    setShowProfile(!showProfile);
  };
  const changeCompany = async () => {
    setShowCompany(!showCompany);
  };
  const changeBilling = async () => {
    setShowBilling(!showBilling);
  };
  const changeReference = async () => {
    setShowReference(!showReference);
  };
  const {
    register: register,
    formState: { errors },
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
    userState: { createUser, Users },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    fetchDataAll(`user/getRelation/${userId}/${relationType}`)((user) => {
      const fields = [
        "RelationId",
        "FirstName",
        "MiddleName",
        "LastName",
        "MaidenName",
        "UserName",
        "Mobile",
        "Email",
        "Sex",
        "Age",
        "DOB",
        "BloodGroup",
        "MaritalStatus",
        "Languages",
        "Occupation",
        "EmploymentStatus",
        "PasswordHash",
        "ProfilePicture",
        "CoverPicture",
        "City",
        "HomeTown",
        "LGA",
        "State",
        "Country",
      ];
      fields.forEach((field) => setValue(field, user[field]));

      setRegion(
        (Region) => (Region = State.getStatesOfCountry(user["Country"]))
      );
      // selectCity(user["City"]);
      setselRegion(user["State"]);

      setCity(
        (city) => (city = City.getCitiesOfState(user["Country"], user["State"]))
      );

      setselCity(user["City"]);
    })((err) => {
      toast.error(err);
    });
  }, []);

  function onSubmit(formdata) {
    AddRelationInfo(formdata)(userDispatch);
    createUser?.data
      ? toast.success(createUser?.message)
      : toast.error(createUser.error);
  }

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
  // console.log("ShowProfile", showProfile);
  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title}</h3>

        <input
          type="hidden"
          name="UserId"
          value={props.UserId}
          className="form-control"
          {...register("UserId")}
        />

        <div class="row">
          <div className="form-group row">
            <div className="col-md-12">
              <div className="col-md-12 alert alert-success">
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
              </div>
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
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Relationship Type</label>
                  <select
                    name={`objItem[${index}].RelationType`}
                    className="form-select"
                    {...register(`objItem[${index}].RelationType`)}
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
              disabled={createUser.loading}
            >
              {createUser.loading && <i className="fa fa-spinner fa-spin"></i>}{" "}
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
