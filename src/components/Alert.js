import React, { useEffect, useContext } from "react";
import * as images from "../image-data";
import { GlobalContext } from "./GlobalContext";
import "../styles.css";

function Alert({ type, msg, removeAlert }) {
  const { start, setStart } = useContext(GlobalContext);

  useEffect(() => {
    if (type === "failure") {
      const timeout = setTimeout(() => {
        removeAlert();
      }, 1750);
      return () => clearTimeout(timeout);
    }
  }, []);

  switch (type) {
    case "success": {
      return (
        <div className="alert-container">
          <img className="alert-img" src={images.NinoFace} alt="NinoFace" />
          <p className={`alert-msg alert-${type}`}>{msg}</p>
        </div>
      );
    }
    case "gameOver": {
      return (
        <div className="alert-container">
          <img className="alert-img" src={images.NiNoSleep} alt="NiNoSleep" />
          <p className={`alert-msg alert-${type}`}>{msg}</p>
        </div>
      );
    }
    default: {
      return (
        <div className="alert-container">
          <img className="alert-img" src={images.NiNoSleep} alt="NiNoSleep" />
          <p className={`alert-msg alert-${type}`}>{msg}</p>
        </div>
      );
    }
  }

  // if (type === "failure") {
  //   return (
  //     <div className="alert-container">
  //       <img className="alert-img" src={images.NiNoSleep} alt="NiNoSleep" />
  //       <p className={`alert-msg alert-${type}`}>{msg}</p>
  //     </div>
  //   );
  // }

  // if (type === "success") {
  //   return (
  //     <>
  //       <div className="alert-container">
  //         <img className="alert-img" src={images.NinoFace} alt="NinoFace" />
  //         <p className={`alert-msg alert-${type}`}>{msg}</p>
  //       </div>
  //     </>
  //   );
  // }

  // if (type === "gameOver") {
  //   return (
  //     <>
  //       <div className="alert-container">
  //         <img className="alert-img" src={images.NinoFace} alt="NinoFace" />
  //         <p className={`alert-msg alert-${type}`}>{msg}</p>
  //       </div>
  //     </>
  //   );
  // }
}

export default Alert;
