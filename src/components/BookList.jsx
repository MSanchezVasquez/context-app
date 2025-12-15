import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const BookList = () => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: themeCurrent.bg, color: themeCurrent.syntax }}
    >
      <ul>
        <li style={{ background: themeCurrent.ui }}>the way of the dragon</li>
        <li style={{ background: themeCurrent.ui }}>the art of war</li>
        <li style={{ background: themeCurrent.ui }}>the power of now</li>
      </ul>
    </div>
  );
};
export default BookList;
