// client/src/components/PostCard.jsx
import React from 'react';

// Asumsi ada fungsi untuk mengupdate like ke backend
const handleLike = (postId) => {
    console.log(`Liking post: ${postId}`);
    // Nanti akan ada fetch PUT request ke backend di sini
};

const PostCard = ({ post }) => (
    <div className="p-5 bg-gray-800 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.01] hover:shadow-yellow-400/30 border border-gray-700">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 mr-3">
                    {post.username[0].toUpperCase()}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-yellow-400 hover:text-yellow-300 cursor-pointer">@{post.username}</h3>
                    <small className="text-gray-500 text-xs">{new Date(post.createdAt).toLocaleDateString()} - {new Date(post.createdAt).toLocaleTimeString()}</small>
                </div>
            </div>
            {/* Opsi Postingan (misal ikon tiga titik) */}
            <button className="text-gray-500 hover:text-white transition duration-150">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
            </button>
        </div>
        
        <p className="text-gray-300 leading-snug mb-4 border-l-2 border-yellow-500 pl-3 italic">{post.content}</p>
        
        {/* Footer Interaksi */}
        <div className="flex space-x-6 border-t border-gray-700 pt-3 mt-3">
            <button 
                onClick={() => handleLike(post._id)}
                className="flex items-center text-sm text-gray-400 hover:text-yellow-500 transition duration-200"
            >
                {/* Ikon Like */}
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                Like ({post.likes ? post.likes.length : 0})
            </button>
            <button className="flex items-center text-sm text-gray-400 hover:text-white transition duration-200">
                {/* Ikon Komentar */}
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.136C2.366 12.601 2 11.309 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" /></svg>
                Comment (0) 
            </button>
        </div>
    </div>
);

export default PostCard;
