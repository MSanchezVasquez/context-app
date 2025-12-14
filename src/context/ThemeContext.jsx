import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const isLightTheme = true;
  const light = {
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  };
  const dark = {
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
