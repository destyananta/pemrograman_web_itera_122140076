// Kunci penyimpanan lokal
const TASK_KEY = "kuliah_tugas";
const JADWAL_KEY = "kuliah_jadwal";

// Ambil data dari localStorage atau gunakan data default
export let tugasKuliah = JSON.parse(localStorage.getItem(TASK_KEY)) || [
  { nama: "Tugas Praktikum Web", deadline: "2025-04-20T23:59:59", selesai: false },
];

export let jadwalKuliah = JSON.parse(localStorage.getItem(JADWAL_KEY)) || [
  { mataKuliah: "Pemrograman Web", hari: "Senin", jam: "10:00", warna: "#ffadad" },
];

// Fungsi menyimpan ke localStorage
function simpanTugas() {
  localStorage.setItem(TASK_KEY, JSON.stringify(tugasKuliah));
}

function simpanJadwal() {
  localStorage.setItem(JADWAL_KEY, JSON.stringify(jadwalKuliah));
}

// ===== Tugas =====
export function tambahTugas(nama, deadline) {
  tugasKuliah.push({ nama, deadline, selesai: false });
  simpanTugas();
}

export function hapusTugas(index) {
  tugasKuliah.splice(index, 1);
  simpanTugas();
}

export function editTugas(index, nama, deadline) {
  tugasKuliah[index].nama = nama;
  tugasKuliah[index].deadline = deadline;
  simpanTugas();
}

// ===== Jadwal =====
export function tambahJadwal(mk, hari, jam, warna) {
  jadwalKuliah.push({ mataKuliah: mk, hari, jam, warna });
  simpanJadwal();
}

export function hapusJadwal(index) {
  jadwalKuliah.splice(index, 1);
  simpanJadwal();
}

export function editJadwal(index, mk, hari, jam, warna) {
  jadwalKuliah[index] = { mataKuliah: mk, hari, jam, warna };
  simpanJadwal();
}
