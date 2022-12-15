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
import ColorLensIcon from "@mui/icons-material/ColorLens";

const App = () => {
  const [theme, setTheme] = useState(greenTheme);
  const toggleTheme = (theme: any) => {
    const themes = [greenTheme, orangeTheme, modernTheme];

    switch (theme) {
      case greenTheme:
        setTheme(orangeTheme);
        break;
      case orangeTheme:
        setTheme(modernTheme);
        break;
      case modernTheme:
        setTheme(greenTheme);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Button
        title="Toggle Theme"
        onClick={() => toggleTheme(theme)}
        style={{ width: "fit-content" }}
      >
        Change colors <ColorLensIcon />
      </Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase">
          <Route index element={<Showcase />} />
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
