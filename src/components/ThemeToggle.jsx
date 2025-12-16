import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);
  const { toggleTheme } = theme;

  return <button onClick={toggleTheme}>Toggle the theme</button>;
};

export default ThemeToggle;
