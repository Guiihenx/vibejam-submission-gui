
import React, { useEffect, useRef } from 'react';
import { Zap, Code, FileCode } from 'lucide-react';
import XLogo from './XLogo';

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
      {/* Decorative ship illustration with enhanced float animation */}
      <div className="absolute bottom-0 left-0 z-0 pointer-events-none animate-float-element">
        <img 
          src="/lovable-uploads/8553bec3-ce97-4fba-9542-9b5285e5a459.png" 
          alt="Ship doodle" 
          className="w-64 md:w-80"
          style={{ opacity: "0.15" }}
        />
      </div>
      
      {/* Enhanced code snippet illustration for sponsors section */}
      <div className="absolute top-40 right-20 z-0 opacity-90 code-snippet-card animate-float-slow">
        <div className="bg-white border-2 border-black rounded-lg p-3 transform rotate-[3deg] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center mb-2 bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-t border-b border-gray-200">
            <Code size={18} className="mr-2 text-green-500 animate-pulse-light" />
            <span className="font-terminal text-sm text-blue-700">sponsor.js</span>
          </div>
          <pre className="text-left text-xs font-terminal bg-gradient-to-br from-green-50 via-blue-50 to-white p-2 rounded">
            <code className="code-highlight">
{`const <span class="text-purple-500 glow-text">sponsors</span> = [
  { name: "<span class="text-blue-500 glow-text">Bolt</span>", tier: "Gold" },
  { name: "<span class="text-green-500 glow-text">CodeRabbit</span>", tier: "Gold" }
];

<span class="text-purple-500 glow-text">sponsors</span>.forEach(s => addBadge(s));`}
            </code>
          </pre>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-12">
          <h2 className="font-terminal text-4xl md:text-5xl font-bold mb-6">
            <FileCode className="w-8 h-8 inline-block mr-3 text-green-500" />
            Powered by <span className="doodle-highlight-blue">Amazing</span> Partners
          </h2>
          <p className="font-terminal text-xl mb-8 max-w-2xl mx-auto">
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
            
            <h3 className="font-terminal text-3xl font-bold mb-3">Bolt</h3>
            <a 
              href="https://twitter.com/boltdotnew"
              target="_blank"
              rel="noopener noreferrer" 
              className="font-terminal text-2xl text-vibejam-blue mb-4 flex items-center justify-center gap-2 hover:text-blue-500 transition-colors"
            >
              <XLogo className="w-5 h-5" />
              <span>@boltdotnew</span>
            </a>
            <p className="font-terminal text-lg">
              Powering the future of development
            </p>
          </div>
          
          <div className="relative w-20 h-20 flex items-center justify-center group">
            <Zap 
              className="w-12 h-12 text-amber-300 group-hover:text-amber-400 group-hover:scale-125 transform transition-all duration-300 animate-pulse" 
              style={{ filter: "drop-shadow(0px 0px 8px rgba(251, 191, 36, 0.5))" }}
            />
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
            
            <h3 className="font-terminal text-3xl font-bold mb-3">Code Rabbit</h3>
            <a 
              href="https://twitter.com/coderabbitai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-terminal text-2xl text-vibejam-blue mb-4 flex items-center justify-center gap-2 hover:text-blue-500 transition-colors"
            >
              <XLogo className="w-5 h-5" />
              <span>@coderabbitai</span>
            </a>
            <p className="font-terminal text-lg">
              AI-powered development assistant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
