import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";

function AutoSuggestInput(props) {
  const [text, setText] = useState("");
  return (
    <>
      <Hint options={props.dataSource}>
        <input
          className={props.className}
          name={props.name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          {...props.formVariable}
        />
      </Hint>
    </>
  );
}
export default AutoSuggestInput;
