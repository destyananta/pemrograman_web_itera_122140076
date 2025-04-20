import useBookStats from '../../hooks/useBookStats';

const Stats = () => {
  const { owned, reading, wishlist, total } = useBookStats();

  return (
    <div>
      <h1>Statistik Buku</h1>
      <ul>
        <li>Total Buku: {total}</li>
        <li>Dimiliki: {owned}</li>
        <li>Sedang Dibaca: {reading}</li>
        <li>Ingin Dibeli: {wishlist}</li>
      </ul>
    </div>
  );
};

export default Stats;