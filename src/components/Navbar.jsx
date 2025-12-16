import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;

  const { isAuthenticated, toggleAuth } = auth;

  return (
    <div className="navbar">
      <h1>Moschino Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};
export default Navbar;
