import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Media', href: '#media' },
  { label: 'Partners', href: '#partners' },
  { label: 'Get Involved', href: '#involved' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-royal shadow-md py-3' : 'bg-brand-royal py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="font-heading font-bold text-2xl text-white tracking-tight hover:text-brand-cyan transition-colors">
            SLRiseHub
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-medium hover:text-brand-cyan transition-colors text-xs uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <div className="h-4 w-px bg-blue-700/50 mx-2"></div>
          <a 
            href="https://www.facebook.com/profile.php?id=100068483297902" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-brand-cyan transition-colors"
            aria-label="Visit us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#contact" className="ml-4 bg-brand-cyan text-brand-dark px-4 py-2 rounded-full text-xs font-bold hover:bg-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white focus:outline-none p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-brand-royal shadow-xl border-t border-blue-800 transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-medium hover:text-brand-cyan block py-2 border-b border-blue-800/50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-4">
             <a 
              href="https://www.facebook.com/profile.php?id=100068483297902" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-brand-cyan flex items-center py-2"
              onClick={() => setIsOpen(false)}
            >
              <Facebook className="w-5 h-5 mr-3" /> Connect on Facebook
            </a>
            <a 
              href="#contact"
              className="text-brand-dark bg-brand-cyan font-bold text-center py-3 rounded-lg hover:bg-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;