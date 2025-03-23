
import React, { useEffect, useRef } from 'react';
import { Twitter, Code } from 'lucide-react';

type JuryMember = {
  handle: string;
  name: string;
  role: string;
  twitterUrl: string; // Add Twitter URL
};

const juryMembers: JuryMember[] = [
  { 
    handle: '@karpathy',
    name: 'Andrej Karpathy',
    role: 'AI Researcher',
    twitterUrl: 'https://twitter.com/karpathy'
  },
  { 
    handle: '@timsoret',
    name: 'Tim Soret',
    role: 'Game Developer',
    twitterUrl: 'https://twitter.com/timsoret'
  },
  { 
    handle: '@mrdoob',
    name: 'Ricardo Cabello',
    role: 'Creator of Three.js',
    twitterUrl: 'https://twitter.com/mrdoob'
  },
  { 
    handle: '@s13k_',
    name: 'S13k',
    role: 'Tech Innovator',
    twitterUrl: 'https://twitter.com/s13k_'
  },
  { 
    handle: '@levelsio',
    name: 'Pieter Levels',
    role: 'Indie Maker',
    twitterUrl: 'https://twitter.com/levelsio'
  }
];

// Add sponsor Twitter URLs
const sponsorTwitterUrls = {
  'boltdotnew': 'https://twitter.com/boltdotnew',
  'coderabbitai': 'https://twitter.com/coderabbitai'
};

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
      
      {/* World map with enhanced rotation animation */}
      <div className="absolute top-20 right-20 opacity-20 pointer-events-none z-0">
        <img 
          src="/lovable-uploads/dff31447-dfa0-4a8d-993b-10b447722f5d.png" 
          alt="World Map" 
          className="w-[30vw] max-w-[300px] animate-spin-slow"
        />
      </div>
      
      {/* Code snippet illustration for jury section with enhanced animations */}
      <div className="absolute top-20 left-20 z-0 opacity-80 code-snippet-card">
        <div className="bg-white border-2 border-black rounded-lg p-3 transform rotate-[-3deg] shadow-md hover:shadow-xl transition-all duration-500" style={{ maxWidth: "220px" }}>
          <div className="flex items-center mb-2">
            <Code size={18} className="mr-2" />
            <span className="font-handwritten text-sm">jury.js</span>
          </div>
          <pre className="text-left text-xs font-mono bg-gray-100 p-2 rounded">
            <code>
{`async function <span class="text-sky-500">evaluateGames</span>() {
  const <span class="text-green-500">entries</span> = await fetchAll();
  const <span class="text-indigo-500">jury</span> = await assembleJury();
  
  return <span class="text-indigo-500">jury</span>.<span class="text-pink-500">scoreGames</span>(entries);
}`}
            </code>
          </pre>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="doodle-title-large mb-6">
            <Code size={28} className="inline-block mr-2 mb-1 text-sky-500" />
            Meet the <span className="doodle-highlight-blue">Jury</span>
          </h2>
          <p className="doodle-text max-w-2xl mx-auto">
            Industry experts who will review and select the most innovative game submissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {juryMembers.map((member, index) => (
            <div 
              key={member.handle}
              className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-3 hover:rotate-1 duration-300"
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
                href={member.twitterUrl}
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
