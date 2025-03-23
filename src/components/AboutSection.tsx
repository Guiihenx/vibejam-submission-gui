import React, { useEffect, useRef } from 'react';
import { PenTool, Gamepad2, Sparkles, Terminal, Braces } from 'lucide-react';
const AboutSection: React.FC = () => {
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
  return <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white"></div>
      
      {/* UFO illustration in bottom left */}
      <div className="absolute bottom-10 left-10 z-10 w-28 md:w-40 xl:w-48 animate-ufo">
        <img src="/lovable-uploads/288acc21-d9f3-46c3-a12d-7dd58be7e2f5.png" alt="UFO" className="w-full h-auto hover:scale-110 transition-all duration-700" />
      </div>
      
      {/* Flying balloon decoration */}
      <div className="flying-doodle top-20 right-10">
        
      </div>
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl section-animate">
        <div className="text-center mb-16">
          <h2 className="font-terminal text-5xl md:text-6xl font-bold mb-6">
            <Terminal className="w-8 h-8 inline-block mr-3 text-blue-500" />
            About <span className="terminal-highlight">#vibejam</span>
          </h2>
          <p className="font-terminal text-xl max-w-3xl mx-auto">
            The intersection of artificial intelligence and creative coding to build the next generation of games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-yellow-100 transition-colors">
              <PenTool className="w-10 h-10 group-hover:animate-squiggle" />
            </div>
            <h3 className="font-terminal text-3xl font-bold mb-4">AI-Powered</h3>
            <p className="font-terminal text-lg">
              Leverage artificial intelligence to enhance your game development process and create unique player experiences.
            </p>
          </div>
          
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-blue-100 transition-colors">
              <Gamepad2 className="w-10 h-10 group-hover:animate-squiggle" />
            </div>
            <h3 className="font-terminal text-3xl font-bold mb-4">Vibecoded</h3>
            <p className="font-terminal text-lg">
              Create games that resonate with players on an emotional level through innovative coding techniques and aesthetics.
            </p>
          </div>
          
          <div className="doodle-card flex flex-col items-center text-center transition-all hover:-translate-y-2 group">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-green-100 transition-colors">
              <Sparkles className="w-10 h-10 group-hover:animate-squiggle" />
            </div>
            <h3 className="font-terminal text-3xl font-bold mb-4">Innovative</h3>
            <p className="font-terminal text-lg">
              Push the boundaries of what's possible in game development by combining cutting-edge technologies with creative vision.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center relative">
          <div className="inline-block px-6 py-3 rounded-md font-terminal text-2xl font-bold mb-6 relative overflow-hidden group border-2 border-black bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg">
            <Braces className="w-5 h-5 mr-2 text-indigo-500 inline-block" />
            <span className="vibejam-code-text">#vibejam</span>
          </div>
          
          <p className="font-terminal text-lg max-w-2xl mx-auto">
            Join us for the first-ever game jam dedicated to AI-enhanced game development. Connect with like-minded creators, learn from industry experts, and showcase your innovative games.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;