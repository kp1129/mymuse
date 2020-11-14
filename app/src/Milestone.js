import React, { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

function Milestone() {
  const { darkMode } = useContext(StateContext);
  return (
    <div className={darkMode ? "milestone-dark" : "milestone-light"}></div>
  );
}

export default Milestone;
