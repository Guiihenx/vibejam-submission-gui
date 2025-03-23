
import React, { useEffect, useRef } from 'react';
import VibeButton from './VibeButton';
import { Star, Sparkles } from 'lucide-react';

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
      {/* Doodle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 transform rotate-12">
          <Star size={40} className="text-gray-200" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <Star size={60} className="text-gray-200" />
        </div>
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <Sparkles size={50} className="text-gray-200" />
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-handwritten border-2 border-black rounded-full bg-white">
            2025
          </span>
          
          <h1 className="doodle-title mb-6 leading-tight tracking-tight">
            Vibe <span className="doodle-highlight">Coding</span> Game Jam
          </h1>
          
          <p className="font-handwritten text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            The first game jam for AI vibecoded games.
            Create, innovate, and push boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="doodle-button text-xl"
            >
              Submit Your Entry
            </a>
            
            <VibeButton />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="font-handwritten text-sm mb-2 opacity-70">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn-arrow">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
