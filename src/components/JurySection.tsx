
import React, { useEffect, useRef } from 'react';
import { Code, GitBranch, FileCode, Trophy, Award, GamepadIcon, Dice, Joystick, Target, Puzzle, Cpu } from 'lucide-react';
import XLogo from './XLogo';

type JuryMember = {
  handle: string;
  name: string;
  role: string;
  icon: React.ReactNode;
};

const juryMembers: JuryMember[] = [
  { 
    handle: '@karpathy',
    name: 'Andrej Karpathy',
    role: 'AI Researcher',
    icon: <Cpu className="w-8 h-8 text-indigo-500" />
  },
  { 
    handle: '@timsoret',
    name: 'Tim Soret',
    role: 'Game Developer',
    icon: <GamepadIcon className="w-8 h-8 text-green-500" />
  },
  { 
    handle: '@mrdoob',
    name: 'Ricardo Cabello',
    role: 'Creator of Three.js',
    icon: <Puzzle className="w-8 h-8 text-violet-500" />
  },
  { 
    handle: '@s13k_',
    name: 'S13k',
    role: 'Tech Innovator',
    icon: <Target className="w-8 h-8 text-pink-500" />
  },
  { 
    handle: '@levelsio',
    name: 'Pieter Levels',
    role: 'Indie Maker',
    icon: <Joystick className="w-8 h-8 text-amber-500" />
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
      
      {/* Enhanced code snippet illustration for jury section - repositioned */}
      <div className="absolute top-40 left-20 z-0 opacity-90 code-snippet-card animate-float-slow">
        <div className="bg-white border-2 border-black rounded-lg p-3 transform rotate-[-3deg] shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="flex items-center mb-2 bg-gradient-to-r from-violet-50 to-indigo-50 p-2 rounded-t border-b border-gray-200">
            <Code size={18} className="mr-2 text-violet-500 animate-pulse-light" />
            <span className="font-terminal text-sm text-violet-700">jury.js</span>
          </div>
          <pre className="text-left text-xs font-terminal bg-gradient-to-br from-violet-50 via-indigo-50 to-white p-2 rounded">
            <code className="code-highlight">
{`async function <span class="text-purple-500 glow-text">evaluateGames</span>() {
  const <span class="text-pink-500 glow-text">entries</span> = await fetchAll();
  const <span class="text-blue-500 glow-text">jury</span> = await assembleJury();
  
  return <span class="text-blue-500 glow-text">jury</span>.scoreGames(<span class="text-pink-500 glow-text">entries</span>);
}`}
            </code>
          </pre>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="font-terminal text-5xl md:text-6xl font-bold mb-6">
            <FileCode className="w-8 h-8 inline-block mr-3 text-violet-500" />
            Meet the <span className="terminal-highlight">Jury</span>
          </h2>
          <p className="font-terminal text-xl max-w-2xl mx-auto">
            Industry experts who will review and select the most innovative game submissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {juryMembers.map((member, index) => (
            <div 
              key={member.handle}
              className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-3 hover:rotate-1 relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Game-related icon floating around the card */}
              <div className="absolute -top-4 -right-4 w-10 h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 animate-float-element" style={{ animationDelay: `${index * 0.3}s` }}>
                {member.icon}
              </div>
              
              <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center mb-4 overflow-hidden bg-black text-white relative z-10 group-hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-terminal font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="font-terminal text-2xl font-bold mb-2">{member.name}</h3>
              <p className="font-terminal text-lg mb-3">{member.role}</p>
              
              <a 
                href={`https://twitter.com/${member.handle.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-vibejam-blue hover:underline text-lg font-terminal group"
              >
                <XLogo className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
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
