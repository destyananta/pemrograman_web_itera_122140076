import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "./BookFilter";

test("renders filter dropdown and calls onFilterChange", () => {
  const mockChange = jest.fn();

  render(
    <BookFilter
      filter="all"
      onFilterChange={mockChange}
      search=""
      onSearchChange={() => {}}
    />
  );

  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "beli" } });

  expect(mockChange).toHaveBeenCalledWith("beli"); // ✅ tes pemanggilan
});
