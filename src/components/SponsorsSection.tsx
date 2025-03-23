
import React, { useEffect, useRef } from 'react';

type Sponsor = {
  name: string;
  handle: string;
  description: string;
};

const sponsors: Sponsor[] = [
  {
    name: 'Bolt',
    handle: '@boltdotnew',
    description: 'Powering the future of development'
  },
  {
    name: 'Code Rabbit',
    handle: '@coderabbitai',
    description: 'AI-powered development assistant'
  }
];

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
    <section id="sponsors" className="py-24 px-6 relative overflow-hidden bg-vibejam-gray bg-opacity-30">
      <div className="absolute inset-0 -z-10"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Sponsors</span></h2>
          <p className="text-lg text-vibejam-dark-gray opacity-80 max-w-2xl mx-auto">
            Meet the organizations making this game jam possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.handle}
              className="glass-card p-8 flex flex-col items-center text-center transform transition-all duration-400 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-2xl font-bold text-vibejam-blue">
                  {sponsor.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
              <p className="text-vibejam-blue mb-4">{sponsor.handle}</p>
              <p className="text-vibejam-dark-gray opacity-70">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
