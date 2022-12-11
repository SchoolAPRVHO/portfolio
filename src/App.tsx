import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Nav from "./components/core/Nav";
import Home from "./components/Home";
import Showcase from "./components/Showcase";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, CssBaseline } from "@mui/material";
import Showcases from "./components/showcases/Showcases";
import orangeTheme from "./themes/redOrange";
import modernTheme from "./themes/modern";
import greenTheme from "./themes/green";
import Apis from "./components/api/Apis";
import Api from "./components/Api";

const App = () => {
  const [theme, setTheme] = useState(greenTheme);
  const toggleTheme = () => {
    setTheme(theme === orangeTheme ? modernTheme : orangeTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Button title="Toggle Theme" onClick={toggleTheme} style={{width:"fit-content"}}></Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase"  >
          <Route index element={<Showcase />}/>
          <Route path=":showcaseId" element={<Showcases />} />
        </Route>
        <Route path="/api">
          <Route index element={<Api />} />
          <Route path=":apiId" element={<Apis />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
