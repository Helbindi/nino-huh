import React, { useContext, useEffect, useState } from "react";
import { typeA, typeB, typeC } from "../data/image-data";

function DataContent({ type }) {
  if (type === "A") {
    return (
      <div className="game-series flex-col">
        {typeA.map((game, index) => (
          <div className="game-desc flex-col">
            <img
              key={index}
              className="game-icon"
              src={game.imgURL}
              alt={game.series}
            />
            <p className="game-info flex-col">
              {game.numNames} Playable Characters
            </p>
          </div>
        ))}
      </div>
    );
  }
  if (type === "B") {
    return (
      <div className="game-series flex-col">
        {typeB.map((game, index) => (
          <div className="game-desc flex-col">
            <img
              key={index}
              className="game-icon"
              src={game.imgURL}
              alt={game.series}
            />
            <p className="game-info flex-col">
              {game.numNames} Playable Characters
            </p>
          </div>
        ))}
      </div>
    );
  }
  if (type === "C") {
    return (
      <div className="game-series flex-col">
        {typeC.map((game, index) => (
          <div className="game-desc flex-col">
            <img
              key={index}
              className="game-icon"
              src={game.imgURL}
              alt={game.series}
            />
            <p className="game-info flex-col">
              {game.numNames} Playable Characters
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataContent;
