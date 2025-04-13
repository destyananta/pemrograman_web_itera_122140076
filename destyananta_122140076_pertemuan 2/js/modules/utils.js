export function hitungCountdown(deadline) {
  const now = new Date();
  const target = new Date(deadline);
  const selisih = target - now;

  if (selisih <= 0) return "Selesai";

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((selisih / (1000 * 60)) % 60);

  return `${hari}h ${jam}j ${menit}m`;
}
