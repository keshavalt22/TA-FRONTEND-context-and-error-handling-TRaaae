import { ModeContext } from "./ModeContext";
import { useContext } from "react";

function Header() {
  let mode = useContext(ModeContext);
  return (
    <h1 className={`heading ${mode ? "heading-dark" : "heading-light"}`}>
      {mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
