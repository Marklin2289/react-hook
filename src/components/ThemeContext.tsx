import React, { FC, ReactNode, useState } from "react";

const ThemeContext = React.createContext(true);
const ThemeUpdateContext = React.createContext(true);

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext value={toggleTheme}>{children}</ThemeUpdateContext>
    </ThemeContext.Provider>
  );
};
