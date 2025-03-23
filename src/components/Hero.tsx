import React, { useEffect, useRef } from 'react';
import { Star, Sparkles, Code, Terminal, GitBranch } from 'lucide-react';
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
      {/* Decorative elements - rearranged */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 transform rotate-12">
          <Star size={50} className="text-gray-200" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <Star size={70} className="text-gray-200" />
        </div>
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <Sparkles size={60} className="text-gray-200" />
        </div>
        
        {/* Jet in right side, animation added */}
        <div className="flying-element bottom-[20%] right-[15%] animate-float-element" style={{
        opacity: "0.7"
      }}>
          
        </div>
        
        {/* Enhanced code snippet illustration with pastel colors and smooth animation */}
        <div className="absolute bottom-[15%] left-[8%] z-0 opacity-90 code-snippet-card animate-float-slow">
          <div className="bg-white border-2 border-black rounded-lg p-2 transform rotate-[-5deg] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{
          maxWidth: "280px"
        }}>
            <div className="flex items-center mb-1 bg-gradient-to-r from-indigo-50 to-sky-50 p-2 rounded-t border-b border-gray-200">
              <Code size={16} className="mr-2 text-indigo-500 animate-pulse-light" />
              <span className="font-handwritten text-xs text-indigo-700">game.js</span>
            </div>
            <pre className="text-left text-xs font-mono bg-gradient-to-br from-violet-50 via-sky-50 to-white p-3 rounded">
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
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10 section-animate">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced 2025 button */}
          <div className="inline-block mb-8 code-year-badge">
            <div className="font-mono border-2 border-black rounded-full px-3 py-1.5 bg-gradient-to-r from-indigo-50 via-sky-50 to-white shadow-md relative overflow-hidden group">
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
          
          <h1 className="doodle-title-large mb-10 leading-tight tracking-tight">
            <Code className="w-8 h-8 inline-block mr-3 text-indigo-500" />
            Vibe <span className="doodle-highlight-hover">Coding</span> Game Jam
          </h1>
          
          <p className="doodle-text mb-12 max-w-3xl mx-auto leading-relaxed text-slate-700">
            The first game jam for AI vibecoded games.
            Create, innovate, and push boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="http://jam.pieter.com" target="_blank" rel="noopener noreferrer" className="enhanced-submit-button group">
              Submit Your Entry
              <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse-light" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="font-handwritten text-xl mb-2 opacity-70">Scroll to explore</span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn-arrow">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>;
};
export default Hero;