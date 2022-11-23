import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData, fetchDataAll } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  editUser,
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
import { RELATION_TYPE, RELATION_TYPE_2 } from "../../../constants/enum";

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
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
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
      setEmail(user["Email"]);
      // setcompanyId(user["CompanyId"]);
      setPickUpRegion(
        (pickUpRegion) =>
          (pickUpRegion = State.getStatesOfCountry(user["Country"]))
      );

      setselpickUpRegion(user["Region"]);
    })((err) => {
      toast.error(err);
    });
  }, []);

  function onSubmit(formdata) {
    AddRelationInfo(formdata)(userDispatch);
    createUser.data
      ? toast.success(`New Record saved successfully`)
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
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Relationship Type</label>
              <select
                name="RelationType"
                className="form-select"
                {...register("RelationType")}
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
                name="Sex"
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

          {gender === "2" && (
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
              <label>Language</label>
              <select
                class="form-select"
                name="Language"
                {...register("Language", {
                  required: true,
                })}
              >
                <option selected="1">Language</option>
                <option value="2">English</option>
                <option value="3">Portuguese</option>
                <option value="4">Japanese</option>
                <option value="5">Russian</option>
                <option value="6">Javanese</option>
                <option value="7">Gujarati</option>
                <option value="8">Yoruba</option>
                <option value="9">Polish</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Address</label>
              <input
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
                {City.map((item) => (
                  <option
                    key={item.isoCode}
                    selected={selCity === item.isoCode}
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
                name="State"
                className="form-select"
                id="State"
                {...register("State", {
                  required: true,
                })}
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
