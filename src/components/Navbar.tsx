
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Pencil, Send, Code } from 'lucide-react';

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
          ? "bg-white bg-opacity-95 border-b-2 border-black" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-display text-xl md:text-2xl flex items-center">
          <Code className="w-5 h-5 mr-2 text-sky-500" />
          <span className="doodle-highlight">#vibejam</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-handwritten text-lg hover:underline transition-all duration-300">About</a>
          <a href="#jury" className="font-handwritten text-lg hover:underline transition-all duration-300">Jury</a>
          <a href="#sponsors" className="font-handwritten text-lg hover:underline transition-all duration-300">Sponsors</a>
          <a 
            href="http://jam.pieter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="submit-button-nav group"
          >
            <span>Submit Entry</span>
            <Send className="w-4 h-4 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
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
