




function Header() {
  return (
    <>
      <>
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="flex items-center justify-between px-[8%] py-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* Logo for the site - change the file in public/Logo.jpg if you want a new one */}
              <img src="/Logo.jpg" alt="Logo" className="h-15 w-auto" />
              <span className="text-2xl font-bold text-[#292F36]">Interno</span> {/* Site name, you can change this too */}
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex gap-8 text-base font-medium text-[#292F36]">
                <li><a href="/" className="hover:text-[#22262b] transition">Home</a></li>

                <li><a href="/services" className="hover:text-[#22262b] transition">Services</a></li>
                <li><a href="/project" className="hover:text-[#22262b] transition">Project</a></li>
                <li><a href="/blog" className="hover:text-[#22262b] transition">Blog</a></li>
                <li><a href="/contact" className="hover:text-[#22262b] transition">Contact</a></li>
              </ul>
            </nav>
            {/* Search Icon */}
            <button className="text-[#292F36] text-xl hover:text-[#22262b] transition">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </header>
      </>


    </>
  )
}
export default Header 