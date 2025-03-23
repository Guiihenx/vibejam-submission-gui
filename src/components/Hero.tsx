
import React, { useEffect, useRef } from 'react';
import VibeButton from './VibeButton';
import { Star, Sparkles, Send, Code, Terminal } from 'lucide-react';

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
      {/* Decorative elements - rearranged */}
      <div className="absolute inset-0 overflow-hidden">
        {/* World art properly positioned above the 2025 button */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-0 world-rotate">
          <img src="/lovable-uploads/7d4627e8-3edf-4015-98fb-da635d0451ca.png" alt="World doodle" className="w-48 md:w-64 opacity-60" />
        </div>
        
        <div className="absolute top-20 left-10 transform rotate-12">
          <Star size={50} className="text-gray-200" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <Star size={70} className="text-gray-200" />
        </div>
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <Sparkles size={60} className="text-gray-200" />
        </div>

        {/* Jet in right side, without animation */}
        <div className="flying-element bottom-[20%] right-[15%]" style={{ opacity: "0.7" }}>
          <img src="/lovable-uploads/f065e4f2-ee16-4fee-b4ba-b9aa68354fc0.png" alt="Jet doodle" className="max-h-32" />
        </div>
        
        {/* UFO kept in similar position */}
        <div className="flying-element top-[70%] right-[8%] animate-bounce-light">
          <img src="/lovable-uploads/ebb5d507-5505-4561-895b-9d616a67c6e1.png" alt="UFO doodle" />
        </div>
        
        {/* Code snippet illustration with pastel colors and smaller size */}
        <div className="absolute bottom-[15%] left-[8%] z-0 opacity-80 code-snippet-card">
          <div className="bg-white border-2 border-black rounded-lg p-2 transform rotate-[-5deg] shadow-md" style={{ maxWidth: "220px" }}>
            <div className="flex items-center mb-1">
              <Code size={16} className="mr-2" />
              <span className="font-handwritten text-xs">game.js</span>
            </div>
            <pre className="text-left text-xs font-mono bg-gray-100 p-2 rounded">
              <code>
{`function <span class="text-sky-500">vibeCode</span>() {
  const <span class="text-green-500">game</span> = new Game();
  <span class="text-green-500">game</span>.createWorld();
  <span class="text-green-500">game</span>.addPlayer();
  return <span class="text-pink-500">game</span>.<span class="text-indigo-500">start</span>();
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 mb-8 text-lg font-handwritten border-2 border-black rounded-full bg-gray-100 shadow-md code-year-button">
            <Code size={18} className="mr-2 text-sky-500" />
            <span className="font-mono">2025</span>
          </span>
          
          <h1 className="doodle-title-large mb-10 leading-tight tracking-tight">
            <Code size={28} className="inline-block mr-2 mb-1 text-sky-500" /> Vibe <span className="doodle-highlight-blue">Coding</span> Game Jam
          </h1>
          
          <p className="doodle-text mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700">
            The first game jam for AI vibecoded games.
            Create, innovate, and push boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="submit-button-main group"
            >
              Submit Your Entry
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
