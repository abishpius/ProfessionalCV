import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const Header = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg py-2' : 'shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-sans font-bold text-primary">
          <span className="font-code">{"<"}</span>Abish Pius<span className="font-code">{">"}</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-neutral-800 hover:text-primary transition-colors font-medium">Home</a></li>
            <li><a href="#about" className="text-neutral-800 hover:text-primary transition-colors font-medium">About</a></li>
            <li><a href="#skills" className="text-neutral-800 hover:text-primary transition-colors font-medium">Skills</a></li>
            <li><a href="#experience" className="text-neutral-800 hover:text-primary transition-colors font-medium">Experience</a></li>
            <li><a href="#projects" className="text-neutral-800 hover:text-primary transition-colors font-medium">Projects</a></li>
            <li><a href="#education" className="text-neutral-800 hover:text-primary transition-colors font-medium">Education</a></li>
            <li><a href="#contact" className="text-neutral-800 hover:text-primary transition-colors font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <ul className="py-2">
          <li><a href="#home" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">About</a></li>
          <li><a href="#skills" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Skills</a></li>
          <li><a href="#experience" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Experience</a></li>
          <li><a href="#projects" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Projects</a></li>
          <li><a href="#education" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Education</a></li>
          <li><a href="#contact" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
