
import React, { useEffect, useRef } from 'react';
import VibeButton from './VibeButton';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-vibejam-blue opacity-10 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-vibejam-light-blue opacity-10 rounded-full filter blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vibejam-blue opacity-10 rounded-full filter blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-vibejam-blue bg-vibejam-blue bg-opacity-10 rounded-full">
            2025
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Vibe <span className="text-gradient">Coding</span> Game Jam
          </h1>
          
          <p className="text-xl md:text-2xl text-vibejam-dark-gray opacity-80 mb-10 max-w-2xl mx-auto">
            The first game jam for AI vibecoded games.
            Create, innovate, and push the boundaries of game development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-shine bg-vibejam-blue text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-400 transform hover:-translate-y-1"
            >
              Submit Your Entry
            </a>
            
            <VibeButton />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm font-medium mb-2 opacity-60">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
