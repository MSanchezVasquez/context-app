import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const themeCurrent = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :)</div>
  );
};
export default BookList;
