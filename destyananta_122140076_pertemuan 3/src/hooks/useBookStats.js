// src/hooks/useBookStats.js
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const useBookStats = () => {
  const { books } = useContext(BookContext);

  // Fungsi untuk mendapatkan jumlah buku berdasarkan status
  const getBooksByStatus = (status) => {
    return books.filter((book) => book.status === status).length;
  };

  // Mengembalikan statistik
  return {
    totalBooks: books.length,
    totalOwnedBooks: getBooksByStatus("milik"),
    totalReadingBooks: getBooksByStatus("baca"),
    totalWantToReadBooks: getBooksByStatus("beli"),
  };
};

export default useBookStats;
