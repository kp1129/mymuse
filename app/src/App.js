import React, { useState } from "react";
import Header from "./Header";
import Editor from "./Editor";
import { StateContext } from "./contexts/StateContext";

function App() {
  // controls whether or not dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);
  // controls whether or not the modal is displayed
  const [modal, setModal] = useState(true);
  // required for reactstrap dropdown menu to work -
  // controls if dropdown is collapsed or displayed
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // The next two slices of state are updated by the Editor component
  // string representation of the words written
  const [text, setText] = useState("");
  // number of words written
  const [wordsWritten, setWordsWritten] = useState(0);

  // number of lights to turn on based on the challenge parameters and words written
  const [lightsToTurnOn, setLightsToTurnOn] = useState(0);

  // how many words it takes to power one light (this is set by user)
  const [wordsPerLight, setWordsPerLight] = useState(167);
  

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
