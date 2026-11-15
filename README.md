# TemuKampus — Implementasi Halaman Buat Laporan

Proyek frontend untuk **Tugas Implementasi Wireframe** dari aplikasi web **TemuKampus**, yaitu layanan pelaporan barang hilang dan barang temuan di lingkungan kampus.

Halaman yang diimplementasikan adalah **Buat Laporan**, mengacu pada frame desktop Tugas 1 (1440 × 1024 px). Desain menggunakan sidebar, topbar, tombol pilihan jenis laporan, formulir, unggah foto, panel tips privasi, dan konfirmasi simulasi.

> **Batasan penting:** hanya frontend simulasi. Data tidak dikirim ke server, tidak tersimpan dalam database, dan tidak boleh dianggap sebagai laporan resmi kampus. Halaman lain di sidebar belum diimplementasikan dan menampilkan penjelasan saat diklik.

## Teknologi dan struktur folder

```
TemuKampus_Tugas_Implementasi/
├── index.html                 # Root document: HTML5 semantik
├── styles.css                 # Tampilan, warna/spacing custom properties, responsivitas
├── script.js                  # Validasi, jenis laporan, menu, foto, dialog, progress
├── README.md                  # Deskripsi dan instruksi
├── assets/
│   └── favicon.svg           # Ikon lokal
└── reference/
    └── wireframe-buat-laporan.png  # Referensi Tugas 1, bukan elemen UI aktif
```

Tidak menggunakan framework, CDN, atau layanan pihak ketiga. Tidak diperlukan `npm install`.

## Cara menjalankan

1. Unduh atau *clone* repositori.
2. Buka `index.html` secara langsung pada browser modern, **atau** jalankan server lokal:
   ```bash
   python -m http.server 8000
   ```
3. Akses `http://localhost:8000`.
4. Coba memilih **Barang Hilang** atau **Barang Temuan**, mengisi formulir, mengunggah foto, dan menekan **Kirim Laporan**.

## Komponen HTML semantik (minimal 5)

| Komponen | Berkas/selector | Perilaku |
|---|---|---|
| Sidebar navigasi | `index.html #sidebar`, `#primary-nav` | Sidebar responsif; `script.js: toggleMenu()` |
| Header dan pencarian cepat | `index.html .topbar`, `#quick-search` | Pencarian memberi notifikasi bahwa halaman belum diimplementasikan |
| Pilihan jenis laporan | `index.html #report-kind` | Radio group; `script.js: setReportType()` mengubah label lokasi |
| Formulir laporan | `index.html #report-form` | Validasi required, panjang deskripsi, tanggal, info privat; `submitReport()` |
| Unggah dan pratinjau foto | `index.html #image-upload` | PNG/JPG/WebP, maksimal 3 MB; `validatePhoto()` dan `clearPhoto()` |
| Tips laporan aman | `index.html #tips` | Daftar pedoman privasi dan keamanan yang selalu terlihat |
| Dialog konfirmasi | `index.html #success-dialog` | Ringkasan data dan status simulasi; tidak menyimpan data |

## Custom properties CSS

Warna didefinisikan dalam `:root`, termasuk `--primary`, `--teal-bright`, `--accent`, `--bg`, dan `--text`. Spacing menggunakan token `--spacing-1` sampai `--spacing-5` (8, 16, 24, 32, 48 px). Layout memakai Grid dan Flexbox; media query mengadaptasi sidebar dan kolom form pada layar sempit.

## Pengujian manual

1. Klik **Kirim Laporan** saat kolom kosong: semua isian wajib menampilkan pesan.
2. Isi data valid, centang persetujuan, lalu kirim: dialog ringkasan simulasi tampil.
3. Ubah jenis ke **Barang Temuan**: label lokasi berubah menjadi **Lokasi barang ditemukan**.
4. Pilih foto yang didukung dan berukuran maksimal 3 MB: pratinjau muncul; klik **Hapus** untuk melepasnya.
5. Masukkan tanggal masa depan atau nomor telepon di deskripsi: validasi menolak.
6. Coba lebar layar ponsel: tombol menu membuka/menutup sidebar.

Pemeriksaan privasi melalui pola teks hanya bantuan awal dan **bukan** pengganti moderasi atau pemeriksaan manusia di aplikasi sungguhan.

## Mengunggah ke GitHub (publik)

1. Masuk ke GitHub → **New repository**. Contoh nama: `temukampus-laporan-web`.
2. Atur **Public** lalu buat repositori.
3. Pilih **Add file → Upload files**; unggah **isi folder proyek** ini, bukan folder pembungkus ZIP, sehingga `index.html` berada di akar repositori.
4. Commit perubahan. Pastikan `index.html`, `styles.css`, `script.js`, dan `README.md` terlihat di root.
5. Salin tautan `https://github.com/USERNAME/temukampus-laporan-web` ke LMS setelah repositori benar-benar dibuat.

**Opsional GitHub Pages:** Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save. Tunggu proses deploy berhasil lalu uji URL `https://USERNAME.github.io/temukampus-laporan-web/`.

## Kaitan dengan riset UX

Kebutuhan mencari informasi terstruktur dan perlindungan data pribadi diturunkan dari rancangan riset pengguna TemuKampus. Fitur verifikasi detail kepemilikan berada di halaman lanjutan, sehingga laporan publik hanya memuat ciri umum. Statistik survei tahap awal belum diperlakukan sebagai hasil penelitian final.
