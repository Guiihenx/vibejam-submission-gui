
import React, { useEffect, useRef } from 'react';
import { Twitter } from 'lucide-react';

type JuryMember = {
  handle: string;
  name: string;
  role: string;
};

const juryMembers: JuryMember[] = [
  { 
    handle: '@karpathy',
    name: 'Andrej Karpathy',
    role: 'AI Researcher'
  },
  { 
    handle: '@timsoret',
    name: 'Tim Soret',
    role: 'Game Developer'
  },
  { 
    handle: '@mrdoob',
    name: 'Ricardo Cabello',
    role: 'Creator of Three.js'
  },
  { 
    handle: '@s13k_',
    name: 'S13k',
    role: 'Tech Innovator'
  },
  { 
    handle: '@levelsio',
    name: 'Pieter Levels',
    role: 'Indie Maker'
  }
];

const JurySection: React.FC = () => {
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
    <section id="jury" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-vibejam-gray"></div>
      
      {/* Airplane illustration */}
      <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/f065e4f2-ee16-4fee-b4ba-b9aa68354fc0.png" 
          alt="Airplane doodle" 
          className="w-40 md:w-60"
        />
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="doodle-title-large mb-6">Meet the <span className="doodle-highlight">Jury</span></h2>
          <p className="doodle-text max-w-2xl mx-auto">
            Industry experts who will review and select the most innovative game submissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {juryMembers.map((member, index) => (
            <div 
              key={member.handle}
              className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-3 hover:rotate-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center mb-4 overflow-hidden bg-black text-white">
                <div className="text-3xl font-display font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="doodle-title-medium text-2xl mb-2">{member.name}</h3>
              <p className="doodle-text mb-3">{member.role}</p>
              
              <a 
                href={`https://twitter.com/${member.handle.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-vibejam-blue hover:underline text-lg font-handwritten group"
              >
                <Twitter className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                <span className="group-hover:text-blue-500 transition-colors">{member.handle}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JurySection;
