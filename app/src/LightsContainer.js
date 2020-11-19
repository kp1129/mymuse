import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import Lightbulb from "./Lightbulb";

function LightsContainer() {
  const { lightsToTurnOn } = useContext(StateContext);

  return (
    <div className="lights-container">
      {/* 
      generate 10 lightbulbs,      
      check how many lights to turn on, if any      
      */}
      {[...Array(10).keys()].map((light, ix) => {
        if (ix < lightsToTurnOn) {
          return <Lightbulb on={true} />;
        } else {
          return <Lightbulb on={false} />;
        }
      })}
    </div>
  );
}

export default LightsContainer;
