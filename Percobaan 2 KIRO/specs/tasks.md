# Implementation Plan: Aplikasi ToDo List

## Tasks

- [x] 1. Buat struktur HTML dasar (`index.html`)
  - Buat file `index.html` dengan elemen: input teks untuk nama tugas, tombol "Tambah", dan `<ul>` atau `<ol>` sebagai container daftar tugas
  - Hubungkan `style.css` dan `app.js` di dalam `index.html`

- [x] 2. Buat styling dasar (`style.css`)
  - Buat file `style.css` dengan tampilan sederhana: layout terpusat, styling input dan tombol, serta styling item daftar tugas
  - Tambahkan style untuk tombol hapus di setiap item

- [x] 3. Implementasi fungsi tambah tugas (`app.js`)
  - Buat file `app.js`
  - Implementasi fungsi `addTask()` yang membaca nilai input, membuat elemen `<li>` baru berisi teks tugas dan tombol hapus, lalu menambahkannya ke daftar
  - Validasi input agar tidak bisa menambah tugas kosong

- [x] 4. Implementasi fungsi hapus tugas
  - Tambahkan event listener pada tombol hapus di setiap item tugas
  - Implementasi fungsi `deleteTask()` yang menghapus elemen `<li>` yang sesuai dari DOM

- [x] 5. Implementasi persistensi dengan LocalStorage
  - Implementasi fungsi `saveTasks()` yang menyimpan array tugas ke `localStorage`
  - Implementasi fungsi `loadTasks()` yang membaca data dari `localStorage` saat halaman dimuat
  - Pastikan `saveTasks()` dipanggil setiap kali tugas ditambah atau dihapus
  - Pastikan `loadTasks()` dipanggil saat `DOMContentLoaded`
