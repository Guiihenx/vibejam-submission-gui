
import React, { useRef, useEffect } from 'react';
import { Code, Sparkles, GamepadIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import YearBadge from './YearBadge';
import DeadlineBadge from './DeadlineBadge';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
    <div ref={sectionRef} className="container mx-auto px-4 md:px-6 relative z-10 section-animate pt-10 md:pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <YearBadge />
        
        <h1 className="font-terminal font-bold mb-6 md:mb-10 leading-tight tracking-tight text-3xl sm:text-4xl md:text-6xl">
          <Code className="w-6 h-6 md:w-8 md:h-8 inline-block mr-2 md:mr-3 text-indigo-500" />
          Vibe <span className="terminal-highlight">Coding Game Jam</span>
        </h1>
        
        <p className="font-terminal text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700">
          The first game jam for AI <span className="doodle-highlight-green">vibecoded</span> games.
          Create, innovate, and push boundaries.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-8">
          <Button asChild variant="submit" size={isMobile ? "default" : "lg"} className={`py-4 sm:py-6 px-6 sm:px-10 text-sm sm:text-xl font-terminal group ${isMobile ? 'w-auto' : ''}`}>
            <a href="http://jam.pieter.com" target="_blank" rel="noopener noreferrer">
              Submit Entry
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
