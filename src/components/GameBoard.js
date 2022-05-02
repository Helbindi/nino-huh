import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import * as images from "../image-data";
import Alert from "./Alert";
import NamesList from "./NamesList";

function GameBoard() {
  const [totalGuesses, setTotalGuesses] = useState(6);
  const [guessesLeft, setGuessesLeft] = useState(6);
  const [nextLetterPos, setNextLetterPos] = useState(0);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [hints, setHints] = useState({});
  const { data, setData } = useContext(GlobalContext);
  const { guess, setGuess } = useContext(GlobalContext);
  const { answer, setAnswer } = useContext(GlobalContext);
  const { submit, setSubmit } = useContext(GlobalContext);
  const { shade, setShade } = useContext(GlobalContext);
  const { help, setHelp } = useContext(GlobalContext);

  function initBoard(data) {
    let board = document.getElementById("game-board");
    const rightGuess = data[Math.floor(Math.random() * data.length)];
    setHints(rightGuess);
    const rightGuessString = rightGuess.name;
    const WORD_LENGTH = rightGuessString.length;
    setAnswer(rightGuessString.toLowerCase());

    for (let i = 0; i < totalGuesses; i++) {
      // Create a row element
      let row = document.createElement("div");
      row.className = "letter-row";

      for (let j = 0; j < WORD_LENGTH; j++) {
        // Create boxes to contain each letter
        let box = document.createElement("div");
        box.className = "letter-box";
        row.appendChild(box);
      }

      board.appendChild(row);
    }
  }

  useEffect(() => {
    initBoard(data);
  }, [data]);

  useEffect(() => {
    const newLetter = guess[guess.length - 1];
    if (newLetter === undefined && nextLetterPos === 1) {
      deleteLetter();
      return;
    }
    if (newLetter === undefined) {
      return;
    }
    if (guess.length > nextLetterPos) {
      insertLetter(newLetter);
    } else {
      deleteLetter();
    }
  }, [guess]);

  useEffect(() => {
    if (submit === true) {
      checkGuess();
    }
  }, [submit]);

  useEffect(() => {
    if (guessesLeft === 0) {
      console.log("Game Over");
      showAlert(true, "Game Over!", "gameOver");
    }
  }, [guessesLeft]);

  // Insert letter to row
  function insertLetter(newLetter) {
    if (nextLetterPos === answer.length) {
      return;
    }

    let row =
      document.getElementsByClassName("letter-row")[totalGuesses - guessesLeft];
    let box = row.children[nextLetterPos];

    box.textContent = newLetter;
    box.classList.add("filled-box");
    setNextLetterPos(nextLetterPos + 1);
  }

  // Delete letter from row
  function deleteLetter() {
    let row =
      document.getElementsByClassName("letter-row")[totalGuesses - guessesLeft];
    let box = row.children[nextLetterPos - 1];

    box.textContent = "";
    box.classList.remove("filled-box");
    setNextLetterPos(nextLetterPos - 1);
  }

  // Check if user got the right answer
  function checkGuess() {
    let row =
      document.getElementsByClassName("letter-row")[totalGuesses - guessesLeft];
    let guessString = "";
    let rightGuess = Array.from(answer);

    for (const val of guess) {
      guessString += val;
    }

    if (guessString.length !== answer.length) {
      showAlert(true, "Not enough letters... Try again!", "failure");
      setSubmit(false);
      return;
    }

    if (
      data.filter(
        (item) => item.name.toLowerCase() === guessString.toLowerCase()
      ).length === 0
    ) {
      showAlert(
        true,
        "There is no character with this name... Try again!",
        "failure"
      );
      setSubmit(false);
      return;
    }

    for (let i = 0; i < rightGuess.length; i++) {
      let letterColor = "";
      let box = row.children[i];
      let letter = guess[i];

      let letterPosition = answer.indexOf(guess[i]);
      if (letterPosition === -1) {
        letterColor = "grey";
      } else {
        if (guess[i] === rightGuess[i]) {
          letterColor = "#a0e899";
        } else {
          letterColor = "yellow";
        }

        rightGuess[letterPosition] = "#";
      }

      let delay = 250 * i;
      setTimeout(() => {
        box.style.backgroundColor = letterColor;
        box.style.color = "black";
        box.style.border = "2px solid black";
        setShade({ letter, letterColor });
      }, delay);
    }

    if (guessString === answer) {
      showAlert(true, "You have guessed correctly!", "success");
      return;
    } else {
      setSubmit(false);
      setGuessesLeft(guessesLeft - 1);
      setGuess("");
      setNextLetterPos(0);
    }
  }

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  return (
    <div className="game-container">
      {help && <NamesList />}
      <div className="board-alert">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>
      <div className="board-header text-light">
        {/* <h2 className="hint-text">
          A {hints.gender} character from Fire Emblem: {hints.series}
        </h2> */}
        {/* <h2 className="board-attempt">Attempts Left: {guessesLeft}</h2> */}
        <img className="board-img" src={images.NinoHuh} alt="NinoHuh" />
      </div>

      <div id="game-board"></div>
    </div>
  );
}

export default GameBoard;
