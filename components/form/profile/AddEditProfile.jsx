import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Country, State, City } from "country-state-city";
import { getLanguageNames } from "language-list";
import options from "./data";

import {
  AddData,
  fetchData,
  fetchDataAll,
  UpdateData,
} from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  editUser,
  resetPassword,
  updateCompany,
  UpdateUserProfile,
} from "../../../context/actions/user/user.action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import CoupleForm from "./coupleForm";
import ChildForm from "./childForm";
import ParentForm from "./parentForm";
import SchoolForm from "./schoolForm";
import OccupationDDL from "../../formInput/occupation.select";
import AutoSuggestInput from "../../formInput/autoSuggest.text";

const AddEditProfile = ({ query }) => {
  const { userId } = query;

  // const isSingleMode = !userId;

  //***********State variables **************//

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [selected, setSelected] = useState([]);
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
  const [selpickUpRegion, setselpickUpRegion] = useState("");
  const [pickUpRegion, setPickUpRegion] = useState([]);
  const [userData, setUserData] = useState([]);
  const [spouseData, setSpouseData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [sibData, setSibData] = useState([]);
  const [paternalData, setPaternalData] = useState([]);
  const [maternalData, setMaternalData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // const [showProfile, setShowProfile] = useState(false);

  //**********page Functions *****************/

  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((Region = State.getStatesOfCountry(e.target.value)));
  };
  const selectCity = async (e) => {
    // setPickUpRegion((pickUpRegion) => e.target.value);

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

  // *************** FORM FUNCTIONS**********//
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const {
    userDispatch,
    userState: { createUser, User },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    UpdateProfile(formdata);
  }

  const UpdateProfile = (formdata) => {
    setLoading(true);
    UpdateData(
      formdata,
      `user/updateUser/${formdata.UserId}`
    )((res) => {
      setLoading(false);
      setIsSaved(true);
      toast.success(res?.message);
    })((e) => {
      setLoading(false);
      toast.error(e.message);
    });
  };
  const getAllRefUserInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/reference`)(
      (user) => {
        setUserData(user);
      }
    )((err) => {
      toast.error(err);
    });
  };
  const getAllSpouseInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/spousal`)((user) => {
      setSpouseData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllChildInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/children`)((user) => {
      setChildData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllSiblingInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/sibling`)((user) => {
      setSibData(user);
    })((err) => {
      toast.error(err);
    });
  };
  const getAllPaternalInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/paternal`)((user) => {
      setPaternalData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllMaternalInfo = (userId) => {
    fetchDataAll(`user/getAllRelationByCategory/${userId}/maternal`)((user) => {
      setMaternalData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllSchoolInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/school`)((user) => {
      setSchoolData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllPlaceInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/place`)((user) => {
      setPlaceData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllWorkInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/work`)((user) => {
      setWorkData(user);
    })((err) => {
      toast.error(err);
    });
  };
  // *************** USE EFFECT**********//
  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    getAllRefUserInfo(userId);
    getAllSpouseInfo(userId);
    getAllChildInfo(userId);
    getAllSiblingInfo(userId);
    getAllPaternalInfo(userId);
    getAllMaternalInfo(userId);
    getAllSchoolInfo(userId);
    getAllPlaceInfo(userId);
    getAllWorkInfo(userId);

    fetchData(
      "user/findUser",
      userId
    )((user) => {
      setProfile(user);

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
        "Language",
        "Occupation",
        "EmploymentStatus",
        "PasswordHash",
        "ProfilePicture",
        "CoverPicture",
        "Address",
        "City",
        "HomeTown",
        "LGA",
        "State",
        "Country",
      ];
      fields.forEach((field) => setValue(field, user[field]));
      //  setValue(fields["ddLanguage"], user["Language"]);
      setEmail(user["Email"]);
      // setcompanyId(user["CompanyId"]);
      //  selectCountry(user["Country"]);
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
  }, [isSaved]);
  console.log("SpouseData", userData);
  console.log("Form", createUser?.data?.message);
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

  return (
    <>
      <div class="page-banner-box">
        <h3>Profile Update</h3>
      </div>

      <div class="account-setting-list-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="profile-information-tab"
              data-bs-toggle="tab"
              href="#profile-information"
              role="tab"
              aria-controls="profile-information"
            >
              My Profile
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="spouse-tab"
              data-bs-toggle="tab"
              href="#spouse"
              role="tab"
              aria-controls="spouse"
            >
              Spouse
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="child-tab"
              data-bs-toggle="tab"
              href="#child"
              role="tab"
              aria-controls="child"
            >
              Children
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="sibling-tab"
              data-bs-toggle="tab"
              href="#sibling"
              role="tab"
              aria-controls="sibling"
            >
              Siblings
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="paternal-tab"
              data-bs-toggle="tab"
              href="#paternal"
              role="tab"
              aria-controls="message"
            >
              Paternal
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="maternal-tab"
              data-bs-toggle="tab"
              href="#maternal"
              role="tab"
              aria-controls="maternal"
            >
              Maternal
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="school-tab"
              data-bs-toggle="tab"
              href="#school"
              role="tab"
              aria-controls="school"
            >
              Schools
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="place-tab"
              data-bs-toggle="tab"
              href="#place"
              role="tab"
              aria-controls="place"
            >
              Places lived
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="work-tab"
              data-bs-toggle="tab"
              href="#work"
              role="tab"
              aria-controls="work"
            >
              My Work
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="profile-information"
          role="tabpanel"
        >
          <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Profile Information</h3>
            <div className="col-md-12 alert alert-success">
              <h6>
                {" "}
                To create a family tree,start here and update your profile
              </h6>
            </div>
            <input
              type="hidden"
              name="UserId"
              value={userId}
              className="form-control"
              {...register("UserId")}
            />
            <input
              type="hidden"
              name="RelationCategory"
              value={"reference"}
              className="form-control"
              {...register("RelationCategory")}
            />
            <input
              type="hidden"
              name="RelationType"
              value={"reference"}
              className="form-control"
              {...register("RelationType")}
            />
            <input
              type="hidden"
              name="RefId"
              value={userData[0]?.RelationId}
              className="form-control"
              {...register("RefId")}
            />
            <input
              type="hidden"
              name="Level"
              value={"0"}
              className="form-control"
              {...register("Level")}
            />
            {/* <input
              type="hidden"
              name="Language"
              value={selected[0]?.code}
              {...register("Language")}
            /> */}

            <div class="row">
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
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>NickName</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="NickName"
                    id="NickName"
                    name="NickName"
                    {...register("NickName")}
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Previous Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Maiden Name"
                    name="MaidenName"
                    {...register("MaidenName")}
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="form-group">
                  <label>Age Category</label>
                  <select
                    class="form-select"
                    name="Sex"
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

              <div className="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Date of Birth</label>
                  <div className="input-group-icon">
                    <input
                      className="form-control input-box form-voyage-control"
                      id="inputDateSix"
                      type="date"
                      {...register("DOB", {
                        required: true,
                      })}
                    />

                    <span className="nav-link-icon text-800 fs--1 input-box-icon">
                      <i className="fas fa-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4">
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
                    onchange={SelectGender}
                    {...register("Sex", {
                      required: true,
                    })}
                  >
                    <option selected="0">Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Occupation</label>
                  <OccupationDDL
                    formVariable={register("Occupation", {
                      required: true,
                    })}
                  />
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
                    {...register("BloodGroup")}
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Language</label>
                  <AutoSuggestInput
                    name={"Language"}
                    className={"form-control"}
                    dataSource={options}
                    {...register("Language")}
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label>Country</label>
                  <select
                    name="Country"
                    className="form-select"
                    {...register("Country", {
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
                  <label>Region/State</label>

                  <select
                    name="State"
                    className="form-select"
                    id="State"
                    {...register("State")}
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
                  <label>City/County/LGA</label>

                  <select
                    name="City"
                    className="form-control"
                    // readOnly={readOnly}
                    id="City"
                    {...register("City")}
                  >
                    <option value=""> Select City/County/LGA </option>
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
                  <label>Village/HomeTown</label>
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
                <button type="submit" class="default-btn" disabled={loading}>
                  {loading && <i className="fa fa-spinner fa-spin"></i>}{" "}
                  {userData.length > 0
                    ? "Update your profile"
                    : " Save And Start Family Tree"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" id="spouse" role="tabpanel">
          <CoupleForm
            sex={gender}
            relationType={"0,spouse"}
            relationCategory={"spousal"}
            userId={userId}
            title={"Spousal Information"}
            dt={spouseData}
            refId={userData[0]?.RelationId}
          />
        </div>

        <div class="tab-pane fade" id="child" role="tabpanel">
          <ChildForm
            title={"Children Information"}
            dt={childData}
            relationType={"child"}
            userId={userId}
            relationCategory={"children"}
          />
        </div>

        <div class="tab-pane fade" id="sibling" role="tabpanel">
          <ChildForm
            title={"Sibling Information"}
            relationType={"sibling"}
            dt={sibData.length > 0 ? sibData : null}
            userId={userId}
            relationCategory={"sibling"}
          />
        </div>

        <div class="tab-pane fade" id="paternal" role="tabpanel">
          <ParentForm
            title={"Paternal Information"}
            dt={paternalData}
            userId={userId}
            relationType={"paternal"}
            relationCategory={"paternal"}
          />
        </div>

        <div class="tab-pane fade" id="maternal" role="tabpanel">
          <ParentForm
            title={"Maternal Information"}
            dt={maternalData}
            userId={userId}
            relationType={"maternal"}
            relationCategory={"maternal"}
          />
        </div>

        <div class="tab-pane fade" id="school" role="tabpanel">
          <SchoolForm
            title={"School Information"}
            dt={schoolData}
            userId={userId}
            formTypeName={"School Name"}
            formTypeControl={"SchoolName"}
            formTypeControlHidden={"SchoolId"}
            relationType={"school"}
          />
        </div>

        <div class="tab-pane fade" id="place" role="tabpanel">
          <SchoolForm
            title={"Neigbourhood I lived"}
            dt={placeData}
            userId={userId}
            labelAddress={"Neigborhood Address"}
            formTypeName={"Neigborhood I lived"}
            formTypeControl={"NeighborhoodName"}
            formTypeControlHidden={"PlaceLivedId"}
            relationType={"place"}
          />
        </div>
        <div class="tab-pane fade" id="work" role="tabpanel">
          <SchoolForm
            title={"Work History"}
            dt={workData}
            userId={userId}
            labelAddress={"Address of Work Place"}
            formTypeName={"Name of Work Place"}
            formTypeControl={"CompanyName"}
            formTypeControlHidden={"EmployerId"}
            relationType={"work"}
          />
        </div>
      </div>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(AddEditProfile), { ssr: false });
