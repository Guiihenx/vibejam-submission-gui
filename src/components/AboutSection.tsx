
import React, { useEffect, useRef } from 'react';
import { PenTool, Gamepad2, Sparkles, Terminal, Braces, Code, ArrowRight } from 'lucide-react';

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
      
      {/* UFO illustration in bottom left - MADE BIGGER and REPOSITIONED */}
      <div className="absolute bottom-20 left-[10%] z-10 w-40 md:w-52 xl:w-64 animate-ufo">
        <img src="/lovable-uploads/288acc21-d9f3-46c3-a12d-7dd58be7e2f5.png" alt="UFO" className="w-full h-auto hover:scale-110 transition-all duration-700" />
      </div>
      
      {/* Arcade machine illustration - REPOSITIONED */}
      <div className="absolute top-28 right-[25%] z-10 w-36 md:w-48 xl:w-56 animate-float">
        <img src="/lovable-uploads/4109ca1d-8ac0-44b2-93de-af04242e008b.png" alt="Arcade Machine" className="w-full h-auto hover:scale-110 transition-all duration-500" />
      </div>
      
      {/* Mini code snippets scattered around - MADE BIGGER */}
      <div className="absolute top-40 left-20 z-10 code-snippet-mini animate-float-element" style={{ animationDelay: "1.3s" }}>
        <div className="bg-white border border-black rounded p-2 transform rotate-[-3deg] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:rotate-[-1deg]">
          <div className="flex items-center mb-1 bg-gradient-to-r from-pink-50 to-purple-50 p-1 rounded-t">
            <Code size={14} className="mr-1 text-pink-500" />
            <span className="font-terminal text-[10px] text-purple-700">player.js</span>
          </div>
          <pre className="text-left text-[9px] font-terminal bg-gradient-to-br from-pink-50 via-purple-50 to-white p-1 rounded">
            <code className="code-highlight">
              {`function move() { 
  player.x += speed;
  if (player.x > width) {
    player.x = 0;
  }
}`}
            </code>
          </pre>
        </div>
      </div>
      
      <div className="absolute bottom-44 right-28 z-10 code-snippet-mini animate-float-element" style={{ animationDelay: "2.7s" }}>
        <div className="bg-white border border-black rounded p-2 transform rotate-[2deg] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:rotate-[4deg]">
          <div className="flex items-center mb-1 bg-gradient-to-r from-blue-50 to-cyan-50 p-1 rounded-t">
            <Terminal size={14} className="mr-1 text-blue-500" />
            <span className="font-terminal text-[10px] text-cyan-700">score.js</span>
          </div>
          <pre className="text-left text-[9px] font-terminal bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-1 rounded">
            <code className="code-highlight">
              {`const score = 
  kills * 100 + 
  coins * 10 + 
  time * 5;
  
updateUI(score);`}
            </code>
          </pre>
        </div>
      </div>
      
      <div className="absolute top-64 right-48 z-10 code-snippet-mini animate-float-element" style={{ animationDelay: "3.5s" }}>
        <div className="bg-white border border-black rounded p-2 transform rotate-[-5deg] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:rotate-[-3deg]">
          <div className="flex items-center mb-1 bg-gradient-to-r from-amber-50 to-yellow-50 p-1 rounded-t">
            <ArrowRight size={14} className="mr-1 text-amber-500" />
            <span className="font-terminal text-[10px] text-amber-700">engine.js</span>
          </div>
          <pre className="text-left text-[9px] font-terminal bg-gradient-to-br from-amber-50 via-yellow-50 to-white p-1 rounded">
            <code className="code-highlight">
              {`ai.train(
  model, 
  gameData,
  {
    epochs: 100,
    batchSize: 32
  }
)`}
            </code>
          </pre>
        </div>
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
