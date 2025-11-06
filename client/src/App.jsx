// client/src/App.jsx
import { useState, useEffect } from 'react';
import './index.css'; // Styling kamu

// Ganti dengan URL API backend kamu setelah di-deploy (misalnya ke Render)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const username = 'DevCello'; // Ganti dengan sistem login asli

  // 1. Ambil Postingan
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Gagal mengambil postingan:', error);
    }
  };

  // 2. Buat Postingan Baru
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, content: newPostContent }),
      });
      setNewPostContent('');
      fetchPosts(); // Refresh list posts
    } catch (error) {
      console.error('Gagal membuat postingan:', error);
    }
  };

  return (
    <div className="container">
      <h1>CelloFinda Social Feed</h1>
      
      {/* Input Form */}
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          placeholder="Apa yang sedang kamu pikirkan?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          rows="3"
        />
        <button type="submit">Post</button>
      </form>
      
      {/* Postingan */}
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.username}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
