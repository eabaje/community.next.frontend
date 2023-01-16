import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData, fetchDataAll } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  AddChildSibling,
  AddChildSibling2,
  GetAllRelationByLevel,
  GetAllRelationInfo,
  GetAllRelationInfo2,
  GetRelationInfo,
} from "../../../context/actions/user/user.action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../../components/button/customButton";
import ImageUpload from "../../../components/upload/uploadImage";
//import "../../../styles/form.module.css";
// import { SPECIALIZATION_TYPE } from "../../../constants/enum";
// import CustomPopup from "../../../components/popup/popup.component";
// import UpdateUserFileUpload from "../../../components/upload/edit-user-file-upload";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { RELATION_TYPE_2, RELATION_TYPE_3 } from "../../../constants/enum";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";
import { selectProps } from "../../../helpers/selectProps";

const ChildForm = (props) => {
  const { userId, relationType, dt } = props;

  // const isSingleMode = !userId;

  //***********State variables **************//

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [Region, setRegion] = useState([]);
  const [City, setCity] = useState([]);
  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);
  const [selCity, setselCity] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selRegion, setselRegion] = useState("");
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showParent, setShowParent] = useState(false);
  const [listChild, setListChild] = useState([]);
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("1");
  const [relateType, setRelateType] = useState("sibling");

  //**********page Functions *****************/
  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
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
  const changeParent = async (e) => {
    const arr = e.target.value.split(",");

    if (arr[1] === "child") {
      setShowParent(true);
      setLevel(arr[0]);
      setRelateType(arr[1]);
      GetAllRelationByLevel(userId, arr[0], arr[1])
        .then((res) => {
          setListChild(objItemUsers?.data?.data);
        })
        .catch((e) => {});
    } else {
      setShowParent(false);
    }
  };
  const changeReference = async () => {
    setShowReference(!showReference);
  };

  const [rowsData, setRowsData] = useState([{}]);
  const [objItemData, setChildData] = useState([{}]);

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  // *************** FORM FUNCTIONS**********//
  const {
    register,
    formState: { errors },
    setValue: setValue,
    handleSubmit,
  } = useForm();

  // const {
  //   authState: { user },
  //   userDispatch,
  //   userState: { createUser, Users },
  // } = useContext(GlobalContext);

  const addTableRows = (objItemDt = null) => {
    const rowsInput = {
      FirstName: "",
      LastName: "",
      MiddleName: "",
      NickName: "",
    };

    if (objItemDt) {
      const newChildArray = objItemDt.map(
        selectProps("FirstName", "MiddleName", "LastName", "NickName")
      );
      //  if (newChildArray.length > 0) {
      // alert(newChildArray);
      // alert(rowsData);
      setRowsData([...rowsData, newChildArray]);
      setChildData(newChildArray);
      const fields = [
        "RelationId",
        "FirstName",
        "MiddleName",
        "LastName",
        "NickName",
      ];
      objItemDt?.map((item, index) => {
        fields.forEach((field) =>
          setValue(`objItem[${index}].${field}`, item[field])
        );
      });
      //}
    } else {
      setRowsData([...rowsData, {}]);
      setRowsData([...rowsData, rowsInput]);
    }
    // objItemData
    //   ? setRowsData([...rowsData, objItemData])
    //   : setRowsData([...rowsData, rowsInput]);
  };

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // GetAllRelationInfo(userId, relationType)(userDispatch);
    addTableRows(props.dt);
  }, [dt]);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    addChild(formdata);
  }

  const addChild = (formdata) => {
    setLoading(true);
    AddRelationInfo2(formdata)((res) => {
      setLoading(false);

      toast.success(res?.message);
    })((e) => {
      setLoading(false);
      toast.error(e.message);
    });
    //   createUser?.data
    //     ? toast.success(createUser?.data?.message)
    //     : toast.error(createUser?.error);
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
  console.log("listChild", objItemData);
  console.log("rowData", rowsData);
  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title ? props.title : "Siblings Information"}</h3>
        <input
          type="hidden"
          name="RelationType"
          value={props.relationType}
          className="form-control"
          {...register("RelationType")}
        />
        <input
          type="hidden"
          name="UserId"
          value={props.userId}
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
                    {props.relationType === "ch"
                      ? "Child Info"
                      : props.relationType === "sib"
                      ? "Sibling Info"
                      : "Info"}
                  </button>
                </h6>
              </div>
            </div>
          </div>
          {rowsData?.map((objItem, index) => (
            <>
              {index === 1 && (
                <div className="form-group row">
                  <div
                    className="col-md-12 alert alert-success"
                    style={{ textAlign: "right" }}
                  ></div>
                </div>
              )}
              <div id={index} class="row">
                {props.relationType === "ch" ? (
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Relationship Type</label>
                      <select
                        name="ddlRelationType"
                        className="form-select"
                        {...register("ddlRelationType")}
                        onChange={changeParent}
                      >
                        <option value="-5">Select Relationship</option>
                        {RELATION_TYPE_3.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <input
                  type="hidden"
                  name="RelationType"
                  value={relateType}
                  className="form-control"
                  {...register("RelationType")}
                />
                <input
                  type="hidden"
                  name="Level"
                  value={level}
                  className="form-control"
                  {...register("Level")}
                />
                {showParent && (
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Parent</label>
                      <select
                        name={`objItem[${index}].Parent`}
                        className="form-select"
                        {...register(`objItem[${index}].Parent`)}
                      >
                        <option value="">Parent Name</option>
                        {listChild?.map((item) => (
                          <option
                            key={item?.RelationId}
                            value={item?.RelationId}
                          >
                            {item?.LastName + "" + item?.FirstName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                <input
                  type="hidden"
                  name="RelationId"
                  className="form-control"
                  {...register("RelationId")}
                />

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      id={`objItem[${index}].FirstName`}
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
                      id={`objItem[${index}].MiddleName`}
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
                      id={`objItem[${index}].LastName`}
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
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Gender</label>
                    <select
                      class="form-select"
                      id={`objItem[${index}].Sex`}
                      name={`objItem[${index}].Sex`}
                      {...register(`objItem[${index}].Sex`, {
                        required: true,
                      })}
                    >
                      <option>Gender</option>

                      <option value="2" selected={objItem.Sex === "2"}>
                        Male
                      </option>
                      <option value="3" selected={objItem.Sex === "3"}>
                        Female
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Father's Family Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Father's Family Name"
                      name={`objItem[${index}].FamilyName`}
                      {...register(`objItem[${index}].FamilyName`)}
                    />
                  </div>
                </div>
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
            <button type="submit" class="default-btn" disabled={loading}>
              {loading && <i className="fa fa-spinner fa-spin"></i>} Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(ChildForm), { ssr: false });
