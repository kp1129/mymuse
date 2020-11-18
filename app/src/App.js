import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Editor from "./Editor";
import { StateContext } from "./contexts/StateContext";
import trackingId from './GAtracking';


import ReactGA from 'react-ga';

ReactGA.initialize(trackingId, { standardImplementation: true });

function App() {
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    // placing the google analytics inside of useEffect since
    // I'm planning to add routes in app in the near future
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

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
