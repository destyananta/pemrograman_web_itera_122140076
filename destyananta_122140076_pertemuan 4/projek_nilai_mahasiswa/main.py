# main.py

# List data mahasiswa (nama, nim, nilai_uts, nilai_uas, nilai_tugas)
mahasiswa = [
    {"nama": "Andi", "nim": "12345", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 85},
    {"nama": "Budi", "nim": "12346", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 60},
    {"nama": "Cici", "nim": "12347", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Deni", "nim": "12348", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 60},
    {"nama": "Eva", "nim": "12349", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 80},
]

# Fungsi untuk menghitung nilai akhir dan grade
def hitung_nilai_akhir(mahasiswa):
    nilai_akhir = (0.3 * mahasiswa["nilai_uts"]) + (0.4 * mahasiswa["nilai_uas"]) + (0.3 * mahasiswa["nilai_tugas"])
    
    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"
    
    return nilai_akhir, grade

# Menampilkan tabel data mahasiswa dengan nilai akhir dan grade
print("--------------------------------------------------------")
print(f"{'Nama':<10} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<5} {'Nilai Akhir':<12} {'Grade'}")
print("--------------------------------------------------------")
for mhs in mahasiswa:
    nilai_akhir, grade = hitung_nilai_akhir(mhs)
    print(f"{mhs['nama']:<10} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<5} {nilai_akhir:<12.2f} {grade}")

# Mencari mahasiswa dengan nilai tertinggi dan terendah
mahasiswa_tertinggi = max(mahasiswa, key=lambda mhs: hitung_nilai_akhir(mhs)[0])
mahasiswa_terendah = min(mahasiswa, key=lambda mhs: hitung_nilai_akhir(mhs)[0])

# Menampilkan mahasiswa dengan nilai tertinggi dan terendah
nilai_akhir_tertinggi, grade_tertinggi = hitung_nilai_akhir(mahasiswa_tertinggi)
nilai_akhir_terendah, grade_terendah = hitung_nilai_akhir(mahasiswa_terendah)

print("\nMahasiswa dengan nilai tertinggi:")
print(f"Nama: {mahasiswa_tertinggi['nama']}, Nilai Akhir: {nilai_akhir_tertinggi:.2f}, Grade: {grade_tertinggi}")

print("\nMahasiswa dengan nilai terendah:")
print(f"Nama: {mahasiswa_terendah['nama']}, Nilai Akhir: {nilai_akhir_terendah:.2f}, Grade: {grade_terendah}")
