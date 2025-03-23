
import React, { useState, useEffect } from 'react';
import { Pencil, Sparkles } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const handleVibrate = () => {
    setIsVibrating(true);
    setIsGlowing(true);
    
    // Create ripple effect with multiple circles
    const button = document.querySelector('.vibe-button');
    if (button) {
      for (let i = 0; i < 5; i++) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.animationDelay = `${i * 100}ms`;
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove();
        }, 1000);
      }
      
      // Add sparkle burst effect
      for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle-burst');
        sparkle.style.left = `${50 + 30 * Math.cos(i * Math.PI / 6)}%`;
        sparkle.style.top = `${50 + 30 * Math.sin(i * Math.PI / 6)}%`;
        sparkle.style.animationDelay = `${i * 50}ms`;
        button.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, 1000);
      }
    }
    
    // Reset vibration after animation completes
    setTimeout(() => {
      setIsVibrating(false);
    }, 600);
    
    // Reset glow after slightly longer
    setTimeout(() => {
      setIsGlowing(false);
    }, 1500);
  };
  
  useEffect(() => {
    // Add sparkle animation
    const interval = setInterval(() => {
      const button = document.querySelector('.vibe-button');
      if (button) {
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        button.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, 1000);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <button
      onClick={handleVibrate}
      className={`vibe-button doodle-button inline-flex items-center justify-center gap-2 relative overflow-hidden ${
        isVibrating ? 'animate-wiggle' : ''
      } ${
        isGlowing ? 'vibe-glow' : ''
      } bg-gradient-to-r from-sky-50 to-white hover:from-sky-100 hover:to-white`}
      aria-label="Click to vibrate"
    >
      <Pencil className="w-5 h-5" />
      <span>Feel the vibe</span>
      <Sparkles className={`absolute top-0 right-0 w-6 h-6 text-yellow-400 transition-opacity ${isGlowing ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
};

export default VibeButton;
