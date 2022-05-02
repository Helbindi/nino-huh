import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { getData } from "../firebase";
import "../styles.css";
import DataContent from "./DataContent";
import * as images from "../image-data";
import NamesList from "./NamesList";

function Home() {
  const [type, setType] = useState("A");
  const { data, setData } = useContext(GlobalContext);
  const { start, setStart } = useContext(GlobalContext);
  const { help, setHelp } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(type);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [type]);

  function handleClick(e) {
    e.preventDefault();
    setType(e.target.innerText);
  }

  function handleStart(e) {
    e.preventDefault();
    setStart(true);
  }

  return (
    <div className="home-container">
      <div className="home-header flex-col">
        <h1 className="home-title">Fire Emblem Wordle</h1>
        <img src={images.oddRiddler} alt="oddRiddler" />
      </div>

      <div className="btn-group">
        <button
          className={type === "A" ? "btn-data active" : "btn-data"}
          onClick={(e) => handleClick(e)}
        >
          A
        </button>
        <button
          className={type === "B" ? "btn-data active" : "btn-data"}
          onClick={(e) => handleClick(e)}
        >
          B
        </button>
        <button
          className={type === "C" ? "btn-data active" : "btn-data"}
          onClick={(e) => handleClick(e)}
        >
          C
        </button>
      </div>

      <div className="data-content">
        {type === "A" && <DataContent type="A" />}
        {type === "B" && <DataContent type="B" />}
        {type === "C" && <DataContent type="C" />}
        {help && <NamesList />}
      </div>

      <button className="btn-start" onClick={(e) => handleStart(e)}>
        start
      </button>
    </div>
  );
}

export default Home;
