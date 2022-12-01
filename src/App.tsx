import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Nav from "./components/core/Nav";
import Home from "./components/Home";
import Showcase from "./components/Showcase";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "light" 
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
