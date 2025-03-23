
import React, { useEffect, useRef } from 'react';
import { PenLine } from 'lucide-react';

const SubmitSection: React.FC = () => {
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
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="doodle-card bg-opacity-100 max-w-4xl mx-auto border-4 border-black">
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-black flex items-center justify-center mb-6 bg-white">
              <PenLine className="w-8 h-8" />
            </div>
            
            <h2 className="doodle-title mb-6">Ready to Join <span className="doodle-highlight">#vibejam</span>?</h2>
            
            <p className="font-handwritten text-lg mb-10 max-w-xl mx-auto">
              Submit your AI-powered game and showcase your innovative approach to game development.
            </p>
            
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="doodle-button text-xl"
            >
              Submit Your Entry Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitSection;
