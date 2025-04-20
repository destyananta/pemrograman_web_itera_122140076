import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage("books", []);
  const [books, setBooks] = useState(storedBooks);

  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  const addBook = (book) => setBooks([...books, book]);
  const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));
  const updateBook = (updatedBook) =>
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);

// Tambahan untuk memperbaiki error
export { BookContext };
