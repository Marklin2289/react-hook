import React, { useState } from "react";

import "./App.css";
import { Reacthook } from "./components/Reacthook";
import { UseEffect } from "./components/UseEffect";
import FunctionContextComponent from "./components/FunctionContextComponent";
import ClassContextComponent from "./components/ClassContextComponent";
import { ThemeProvider } from "./components/ThemeContext";

export const ThemeContext = React.createContext(false);
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeProvider>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
      <div className="App">
        <Reacthook />
        <UseEffect />
      </div>
    </>
  );
}

export default App;
