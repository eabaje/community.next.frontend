import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData } from "../../../helpers/query";

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

const AddEditProfile = ({ query }) => {
  // const { userId, companyId } = query;

  // const isSingleMode = !userId;

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [IsEdit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  // const [companyId, setcompanyId] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [pickUpRegion, setPickUpRegion] = useState([]);
  const [region, setRegion] = useState([]);
  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);

  const [imgUrl, setImgUrl] = useState("");
  const [selPickUpRegion, setselpickUpRegion] = useState("");
  const [value, setValues] = useState("");
  const [visibilityImage, setVisibilityImage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  function onChange(event) {
    setValues(event.target.value);
    // state.companyUser.Specilaization =
    //   event.target.options[event.target.selectedIndex].text;
    // console.log(
    //   "value:",
    //   event.target.options[event.target.selectedIndex].text
    //);
  }

  // Messages
  const required = "This field is required";
  const maxLength = "Your input exceed maximum length";

  // Error Component
  const errorMessage = (error) => {
    return (
      <p className="invalid-feedback" style={{ color: "red" }}>
        {error}
      </p>
    );
  };

  const popupCloseHandler = (e) => {
    PopUpClose()(userDispatch);
    // setVisibility(e);
  };

  const selectCountry = async (e) => {
    setCountry((country) => e.target.value);

    setRegion((region) => (region = State.getStatesOfCountry(e.target.value)));
  };

  const selectPickUpCountry = async (e) => {
    setCountry((country) => e.target.value);

    setPickUpRegion((pickUpRegion = State.getStatesOfCountry(e.target.value)));
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
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  const {
    register: registerPassword,
    formState: { errors2 },
    setValue: setValue1,
    handleSubmit: handlePassword,
  } = useForm();

  const {
    register: registerCompany,
    formState: { errors3 },
    setValue: setValue2,
    handleSubmit: handleCompany,
  } = useForm();
  const {
    userDispatch,
    userState: { User: data, loading, popUpOverLay: open },
  } = useContext(GlobalContext);
  const {
    authState: { user },
  } = useContext(GlobalContext);

  const getCompany = (companyId) => {
    fetchData(
      "user/findCompany",
      companyId
    )((company) => {
      console.log("company", company);
      setCompanyInfo(company);
      const fields2 = [
        "CompanyName",
        "ContactEmail",
        "ContactPhone",
        "Address",
        "Region",
        "Country",
        "CompanyType",
        "Specialization",
        "RoleType",
        "Website",
      ];
      fields2.forEach((field2) => setValue2(field2, company[field2]));
    })((err) => {
      toast.error(err);
    });
  };

  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    // fetchData(
    //   "user/findOne",
    //   userId
    // )((user) => {
    //   setProfile(user);
    //   getCompany(user.CompanyId);
    //   const fields = [
    //     "FullName",
    //     "Email",
    //     "DOB",
    //     "Address",
    //     "City",
    //     "Country",
    //     "Phone",
    //     "PicUrl",
    //   ];
    //   fields.forEach((field) => setValue(field, user[field]));
    //   setEmail(user["Email"]);
    //   // setcompanyId(user["CompanyId"]);
    //   setPickUpRegion(
    //     (pickUpRegion) =>
    //       (pickUpRegion = State.getStatesOfCountry(user["Country"]))
    //   );

    //   setselpickUpRegion(user["Region"]);
    // })((err) => {
    //   toast.error(err);
    // });
  }, []);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    return isAddMode ? null : UpdateDriver(userId, formdata);
  }

  const UpdateDriver = (data) => {
    editUser(data)(userDispatch)((res) => {
      //  console.log(`data`, data);
      toast.success(`Updated  Driver-${res.data.DriverName} successfully`);
    })((err) => {
      toast.error(err);
    });
  };

  function onChangePassword(formdata) {
    formdata.Email = profile?.Email;
    // console.log("fromPasword", formdata);
    resetPassword(formdata)(userDispatch)((res) => {
      toast.success(`Updated  Password successfully`);
    })((err) => {
      toast.error(err);
    });
  }

  function onChangeCompany(formdata) {
    updateCompany(formdata, formdata.CompanyId)(userDispatch)((res) => {
      toast.success(`Updated  Company Profile successfully`);
    })((err) => {
      toast.error(err);
    });
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
          <span className="input-group-text">
            <i className="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    );
  });
  CustomInput.displayName = "CustomInput";
  console.log("ShowProfile", showProfile);
  return (
    <>
      <h3> Update Your Profile</h3>
      <hr />

      <div className="col-md-12">
        <nav>
          <div class="nav nav-pills nav-fill" id="nav-tab" role="tablist">
            <a
              class="nav-link active"
              id="step1-tab"
              data-toggle="tab"
              href="#step1"
            >
              Personal Info
            </a>
            <a class="nav-link" id="step2-tab" data-toggle="tab" href="#step2">
              Spousal Info
            </a>
            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step3">
              Children
            </a>
            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step4">
              Siblings
            </a>
            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step5">
              Paternal Info
            </a>
            <a class="nav-link" id="step3-tab" data-toggle="tab" href="#step6">
              Maternal Info
            </a>
          </div>
        </nav>
        <div class="tab-content py-4" id="nav-tabContent">
          <div class="tab-pane fade show active" id="step1">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div>
                  <h2>Register</h2>

                  <form>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group row">
                      <label className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-4">
                        <input
                          name="Email"
                          className="form-control"
                          placeholder="Email"
                          {...register("Email", {
                            required: true,
                          })}
                          required
                        />
                      </div>

                      <label className="col-sm-2 col-form-label">Phone</label>
                      <div className="col-sm-4">
                        <input
                          name="Phone"
                          className="form-control"
                          placeholder="Phone"
                          {...register("Phone", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input type="password" class="form-control" />
                    </div>

                    <div class="remember-me-wrap">
                      <p>
                        <input type="checkbox" id="test1" />
                        <label for="test1">
                          I Accept The <a href="privacy.html">Privacy</a>
                        </label>
                      </p>
                    </div>
                    <button type="submit" class="default-btn">
                      Register
                    </button>
                    <div class="or-text">
                      <span>Or</span>
                    </div>
                    <button type="submit" class="google-btn">
                      Log In with Google
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="col-md-12 ">
                      <form
                        encType="multipart/form-data"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <input
                          type="hidden"
                          name="CompanyId"
                          value={""}
                          className="form-control"
                          {...register("CompanyId")}
                        />
                        <input
                          type="hidden"
                          name="PicUrl"
                          className="form-control"
                          {...register("PicUrl")}
                        />
                        <input
                          type="hidden"
                          name="LicenseUrl"
                          className="form-control"
                          {...register("LicenseUrl")}
                        />
                        <div className="form-group row">
                          <div className="col-md-12 ">
                            <span>
                              {" "}
                              <ImageUpload
                                refId={null}
                                fieldName="PicUrl"
                                show={true}
                                onChangePicHandler={onChangePicHandler}
                              />
                            </span>
                          </div>
                          <div className="col-md-2">
                            <span> </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <h5 className="alert alert-info"> </h5>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            Company Name
                          </label>

                          <div className="col-sm-4">
                            <input
                              name="CompanyName"
                              className="form-control"
                              readOnly="readonly"
                              value={""}
                              placeholder="Company Name"
                              {...register("CompanyName")}
                            />
                          </div>
                          <label className="col-sm-2 col-form-label">
                            Driver Name
                          </label>

                          <div className="col-sm-4">
                            <input
                              name="DriverName"
                              className="form-control"
                              placeholder="Driver Name"
                              {...register("DriverName", {
                                required: true,
                              })}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-4">
                            <input
                              name="Email"
                              className="form-control"
                              placeholder="Email"
                              {...register("Email", {
                                required: true,
                              })}
                              required
                            />
                          </div>

                          <label className="col-sm-2 col-form-label">
                            Phone
                          </label>
                          <div className="col-sm-4">
                            <input
                              name="Phone"
                              className="form-control"
                              placeholder="Phone"
                              {...register("Phone", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            Password
                          </label>
                          <div className="col-sm-4">
                            <input
                              name="Password"
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              {...register("Password", {
                                required: true,
                              })}
                              required
                            />
                          </div>

                          <label className="col-sm-2 col-form-label">
                            Confirm Password
                          </label>
                          <div className="col-sm-4">
                            <input
                              name="ConfirmPassword"
                              className={`form-control ${
                                errors.ConfirmPassword ? "is-invalid" : ""
                              }`}
                              type="password"
                              placeholder="Confirm Password"
                              {...register("ConfirmPassword", {
                                required: true,
                              })}
                            />
                            {errorMessage(errors.ConfirmPassword?.message)}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">DOB</label>
                          <div className="col-sm-4">
                            <input
                              type="date"
                              class="form-control"
                              required
                              {...register("DOB")}
                            />
                          </div>

                          <label className="col-sm-2 col-form-label">
                            City
                          </label>
                          <div className="col-sm-4">
                            <input
                              name="Phone"
                              className="form-control"
                              placeholder="City"
                              {...register("City")}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-form-label col-md-2">
                            Country
                          </label>
                          <div className="col-md-4">
                            <select
                              name="Country"
                              className="form-control"
                              {...register("Country")}
                              onChange={selectPickUpCountry}
                            >
                              <option value="">Select Country</option>
                              {countries.map((item) => (
                                <option key={item.isoCode} value={item.isoCode}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <label className="col-form-label col-md-2">
                            Region/State
                          </label>
                          <div className="col-md-4">
                            <select
                              name="Region"
                              className="form-control"
                              id="Region"
                              {...register("Region", {
                                required: true,
                              })}
                            >
                              <option value=""> Select Region/State </option>
                              {pickUpRegion.map((item) => (
                                <option
                                  key={item.isoCode}
                                  selected={selPickUpRegion === item.isoCode}
                                  value={item.isoCode}
                                >
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-form-label col-md-2">
                            Address
                          </label>
                          <div className="col-md-10">
                            <input
                              name="Address"
                              className="form-control"
                              placeholder="Address"
                              {...register("Address", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>

                        {/* <div className="form-group row">
                            <label className="col-form-label col-md-2">
                              Drivers License No
                            </label>
                            <div className="col-md-4">
                              <input
                                name="LicenseNo"
                                className="form-control"
                                placeholder="License No"
                                {...register("LicenseNo", {
                                  required: true,
                                })}
                              />
                            </div>{" "}
                            <label className="col-form-label col-md-2">
                              Attach Drivers License
                            </label>
                            <div className="col-md-4">
                              <input
                                className="form-control"
                                type="file"
                                id="fileLicenseUrl"
                                name="fileLicenseUrl"
                                {...register("fileLicenseUrl")}
                                onChange={(e) => onChangeDocHandler(e)}
                              />
                            </div>
                          </div> */}

                        <div className="form-group row alert alert-info">
                          <div className="col-md-8 "></div>
                          <div className="col-md-4 "></div>
                        </div>
                        <div className="form-group"></div>

                        <div className="form-group row">
                          <div className="col-sm-12 ">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="invalidCheck"
                              >
                                I confirm all information entered are accurate
                              </label>
                            </div>
                          </div>
                          <div className="right" style={{ float: "right" }}>
                            <CustomButton
                              loading={loading}
                              isAddMode={"true"}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="step2">
            <h4>Step 2</h4>
            <div class="mb-3">
              <label for="first_name">Required field 1</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Optional field</label>
              <input type="text" class="form-control" id="first_name" />
            </div>
            <div class="mb-3">
              <label for="first_name">Required field 2</label>
              <textarea rows="5" class="form-control" required></textarea>
            </div>
          </div>
          <div class="tab-pane fade" id="step3">
            <h4>Step 3</h4>
            <div class="mb-3">
              <label for="first_name">Required field 1</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Optional field</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Required field 2</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
          </div>
          <div class="tab-pane fade" id="step4">
            <h4>Step 3</h4>
            <div class="mb-3">
              <label for="first_name">Required field 1</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Optional field</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Required field 2</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
          </div>
          <div class="tab-pane fade" id="step5">
            <h4>Step 3</h4>
            <div class="mb-3">
              <label for="first_name">Required field 1</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Optional field</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Required field 2</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
          </div>
          <div class="tab-pane fade" id="step6">
            <h4>Step 3</h4>
            <div class="mb-3">
              <label for="first_name">Required field 1</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Optional field</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
            <div class="mb-3">
              <label for="first_name">Required field 2</label>
              <input
                type="text"
                class="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
                id="first_name"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h5>Basic Tabs</h5>
          </div>
          <div class="card-body">
            <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active text-uppercase"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p class="mb-0">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth. Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="mb-0">
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                  single-origin coffee squid. Exercitation +1 labore velit, blog
                  sartorial PBR leggings next level wes anderson artisan four
                  loko farm-to-table craft beer twee. Qui photo booth
                  letterpress, commodo enim craft beer mlkshk aliquip jean
                  shorts ullamco ad vinyl cillum PBR. accusamus tattooed echo
                  park.
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <p class="mb-0">
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Lnyl craft beer blog stumptown. Pitchfork sustainable tofu
                  synth chambray yr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(AddEditProfile), { ssr: false });
