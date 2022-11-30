import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State, City } from "country-state-city";

import { fetchData } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  AddSchoolPlaceWork,
  editUser,
  GetAllRelationInfo,
  GetAllSchoolWorkInfo,
  resetPassword,
  updateCompany,
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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";

const SchoolForm = (props) => {
  const { userId, relationType, dt } = props;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
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
  const [startDate, setStartDate] = useState(new Date());
  // const [showProfile, setShowProfile] = useState(false);

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

  const handleChangeRaw = (date) => {
    const newRaw = new Date(date.currentTarget.value);
    if (newRaw instanceof Date && !isNaN(newRaw)) {
      setStartDate(newRaw);
    }
  };
  const [rowsData, setRowsData] = useState([]);

  function selectProps(...props) {
    return function (obj) {
      const newObj = {};
      props.forEach((name) => {
        newObj[name] = obj[name];
      });

      return newObj;
    };
  }

  const addTableRows = (childDt) => {
    const rowsInput = {
      SchoolName: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      YearFrom: "",
      YearTo: "",
    };
    const newChildArray = childDt.map(
      selectProps(
        "SchoolName",
        "Address",
        "City",
        "State",
        "Country",
        "YearFrom",
        "YearTo"
      )
    );
    if (newChildArray.length > 0) {
      setRowsData([...rowsData, newChildArray]);
      //  setChildData(newChildArray);
      const fields = [
        "SchoolName",
        "Address",
        "City",
        "State",
        "Country",
        "YearFrom",
        "YearTo",
      ];
      childDt?.map((item, index) => {
        fields.forEach((field) =>
          setValue(`school[${index}].${field}`, item[field])
        );

        setRegion(
          (Region) => (Region = State.getStatesOfCountry(user["Country"]))
        );
        // selectCity(user["City"]);
        setselRegion(user["State"]);

        setCity(
          (city) =>
            (city = City.getCitiesOfState(user["Country"], user["State"]))
        );

        setselCity(user["City"]);
      });
    } else {
      setRowsData([...rowsData, rowsInput]);
    }
    // childData
    //   ? setRowsData([...rowsData, childData])
    //   : setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const {
    userDispatch,
    userState: { createUser, Users },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  // const {
  //   isLoading: schoolLoading,
  //   error: schoolError,
  //   data: schoolUsers,
  // } = useQuery(["school"], () =>
  //   makeRequest
  //     .get(`/user/getAllSchoolPlaceWork/${userId}/${relationType}/}`)
  //     .then((res) => {
  //       return res.data.data;
  //     })
  // );

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // GetAllSchoolWorkInfo(userId, relationType)(userDispatch);

    addTableRows(props.dt);
  }, [dt]);

  function onSubmit(formdata) {
    AddSchoolPlaceWork(formdata)(userDispatch);
    //  console.log(`data`, data);
    if (createUser.data) {
      toast.success(`Your entry was saved successfully`);
    }
    if (createUser.error) {
      toast.error(createUser.error);
    }

    // props.relationType === "sch"
    //   ? "School Info"
    //   : props.relationType === "wk"
    //   ? "Work Info"
    //   : props.relationType === "pl"
    //   ? "Place Lived"
    //   : "Info";
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
  //  console.log("ShowProfile", showProfile);
  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title ? props.title : "School Information"}</h3>

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
          value={props.UserId}
          className="form-control"
          {...register("UserId")}
        />

        <div class="row">
          <div className="form-group row">
            <div className="col-md-12">
              <div className="col-md-12 alert alert-success ">
                <h6 style={{ textAlign: "right" }}>
                  {" "}
                  {/* <a
                                href="javascript:void()"
                                className=" right"
                                onClick={addTableRows}
                              >
                                + Add Vehicle
                              </a> */}
                  <button
                    type="button"
                    className=" default-btn"
                    onClick={addTableRows}
                  >
                    + Add{" "}
                    {props.relationType === "sch"
                      ? "School Info"
                      : props.relationType === "wk"
                      ? "Work Info"
                      : props.relationType === "pl"
                      ? "Neighbourhood "
                      : "Info"}
                  </button>
                </h6>
              </div>
            </div>
          </div>
          {rowsData.map((school, index) => (
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
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>
                      {props.formTypeName
                        ? props.formTypeName
                        : "Name of School"}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={
                        props.formTypeName
                          ? props.formTypeName
                          : "Name of School"
                      }
                      value={school?.SchoolName}
                      id={`school[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      name={`school[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      {...register(
                        `school[${index}].${
                          props.formTypeControl
                            ? props.formTypeControl
                            : "SchoolName"
                        }`,
                        {
                          required: true,
                        }
                      )}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>
                      {" "}
                      {props.labelAddress ? props.labelAddress : "Address"}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={
                        props.labelAddress ? props.labelAddress : "Address"
                      }
                      value={school?.NickName}
                      id={`school[${index}].Address`}
                      name={`school[${index}].Address`}
                      {...register(`school[${index}].Address`, {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>From Year </label>

                    <Controller
                      name={`school[${index}].YearFrom`}
                      control={control}
                      // defaultValue={new Date()}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            wrapperclassName="datePicker"
                            className="ui-datepicker"
                            onChange={onChange}
                            selected={value}
                            value={school?.YearFrom}
                            yearDropdownItemNumber={100}
                            dateFormat="yyyy"
                            scrollableYearDropdown={true}
                            showYearDropdown
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
                            onChangeRaw={(e) => handleChangeRaw(e)}
                            // onChange={(date: Date | null) => {
                            //   setStartDate(date);
                            // }}
                          />
                        );
                      }}
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>To Year</label>
                    <Controller
                      name={`school[${index}].YearTo`}
                      control={control}
                      // defaultValue={new Date()}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            wrapperclassName="datePicker"
                            className="ui-datepicker"
                            onChange={onChange}
                            selected={value}
                            value={school?.YearFromTo}
                            yearDropdownItemNumber={100}
                            dateFormat="yyyy"
                            scrollableYearDropdown={true}
                            showYearDropdown
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
                            onChangeRaw={(e) => handleChangeRaw(e)}
                            // onChange={(date: Date | null) => {
                            //   setStartDate(date);
                            // }}
                          />
                        );
                      }}
                    />
                    {/* <DatePicker
                      selected={startDate}
                      customInput={<CustomInput />}
                      onChange={(date) => setStartDate(date)}
                    /> */}
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <label>Country</label>
                    <select
                      className="form-select"
                      id={`school[${index}].Country`}
                      name={`school[${index}].Country`}
                      {...register(`school[${index}].Country`, {
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
                      className="form-select"
                      id={`school[${index}].State`}
                      name={`school[${index}].State`}
                      {...register(`school[${index}].State`, {
                        required: true,
                      })}
                      onChange={selectCity}
                    >
                      <option value=""> Select Region/State </option>
                      {Region.map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
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
                      className="form-control"
                      // readOnly={readOnly}

                      id={`school[${index}].City`}
                      name={`school[${index}].City`}
                      {...register(`school[${index}].City`)}
                    >
                      <option value=""> Select City </option>
                      {city.map((item) => (
                        <option
                          key={item.isoCode}
                          selected={school?.City === item.isoCode}
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
                      placeholder="Village/Town"
                      id={`school[${index}].HomeTown`}
                      name={`school[${index}].HomeTown`}
                      {...register(`school[${index}].HomeTown`)}
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Address</label>
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      id={`school[${index}].Address`}
                      name={`school[${index}].Address`}
                      {...register(`school[${index}].Address`)}
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

export default dynamic(() => Promise.resolve(SchoolForm), { ssr: false });
