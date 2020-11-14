import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import Milestone from "./Milestone";

function MilestonesContainer() {
  const { milestonesRemaining } = useContext(StateContext);

  return (
    <div className="milestones-container">
      {milestonesRemaining.length > 10
        ? milestonesRemaining.slice(0, 7).map((item) => <Milestone />)
        : milestonesRemaining.map((item) => <Milestone />)}
    </div>
  );
}

export default MilestonesContainer;
