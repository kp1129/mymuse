import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import Milestone from "./Milestone";

function MilestonesContainer() {
  const { milestonesRemaining } = useContext(StateContext);

  return (
    <div className="milestones-container">
      {milestonesRemaining.length > 7
        ? milestonesRemaining
            .slice(0, 7)
            .map((item) => <Milestone item={item} show={true} />)
        : milestonesRemaining.map((item) => (
            <Milestone item={item} show={true} />
          ))}
    </div>
  );
}

export default MilestonesContainer;

