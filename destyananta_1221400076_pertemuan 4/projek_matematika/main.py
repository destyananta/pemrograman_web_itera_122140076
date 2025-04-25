# main.py

# Cara 1: Mengimpor seluruh modul
import math_operations

# Cara 2: Mengimpor fungsi tertentu
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin

# Menggunakan fungsi dari math_operations
# Perhitungan geometri
sisi_persegi = 5
panjang_persegi_panjang = 8
lebar_persegi_panjang = 6
jari_jari_lingkaran = 7

luas_persegi = math_operations.luas_persegi(sisi_persegi)
keliling_persegi = math_operations.keliling_persegi(sisi_persegi)

luas_persegi_panjang = math_operations.luas_persegi_panjang(panjang_persegi_panjang, lebar_persegi_panjang)
keliling_persegi_panjang = math_operations.keliling_persegi_panjang(panjang_persegi_panjang, lebar_persegi_panjang)

luas_lingkaran = math_operations.luas_lingkaran(jari_jari_lingkaran)
keliling_lingkaran = math_operations.keliling_lingkaran(jari_jari_lingkaran)

# Konversi suhu
celsius = 25
fahrenheit = celsius_to_fahrenheit(celsius)
kelvin = celsius_to_kelvin(celsius)

# Menampilkan hasil perhitungan dengan format rapi
print("--------------------------------------------------------")
print("Perhitungan Geometri:")
print(f"Luas Persegi dengan sisi {sisi_persegi} cm: {luas_persegi} cm²")
print(f"Keliling Persegi dengan sisi {sisi_persegi} cm: {keliling_persegi} cm")
print(f"Luas Persegi Panjang dengan panjang {panjang_persegi_panjang} cm dan lebar {lebar_persegi_panjang} cm: {luas_persegi_panjang} cm²")
print(f"Keliling Persegi Panjang dengan panjang {panjang_persegi_panjang} cm dan lebar {lebar_persegi_panjang} cm: {keliling_persegi_panjang} cm")
print(f"Luas Lingkaran dengan jari-jari {jari_jari_lingkaran} cm: {luas_lingkaran} cm²")
print(f"Keliling Lingkaran dengan jari-jari {jari_jari_lingkaran} cm: {keliling_lingkaran} cm")

print("\n--------------------------------------------------------")
print("Konversi Suhu:")
print(f"{celsius}°C = {fahrenheit}°F")
print(f"{celsius}°C = {kelvin} K")