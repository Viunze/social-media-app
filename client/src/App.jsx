import { useState, useEffect } from 'react';
import React from 'react';

// GANTI URL ini dengan URL API Backend kamu yang sudah di-DEPLOY (misalnya ke Render/Railway).
// Contoh URL yang benar: https://lyntrix-api-xxxx.onrender.com/api/posts
const API_URL = 'social-media-app-production-50ca.up.railway.app'; 

// --- KOMPONEN CHILD: HEADER ---
// Menampilkan logo dan navigasi utama
const Header = () => (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-serif text-yellow-400 tracking-wide font-bold">Lyntrix</h1>
            
            {/* Navigasi Ikon (Modern Look) */}
            <nav className="flex items-center space-x-6">
                <button title="Home" className="text-gray-400 hover:text-yellow-400 transition duration-150 p-1">
                    {/* Ikon Home */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-10v10a1 1 0 001 1h3M12 20h2m-2 0h-2M4 14h16"/></svg>
                </button>
                <button title="Notifications" className="text-gray-400 hover:text-yellow-400 transition duration-150 p-1 relative">
                    {/* Ikon Notifikasi dengan badge (simulasi) */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.16 6 8.32 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 00-6 0"/></svg>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-gray-900 bg-red-500"></span>
                </button>
                {/* Avatar/Profile Button */}
                <button title="Profile" className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center font-semibold text-gray-900 text-sm shadow-md hover:bg-yellow-400 transition duration-150">
                    CD
                </button>
            </nav>
        </div>
    </header>
);

// --- KOMPONEN CHILD: POST FORM ---
// Form untuk membuat postingan baru
const PostForm = ({ newPostContent, setNewPostContent, handlePostSubmit }) => (
    <form 
        onSubmit={handlePostSubmit} 
        className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 transition duration-300 hover:shadow-yellow-500/10"
    >
        <textarea
            placeholder="Bagikan pemikiran, kode, atau berita terbaru... (Maks 500 karakter)"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            rows="3"
            maxLength="500"
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-xl border border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 outline-none resize-none placeholder-gray-500 transition duration-150"
        />
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Karakter: {newPostContent.length}/500</span>
            <button 
                type="submit"
                disabled={newPostContent.length === 0}
                className={`px-8 py-2 font-bold rounded-xl transition duration-200 ${
                    newPostContent.length > 0 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-lg transform hover:scale-105' 
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
                Post
            </button>
        </div>
    </form>
);

// --- KOMPONEN CHILD: POST CARD ---
// Menampilkan satu postingan
const PostCard = ({ post }) => {
    // Fungsi dummy untuk like - perlu dihubungkan ke backend (PUT request)
    const handleLike = () => {
        console.log(`Liking post: ${post._id}`);
        // Logika update state lokal atau panggil API di sini
    };

    return (
        <div className="p-5 bg-gray-800 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.005] hover:shadow-yellow-400/30 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    {/* Avatar Inisial */}
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 mr-3 text-lg">
                        {post.username[0].toUpperCase()}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-yellow-400 hover:text-yellow-300 cursor-pointer">@{post.username}</h3>
                        <small className="text-gray-500 text-xs">
                            {new Date(post.createdAt).toLocaleDateString('id-ID')}
                            {', ' + new Date(post.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                        </small>
                    </div>
                </div>
                {/* Opsi Postingan */}
                <button title="More Options" className="text-gray-500 hover:text-white transition duration-150 p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
                </button>
            </div>
            
            {/* Konten Postingan */}
            <p className="text-gray-300 leading-relaxed mb-4 border-l-2 border-yellow-500 pl-3 pt-1 italic">{post.content}</p>
            
            {/* Footer Interaksi */}
            <div className="flex space-x-6 border-t border-gray-700 pt-3 mt-3">
                <button 
                    onClick={handleLike}
                    className="flex items-center text-sm text-gray-400 hover:text-yellow-500 transition duration-200"
                >
                    {/* Ikon Like */}
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                    Suka ({post.likes ? post.likes.length : 0})
                </button>
                <button className="flex items-center text-sm text-gray-400 hover:text-white transition duration-200">
                    {/* Ikon Komentar */}
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.136C2.366 12.601 2 11.309 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" /></svg>
                    Komentar (0) 
                </button>
            </div>
        </div>
    );
};

// --- KOMPONEN UTAMA: APP ---
const App = () => {
    // State untuk data dan UI
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const username = 'DevCello'; // Ganti dengan logika autentikasi di masa depan

    // Effect untuk mengambil data saat komponen dimuat
    useEffect(() => {
        fetchPosts();
    }, []);

    // Fungsi untuk mengambil data postingan dari API
    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                // Tangani respons HTTP non-200
                const errorBody = await response.text();
                throw new Error(`Gagal mengambil data: ${response.statusText}. Response body: ${errorBody}`);
            }
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            console.error('FETCH ERROR:', err);
            // Pesan error ke user tetap ringkas
            setError('Gagal memuat feed. Pastikan API Backend sudah berjalan dan URL-nya benar. (Cek CORS)');
        } finally {
            setLoading(false);
        }
    };

    // Fungsi untuk mengirim postingan baru ke API
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, content: newPostContent }),
            });

            if (!response.ok) {
                // Tangani respons HTTP non-200
                const errorBody = await response.text();
                throw new Error(`Gagal membuat postingan: ${response.statusText}. Response body: ${errorBody}`);
            }

            setNewPostContent('');
            fetchPosts(); // Refresh list posts setelah berhasil
        } catch (err) {
            console.error('POST ERROR:', err);
            setError('Gagal mengirim postingan. Cek koneksi API.');
            setLoading(false);
        }
    };

    return (
        // Menggunakan dark theme global
        <div className="min-h-screen bg-gray-900 font-sans">
            <Header /> 
            
            {/* Main Content Area */}
            <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8"> 
                
                {/* Post Form */}
                <PostForm 
                    newPostContent={newPostContent}
                    setNewPostContent={setNewPostContent}
                    handlePostSubmit={handlePostSubmit}
                />

                {/* Status Loading/Error/Success */}
                {loading && (
                    <div className="text-center mt-8">
                        {/* Ikon loading berputar */}
                        <svg className="animate-spin h-8 w-8 text-yellow-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-gray-400 mt-2">Memuat postingan...</p>
                    </div>
                )}
                
                {error && (
                    <div className="max-w-3xl mx-auto mt-8 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-xl shadow-lg">
                        <p className="font-bold mb-1">Error Koneksi</p>
                        <p>{error}</p>
                    </div>
                )}

                {/* Postingan Feed */}
                <div className="max-w-3xl mx-auto mt-10 space-y-6">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                    {!loading && posts.length === 0 && !error && (
                        <p className="text-center text-gray-500 pt-10">Belum ada postingan. Ayo buat postingan pertamamu!</p>
                    )}
                </div>
            </main>
            
            {/* Footer Premium */}
            <footer className="text-center p-4 text-gray-600 text-sm border-t border-gray-800">
                Lyntrix Social | Powered by MERN Stack
            </footer>
        </div>
    );
}

export default App;
