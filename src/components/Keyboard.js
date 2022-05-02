import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

function Keyboard() {
  const { guess, setGuess } = useContext(GlobalContext);
  const { answer, setAnswer } = useContext(GlobalContext);
  const { submit, setSubmit } = useContext(GlobalContext);
  const { shade, setShade } = useContext(GlobalContext);

  function handleClick(e) {
    if (guess.length < answer.length) {
      const letter = e.target.innerHTML;
      setGuess(guess + letter);
    }
  }

  function handleDelete() {
    if (guess.length === 1) {
      setGuess("");
    } else {
      setGuess(guess.slice(0, guess.length - 1));
    }
  }

  function handleEnter() {
    setSubmit(true);
  }

  useEffect(() => {
    const buttons = document.getElementsByClassName("keyboard-btn");
    const letter = shade.letter;
    const color = shade.letterColor;
    for (const btn of buttons) {
      if (btn.textContent === letter) {
        let currentColor = btn.style.backgroundColor;
        if (currentColor === "#a0e899") {
          return;
        }
        if (currentColor === "yellow" && color !== "#a0e899") {
          return;
        }

        btn.style.backgroundColor = color;
        break;
      }
    }
  }, [shade]);

  return (
    <div id="keyboard-container">
      <div className="first-row">
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          q
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          w
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          e
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          r
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          t
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          y
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          u
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          i
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          o
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          p
        </button>
      </div>
      <div className="second-row">
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          a
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          s
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          d
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          f
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          g
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          h
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          j
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          k
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          l
        </button>
      </div>
      <div className="third-row">
        <button className="keyboard-btn" onClick={(e) => handleDelete(e)}>
          del
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          z
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          x
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          c
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          v
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          b
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          n
        </button>
        <button className="keyboard-btn" onClick={(e) => handleClick(e)}>
          m
        </button>
        <button className="keyboard-btn" onClick={(e) => handleEnter(e)}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
