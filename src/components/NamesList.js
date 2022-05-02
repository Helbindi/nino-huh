import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import * as images from "../image-data";
import "../styles.css";

function NamesList() {
  const { data, setData } = useContext(GlobalContext);
  const { help, setHelp } = useContext(GlobalContext);
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = data.filter((character) => {
      if (character.series.toLowerCase().includes(search.toLowerCase())) {
        return character;
      }
    });
    setNames(filtered);
  }, [search, data]);

  function handleClose() {
    const nameList = document.querySelector(".list-container");
    nameList.setAttribute("data-visible", false);
  }

  return (
    <div className="list-container" data-visible="false">
      <button className="list-close" type="button" onClick={handleClose}>
        X
      </button>
      <div className="list-filter">
        <img className="list-img" src={images.NinoHuh} alt="NinoHuh" />
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Search By Series..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="list-content">
        {names.map((character, index) => {
          return (
            <div className="character-card" key={index}>
              <img
                className="character-img"
                src={character.icon}
                alt={character.name}
              />
              <p className="character-name">{character.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NamesList;
