import React, { useState, useEffect } from 'react';
import StaticLogo from './StaticLogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'about', label: 'About' },
  ];

  return (
    <>
      <header 
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-slideDown ${scrolled || isMenuOpen ? 'header-glass' : 'bg-transparent'}`}
          style={{ animationDelay: '0.2s' }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div data-interactive className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <StaticLogo />
            <span className="ml-3 font-serif text-xl text-white tracking-wider">KREATION</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.id} onClick={() => scrollToSection(link.id)} className="text-neutral-300 nav-link-hover transition-colors cursor-pointer" data-interactive>{link.label}</a>
            ))}
            <a href="mailto:hello@kreation.design" className="text-black px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105" data-interactive style={{ backgroundColor: 'var(--accent)' }}>Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 flex flex-col justify-around w-6 h-6 bg-transparent border-none p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            data-interactive
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ backgroundColor: 'rgba(17, 17, 17, 0.9)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav 
          className="flex flex-col items-center justify-center h-full text-center"
          onClick={e => e.stopPropagation()} // Prevent closing when clicking inside nav
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.id} 
              onClick={() => scrollToSection(link.id)} 
              className="text-3xl font-serif text-white my-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              data-interactive
              style={{
                animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${0.2 + index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="mailto:hello@kreation.design" 
            className="text-black mt-8 px-8 py-4 rounded-full font-medium transition-transform duration-300 transform hover:scale-105" 
            data-interactive 
            style={{ 
              backgroundColor: 'var(--accent)',
              animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${0.2 + navLinks.length * 0.1}s forwards` : 'none',
              opacity: 0
            }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;