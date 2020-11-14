import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

function Editor() {
  const { setText, setWordsWritten, darkMode } = useContext(StateContext);

  const handleInputChange = (e) => {
    const words = e.target.innerText;
    // save written words to state
    setText(words);
    
    // count how many words were written
    // only letters and numbers, separated by space, count as words

    // strip punctuation and symbols, filter out empty strings
    const processedWords = words.replace(/[^\w\s]|_/g, "").split(/[\s\n]/).filter(elem => elem);
    setWordsWritten(processedWords.length);
  };

  const preventTab = (e) => {
      if (e.keyCode === 9) {
          e.preventDefault();
      }
  }
  return (
    <div
      className={darkMode ? "editor-dark" : "editor-light"}
      contentEditable="true"
      onInput={handleInputChange}
      onKeyDown={preventTab}
  ></div>
  );
}

export default Editor;
