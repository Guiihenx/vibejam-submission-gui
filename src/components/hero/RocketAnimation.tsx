
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const RocketAnimation: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`absolute ${isMobile ? 'bottom-10 right-0 scale-[0.4] opacity-60' : 'bottom-40 right-[15%]'} z-10 w-48 h-48 md:w-64 md:h-64 animate-rocket`}>
      <img 
        src="/lovable-uploads/e47af7fa-cdb0-42d1-9106-d076f6a52953.png" 
        alt="Rocket" 
        className="w-full h-full object-contain transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default RocketAnimation;
