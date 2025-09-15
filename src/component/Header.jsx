





import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[8%] py-4 sm:py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl sm:text-2xl font-bold text-[#292F36]">Interno</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 lg:gap-8 text-base font-medium text-[#292F36]">
            <li><a href="/" className="hover:text-[#22262b] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[#22262b] transition">Services</a></li>
            <li><a href="/project" className="hover:text-[#22262b] transition">Project</a></li>
            <li><a href="/blog" className="hover:text-[#22262b] transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-[#22262b] transition">Contact</a></li>
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
            <li><a href="/" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/services" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="/project" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="/blog" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="/contact" className="hover:text-[#22262b] transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default Header;