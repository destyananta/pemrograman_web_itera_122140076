// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Mengambil data dari localStorage saat pertama kali komponen dirender
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  // State yang menyimpan data
  const [value, setValue] = useState(parsedValue);

  // Menyimpan data ke localStorage setiap kali value berubah
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
