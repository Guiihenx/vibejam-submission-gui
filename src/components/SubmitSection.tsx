
import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-vibejam-white to-vibejam-gray opacity-50"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="glass-card p-10 md:p-16 bg-opacity-30 backdrop-blur-lg border border-white border-opacity-40 rounded-3xl relative overflow-hidden max-w-4xl mx-auto">
          
          {/* Background elements */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-vibejam-blue opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-vibejam-light-blue opacity-10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto bg-vibejam-blue bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-vibejam-blue w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join <span className="text-gradient">#vibejam</span>?</h2>
            
            <p className="text-lg mb-10 max-w-xl mx-auto text-vibejam-dark-gray opacity-80">
              Submit your AI-powered game and showcase your innovative approach to game development.
            </p>
            
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-shine inline-block bg-vibejam-blue text-white font-medium px-10 py-4 rounded-full hover:shadow-lg transition-all duration-400 transform hover:-translate-y-1"
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
