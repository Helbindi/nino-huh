import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import "../styles.css";

function Navigation() {
  const { start, setStart } = useContext(GlobalContext);
  const { help, setHelp } = useContext(GlobalContext);
  const { guess, setGuess } = useContext(GlobalContext);
  const { submit, setSubmit } = useContext(GlobalContext);
  const { shade, setShade } = useContext(GlobalContext);

  function handleHome() {
    setStart(false);
    setSubmit(false);
    setHelp(false);
    setGuess("");
    setShade({});
  }

  async function handleHelp() {
    if (start) {
      await setHelp(true);

      setTimeout(() => {
        const nameList = document.querySelector(".list-container");
        const visible = nameList.getAttribute("data-visible");
        if (visible === "false") {
          nameList.setAttribute("data-visible", true);
        } else {
          nameList.setAttribute("data-visible", false);
        }
      }, 100);
    }
  }

  return (
    <nav className="nav-primary">
      <h2 className="nav-header">Fire Emblem Wordle</h2>
      <ul className="nav-list">
        <li className="nav-item" onClick={handleHome}>
          Home
        </li>
        <li className="nav-item" onClick={handleHelp}>
          Help
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
