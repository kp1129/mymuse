import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

function Lightbulb({ on }) {
  const { darkMode } = useContext(StateContext);
  return (
    <div
      className={
        // classes are determined based on
        // whether or not the lightbulb is on
        // and 
        // whether or not dark mode is enabled
        on
          ? darkMode
            ? "lightbulb lightbulb-on-dark"
            : "lightbulb lightbulb-on-light"
          : darkMode
          ? "lightbulb lightbulb-off-dark"
          : "lightbulb lightbulb-off-light"
      }
    ></div>
  );
}

export default Lightbulb;
