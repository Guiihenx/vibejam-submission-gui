
import React from 'react';
import { Braces, CodeSquare, Terminal, FileCode } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const GamepadAnimation: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`absolute ${isMobile ? 'top-16 left-1/2 transform -translate-x-1/2 scale-[0.6] z-20' : 'top-20 left-1/2 transform -translate-x-1/2'} w-40 h-40 md:w-64 md:h-64 z-10`}>
      <img 
        src="/lovable-uploads/3d2f00ca-8048-4211-98aa-fd3b609f94c9.png" 
        alt="Gamepad" 
        className="w-full h-full object-contain animate-float"
      />
      
      {/* Code icons around the controller */}
      <div className="absolute -top-8 -left-8 animate-float-element" style={{ animationDelay: "1.2s" }}>
        <Braces size={isMobile ? 20 : 32} className="text-indigo-300" />
      </div>
      <div className="absolute top-0 -right-8 animate-float-element" style={{ animationDelay: "2.1s" }}>
        <CodeSquare size={isMobile ? 18 : 30} className="text-green-300" />
      </div>
      <div className="absolute -bottom-4 -left-10 animate-float-element" style={{ animationDelay: "1.5s" }}>
        <Terminal size={isMobile ? 16 : 28} className="text-blue-300" />
      </div>
      <div className="absolute -bottom-8 right-0 animate-float-element" style={{ animationDelay: "2.7s" }}>
        <FileCode size={isMobile ? 20 : 32} className="text-purple-300" />
      </div>
    </div>
  );
};

export default GamepadAnimation;
