
import React, { useState } from 'react';
import { Vibrate } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  
  const handleVibrate = () => {
    setIsVibrating(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsVibrating(false);
    }, 300);
  };
  
  return (
    <button
      onClick={handleVibrate}
      className={`glass-card p-4 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl ${isVibrating ? 'animate-vibrate' : ''}`}
      aria-label="Click to vibrate"
    >
      <Vibrate className="w-5 h-5 text-vibejam-blue" />
      <span className="font-medium">Feel the vibe</span>
    </button>
  );
};

export default VibeButton;
