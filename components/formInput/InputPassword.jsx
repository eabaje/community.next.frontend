import { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
function ShowAndHidePassword(props) {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <Input
        inputRef={props.inputRef}
        type={passwordType}
        onChange={handlePasswordChange}
        value={passwordInput}
        className={props.className ? props.className : "form-control"}
        placeholder={props.placeholder ? props.placeholder : "Password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={togglePassword}
              onMouseDown={handleMouseDownPassword}
            >
              {passwordType === "password" ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}
export default ShowAndHidePassword;
