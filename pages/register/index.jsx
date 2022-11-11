import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AuthContext } from "../context/AuthContext";
import AuthLayout from "../layout/authLayout";
import { GlobalContext } from "../context/Provider";
import { registerUser } from "../../context/actions/auth/auth.action";

export default function Register() {
  //**************************FORM FUNCTIONS ************* */

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

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    registerUser(data)(authDispatch)((res) => {
      if (res) {
        toast.success(
          `Congratulations!You have created an account successfully.You will be redirected to your timeline`
        );
        setTimeout(() => {
          toast.dismiss();
          router.reload(`/home/?userId=${res.data.UserId}`);
        }, 5000);
      }
    })((error) => {
      toast.error(error.message);
    });
  }

  // *************************END FORM FUNCTIONS***********************
  return (
    <AuthLayout>
      <div className="col-lg-6 col-md-12">
        <div className="register-form">
          <h2>Register</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="remember-me-wrap">
              <p>
                <input type="checkbox" id="test1" />
                <label htmlFor="test1">
                  I Accept The <a href="privacy.html">Privacy</a>
                </label>
              </p>
            </div>
            <button type="submit" className="default-btn">
              Register
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
