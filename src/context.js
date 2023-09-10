import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { DB_API } from "./api/index";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  const [dishes, setDishes] = useState([]);
  const [mode, setMode] = useState("light");

 

  // Passing all the states to the context store as values, which makes it available across all child component
  return (
    <MyContext.Provider
      value={{
        dishes,
        setDishes,
        mode,
        setMode,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
