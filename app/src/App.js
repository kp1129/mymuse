import React, { useState } from "react";
import Header from "./Header";
import { StateContext } from "./contexts/StateContext";

function App() {
  const [modal, setModal] = useState(true);
  const [challengeGoal, setChallengeGoal] = useState(1667);
  const [challengeMilestone, setChallengeMilestone] = useState(250);
  const [milestonesRemaining, setMilestonesRemaining] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
      }}
    >
      <div className="app">
        <Header />
      </div>
    </StateContext.Provider>
  );
}

export default App;
