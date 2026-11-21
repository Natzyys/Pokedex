# Pokédex App

Aplikasi Pokedex sederhana menggunakan React + React Router, di-bundle dengan Vite.

## Cara menjalankan di lokal

1. Pastikan sudah terinstall **Node.js** (versi 18 atau lebih baru).
2. Install semua dependency:

   ```bash
   npm install
   ```

3. Jalankan server development:

   ```bash
   npm run dev
   ```

4. Buka browser ke alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Struktur folder

```
pokedex-app/
├── index.html          # HTML utama, entry point Vite
├── package.json        # Daftar dependency & script
├── vite.config.js       # Konfigurasi Vite + plugin React
└── src/
    ├── index.jsx        # Entry point React (render <App />)
    ├── App.jsx          # Routing & layout utama (navbar)
    ├── App.css          # Style global
    ├── Home.jsx         # Halaman Home
    ├── Pokedex.jsx      # Halaman daftar semua Pokémon
    ├── Search.jsx       # Halaman pencarian Pokémon
    ├── Search.css
    ├── Pokemon.jsx      # Halaman detail satu Pokémon
    ├── PokemonCard.jsx  # Komponen kartu Pokémon (dipakai Pokedex & Search)
    └── PokemonCard.css
```

## Build untuk production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`.
