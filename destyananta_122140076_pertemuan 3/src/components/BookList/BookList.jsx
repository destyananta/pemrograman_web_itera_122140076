import PropTypes from "prop-types";
import { useState } from "react";
import { useBookContext } from "../../context/BookContext";
import BookForm from "../BookForm/BookForm";
import "./BookList.css";

const BookList = ({ filter, search }) => {
  const { books, deleteBook } = useBookContext();
  const [editingBook, setEditingBook] = useState(null);

  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === "all" || book.status === filter;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h2>Daftar Buku</h2>
      {editingBook && (
        <BookForm
          existingBook={editingBook}
          onClose={() => setEditingBook(null)}
        />
      )}
      {filteredBooks.length === 0 ? (
        <p>Tidak ada buku.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} role="listitem">
              <strong>{book.title}</strong> oleh {book.author} ({book.status})
              <div>
                <button onClick={() => setEditingBook(book)}>Edit</button>
                <button onClick={() => deleteBook(book.id)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

BookList.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default BookList;
