import { useState } from "react";
import { FaRobot, FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black bg-opacity-80 border-b border-white/10 transition-all duration-300">
      <nav className="mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white hover:text-green-500 transition-colors">
          Josean Ralat
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white hover:text-green-500 transition-colors text-sm font-medium">
              {link.name}
            </a>
          ))}
          <a href="#chatbot" className="text-white hover:text-green-500 transition-colors">
            <FaRobot size={22} />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <a href="#chatbot" className="text-white">
            <FaRobot size={22} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-500 text-lg font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;