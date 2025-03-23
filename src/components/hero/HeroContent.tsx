
import React, { useRef, useEffect } from 'react';
import { Code, Sparkles, GamepadIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import YearBadge from './YearBadge';
import DeadlineBadge from './DeadlineBadge';

const HeroContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });

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
    <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <YearBadge />
        
        <h1 className="font-terminal font-bold mb-10 leading-tight tracking-tight text-4xl md:text-6xl">
          <Code className="w-8 h-8 inline-block mr-3 text-indigo-500" />
          Vibe <span className="terminal-highlight">Coding Game Jam</span>
        </h1>
        
        <p className="font-terminal text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700">
          The first game jam for AI <span className="doodle-highlight-green">vibecoded</span> games.
          Create, innovate, and push boundaries.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
          <Button asChild variant="submit" size="lg" className="py-6 px-10 text-xl font-terminal group">
            <a href="http://jam.pieter.com" target="_blank" rel="noopener noreferrer">
              Submit Your Entry
              <GamepadIcon className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse-light" />
            </a>
          </Button>
        </div>
        
        <DeadlineBadge />
      </div>
    </div>
  );
};

export default HeroContent;
