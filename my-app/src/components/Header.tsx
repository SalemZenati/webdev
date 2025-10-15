import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight flex items-center gap-1"
        >
          <span
            className={`transition-colors duration-300 ${
              scrolled ? "text-blue-700" : "text-white"
            }`}
          >
            Spring Ridge
          </span>
          <span
            className={`transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-blue-300"
            }`}
          >
            Web Designs
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden relative z-50 p-2 rounded-lg transition-all duration-300 ${
            isMenuOpen
              ? 'bg-blue-600 shadow-lg'
              : scrolled
                ? 'hover:bg-gray-100'
                : 'hover:bg-white/10'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X
              size={24}
              className="text-white transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu
              size={24}
              className={`transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[70px] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-blue-800/95 backdrop-blur-xl shadow-2xl border-t border-white/20">
          <nav className="container mx-auto px-4 py-6 flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-white font-medium py-4 px-4 -mx-4 rounded-lg hover:bg-white/20 transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                  isMenuOpen ? 'animate-slide-in' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {link.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;