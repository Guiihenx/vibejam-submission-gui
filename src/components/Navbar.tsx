
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled 
          ? "bg-white bg-opacity-70 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-gradient">#vibejam</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-vibejam-dark-gray hover:text-vibejam-blue transition-colors duration-300">About</a>
          <a href="#jury" className="text-vibejam-dark-gray hover:text-vibejam-blue transition-colors duration-300">Jury</a>
          <a href="#sponsors" className="text-vibejam-dark-gray hover:text-vibejam-blue transition-colors duration-300">Sponsors</a>
          <a 
            href="http://jam.pieter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-shine px-4 py-2 bg-vibejam-blue text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Submit Entry
          </a>
        </nav>
        
        <button className="md:hidden text-vibejam-dark-gray">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
