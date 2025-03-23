
import React, { useEffect, useRef } from 'react';
import { Terminal, Gamepad2, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-vibejam-gray opacity-50"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">#vibejam</span></h2>
          <p className="text-lg text-vibejam-dark-gray opacity-80 max-w-2xl mx-auto">
            The intersection of artificial intelligence and creative coding to build the next generation of games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center transform transition-all duration-400 hover:-translate-y-2">
            <div className="w-14 h-14 bg-vibejam-blue bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Terminal className="text-vibejam-blue w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
            <p className="text-vibejam-dark-gray opacity-70">
              Leverage artificial intelligence to enhance your game development process and create unique player experiences.
            </p>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center transform transition-all duration-400 hover:-translate-y-2">
            <div className="w-14 h-14 bg-vibejam-blue bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Gamepad2 className="text-vibejam-blue w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vibecoded</h3>
            <p className="text-vibejam-dark-gray opacity-70">
              Create games that resonate with players on an emotional level through innovative coding techniques and aesthetics.
            </p>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center transform transition-all duration-400 hover:-translate-y-2">
            <div className="w-14 h-14 bg-vibejam-blue bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-vibejam-blue w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovative</h3>
            <p className="text-vibejam-dark-gray opacity-70">
              Push the boundaries of what's possible in game development by combining cutting-edge technologies with creative vision.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-vibejam-dark-gray bg-opacity-5 font-medium text-vibejam-dark-gray mb-3">
            #vibejam
          </div>
          <p className="text-xl max-w-2xl mx-auto">
            Join us for the first-ever game jam dedicated to AI-enhanced game development. Connect with like-minded creators, learn from industry experts, and showcase your innovative games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
