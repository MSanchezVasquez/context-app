import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "the way of the dragon", author: "Bruce Lee", id: 1 },
    { title: "the art of war", author: "Sun Tzu", id: 2 },
    { title: "the power of now", author: "Eckhart Tolle", id: 3 },
    { title: "the 48 laws of power", author: "Robert Greene", id: 4 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const totalBooks = books.length;

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, totalBooks }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
