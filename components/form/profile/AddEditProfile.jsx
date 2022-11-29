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
  const [childData, setChildData] = useState([{}]);
  const [sibData, setSibData] = useState([{}]);
  const [paternalData, setPaternalData] = useState([{}]);
  const [maternalData, setMaternalData] = useState([{}]);
  const [schoolData, setSchoolData] = useState([{}]);
  const [workData, setWorkData] = useState([{}]);
  const [placeData, setPlaceData] = useState([{}]);

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
  const changeCompany = async () => {
    setShowCompany(!showCompany);
  };
  const changeBilling = async () => {
    setShowBilling(!showBilling);
  };
  const changeReference = async () => {
    setShowReference(!showReference);
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
    UpdateUserProfile(formdata)(userDispatch);
    createUser?.data
      ? toast.success(createUser?.data?.message)
      : toast.error(createUser?.error);
  };

  const getAllChildInfo = (userId) => {
    fetchDataAll(`user/getAllRelation/${userId}/ch`)((user) => {
      setChildData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllSiblingInfo = (userId) => {
    fetchDataAll(`user/getAllRelation/${userId}/sib`)((user) => {
      setSibData(user);
    })((err) => {
      toast.error(err);
    });
  };
  const getAllPaternalInfo = (userId) => {
    fetchDataAll(`user/getAllRelation/${userId}/p`)((user) => {
      setPaternalData(user.filter((u) => u.RELATION_DETAIL.Sex === "2"));
    })((err) => {
      toast.error(err);
    });
  };

  const getAllMaternalInfo = (userId) => {
    fetchDataAll(`user/getAllRelation/${userId}/m`)((user) => {
      setMaternalData(user.filter((u) => u.RELATION_DETAIL.Sex === "3"));
    })((err) => {
      toast.error(err);
    });
  };

  const getAllSchoolInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/sch`)((user) => {
      setSchoolData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllPlaceInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/pl`)((user) => {
      setPlaceData(user);
    })((err) => {
      toast.error(err);
    });
  };

  const getAllWorkInfo = (userId) => {
    fetchDataAll(`user/getAllSchoolPlaceWork/${userId}/wk`)((user) => {
      setWorkData(user);
    })((err) => {
      toast.error(err);
    });
  };
  // *************** USE EFFECT**********//
  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
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
  }, []);
  console.log("SibData", sibData);
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
            <input
              type="hidden"
              name="UserId"
              value={userId}
              className="form-control"
              {...register("UserId")}
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
              <div class="col-lg-4 col-md-4">
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

              {/* <input
                    type="text"
                    class="form-control"
                    placeholder="Date of birth"
                    id="datepicker"
                    name="DOB"
                    {...register("DOB")}
                  /> */}

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
                  {createUser.loading && (
                    <i className="fa fa-spinner fa-spin"></i>
                  )}{" "}
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" id="spouse" role="tabpanel">
          <CoupleForm
            sex={gender}
            relationType={"sp"}
            userId={userId}
            title={"Spousal Information"}
          />
        </div>

        <div class="tab-pane fade" id="child" role="tabpanel">
          <ChildForm
            title={"Children Information"}
            dt={childData}
            relationType={"ch"}
            userId={userId}
          />
        </div>

        <div class="tab-pane fade" id="sibling" role="tabpanel">
          <ChildForm
            title={"Sibling Information"}
            relationType={"sib"}
            dt={sibData.length > 0 ? sibData : null}
            userId={userId}
          />
        </div>

        <div class="tab-pane fade" id="paternal" role="tabpanel">
          <ParentForm
            title={"Paternal Information"}
            dt={paternalData}
            userId={userId}
          />
        </div>

        <div class="tab-pane fade" id="maternal" role="tabpanel">
          <ParentForm
            title={"Maternal Information"}
            dt={maternalData}
            userId={userId}
          />
        </div>

        <div class="tab-pane fade" id="school" role="tabpanel">
          <SchoolForm
            title={"School Information"}
            dt={schoolData}
            userId={userId}
            formTypeName={"School Name"}
            formTypeControl={"SchoolName"}
            relationType={"sch"}
          />
        </div>

        <div class="tab-pane fade" id="place" role="tabpanel">
          <SchoolForm
            title={"Neigbourhood I lived"}
            dt={placeData}
            userId={userId}
            formTypeName={"Neigbourhood I lived"}
            formTypeControl={"NeighborhoodName"}
            relationType={"pl"}
          />
        </div>
        <div class="tab-pane fade" id="work" role="tabpanel">
          <SchoolForm
            title={"Work History"}
            dt={workData}
            userId={userId}
            formTypeName={"Name of work"}
            formTypeControl={"Neighbourhood"}
            relationType={"wk"}
          />
        </div>
      </div>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(AddEditProfile), { ssr: false });
