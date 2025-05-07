from abc import ABC, abstractmethod

# Abstract Base Class (ABC) for LibraryItem
class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self._title = title          # Protected attribute
        self._item_id = item_id      # Protected attribute
    
    @abstractmethod
    def display_details(self):
        """Method yang harus diimplementasikan oleh subclass"""
        pass
    
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, new_title):
        if len(new_title) > 0:
            self._title = new_title
        else:
            print("Title tidak boleh kosong!")

# Subclass Book
class Book(LibraryItem):
    def __init__(self, title, item_id, author):
        super().__init__(title, item_id)
        self._author = author       # Private attribute

    def display_details(self):
        return f"Book Title: {self.title}, Author: {self._author}, ID: {self._item_id}"

    @property
    def author(self):
        return self._author

    @author.setter
    def author(self, new_author):
        if len(new_author) > 0:
            self._author = new_author
        else:
            print("Author tidak boleh kosong!")

# Subclass Magazine
class Magazine(LibraryItem):
    def __init__(self, title, item_id, issue_number):
        super().__init__(title, item_id)
        self._issue_number = issue_number  # Private attribute

    def display_details(self):
        return f"Magazine Title: {self.title}, Issue: {self._issue_number}, ID: {self._item_id}"

# Class Library untuk mengelola item
class Library:
    def __init__(self):
        self._items = []  # Private attribute untuk menyimpan koleksi item perpustakaan
    
    def add_item(self, item):
        """Menambahkan item ke perpustakaan"""
        if isinstance(item, LibraryItem):  # Pastikan item adalah turunan dari LibraryItem
            self._items.append(item)
        else:
            print("Item harus berupa buku atau majalah.")
    
    def display_all_items(self):
        """Menampilkan daftar item yang tersedia di perpustakaan"""
        for item in self._items:
            print(item.display_details())
    
    def find_item_by_title(self, title):
        """Mencari item berdasarkan judul"""
        for item in self._items:
            if item.title.lower() == title.lower():
                return item.display_details()
        return "Item tidak ditemukan."
    
    def find_item_by_id(self, item_id):
        """Mencari item berdasarkan ID"""
        for item in self._items:
            if item._item_id == item_id:
                return item.display_details()
        return "Item tidak ditemukan."

# Membuat instance Library
library = Library()

# Membuat beberapa item buku dan majalah dengan penulis terkenal Indonesia
book1 = Book("Laskar Pelangi", "B001", "Andrea Hirata")
book2 = Book("Ayat-Ayat Cinta", "B002", "Habiburrahman El Shirazy")
book3 = Book("Bumi Manusia", "B003", "Pramoedya Ananta Toer")
book4 = Book("Sang Pemimpi", "B004", "Andrea Hirata")

magazine1 = Magazine("Teknologi Terkini", "M001", 2023)
magazine2 = Magazine("Majalah Desain", "M002", 2023)
magazine3 = Magazine("Ilmu Pengetahuan Alam", "M003", 2023)
magazine4 = Magazine("Gaya Hidup Modern", "M004", 2023)

# Menambahkan item buku dan majalah ke perpustakaan
library.add_item(book1)
library.add_item(book2)
library.add_item(book3)
library.add_item(book4)

library.add_item(magazine1)
library.add_item(magazine2)
library.add_item(magazine3)
library.add_item(magazine4)

# Menampilkan semua item
print("Daftar Item Perpustakaan:")
library.display_all_items()

# Mencari item berdasarkan judul
print("\nMencari item berdasarkan judul 'Laskar Pelangi':")
print(library.find_item_by_title("Laskar Pelangi"))

# Mencari item berdasarkan ID
print("\nMencari item berdasarkan ID 'M001':")
print(library.find_item_by_id("M001"))
