import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
          >
            TheMealDB Explorer
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg">
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link to="/categories" className="hover:text-yellow-300 transition">Categories</Link>
            <Link to="/random" className="hover:text-yellow-300 transition">Random</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setOpen(false)}>Categories</Link>
          <Link to="/random" onClick={() => setOpen(false)}>Random</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
