import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    height: 25,
    width: 200,
  };
  return <div style={themeStyles}>Function Theme</div>;
}
