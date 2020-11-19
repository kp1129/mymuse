import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Editor from "./Editor";
import { StateContext } from "./contexts/StateContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [text, setText] = useState("");
  const [wordsWritten, setWordsWritten] = useState(0);
  const [wordsPerLight, setWordsPerLight] = useState(167);
  const [lightsToTurnOn, setLightsToTurnOn] = useState(0);

  return (
    <StateContext.Provider
      value={{
        darkMode,
        setDarkMode,
        modal,
        setModal,
        dropdownOpen,
        setDropdownOpen,
        text,
        setText,
        wordsWritten,
        setWordsWritten,
        wordsPerLight,
        setWordsPerLight,
        lightsToTurnOn,
        setLightsToTurnOn
      }}
    >
      <div className={darkMode ? "app-dark" : "app-light"}>
        <Header />
        <Editor />
      </div>
    </StateContext.Provider>
  );
}

export default App;
