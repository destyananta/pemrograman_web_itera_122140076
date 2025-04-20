import {
  jadwalKuliah, tugasKuliah,
  tambahTugas, hapusTugas, editTugas,
  tambahJadwal, hapusJadwal, editJadwal
} from './modules/data.js';

import { hitungCountdown } from './modules/utils.js';

let editModeTugas = null;
let editModeJadwal = null;

export function tampilkanJadwal() {
  const container = document.getElementById("schedule-container");
  const selectedHari = document.getElementById("filter-hari")?.value || "";
  container.innerHTML = "";

  const jadwalYangDitampilkan = selectedHari
    ? jadwalKuliah.filter(j => j.hari === selectedHari)
    : jadwalKuliah;

  jadwalYangDitampilkan.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "jadwal-item";
    div.style.backgroundColor = item.warna;
    div.innerHTML = `<strong>${item.hari}</strong> - ${item.mataKuliah} (${item.jam})`;

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.onclick = () => {
      document.getElementById("schedule-mk").value = item.mataKuliah;
      document.getElementById("schedule-hari").value = item.hari;
      document.getElementById("schedule-jam").value = item.jam;
      document.getElementById("schedule-warna").value = item.warna;
      editModeJadwal = index;
    };

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = () => {
      hapusJadwal(index);
      tampilkanJadwal();
    };

    div.appendChild(btnEdit);
    div.appendChild(btnHapus);
    container.appendChild(div);
  });
}


export function setupFormJadwal() {
  const form = document.getElementById("schedule-form");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const mk = document.getElementById("schedule-mk").value;
    const hari = document.getElementById("schedule-hari").value;
    const jam = document.getElementById("schedule-jam").value;
    const warna = document.getElementById("schedule-warna").value;

    if (editModeJadwal !== null) {
      editJadwal(editModeJadwal, mk, hari, jam, warna);
      editModeJadwal = null;
    } else {
      tambahJadwal(mk, hari, jam, warna);
    }

    form.reset();
    tampilkanJadwal();

    const filterSelect = document.getElementById("filter-hari");
    filterSelect?.addEventListener("change", tampilkanJadwal);

  });
}

export function tampilkanTugas() {
  const container = document.getElementById("task-container");
  container.innerHTML = "";

  tugasKuliah.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "tugas-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selesai;
    checkbox.addEventListener("change", () => {
      item.selesai = checkbox.checked;
      tampilkanTugas();
    });

    const namaTugas = document.createElement("span");
    namaTugas.innerHTML = ` ${item.nama} - Deadline: ${new Date(item.deadline).toLocaleString()} - <em>${hitungCountdown(item.deadline)}</em>`;

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.onclick = () => {
      document.getElementById("task-name").value = item.nama;
      document.getElementById("task-deadline").value = item.deadline;
      editModeTugas = index;
    };

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = () => {
      hapusTugas(index);
      tampilkanTugas();
    };

    div.appendChild(checkbox);
    div.appendChild(namaTugas);
    div.appendChild(btnEdit);
    div.appendChild(btnHapus);
    container.appendChild(div);
  });
}

export function setupFormTugas() {
  const form = document.getElementById("task-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nama = document.getElementById("task-name").value;
    const deadline = document.getElementById("task-deadline").value;

    if (editModeTugas !== null) {
      editTugas(editModeTugas, nama, deadline);
      editModeTugas = null;
    } else {
      tambahTugas(nama, deadline);
    }

    form.reset();
    tampilkanTugas();
  });
}
