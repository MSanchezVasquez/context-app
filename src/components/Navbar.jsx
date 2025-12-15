import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;

  const { isAuthenticated, toggleAuth } = auth;

  return (
    <nav style={{ background: themeCurrent.ui, color: themeCurrent.syntax }}>
      <h1>My Application</h1>
      <div>
        <button onClick={toggleAuth}>
          {isAuthenticated ? "Log out" : "Log in"}
        </button>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
