import axios from "axios";

import axiosInstance from "../../helpers/axiosInstance-2";
import { useRef, useState } from "react";
import "./register.css";
import { useHistory } from "react-router";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import ShowAndHidePassword from "../../components/formInput/InputPassword";
import TextInput from "../../components/formInput/InputText";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [valuesConfirm, setValuesConfirm] = useState({
    passwordConfirm: "",
    showPasswordconfirm: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowconfirmPassword = () => {
    setValuesConfirm({
      ...valuesConfirm,
      showPasswordConfirm: !valuesConfirm.showPasswordconfirm,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current.value,
      };
      console.log("registerUser", user);
      console.log("registerUser", password.current.value);
      try {
        await axiosInstance().post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <TextInput inputRef={username} placeholder="Username" />
            <TextInput inputRef={email} placeholder="Email" />
            <ShowAndHidePassword inputRef={password} placeholder="Password" />
            <ShowAndHidePassword
              inputRef={passwordAgain}
              placeholder="Password Again"
            />

            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
