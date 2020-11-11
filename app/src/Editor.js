import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

function Editor() {
  const { text, setText } = useContext(StateContext);

  const handleInputChange = (e) => {
    setText(e.target.innerText);
  };

  const preventTab = (e) => {
      if (e.keyCode === 9) {
          e.preventDefault();
      }
  }
  return (
    <div
      className="editor"
      contentEditable="true"
      onInput={handleInputChange}
      onKeyDown={preventTab}
  ></div>
  );
}

export default Editor;
