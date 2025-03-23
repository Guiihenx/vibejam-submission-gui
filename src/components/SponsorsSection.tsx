
import React, { useEffect, useRef } from 'react';

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
    <section id="sponsors" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-vibejam-gray"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="doodle-title mb-4">Our <span className="doodle-highlight">Sponsors</span></h2>
          <p className="font-handwritten text-lg max-w-2xl mx-auto">
            Meet the organizations making this game jam possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <div className="w-40 h-40 mb-6 overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/5aaf8198-22eb-40ad-83e4-16ede5847963.png" 
                alt="Bolt logo" 
                className="w-32 object-contain"
              />
            </div>
            
            <h3 className="doodle-title text-xl mb-2">Bolt</h3>
            <p className="font-handwritten text-vibejam-blue mb-4">@boltdotnew</p>
            <p className="font-handwritten">
              Powering the future of development
            </p>
          </div>
          
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <div className="w-40 h-40 mb-6 overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/0351d2a6-1c7a-4d6d-b288-f1c9034e4969.png" 
                alt="Code Rabbit logo" 
                className="w-32 object-contain"
              />
            </div>
            
            <h3 className="doodle-title text-xl mb-2">Code Rabbit</h3>
            <p className="font-handwritten text-vibejam-blue mb-4">@coderabbitai</p>
            <p className="font-handwritten">
              AI-powered development assistant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
