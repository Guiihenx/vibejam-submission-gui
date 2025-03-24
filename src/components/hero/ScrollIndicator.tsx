
import React from 'react';
import { ChevronDown, Sparkles, MousePointer } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-float">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-indigo-400 animate-pulse" />
        <span className="font-terminal text-xl opacity-90 font-semibold">Scroll to explore</span>
        <Sparkles size={16} className="text-pink-400 animate-pulse" />
      </div>
      
      <div className="relative flex flex-col items-center mt-1">
        <MousePointer size={18} className="mb-1 text-indigo-500" />
        <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-1 mb-2 bg-white/50">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
        </div>
        <ChevronDown size={24} className="text-indigo-500 animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
