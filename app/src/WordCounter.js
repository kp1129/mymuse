import React, { useContext, useEffect } from "react";
import { StateContext } from "./contexts/StateContext";

function WordCounter() {
  const { wordsPerLight, setLightsToTurnOn, wordsWritten } = useContext(
    StateContext
  );

  useEffect(() => {
    // calculate how many lights, if any, to turn on
    // based on the # of words written
    let numOfLights = Math.floor(wordsWritten / wordsPerLight);
    if (numOfLights >= 0) {
      setLightsToTurnOn(numOfLights);
    }
  }, [wordsWritten]);

  return <div className="wordcounter">{wordsWritten}</div>;
}

export default WordCounter;
