import React, { useState, useContext, useEffect, useRef } from "react";
import { Hint } from "react-autocomplete-hint";

import RelationService from "../../services/relation.service";

function AutoSuggestTextInput(props) {
  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (text) {
      getRelationsByName(text);
    }
  }, [text]);

  const getRelationsByName = (name) => {
    const dt = RelationService.getAllRelationByName(name);
    setOptions(dt);
  };

  return (
    <>
      <Hint options={options}>
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
export default AutoSuggestTextInput;
