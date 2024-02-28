import React, { createContext, useState } from "react";

export const FindContext = createContext({});

function FindProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <FindContext.Provider value={{ search, setSearch }}>
      {children}
    </FindContext.Provider>
  );
}

export default FindProvider;
