import React, { useState, useContext, useEffect } from "react";
//import { IMG_URL } from "../../../constants";
import { GlobalContext } from "../../../context/Provider";
import { useForm, Controller } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { AddData, fetchData, fetchDataAll } from "../../../helpers/query";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
const AddEditAccount = ({ query }) => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [selpickUpRegion, setselpickUpRegion] = useState("");
  const [pickUpRegion, setPickUpRegion] = useState([]);

  const [loadingAcct, setLoadingAcct] = useState(false);

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

  const changePassword = async () => {
    setShowPassword(!showPassword);
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
    authState: { user },
  } = useContext(GlobalContext);

  const queryClient = useQueryClient();

  const AcctMutation = useMutation(AddData, {
    onSuccess: (res) => {
      // Invalidates cache and refetch
      toast.success(res?.message);
      // queryClient.invalidateQueries("todos")
    },

    onError: (err) => {
      toast.error(err?.message);
    },
  });

  const onSubmitAcctEdit = (formdata) => {
    AcctMutation.mutate(formdata, "user/updateUser");
  };
  const getAllRefUserInfo = (userId) => {
    fetchDataAll(`user/findOne/${userId}`)((user) => {
      setUserData(user);
    })((err) => {
      toast.error(err);
    });
  };

  // *************** USE EFFECT**********//
  useEffect(() => {
    setCountries((countries) => (countries = Country.getAllCountries()));
    getAllRefUserInfo(userId);

    fetchData(
      "user/findUser",
      userId
    )((user) => {
      setProfile(user);

      const fields = [
        "FullName",
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
    })((err) => {
      toast.error(err);
    });
  }, []);
  // console.log("SpouseData", spouseData);
  // console.log("Form", createUser?.data?.message);
  return (
    <>
      <form
        class="account-setting-form"
        onSubmit={handleSubmit(onSubmitAcctEdit)}
      >
        <h3>Profile Information</h3>
        <input
          type="hidden"
          name="UserId"
          value={userId}
          className="form-control"
          {...register("UserId")}
        />

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
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                name="LastName"
                {...register("LastName")}
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
              <label>Country</label>
              <select
                name="Country"
                className="form-select"
                {...register("Country", {
                  required: true,
                })}
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
              disabled={AcctMutation.isLoading}
            >
              {AcctMutation.isLoading && (
                <i className="fa fa-spinner fa-spin"></i>
              )}{" "}
              Save
            </button>
          </div>
        </div>
      </form>

      <form class="account-setting-form">
        <h3>Security Information</h3>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Recovery Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Recovery email"
                name="RecoveryEmail"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Recovery Phone</label>
              <input
                type="number"
                class="form-control"
                placeholder="Recovery phone"
                name="RecoveryPhone"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Security Question 01</label>
              <input
                type="email"
                class="form-control"
                placeholder="Security question 01"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Security Question 012</label>
              <input
                type="email"
                class="form-control"
                placeholder="Security question 02"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Security Question 03</label>
              <input
                type="email"
                class="form-control"
                placeholder="Security question 03"
              />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn">
              Save
            </button>
          </div>
        </div>
      </form>

      <form class="account-setting-form">
        <h3>Change Password</h3>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Current Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Current password"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>New Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="New password"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn">
              Save Change
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

//export default AddEditAccount;

export default dynamic(() => Promise.resolve(AddEditAccount), { ssr: false });
