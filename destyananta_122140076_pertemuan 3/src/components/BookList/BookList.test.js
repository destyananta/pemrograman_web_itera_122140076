import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import { BookContext } from "../../context/BookContext";

test("shows book list with books", () => {
  const mockBooks = [
    { id: 1, title: "Atomic Habits", author: "James Clear", status: "milik" },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", status: "baca" },
  ];

  render(
    <BookContext.Provider value={{ books: mockBooks, deleteBook: jest.fn() }}>
      <BookList filter="all" search="" />
    </BookContext.Provider>
  );

  expect(screen.getByText(/Atomic Habits/i)).toBeInTheDocument();
  expect(screen.getByText(/Sapiens/i)).toBeInTheDocument();
});
