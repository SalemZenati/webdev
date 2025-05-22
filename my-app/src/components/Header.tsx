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
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight"
        >
          <span className={`transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'}`}>
            Salem
          </span>
          <span className={`transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-blue-300'}`}>
            Zenati
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X 
              size={24} 
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`} 
            />
          ) : (
            <Menu 
              size={24} 
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`} 
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 bg-white shadow-lg' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;