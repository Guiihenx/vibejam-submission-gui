
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ComputerAnimation: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`absolute ${isMobile ? 'top-20 -left-2 scale-[0.35] opacity-60' : 'top-40 left-[15%]'} z-10 w-36 h-36 md:w-48 md:h-48 animate-float-slow`}>
      <img 
        src="/lovable-uploads/d543be93-6334-478f-b3e4-459fb8c5fafa.png" 
        alt="Computer" 
        className="w-full h-full object-contain transform hover:rotate-3 transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default ComputerAnimation;
