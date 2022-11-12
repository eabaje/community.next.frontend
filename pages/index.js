import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AuthContext } from "../context/AuthContext";
import AuthLayout from "../layout/authLayout";
import NoLayout from "../layout/noLayout";
import { GlobalContext } from "../context/Provider";
import { signin2 } from "../context/actions/auth/auth.action";
import LoginForm from "../components/form/register/loginForm";
import RegisterForm from "../components/form/register/registerform";

export default function Index() {
  const [showForm, setShowForm] = useState(0);

  const router = useRouter();
  // const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  const {
    authDispatch,
    authState: { isLoggedIn, loading },
  } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);

  const onSubmit = async (formdata) => {
    signin2(formdata)(authDispatch)((res) => {
      // res.user.isConfirmed === true
      //   ? res.user.isActivated === true
      //     ? router.push(`/dashboard/`)
      //     : res.user.roles === "carrier"
      //     ? (window.location.href = `/carrier/`)
      //     : res.user.roles === "shipper"
      //     ? (window.location.href = `/shipment/`)
      //     : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`)
      //   : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`);

      window.location.href = "/home/";
      // history.push("/dashboard");
    })((err) => {
      console.log(`err`, err);
      toast.error(err);
    });
  };
  // console.log(`formdata`, formdata);

  return (
    <NoLayout>
      <div class="col-lg-6">
        <div class="text-container">
          <h1 class="h1-large">
            MyArea is an online community designed for families
          </h1>
          <p class="p-large">
            <ul>
              <li>
                <i className="fa fa-arrow m-r-5"></i> Trace and connect with
                your family members
              </li>
              <li>Trace and connect with old and current classmates</li>
              <li>Trace and connect with old and current colleagues</li>
              <li>Trace and connect with old and current neighbours</li>
              <li>and much more</li>
            </ul>
          </p>
          <button
            type="button"
            class="btn-solid-lg page-scroll"
            onClick={() => setShowForm(1)}
          >
            Register
          </button>{" "}
          <button
            type="button"
            class="btn-solid-lg page-scroll"
            onClick={() => setShowForm(0)}
          >
            Login
          </button>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="row">
          {showForm === 0 ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </NoLayout>
  );
}
