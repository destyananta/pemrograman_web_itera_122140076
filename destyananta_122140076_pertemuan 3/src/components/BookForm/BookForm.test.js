// src/__tests__/bookform.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

test('renders and submits book form', () => {
  render(
    <BookProvider>
      <BookForm />
    </BookProvider>
  );

  const titleInput = screen.getByLabelText(/judul/i);
  const authorInput = screen.getByLabelText(/penulis/i);
  const statusSelect = screen.getByLabelText(/status/i);
  const submitButton = screen.getByRole('button', { name: /tambah buku/i });

  fireEvent.change(titleInput, { target: { value: 'Harry Potter' } });
  fireEvent.change(authorInput, { target: { value: 'J.K. Rowling' } });
  fireEvent.change(statusSelect, { target: { value: 'baca' } });
  fireEvent.click(submitButton);

  // Setelah submit, input harus kosong
  expect(titleInput.value).toBe('');
  expect(authorInput.value).toBe('');
});
