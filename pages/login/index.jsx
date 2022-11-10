import { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AuthContext } from "../../context/AuthContext";
import AuthLayout from "../../layout/authLayout";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  const onSubmit = async (formdata) => {
    try {
      setLoading(true);
      await login(formdata);
      window.location.href = "/home/";
    } catch (err) {
      toast.error(err.response.data);

      setLoading(true);
    }
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
