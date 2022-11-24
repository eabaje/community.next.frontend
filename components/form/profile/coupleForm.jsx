import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Country, State, City } from "country-state-city";
import { getLanguageNames } from "language-list";
import options from "./data";
import { fetchData, fetchDataAll } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  AddRelationInfo,
  editUser,
  GetAllRelationInfo,
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

const CoupleForm = (props) => {
  const { userId, relationType } = props;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;
  const [selected, setSelected] = useState([]);
  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [email, setEmail] = useState({});
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
  const [selpickUpRegion, setselpickUpRegion] = useState("");
  const [pickUpRegion, setPickUpRegion] = useState([]);
  // const [showProfile, setShowProfile] = useState(false);

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
  };
  const selectCity = async (e) => {
    // setPickUpRegion((pickUpRegion) => e.target.value);

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

  const onChangeWifeInfo = async (relationType, e) => {
    getRelationInfo(relationType, e.target.value);
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
    userState: { createUser, Users: coupleUsers },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  const getRelationInfo = (relationType, relationId) => {
    fetchDataAll(`user/getRelation/${relationId}/${relationType}`)((user) => {
      const fields = ["FirstName", "MiddleName", "LastName", "MaidenName"];
      fields.forEach((field) => setValue(field, user[field]));

      const fields1 = [
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
        setValue(field1, user["Relation_Detail"][field1])
      );
      setEmail(user);
      // setcompanyId(user["CompanyId"]);
      setRegion(
        (Region) =>
          (Region = State.getStatesOfCountry(
            user["Relation_Detail"]["Country"]
          ))
      );
      // selectCity(user["City"]);
      setselRegion(user["Relation_Detail"]["State"]);

      setCity(
        (city) =>
          (city = City.getCitiesOfState(
            user["Relation_Detail"]["Country"],
            user["Relation_Detail"]["State"]
          ))
      );

      setselCity(user["Relation_Detail"]["City"]);
    })((err) => {
      toast.error(err);
    });
  };

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));

    GetAllRelationInfo(userId, relationType)(userDispatch);
    coupleUsers?.data?.data?.length === 1 &&
      getRelationInfo(relationType, coupleUsers?.data[0].RelationId);
  }, []);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    AddRelationInfo(formdata)(userDispatch);
    createUser?.data
      ? toast.success(createUser?.data?.message)
      : toast.error(createUser?.error);
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
  console.log("ShowProfile", coupleUsers?.data?.data);
  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>{props.title ? props.title : "Profile Information"}</h3>
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
          {coupleUsers?.data?.data?.length > 1 && (
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Wife</label>

                <select
                  name="Wife"
                  className="form-control"
                  // readOnly={readOnly}
                  id="Wife"
                  onChange={(e) => onChangeWifeInfo(relationType, e)}
                >
                  <option value=""> Select Wife </option>
                  {coupleUsers?.data?.data.map((item) => (
                    <option key={item.RelationId} value={item.RelationId}>
                      {item?.FirstName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                name="FirstName"
                {...register("FirstName")}
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
                name="MiddleName"
                {...register("MiddleName")}
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
                name="LastName"
                {...register("LastName")}
              />
            </div>
          </div>
          {props.sex === "female" && (
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <label>Maiden Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Maiden Name"
                  name="MaidenName"
                  {...register("MaidenName")}
                />
              </div>
            </div>
          )}
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Age Category</label>
              <select
                class="form-select"
                name="Age"
                {...register("Age", {
                  required: true,
                })}
              >
                <option value=""></option>
                <option value="<18">{"<18"}</option>
                <option value="18-30">18-30</option>
                <option value="31-40">31-40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61 and above">61 and above</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <Controller
                name={"DOB"}
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
                      // dateFormat="dd-MM-yyyy"
                      scrollableYearDropdown={true}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText="Enter date"
                      customInput={<CustomInput />}
                    />
                  );
                }}
              />
              {/* <input
                    type="text"
                    class="form-control"
                    placeholder="Date of birth"
                    id="datepicker"
                    name="DOB"
                    {...register("DOB")}
                  /> */}
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="Email"
                {...register("Email")}
              />
            </div>
          </div>
          {/* <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Backup Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Backup email"
                    {...register("FirstName")}
                  />
                </div>
              </div> */}

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Phone No:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Phone no"
                name="Mobile"
                {...register("Mobile")}
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Gender</label>
              <select
                class="form-select"
                name="Sex"
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
              <label>Occupation</label>
              <select
                class="form-select"
                name="Occupation"
                {...register("Occupation", {
                  required: true,
                })}
              >
                <option selected="1">Occupation</option>
                <option value="2">Software Developer</option>
                <option value="3">Biomedical Engineer</option>
                <option value="4">Civil Engineer</option>
                <option value="5">General Practitioner</option>
                <option value="6">Structural Engineer</option>
                <option value="7">Pharmacy Technician</option>
                <option value="8">Mechanical Engineer</option>
                <option value="9">Petroleum Engineer</option>
                <option value="10">Technician</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Employment Status</label>
              <select
                class="form-select"
                name="EmploymentStatus"
                {...register("EmploymentStatus", {
                  required: true,
                })}
              >
                <option selected="0">Employment Status</option>
                <option value="2">Employed</option>
                <option value="3">Entrepreneur</option>
                <option value="4">Unemployed</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Relation Status</label>
              <select
                class="form-select"
                name="MaritalStatus"
                {...register("MaritalStatus", {
                  required: true,
                })}
              >
                <option selected="0">Relation Status</option>
                <option value="1">Married</option>
                <option value="2">Unmarried</option>
                <option value="3">Single</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Blood Group</label>
              <select
                class="form-select"
                name="BloodGroup"
                {...register("BloodGroup", {
                  required: true,
                })}
              >
                <option selected="1">Blood Group</option>
                <option value="2">A+</option>
                <option value="3">A-</option>
                <option value="4">B+</option>
                <option value="5">B-</option>
                <option value="6">O+</option>
                <option value="7">O-</option>
                <option value="8">AB+</option>
                <option value="9">AB-</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Website</label>
              <input type="text" class="form-control" placeholder="Website" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Family Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="FamilyName"
                name="FamilyName"
                {...register("FamilyName")}
              />
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Tribe</label>
              <input
                type="text"
                class="form-control"
                placeholder="Tribe"
                name="Tribe"
                {...register("Tribe")}
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
                name="Clan"
                {...register("Clan")}
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
                name="Kindred"
                {...register("Kindred")}
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Language</label>

              {/* <Typeahead
                    id="ddLanguage"
                    name="ddLanguage"
                    onChange={setSelected}
                    options={options}
                    placeholder="Choose a language"
                    selected={selected}
                   
                  /> */}
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
              </select>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Country</label>
              <select
                name="Country"
                className="form-select"
                {...register("Country")}
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
                name="State"
                className="form-select"
                id="State"
                {...register("State", {
                  required: true,
                })}
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
                name="City"
                className="form-control"
                // readOnly={readOnly}
                id="City"
                {...register("City", {
                  required: true,
                })}
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
              <label>HomeTown</label>
              <input
                type="text"
                class="form-control"
                placeholder="HomeTown"
                name="HomeTown"
                {...register("HomeTown")}
              />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="form-group">
              <label>Address</label>
              <textarea
                type="text"
                name="Address"
                class="form-control"
                placeholder="Address"
                {...register("Address", {
                  required: true,
                })}
              />
            </div>
          </div>
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

export default dynamic(() => Promise.resolve(CoupleForm), { ssr: false });
