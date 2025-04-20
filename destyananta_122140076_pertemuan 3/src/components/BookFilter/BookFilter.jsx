import PropTypes from 'prop-types';
import './BookFilter.css';

const BookFilter = ({ filter, onFilterChange, search, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Filter:
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">Semua</option>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </label>
      <label style={{ marginLeft: '1rem' }}>
        Cari:
        <input
          type="text"
          placeholder="Cari judul atau penulis"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </label>
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default BookFilter;
