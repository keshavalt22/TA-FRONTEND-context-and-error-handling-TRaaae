import React from "react";
import { ModeContext } from "./ModeContext";
import { useContext } from "react";

export default function SwitchButton({ changeMode }) {
  let mode = useContext(ModeContext);
  return (
    <button
      className={`btn ${mode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
