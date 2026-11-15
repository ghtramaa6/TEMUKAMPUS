# Pemeriksaan implementasi (pengujian lokal)

Pemeriksaan otomatis lokal menggunakan Chromium headless (bukan hasil uji teman):

| Skenario | Hasil |
|---|---|
| Submit form kosong | Lulus: 5 field wajib + persetujuan ditandai |
| Beralih ke Barang Temuan | Lulus: label lokasi berubah |
| Isi form valid | Lulus: indikator 100%, dialog ringkasan tampil |
| Nomor telepon di deskripsi | Lulus: peringatan data sensitif tampil |
| Tanggal di masa depan | Lulus: validasi menolak |
| Foto berformat PNG yang sesuai | Lulus: pratinjau tampil dan dapat dihapus |
| Menu pada lebar 390 px | Lulus: dapat dibuka dan ditutup |
| JavaScript runtime | Lulus: tidak ada error halaman saat pemeriksaan |

Pengujian ini menguji implementasi kode saja. **Tidak menggantikan** persyaratan pengujian prototipe dengan teman pada Tugas 1.
