
import React, { useEffect, useRef } from 'react';
import { Star, Sparkles, Code, Terminal, GamepadIcon, Joystick, TerminalSquare, CodeSquare, Bug } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
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

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Gamepad image at the top of the header - BIGGER SIZE */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-56 md:h-56 z-10">
        <img 
          src="/lovable-uploads/3d2f00ca-8048-4211-98aa-fd3b609f94c9.png" 
          alt="Gamepad" 
          className="w-full h-full object-contain animate-float"
        />
      </div>
      
      {/* Rocket illustration in bottom right - REPOSITIONED and BIGGER */}
      <div className="absolute bottom-32 right-1/3 z-10 w-32 h-32 md:w-48 md:h-48 animate-rocket">
        <img 
          src="/lovable-uploads/8e247c81-02ed-4e0b-92fd-109966cb082c.png" 
          alt="Rocket" 
          className="w-full h-full object-contain transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110"
        />
      </div>
      
      {/* Decorative elements - game and code related */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code and game icons with pastel colors */}
        <div className="absolute top-20 left-10 animate-float-element opacity-80">
          <Star size={50} className="text-indigo-200" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-element" style={{
        animationDelay: "2s"
      }}>
          <Star size={70} className="text-sky-200" />
        </div>
        <div className="absolute top-1/3 right-10 animate-float-element" style={{
        animationDelay: "1.5s"
      }}>
          <Sparkles size={60} className="text-violet-200" />
        </div>
        <div className="absolute top-1/4 left-[15%] animate-float-element" style={{
        animationDelay: "3.2s"
      }}>
          <GamepadIcon size={40} className="text-green-200" />
        </div>
        <div className="absolute bottom-1/3 left-[20%] animate-float-element" style={{
        animationDelay: "2.7s"
      }}>
          <Joystick size={45} className="text-pink-200" />
        </div>
        <div className="absolute top-2/3 right-[25%] animate-float-element" style={{
        animationDelay: "1.2s"
      }}>
          <TerminalSquare size={38} className="text-amber-200" />
        </div>
        <div className="absolute top-1/2 left-[30%] animate-float-element" style={{
        animationDelay: "4s"
      }}>
          <CodeSquare size={42} className="text-blue-200" />
        </div>
        <div className="absolute bottom-1/4 right-[30%] animate-float-element" style={{
        animationDelay: "3.5s"
      }}>
          <Bug size={35} className="text-purple-200" />
        </div>
        
        {/* Enhanced code snippet illustration with improved hover effects - repositioned */}
        <div className="absolute bottom-[30%] left-[8%] z-0 opacity-90 code-snippet-card animate-float-slow">
          <div className="bg-white border-2 border-black rounded-lg p-2 transform rotate-[-5deg] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[-3deg]" style={{
          maxWidth: "280px"
        }}>
            <div className="flex items-center mb-1 bg-gradient-to-r from-indigo-50 to-sky-50 p-2 rounded-t border-b border-gray-200">
              <Code size={16} className="mr-2 text-indigo-500 animate-pulse-light" />
              <span className="font-terminal text-xs text-indigo-700">game.js</span>
            </div>
            <pre className="text-left text-xs font-terminal bg-gradient-to-br from-violet-50 via-sky-50 to-white p-3 rounded">
              <code className="code-highlight">
              {`function <span class="text-pink-500 glow-text">vibeCode</span>() {
  const <span class="text-green-500 glow-text">game</span> = new Game();
  <span class="text-green-500 glow-text">game</span>.createWorld();
  <span class="text-green-500 glow-text">game</span>.addPlayer();
  return <span class="text-indigo-500 glow-text">game</span>.<span class="text-purple-500 glow-text">start</span>();
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced 2025 button with code theme */}
          <div className="inline-block mb-8 code-year-badge">
            <div className="font-terminal border-2 border-black rounded-full px-3 py-1.5 bg-gradient-to-r from-indigo-50 via-sky-50 to-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center space-x-2">
                <Terminal size={16} className="text-sky-500 code-spin-slow" />
                <code className="text-lg">
                  <span className="text-indigo-500">&lt;</span>
                  <span className="text-sky-600 code-glow">2025</span>
                  <span className="text-indigo-500">/&gt;</span>
                </code>
              </div>
            </div>
          </div>
          
          <h1 className="font-terminal font-bold mb-10 leading-tight tracking-tight text-4xl md:text-6xl">
            <Code className="w-8 h-8 inline-block mr-3 text-indigo-500" />
            Vibe <span className="terminal-highlight">Coding Game Jam</span>
          </h1>
          
          <p className="font-terminal text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700">
            The first game jam for AI <span className="doodle-highlight-green">vibecoded</span> games.
            Create, innovate, and push boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild variant="submit" size="lg" className="py-6 px-10 text-xl font-terminal group">
              <a href="http://jam.pieter.com" target="_blank" rel="noopener noreferrer">
                Submit Your Entry
                <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse-light" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="font-terminal text-xl mb-2 opacity-70">Scroll to explore</span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn-arrow">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>;
};

export default Hero;
