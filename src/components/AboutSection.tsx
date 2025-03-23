
import React, { useEffect, useRef } from 'react';
import { PenTool, Gamepad2, Sparkles } from 'lucide-react';

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
      <div className="absolute inset-0 -z-10 bg-white"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="doodle-title-large mb-4">About <span className="doodle-highlight">#vibejam</span></h2>
          <p className="font-handwritten text-xl max-w-2xl mx-auto">
            The intersection of artificial intelligence and creative coding to build the next generation of games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white">
              <PenTool className="w-8 h-8" />
            </div>
            <h3 className="doodle-title-medium mb-3">AI-Powered</h3>
            <p className="font-handwritten text-lg">
              Leverage artificial intelligence to enhance your game development process and create unique player experiences.
            </p>
          </div>
          
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h3 className="doodle-title-medium mb-3">Vibecoded</h3>
            <p className="font-handwritten text-lg">
              Create games that resonate with players on an emotional level through innovative coding techniques and aesthetics.
            </p>
          </div>
          
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="doodle-title-medium mb-3">Innovative</h3>
            <p className="font-handwritten text-lg">
              Push the boundaries of what's possible in game development by combining cutting-edge technologies with creative vision.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block px-5 py-2 rounded-full border-2 border-black font-handwritten text-xl mb-3">
            #vibejam
          </div>
          <p className="font-handwritten text-xl max-w-2xl mx-auto">
            Join us for the first-ever game jam dedicated to AI-enhanced game development. Connect with like-minded creators, learn from industry experts, and showcase your innovative games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
