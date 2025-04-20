import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home page by default", () => {
  render(<App />);
  expect(screen.getByText(/manajemen buku pribadi/i)).toBeInTheDocument();
});

test("navigates to stats page", () => {
  // Simulasi perubahan route secara manual
  window.history.pushState({}, "", "/stats");

  render(<App />);
  expect(screen.getByText(/statistik buku/i)).toBeInTheDocument();
});
