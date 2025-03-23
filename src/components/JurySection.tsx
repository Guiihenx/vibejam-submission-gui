
import React, { useEffect, useRef } from 'react';
import { Code, FileCode, GamepadIcon, Dice1, Joystick, Target, Puzzle, Cpu } from 'lucide-react';
import XLogo from './XLogo';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type JuryMember = {
  handle: string;
  name: string;
  role: string;
  icon: React.ReactNode;
  image: string;
};

const juryMembers: JuryMember[] = [
  { 
    handle: '@karpathy',
    name: 'Andrej Karpathy',
    role: 'AI Researcher',
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,
    image: "/lovable-uploads/1cefcc9d-595e-479c-8787-a2a453af747b.png"
  },
  { 
    handle: '@timsoret',
    name: 'Tim Soret',
    role: 'Game Developer',
    icon: <GamepadIcon className="w-8 h-8 text-green-500" />,
    image: "/lovable-uploads/31070deb-019d-4516-aa03-a29df2c20fb0.png"
  },
  { 
    handle: '@mrdoob',
    name: 'Ricardo Cabello',
    role: 'Creator of Three.js',
    icon: <Puzzle className="w-8 h-8 text-violet-500" />,
    image: "/lovable-uploads/af5d8ae6-4ec8-4851-a303-d38ef12d41b8.png"
  },
  { 
    handle: '@s13k_',
    name: 'S13k',
    role: 'Tech Innovator',
    icon: <Target className="w-8 h-8 text-pink-500" />,
    image: "/lovable-uploads/e19ec94c-ba21-4b83-91b6-fca2ef6384c9.png"
  },
  { 
    handle: '@levelsio',
    name: 'Pieter Levels',
    role: 'Indie Maker',
    icon: <Joystick className="w-8 h-8 text-amber-500" />,
    image: "/lovable-uploads/4ebbc7e1-6c16-4ae7-8094-90f23bc616f0.png"
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
      
      {/* Airplane decoration - REPOSITIONED and RESIZED */}
      <div className="absolute top-1/3 right-[5%] z-10 w-40 md:w-60 animate-plane">
        <img 
          src="/lovable-uploads/3bda189a-ea9f-43b3-8140-3af1c8ae92cb.png" 
          alt="Airplane" 
          className="w-full h-auto transform -rotate-12 hover:rotate-0 transition-all duration-700 hover:scale-110"
        />
      </div>
      
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
              {/* Game-related floating icon - moved to top-right corner outside card */}
              <div className="absolute -top-5 -right-5 transform rotate-12 transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-2 z-10">
                {member.icon}
              </div>
              
              {/* Replace the initial letter with a profile image */}
              <Avatar className="w-24 h-24 border-2 border-black mb-4 overflow-hidden relative z-10 group-hover:scale-105 transition-all duration-300">
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                <AvatarFallback className="bg-black text-white text-3xl font-terminal font-bold">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
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
