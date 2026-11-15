
# TemuKampus - Website Pelaporan Barang Hilang dan Temuan

## Deskripsi Proyek

TemuKampus merupakan prototipe website yang dirancang untuk membantu mahasiswa melaporkan barang hilang maupun barang temuan di lingkungan kampus.

Proyek ini dikembangkan sebagai bagian dari tugas mata kuliah Pemrograman Front End dengan mengimplementasikan halaman **Buat Laporan** berdasarkan wireframe yang telah dirancang sebelumnya.

Website ini dibuat menggunakan HTML, CSS, dan JavaScript dengan fokus pada struktur halaman, tampilan responsif, validasi formulir, interaksi pengguna, dan keamanan informasi yang ditampilkan.

## Fitur Utama

- **Navigasi Sidebar Responsif:** Menampilkan menu utama dan menyesuaikan tampilannya pada perangkat dengan ukuran layar berbeda.
- **Pilihan Jenis Laporan:** Pengguna dapat memilih antara laporan Barang Hilang dan Barang Temuan.
- **Formulir Laporan:** Pengguna dapat mengisi nama barang, kategori, lokasi, tanggal kejadian, dan deskripsi barang.
- **Validasi Formulir:** Memeriksa kelengkapan data, panjang input, tanggal kejadian, serta beberapa pola informasi sensitif.
- **Unggah dan Pratinjau Foto:** Mendukung gambar PNG, JPG, dan WebP dengan ukuran maksimal 3 MB.
- **Indikator Kelengkapan:** Menampilkan persentase kelengkapan formulir berdasarkan data yang sudah diisi.
- **Konfirmasi Laporan:** Menampilkan ringkasan laporan setelah formulir berhasil divalidasi.
- **Notifikasi Interaktif:** Memberikan informasi ketika pengguna mengakses fitur yang belum tersedia atau terdapat kesalahan pengisian.

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| HTML5 | Membuat struktur dan elemen halaman website |
| CSS3 | Mengatur tampilan, warna, layout, dan responsivitas |
| JavaScript | Menambahkan validasi formulir dan fitur interaktif |
| GitHub | Menyimpan dan mengelola kode proyek |
| GitHub Pages | Menampilkan website secara online |

## Struktur Proyek

```text
TEMUKAMPUS/
├── index.html
├── styles.css
├── script.js
├── README.md
├── TESTING.md
├── preview-desktop.png
└── preview-mobile.png
```

### Penjelasan File

- `index.html` — Berisi struktur utama halaman, navigasi, formulir laporan, dan dialog konfirmasi.
- `styles.css` — Mengatur warna, tipografi, jarak, tata letak, dan tampilan responsif.
- `script.js` — Menangani validasi formulir, navigasi sidebar, pratinjau foto, dan interaksi pengguna.
- `README.md` — Berisi dokumentasi, penjelasan proyek, dan cara menjalankan website.
- `TESTING.md` — Berisi dokumentasi skenario pengujian website.
- `preview-desktop.png` — Menampilkan pratinjau website pada layar desktop.
- `preview-mobile.png` — Menampilkan pratinjau website pada layar perangkat mobile.

Folder `assets/` dapat ditambahkan untuk menyimpan aset tambahan seperti ikon website.

## Cara Menjalankan Website

### 1. Menjalankan Secara Lokal

1. Buka repository GitHub:

   https://github.com/ghtramaa6/TEMUKAMPUS

2. Klik tombol **Code**, lalu pilih **Download ZIP**.

3. Ekstrak file ZIP yang sudah diunduh.

4. Buka folder proyek TemuKampus.

5. Pastikan file `index.html`, `styles.css`, dan `script.js` berada dalam folder yang sama.

6. Klik dua kali file `index.html` untuk membuka website melalui browser.

Website dapat dijalankan menggunakan Google Chrome, Microsoft Edge, atau Mozilla Firefox.

### 2. Menjalankan Menggunakan Visual Studio Code

1. Buka aplikasi Visual Studio Code.
2. Pilih menu **File > Open Folder**.
3. Pilih folder proyek TemuKampus.
4. Instal ekstensi **Live Server** jika belum tersedia.
5. Klik kanan pada file `index.html`.
6. Pilih **Open with Live Server**.

Website akan terbuka secara otomatis melalui browser.

### 3. Menjalankan Melalui GitHub Pages

Website juga dapat diakses secara online melalui GitHub Pages setelah proses deployment berhasil dilakukan.

**Link Website:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Pengujian Website

Pengujian dilakukan untuk memastikan setiap fitur pada halaman Buat Laporan dapat berjalan sesuai fungsinya.

| Pengujian | Hasil yang Diharapkan |
|-----------|----------------------|
| Mengirim formulir kosong | Muncul pesan bahwa kolom wajib diisi |
| Memilih Barang Temuan | Label lokasi berubah sesuai jenis laporan |
| Memasukkan tanggal di masa depan | Muncul pesan kesalahan tanggal |
| Mengisi deskripsi kurang dari 15 karakter | Muncul pesan validasi panjang deskripsi |
| Mengunggah foto dengan format yang sesuai | Pratinjau foto berhasil ditampilkan |
| Mengunggah foto lebih dari 3 MB | Sistem menolak foto tersebut |
| Menghapus foto yang dipilih | Pratinjau foto menghilang |
| Mengirim formulir dengan data lengkap | Muncul dialog konfirmasi laporan |
| Membuka website pada layar kecil | Tampilan menyesuaikan ukuran layar dan sidebar dapat dibuka |

## Penerapan Desain dan Frontend

Dalam pengembangan website TemuKampus, beberapa pendekatan yang digunakan antara lain:

- **HTML Semantik:** Menggunakan elemen HTML sesuai fungsinya agar struktur halaman lebih teratur.
- **CSS Grid dan Flexbox:** Membantu mengatur tata letak halaman agar konsisten.
- **CSS Custom Properties:** Menyimpan warna dan ukuran tertentu sebagai variabel agar lebih mudah dikelola.
- **Responsive Design:** Menggunakan media query untuk menyesuaikan tampilan desktop dan mobile.
- **JavaScript DOM Manipulation:** Mengubah tampilan dan informasi pada halaman berdasarkan interaksi pengguna.
- **Form Validation:** Memastikan data yang diisi pengguna memenuhi ketentuan sebelum diproses.
- **User Feedback:** Menampilkan pesan validasi, notifikasi, dan dialog konfirmasi agar pengguna mengetahui hasil interaksinya.

## Batasan Proyek

Website TemuKampus saat ini masih berupa prototipe frontend yang dibuat untuk keperluan pembelajaran.

Proses pengiriman laporan hanya berupa simulasi menggunakan JavaScript. Website belum terhubung dengan backend maupun database.

Informasi yang dimasukkan ke formulir tidak dikirimkan ke server dan tidak disimpan secara permanen.

Foto yang dipilih hanya ditampilkan sebagai pratinjau lokal pada browser.

Pemeriksaan informasi sensitif masih menggunakan validasi sederhana sehingga belum dapat menjamin seluruh informasi pribadi terdeteksi.

Beberapa halaman navigasi lain juga belum diimplementasikan karena proyek ini difokuskan pada halaman Buat Laporan.

## Repository Proyek

**GitHub Repository:**

https://github.com/ghtramaa6/TEMUKAMPUS

**GitHub Pages:**

https://ghtramaa6.github.io/TEMUKAMPUS/

## Tujuan Pengerjaan

Proyek ini dibuat untuk memenuhi tugas mata kuliah **Pemrograman Front End** tahun 2026.

Tujuan utama pengerjaan adalah menerapkan materi HTML, CSS, dan JavaScript dalam pembuatan halaman website yang memiliki struktur semantik, tampilan responsif, serta interaksi yang dapat digunakan oleh pengguna.

Melalui proyek TemuKampus, materi yang dipelajari diterapkan secara langsung dalam bentuk halaman pelaporan barang hilang dan barang temuan di lingkungan kampus.
