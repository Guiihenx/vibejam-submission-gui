
import React from 'react';
import { Braces, CodeSquare, Terminal, FileCode } from 'lucide-react';

const GamepadAnimation: React.FC = () => {
  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-64 md:h-64 z-10">
      <img 
        src="/lovable-uploads/3d2f00ca-8048-4211-98aa-fd3b609f94c9.png" 
        alt="Gamepad" 
        className="w-full h-full object-contain animate-float"
      />
      
      {/* Code icons around the controller */}
      <div className="absolute -top-8 -left-8 animate-float-element" style={{ animationDelay: "1.2s" }}>
        <Braces size={32} className="text-indigo-300" />
      </div>
      <div className="absolute top-0 -right-8 animate-float-element" style={{ animationDelay: "2.1s" }}>
        <CodeSquare size={30} className="text-green-300" />
      </div>
      <div className="absolute -bottom-4 -left-10 animate-float-element" style={{ animationDelay: "1.5s" }}>
        <Terminal size={28} className="text-blue-300" />
      </div>
      <div className="absolute -bottom-8 right-0 animate-float-element" style={{ animationDelay: "2.7s" }}>
        <FileCode size={32} className="text-purple-300" />
      </div>
    </div>
  );
};

export default GamepadAnimation;
