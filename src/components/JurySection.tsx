
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
      <div className="absolute inset-0 -z-10 bg-vibejam-white"></div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the <span className="text-gradient">Jury</span></h2>
          <p className="text-lg text-vibejam-dark-gray opacity-80 max-w-2xl mx-auto">
            Industry experts who will review and select the most innovative game submissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {juryMembers.map((member, index) => (
            <div 
              key={member.handle}
              className="glass-card p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-vibejam-gray flex items-center justify-center mb-4 overflow-hidden">
                <div className="text-2xl font-bold text-vibejam-blue">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-vibejam-dark-gray opacity-70 mb-3">{member.role}</p>
              
              <a 
                href={`https://twitter.com/${member.handle.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-vibejam-blue hover:underline text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>{member.handle}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JurySection;
