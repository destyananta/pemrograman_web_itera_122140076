// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Update input values in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!values.title) newErrors.title = 'Judul buku wajib diisi';
    if (!values.author) newErrors.author = 'Penulis wajib diisi';
    if (!values.status) newErrors.status = 'Pilih status buku';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    setValues,
  };
};

export default useForm;
