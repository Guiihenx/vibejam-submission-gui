
import React from 'react';
import { ChevronDown, Sparkles, MousePointer } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollIndicator: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute bottom-8 flex flex-col items-center justify-center animate-float mx-auto left-0 right-0">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={isMobile ? 14 : 16} className="text-indigo-400 animate-pulse" />
        <span className="font-terminal text-base md:text-xl opacity-90 font-semibold">Scroll to explore</span>
        <Sparkles size={isMobile ? 14 : 16} className="text-pink-400 animate-pulse" />
      </div>
      
      <div className="relative flex flex-col items-center mt-1">
        <MousePointer size={isMobile ? 16 : 18} className="mb-1 text-indigo-500" />
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-black rounded-full flex items-start justify-center p-1 mb-2 bg-white/50">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full animate-bounce" />
        </div>
        <ChevronDown size={isMobile ? 20 : 24} className="text-indigo-500 animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
