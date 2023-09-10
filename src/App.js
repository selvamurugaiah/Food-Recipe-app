import React, { useContext, useEffect } from "react";
import "./App.css";

import Home from "./components/pages/Home";
import ViewDish from "./components/ViewDish";
import Categories from "./components/Category/Categories";
import CategoryView from "./components/Category/CategoryCard";
import NotFound from "./components/pages/pageNotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MyContext } from "./context";



const App = () => {
  const { mode} = useContext(MyContext);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={`${mode === "dark" ? "App dark" : "App"}`}>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receipe/view/:id" element={<ViewDish />} />
          <Route path="/receipe/category/:name" element={<CategoryView />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
