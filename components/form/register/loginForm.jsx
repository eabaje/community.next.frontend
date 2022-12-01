import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../../../context/Provider";
import { signin2 } from "../../../context/actions/auth/auth.action";
import { API_URL } from "../../../constants";

export default function LoginForm({ changeShowForm }) {
  // const [loading, setLoading] = useState(false);
  // const [showForm, setShowForm] = useState(0);

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
    authState: { user, isLoggedIn, loading },
  } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);

  const onSubmit = async (formdata) => {
    signin2(formdata)(authDispatch)((res) => {
      window.location.href = "/home/?userId=" + res.user.UserId;
      // history.push("/dashboard");
    })((err) => {
      console.log(`err`, err);
      toast.error(err);
    });
  };
  console.log(`user`, API_URL);

  return (
    <div class="account-setting-form">
      <h2>Sign In</h2>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="Email"
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
              name="Password"
              type="password"
              className="form-control"
              {...register("Password")}
              required
            />
          </div>

          <button type="submit" className="form-control-submit-button">
            {loading && <i className="fa fa-spinner fa-spin"></i>} Signin
          </button>
          <div className="or-text " style={{ textAlign: "center" }}>
            <span>Or</span>
          </div>
          <button
            type="button"
            className="form-control-submit-button"
            onClick={() => changeShowForm(2)}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
}
