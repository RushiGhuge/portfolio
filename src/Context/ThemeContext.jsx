import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  document.body.setAttribute('data-theme', theme);

  function toggleTheme() {
    setTheme(theme == 'dark' ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;




