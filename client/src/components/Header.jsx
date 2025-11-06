// client/src/components/Header.jsx
import React from 'react';

const Header = () => (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-serif text-yellow-400 tracking-wide font-bold">Lyntrix</h1>
            
            {/* Navigasi Ikon */}
            <nav className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-yellow-400 transition duration-150">
                    {/* Ikon Home */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-10v10a1 1 0 001 1h3M12 20h2m-2 0h-2M4 14h16"/></svg>
                </button>
                <button className="text-gray-400 hover:text-yellow-400 transition duration-150">
                    {/* Ikon Notifikasi */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.16 6 8.32 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 00-6 0"/></svg>
                </button>
                {/* Avatar/Profile Button */}
                <button className="w-8 h-8 rounded-full bg-yellow-500 text-gray-900 font-semibold text-sm">
                    CD
                </button>
            </nav>
        </div>
    </header>
);

export default Header;
