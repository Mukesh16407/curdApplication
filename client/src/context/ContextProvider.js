import React, { createContext, useState } from "react";

export const addContext = createContext("");
export const updateContext = createContext("");
export const deleteContext = createContext("");

export const ContextProvider = ({ children }) => {
    
  const [userData, setUserData] = useState("");
  const [updateData, setUpdate] = useState("");
  const [deleteData, setDeleteData] = useState("");

  return (
    <addContext.Provider value={{ userData, setUserData }}>
      <updateContext.Provider value={{ updateData, setUpdate }}>
        <deleteContext.Provider value={{ deleteData, setDeleteData }}>
          {children}
        </deleteContext.Provider>
      </updateContext.Provider>
    </addContext.Provider>
  );
};
