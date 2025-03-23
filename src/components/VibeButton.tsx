
import React, { useState } from 'react';
import { Pencil } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  
  const handleVibrate = () => {
    setIsVibrating(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsVibrating(false);
    }, 600);
  };
  
  return (
    <button
      onClick={handleVibrate}
      className={`doodle-button inline-flex items-center justify-center gap-2 ${
        isVibrating ? 'animate-wiggle' : ''
      }`}
      aria-label="Click to vibrate"
    >
      <Pencil className="w-5 h-5" />
      <span>Feel the vibe</span>
    </button>
  );
};

export default VibeButton;
