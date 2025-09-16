import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[8%] py-4 sm:py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.img
            src="/Logo.jpg"
            alt="Logo"
            className="h-10 w-auto"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          <span className="text-xl sm:text-2xl font-bold text-[#292F36]">Interno</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 lg:gap-8 text-base font-medium text-[#292F36]">
            <li><Link to="/" className="hover:text-[#22262b] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#22262b] transition">Services</Link></li>
            <li><Link to="/product" className="hover:text-[#22262b] transition">Product</Link></li>
            <li><Link to="/gallery" className="hover:text-[#22262b] transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#22262b] transition">Contact</Link></li>
            <Link to="/about" className="hover:text-[#22262b] transition">About</Link>
          </ul>
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-[#292F36] text-2xl p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
        {/* Search Icon (desktop only) */}
        <button className="hidden md:block text-[#292F36] text-xl hover:text-[#22262b] transition ml-4">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-4 py-4 px-8 text-base font-medium text-[#292F36]">
            <li><Link to="/" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/product" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Product</Link></li>
            <li><Link to="/gallery" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default Header;