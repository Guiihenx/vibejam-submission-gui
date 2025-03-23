
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
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-12">
          <h2 className="doodle-title-large mb-4">Powered by <span className="doodle-highlight">Amazing</span> Partners</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          <div className="sponsor-card">
            <div className="w-48 h-48 mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/5aaf8198-22eb-40ad-83e4-16ede5847963.png" 
                alt="Bolt logo" 
                className="w-40 object-contain"
              />
            </div>
            
            <h3 className="doodle-title-medium mb-2">Bolt</h3>
            <p className="font-handwritten text-xl text-vibejam-blue mb-4">@boltdotnew</p>
            <p className="font-handwritten text-lg">
              Powering the future of development
            </p>
          </div>
          
          <div className="sponsor-divider">
            <Zap className="w-8 h-8 text-black" />
          </div>
          
          <div className="sponsor-card">
            <div className="w-48 h-48 mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/83ec83f8-5813-42dc-a04f-10f85538b807.png" 
                alt="Code Rabbit logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
            
            <h3 className="doodle-title-medium mb-2">Code Rabbit</h3>
            <p className="font-handwritten text-xl text-vibejam-blue mb-4">@coderabbitai</p>
            <p className="font-handwritten text-lg">
              AI-powered development assistant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
