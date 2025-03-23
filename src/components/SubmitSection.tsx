
import React, { useEffect, useRef } from 'react';
import { CodeSquare, FileCode, Sparkles, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SubmitSection: React.FC = () => {
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
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-sky-50"></div>
      
      {/* Ship illustration with enhanced float animation */}
      <div className="absolute bottom-10 left-10 z-0 pointer-events-none animate-float-element">
        <img 
          src="/lovable-uploads/8553bec3-ce97-4fba-9542-9b5285e5a459.png" 
          alt="Ship doodle" 
          className="w-32 md:w-40"
          style={{ opacity: "0.7" }}
        />
      </div>
      
      {/* Code snippet for submit section with animation and pastel colors - REPOSITIONED */}
      <div className="absolute top-[40%] right-20 z-0 opacity-80 code-snippet-card animate-float-slow">
        <div className="bg-white border-2 border-black rounded-lg p-3 transform rotate-[5deg] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[3deg]" style={{ maxWidth: "240px" }}>
          <div className="flex items-center mb-2">
            <Code size={16} className="mr-2" />
            <span className="font-mono text-xs">submit.js</span>
          </div>
          <pre className="text-left text-xs font-mono bg-gradient-to-br from-indigo-50 to-white p-2 rounded">
            <code>
{`function <span class="text-indigo-500">submitGame</span>(game) {
  if (<span class="text-pink-400">game.isVibeCoded</span>) {
    return <span class="text-blue-400">api</span>.submit({
      title: <span class="text-green-400">game.title</span>,
      author: <span class="text-green-400">game.author</span>,
      url: <span class="text-green-400">game.playUrl</span>
    });
  }
}`}
            </code>
          </pre>
        </div>
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="doodle-card bg-opacity-100 max-w-4xl mx-auto border-4 border-black bg-gradient-to-b from-white to-blue-50">
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-black flex items-center justify-center mb-6 bg-white code-icon-container group">
              <FileCode className="w-10 h-10 text-indigo-600 code-icon group-hover:text-violet-600 transition-all duration-300 group-hover:scale-110" />
            </div>
            
            <h2 className="font-mono font-bold text-4xl md:text-5xl mb-8">Ready to Join <span className="doodle-highlight-violet">#vibejam</span>?</h2>
            
            <p className="font-mono text-xl mb-10 max-w-xl mx-auto text-slate-700">
              Submit your AI-powered game and showcase your innovative approach to game development.
            </p>
            
            <Button 
              asChild
              variant="submit"
              size="lg"
              className="py-6 px-10 text-xl font-mono group"
            >
              <a 
                href="http://jam.pieter.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Submit Your Entry Now
                <CodeSquare className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse-light" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitSection;
