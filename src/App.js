import "./styles.css";
import React, { useContext } from "react";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Home from "./components/Home";
import { GlobalContext } from "./components/GlobalContext";
import Navigation from "./components/Navigation";

function App() {
  const { start, setStart } = useContext(GlobalContext);

  if (!start) {
    return (
      <>
        <Home />
      </>
    );
  }

  if (start) {
    return (
      <>
        <Navigation />
        <GameBoard />
        <Keyboard />
      </>
    );
  }
}

export default App;
