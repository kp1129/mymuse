import React, { useState, useRef } from "react";
import Header from "./Header";
import Editor from "./Editor";
import { StateContext } from "./contexts/StateContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(true);
  const [challengeGoal, setChallengeGoal] = useState(1667);
  const [challengeMilestone, setChallengeMilestone] = useState(250);
  const [milestonesRemaining, setMilestonesRemaining] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [text, setText] = useState("");
  const [wordsWritten, setWordsWritten] = useState(0);
  const [nextMilestone, setNextMilestone] = useState();

  const milestonesRemainingRef = useRef(milestonesRemaining);
  milestonesRemainingRef.current = milestonesRemaining;

  return (
    <StateContext.Provider
      value={{
        darkMode,
        setDarkMode,
        modal,
        setModal,
        challengeGoal,
        setChallengeGoal,
        challengeMilestone,
        setChallengeMilestone,
        milestonesRemaining,
        setMilestonesRemaining,
        dropdownOpen,
        setDropdownOpen,
        text,
        setText,
        wordsWritten,
        setWordsWritten,
        nextMilestone,
        setNextMilestone,
        milestonesRemainingRef,
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
