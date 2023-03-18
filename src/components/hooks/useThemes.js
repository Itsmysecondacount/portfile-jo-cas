import React from "react";

export const ThemeContext = React.createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
