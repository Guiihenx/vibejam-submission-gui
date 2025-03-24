
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { CodeSquare, Joystick, Sparkles, Code, GamepadIcon, Terminal, PuzzleIcon, Cpu, Braces } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
        <div className="font-terminal text-xl md:text-2xl flex items-center group">
          <Joystick className="w-6 h-6 mr-2 text-indigo-600 group-hover:text-pink-500 transition-colors duration-300 animate-pulse" />
          <div className="relative">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">#vibejam</span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-terminal text-lg hover:underline transition-all duration-300 hover:text-indigo-600 flex items-center">
            <Code className="w-4 h-4 mr-1.5 text-indigo-500" />
            <span>About</span>
          </a>
          <a href="#jury" className="font-terminal text-lg hover:underline transition-all duration-300 hover:text-indigo-600 flex items-center">
            <Cpu className="w-4 h-4 mr-1.5 text-violet-500" />
            <span>Jury</span>
          </a>
          <a href="#sponsors" className="font-terminal text-lg hover:underline transition-all duration-300 hover:text-indigo-600 flex items-center">
            <Braces className="w-4 h-4 mr-1.5 text-green-500" />
            <span>Sponsors</span>
          </a>
          <Button 
            asChild
            variant="submit"
            size="sm"
            className="px-4 py-2 text-sm font-terminal"
          >
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GamepadIcon className="w-4 h-4 mr-1.5" />
              <span>Submit Entry</span>
              <Sparkles className="w-4 h-4 ml-1.5" />
            </a>
          </Button>
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
