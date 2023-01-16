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

  const [imgUrl, setImgUrl] = useState("");
  const [selCountry, setselCountry] = useState([]);
  const [selRegion, setselRegion] = useState([]);
  const [selCity, setselCity] = useState([]);
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
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

  const [rowsData, setRowsData] = useState([{}]);

  function selectProps(...props) {
    return function (obj) {
      const newObj = {};
      props.forEach((name) => {
        newObj[name] = obj[name];
      });

      return newObj;
    };
  }
  const addTableRows = () => {
    const rowsInput = {
      SchoolName: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      YearFrom: "",
      YearTo: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const loadTableRows = (objItemDt = null) => {
    const rowsInput = {
      SchoolName: "",
      Address: "",
      City: "",
      State: "",
      Country: "",
      YearFrom: "",
      YearTo: "",
    };
    const newChildArray = objItemDt.map(
      selectProps(
        props.formTypeControl,
        "Address",
        "City",
        "State",
        "Country",
        "YearFrom",
        "YearTo"
      )
    );
    if (objItemDt?.length > 0) {
      //  setChildData(newChildArray);
      const fields = [
        props.formTypeControlHidden,
        props.formTypeControl,
        "Address",
        "City",
        "HomeTown",
        "State",
        "Country",
        "YearFrom",
        "YearTo",
      ];
      objItemDt?.map((item, index) => {
        setRowsData([...newChildArray]);
        // selCountry.push(item["Country"]);

        // selRegion.push(item["State"]);
        // selCity.push(item["City"]);
        Region.push(State.getStatesOfCountry(item["Country"]));

        city.push(City.getCitiesOfState(item["Country"], item["State"]));
        fields.forEach((field) =>
          setValue(`objItem[${index}].${field}`, item[field])
        );
      });
    } else {
      setRowsData([...rowsData]);
    }
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
  //   isLoading: objItemLoading,
  //   error: objItemError,
  //   data: objItemUsers,
  // } = useQuery(["objItem"], () =>
  //   makeRequest
  //     .get(`/user/getAllSchoolPlaceWork/${userId}/${relationType}/}`)
  //     .then((res) => {
  //       return res.data.data;
  //     })
  // );

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // GetAllSchoolWorkInfo(userId, relationType)(userDispatch);

    loadTableRows(dt);
  }, [dt]);

  function onSubmit(formdata) {
    AddSchoolPlaceWork(formdata)(userDispatch);

    if (createUser?.data?.message) {
      toast.success(createUser?.data?.message);
    }
    if (createUser?.error) {
      toast.error(createUser?.error);
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
  console.log(props.formTypeControl, selRegion);
  console.log("Region", Region);
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
          value={props.userId}
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
          {rowsData.map((objItem, index) => (
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
                <input
                  type="hidden"
                  class="form-control"
                  id={`objItem[${index}].${
                    props.formTypeControlHidden
                      ? props.formTypeControlHidden
                      : "SchoolId"
                  }`}
                  name={`objItem[${index}].${
                    props.formTypeControlHidden
                      ? props.formTypeControlHidden
                      : "SchoolId"
                  }`}
                  {...register(
                    `objItem[${index}].${
                      props.formTypeControlHidden
                        ? props.formTypeControlHidden
                        : "SchoolId"
                    }`
                  )}
                />

                <div class="col-lg-12 col-md-12">
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
                      id={`objItem[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      name={`objItem[${index}].${
                        props.formTypeControl
                          ? props.formTypeControl
                          : "SchoolName"
                      }`}
                      {...register(
                        `objItem[${index}].${
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
                    <label>From Year </label>

                    <Controller
                      name={`objItem[${index}].YearFrom`}
                      control={control}
                      // defaultValue={new Date()}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            wrapperclassNameName="datePicker"
                            classNameName="form-control datepicker"
                            onChange={onChange}
                            selected={Date.parse(value)}
                            yearDropdownItemNumber={100}
                            dateFormat="yyyy"
                            scrollableYearDropdown={true}
                            showYearDropdown
                            showMonthDropdown
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
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
                      name={`objItem[${index}].YearTo`}
                      control={control}
                      // defaultValue={new Date()}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            wrapperclassNameName="datePicker"
                            classNameName="form-control datepicker"
                            onChange={onChange}
                            selected={Date.parse(value)}
                            yearDropdownItemNumber={100}
                            dateFormat="yyyy"
                            scrollableYearDropdown={true}
                            showYearDropdown
                            showMonthDropdown
                            placeholderText="Enter date"
                            customInput={<CustomInput />}
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
                      id={`objItem[${index}].Country`}
                      name={`objItem[${index}].Country`}
                      {...register(`objItem[${index}].Country`, {
                        required: true,
                      })}
                      onChange={selectCountry}
                    >
                      <option value="">Select Country</option>
                      {countries.map((item) => (
                        <option
                          key={item.isoCode}
                          selected={objItem?.Country === item.isoCode}
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
                    <label>State</label>

                    <select
                      className="form-select"
                      id={`objItem[${index}].State`}
                      name={`objItem[${index}].State`}
                      {...register(`objItem[${index}].State`, {
                        required: true,
                      })}
                      onChange={selectCity}
                    >
                      <option value=""> Select Region/State </option>
                      {Region[index]?.map((item) => (
                        <option
                          key={item.isoCode}
                          selected={objItem?.State === item.isoCode}
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
                      className="form-control"
                      // readOnly={readOnly}

                      id={`objItem[${index}].City`}
                      name={`objItem[${index}].City`}
                      {...register(`objItem[${index}].City`)}
                    >
                      <option value=""> Select City </option>
                      {city[index]?.map((item) => (
                        <option
                          key={item.isoCode}
                          selected={objItem?.City === item.name}
                          value={item.name}
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
                      id={`objItem[${index}].HomeTown`}
                      name={`objItem[${index}].HomeTown`}
                      {...register(`objItem[${index}].HomeTown`)}
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
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
                      id={`objItem[${index}].Address`}
                      name={`objItem[${index}].Address`}
                      {...register(`objItem[${index}].Address`, {
                        required: true,
                      })}
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
