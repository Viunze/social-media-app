// client/src/components/PostForm.jsx (Hanya kode JSX, logika sama seperti sebelumnya)

const PostForm = ({ newPostContent, setNewPostContent, handlePostSubmit }) => (
    <form 
        onSubmit={handlePostSubmit} 
        className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700"
    >
        <textarea
            placeholder="Bagikan pemikiran, kode, atau berita terbaru..."
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            rows="3"
            maxLength="500"
            className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-yellow-500 focus:border-yellow-500 outline-none resize-none"
        />
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{newPostContent.length}/500</span>
            <button 
                type="submit"
                disabled={newPostContent.length === 0}
                className={`px-8 py-2 font-bold rounded-xl transition duration-200 ${
                    newPostContent.length > 0 
                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-md' 
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
                Post
            </button>
        </div>
    </form>
);
// ... export
