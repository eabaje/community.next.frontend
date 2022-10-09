import { useState } from "react";

import TextField from "@material-ui/core/TextField";

function TextInput(props) {
  const [textInput, setTextInput] = useState("");
  const handleTextChange = (evnt) => {
    setTextInput(evnt.target.value);
  };

  return (
    <>
      <TextField
        inputRef={props.inputRef}
        className={props.className ? props.className : "form-control"}
        placeholder={
          props.placeholder ? props.placeholder : "Fill in some text..."
        }
      />
    </>
  );
}
export default TextInput;
