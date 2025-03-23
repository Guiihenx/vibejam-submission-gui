
import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const SponsorsSection: React.FC = () => {
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
    <section id="sponsors" className="py-16 px-6 relative overflow-hidden bg-white">
      {/* Decorative ship illustration */}
      <div className="absolute bottom-0 right-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/8553bec3-ce97-4fba-9542-9b5285e5a459.png" 
          alt="Ship doodle" 
          className="w-64 md:w-80"
        />
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-12">
          <h2 className="doodle-title-large mb-6">Powered by <span className="doodle-highlight">Amazing</span> Partners</h2>
          <p className="doodle-text mb-8 max-w-2xl mx-auto">
            Join forces with industry leaders pushing the boundaries of AI and game development
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          <div className="sponsor-card transform transition-all duration-500 hover:rotate-[-1deg]">
            <div className="relative w-52 h-52 mb-6 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/lovable-uploads/5aaf8198-22eb-40ad-83e4-16ede5847963.png" 
                alt="Bolt logo" 
                className="w-44 object-contain transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            
            <h3 className="doodle-title-medium mb-3">Bolt</h3>
            <p className="font-handwritten text-2xl text-vibejam-blue mb-4 squiggle-underline">@boltdotnew</p>
            <p className="doodle-text">
              Powering the future of development
            </p>
          </div>
          
          <div className="sponsor-divider">
            <Zap className="w-8 h-8 text-black animate-pulse" />
          </div>
          
          <div className="sponsor-card transform transition-all duration-500 hover:rotate-[1deg]">
            <div className="relative w-52 h-52 mb-6 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/lovable-uploads/83ec83f8-5813-42dc-a04f-10f85538b807.png" 
                alt="Code Rabbit logo" 
                className="w-44 h-44 object-contain transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            
            <h3 className="doodle-title-medium mb-3">Code Rabbit</h3>
            <p className="font-handwritten text-2xl text-vibejam-blue mb-4 squiggle-underline">@coderabbitai</p>
            <p className="doodle-text">
              AI-powered development assistant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
