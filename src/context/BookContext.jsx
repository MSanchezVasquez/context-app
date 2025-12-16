import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "the way of the dragon", id: 1 },
    { title: "the art of war", id: 2 },
    { title: "the power of now", id: 3 },
    { title: "the 48 laws of power", id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};
export default BookContextProvider;
