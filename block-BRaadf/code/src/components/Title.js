import { ModeContext } from "./ModeContext";
import { useContext } from "react";

function Title({ text }) {
  let mode = useContext(ModeContext);
  return (
    <h2
      className={`heading ${mode ? "sub-heading-dark" : "sub-heading-light"
        }`}
    >
      {text}
    </h2>
  );
}

export default Title;
