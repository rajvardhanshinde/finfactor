import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            TheMealDB Explorer 🍽️
          </h2>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/categories" className="hover:text-white transition">Categories</a>
            <a href="/random" className="hover:text-white transition">Random Meal</a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} TheMealDB Explorer. Made with ❤️ using React + TailwindCSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
