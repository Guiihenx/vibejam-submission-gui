
import React, { useEffect, useRef } from 'react';
import VibeButton from './VibeButton';
import { Star, Sparkles, Zap } from 'lucide-react';

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
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 transform rotate-12">
          <Star size={50} className="text-gray-200" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <Star size={70} className="text-gray-200" />
        </div>
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <Sparkles size={60} className="text-gray-200" />
        </div>
        
        {/* Earth in the background */}
        <div className="absolute opacity-20 w-full h-full flex items-center justify-center pointer-events-none">
          <img 
            src="/lovable-uploads/dff31447-dfa0-4a8d-993b-10b447722f5d.png" 
            alt="World Map" 
            className="w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] animate-spin-slow"
          />
        </div>

        {/* Flying illustrations */}
        <div className="flying-element top-[20%] left-[5%] animate-float-element">
          <img src="/lovable-uploads/f065e4f2-ee16-4fee-b4ba-b9aa68354fc0.png" alt="Jet doodle" />
        </div>
        
        <div className="flying-element top-[70%] right-[8%] animate-bounce-light">
          <img src="/lovable-uploads/ebb5d507-5505-4561-895b-9d616a67c6e1.png" alt="UFO doodle" />
        </div>
        
        <div className="flying-element bottom-[25%] left-[15%] animate-bounce-light" style={{ animationDelay: "2s" }}>
          <img src="/lovable-uploads/dcc16345-8a45-428b-9e44-9cca47208faa.png" alt="Balloon doodle" />
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2 mb-8 text-xl font-handwritten border-2 border-black rounded-full bg-white">
            2025
          </span>
          
          <h1 className="doodle-title-large mb-10 leading-tight tracking-tight">
            Vibe <span className="doodle-highlight">Coding</span> Game Jam
          </h1>
          
          <p className="doodle-text mb-12 max-w-3xl mx-auto leading-relaxed">
            The first game jam for AI vibecoded games.
            Create, innovate, and push boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="doodle-button text-2xl group"
            >
              Submit Your Entry
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <VibeButton />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="font-handwritten text-xl mb-2 opacity-70">Scroll to explore</span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn-arrow">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
