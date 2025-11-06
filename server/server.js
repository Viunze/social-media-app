// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Penting untuk komunikasi Frontend-Backend
const postRoutes = require('./routes/postRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Izinkan semua domain mengakses (Bisa diatur lebih spesifik di produksi)
app.use(express.json()); // Parser untuk body JSON

// Routes
app.use('/api/posts', postRoutes);

// Koneksi ke MongoDB
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('🎉 Berhasil terhubung ke MongoDB Atlas!');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Koneksi MongoDB Gagal:', err.message);
    // Keluar dari aplikasi jika gagal koneksi
    process.exit(1); 
  });
