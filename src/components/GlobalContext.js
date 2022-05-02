import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [help, setHelp] = useState(false);
  const [data, setData] = useState([]);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const [submit, setSubmit] = useState(false);
  const [shade, setShade] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        start,
        setStart,
        help,
        setHelp,
        data,
        setData,
        guess,
        setGuess,
        answer,
        setAnswer,
        submit,
        setSubmit,
        shade,
        setShade,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
