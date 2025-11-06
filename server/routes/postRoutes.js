// server/routes/postRoutes.js

const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Endpoint untuk membuat postingan baru (CREATE)
router.post('/', async (req, res) => {
  try {
    const { username, content } = req.body;
    const newPost = new Post({ username, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint untuk mendapatkan semua postingan (READ)
router.get('/', async (req, res) => {
  try {
    // Sort by newest first
    const posts = await Post.find().sort({ createdAt: -1 }); 
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
