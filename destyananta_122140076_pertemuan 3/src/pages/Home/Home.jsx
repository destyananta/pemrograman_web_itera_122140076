import { useState } from "react";
import BookForm from "../../components/BookForm/BookForm";
import BookFilter from "../../components/BookFilter/BookFilter";
import BookList from "../../components/BookList/BookList";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <h1>Manajemen Buku Pribadi</h1>

      {/* Form Filter dan Cari */}
      <div className="filter-cari">
        <BookFilter
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />
      </div>

      {/* Form untuk Menambah Buku */}
      <BookForm />

      {/* Daftar Buku */}
      <h2>Daftar Buku</h2>
      <BookList filter={filter} search={search} />
    </div>
  );
};

export default Home;
