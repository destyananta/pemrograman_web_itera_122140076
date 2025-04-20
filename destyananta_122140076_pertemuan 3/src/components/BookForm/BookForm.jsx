// src/components/BookForm/BookForm.jsx
import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import useForm from '../../hooks/useForm';  // Impor useForm

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const { values, errors, handleChange, validate, setValues } = useForm({
    title: '',
    author: '',
    status: 'milik',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sebelum menambah buku
    if (validate()) {
      addBook(values);  // Menambahkan buku
      setValues({ title: '', author: '', status: 'milik' });  // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Judul</label>
      <input
        id="title"
        name="title"
        value={values.title}
        onChange={handleChange}
        placeholder="Judul Buku"
      />
      {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

      <label htmlFor="author">Penulis</label>
      <input
        id="author"
        name="author"
        value={values.author}
        onChange={handleChange}
        placeholder="Penulis"
      />
      {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}

      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={values.status}
        onChange={handleChange}
      >
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      {errors.status && <p style={{ color: 'red' }}>{errors.status}</p>}

      <button type="submit">Tambah Buku</button>
    </form>
  );
};

export default BookForm;
