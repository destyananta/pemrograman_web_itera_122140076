import {
  tampilkanJadwal, tampilkanTugas,
  setupFormJadwal, setupFormTugas
} from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  tampilkanJadwal();
  tampilkanTugas();
  setupFormJadwal();
  setupFormTugas();
});
