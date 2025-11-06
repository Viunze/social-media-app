// server/server.js

// Import library yang diperlukan
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // <-- Tambahkan ini
import postRoutes from './routes/postRoutes.js'; 

const app = express();

// --- Konfigurasi CORS ---
const allowedOrigins = [
  // 1. Tambahkan Domain Vercel Kamu di sini
  'https://social-media-app-kappa-tawny.vercel.app/', 
  // 2. Tambahkan localhost untuk testing lokal
  'http://localhost:5173', 
];

const corsOptions = {
  origin: (origin, callback) => {
    // Izinkan permintaan tanpa origin (seperti aplikasi desktop atau curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Gunakan middleware CORS
app.use(cors(corsOptions)); // <-- Gunakan CORS di sini!
// -----------------------

app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// ... (sisanya, seperti koneksi MongoDB)
