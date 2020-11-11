import React, { useState } from "react";
import Header from "./Header";
import Editor from './Editor';
import { StateContext } from "./contexts/StateContext";


function App() {
  const [modal, setModal] = useState(true);
  const [challengeGoal, setChallengeGoal] = useState(1667);
  const [challengeMilestone, setChallengeMilestone] = useState(250);
  const [milestonesRemaining, setMilestonesRemaining] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <StateContext.Provider
      value={{
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
        setText
      }}
    >
      <div className="app">
        <Header />
        <Editor />
      </div>
    </StateContext.Provider>
  );
}

export default App;

// colors
// purple #1a1a2e
// yellow #fddb3a
// red #e94560
// navy blue #16213e or #0f3460