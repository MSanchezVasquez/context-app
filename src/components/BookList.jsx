import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ background: themeCurrent.bg, color: themeCurrent.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li style={{ background: themeCurrent.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;
