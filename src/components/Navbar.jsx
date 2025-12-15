import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;

  return (
    <nav style={{ background: themeCurrent.ui, color: themeCurrent.syntax }}>
      <h1>My Application</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
