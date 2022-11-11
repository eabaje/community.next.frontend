import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AuthContext } from "../../context/AuthContext";
import AuthLayout from "../../layout/authLayout";
import { GlobalContext } from "../../context/Provider";
import { signin2 } from "../../context/actions/auth/auth.action";

export default function Index() {
  // const [loading, setLoading] = useState(false);

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
    <AuthLayout>
      <div className="col-lg-6 col-md-12">
        <div className="register-form">
          <h2>Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                {...register("Email", {
                  required: true,
                })}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                {...register("Password")}
                required
              />
            </div>

            <button type="submit" className="default-btn">
              {loading && <i className="fa fa-spinner fa-spin"></i>} Signin
            </button>
            <div className="or-text">
              <span>Or</span>
            </div>
            <button type="submit" className="google-btn">
              Log In with Google
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
