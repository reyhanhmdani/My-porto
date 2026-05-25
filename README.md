# 💻 Cybernetic DevCore — Premium Web Portfolio

Portofolio web satu halaman interaktif berkinerja tinggi yang dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS v4** dengan pendekatan desain bertema siber (*cybernetic glassmorphism*).

---

## 🌟 Fitur Utama

- **Dynamic Engine Architecture Switching**: Beralih aksen tema dan simulasi potongan kode secara dinamis berdasarkan tiga pilar teknologi utama:
  - 🍎 **Laravel Engine** (Aksen Merah)
  - 🐹 **Go Architecture** (Aksen Biru)
  - 🟨 **JavaScript Pipeline** (Aksen Kuning)
- **Interactive Command Console (Terminal)**: Akses command palette instan dengan menekan tombol pintas `Ctrl + K` untuk menjalankan biner perintah simulasi sistem (seperti `help`, `theme [engine]`, `scroll [section]`, dan `compile`).
- **Cybernetic Glassmorphism & Partikel Interaktif**: Efek visual *glow neon* dan latar belakang partikel rasi dinamis menggunakan HTML5 Canvas yang merespons pergerakan kursor mouse.
- **Optimized Dark Mode**: Penguncian tema berbasis kontras tinggi pada warna gelap (*pure dark mode*) untuk memberikan keterbacaan kode terbaik.
- **Browser Mockup Project Gallery**: Menampilkan screenshot proyek riil di dalam frame visual browser siber yang interaktif dengan micro-animation zoom.

---

## 🛠️ Tech Stack & Dependensi

- **Core Framework**: [React 19.2.6](https://react.dev/)
- **Build Engine**: [Vite 8.0.12](https://vite.dev/)
- **Styling Utility**: [Tailwind CSS v4.3.0](https://tailwindcss.com/)
- **PostCSS Processor**: [@tailwindcss/postcss v4.3.0](https://tailwindcss.com/docs/v4-beta)
- **Icons**: [FontAwesome 6.4.0](https://fontawesome.com/)

---

## 📁 Struktur Direktori

```text
react_portofolio2/
├── react-portfolio/          # Source code aplikasi React
│   ├── public/               # Static assets (gambar proyek, favicon, dll.)
│   ├── src/
│   │   ├── components/       # Komponen modular UI (Header, Hero, Terminal, dll.)
│   │   ├── App.jsx           # Entrypoint utama logika & layout
│   │   ├── index.css         # Styling kustom & inisialisasi Tailwind v4
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md                 # Dokumentasi proyek
```

---

## 🚀 Pengembangan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan portofolio pada komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas direkomendasikan) di komputer Anda.

### Langkah-Langkah

1. **Masuk ke folder proyek React**:
   ```bash
   cd react-portfolio
   ```

2. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan dan dapat diakses melalui browser pada alamat `http://localhost:5173/`.

4. **Lakukan Build Produksi (Opsional)**:
   ```bash
   npm run build
   ```
   Hasil kompilasi produksi siap pakai akan tersimpan di dalam folder `dist/`.

---

## ☁️ Penyebaran Produksi (Deployment)

Proyek ini telah dikonfigurasi optimal untuk dideploy langsung ke **Vercel**:

1. Hubungkan repositori Git Anda ke dashboard Vercel.
2. Pilih proyek Anda di Vercel.
3. Ubah pengaturan **Root Directory** ke: **`react-portfolio`**.
4. Vercel akan secara otomatis mengenali framework Vite dan mengatur *Build Command* (`npm run build`) serta *Output Directory* (`dist`).
5. Klik **Deploy** dan proyek Anda akan aktif dalam hitungan detik.

---

*Dibuat dengan dedikasi penuh oleh [Raihan Hamdani](https://github.com/reyhanhmdani).*
