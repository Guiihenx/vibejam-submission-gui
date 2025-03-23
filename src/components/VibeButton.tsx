
import React, { useState } from 'react';
import { Sparkles, ZapIcon } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const handleVibrate = () => {
    setIsVibrating(true);
    setIsGlowing(true);
    
    // Create starburst effect
    const button = document.querySelector('.vibe-button');
    if (button) {
      // Create colorful starburst particles
      for (let i = 0; i < 16; i++) {
        const particle = document.createElement('span');
        particle.classList.add('starburst-particle');
        
        // Set random pastel colors
        const colors = ['#FFDEE2', '#D3E4FD', '#FDE1D3', '#E5DEFF', '#F2FCE2'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        // Position particles in a circle around the button
        const angle = (i / 16) * 2 * Math.PI;
        const distance = 40 + Math.random() * 30;
        particle.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
        particle.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
        
        // Set random animation delays
        particle.style.animationDelay = `${i * 30}ms`;
        button.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          particle.remove();
        }, 1000);
      }
      
      // Add a wave ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('wave-ripple');
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
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
      <ZapIcon className="w-5 h-5 text-yellow-400" />
      <span>Feel the vibe</span>
      <Sparkles className={`w-5 h-5 text-yellow-400 transition-all ${isGlowing ? 'animate-pulse-light' : 'opacity-70'}`} />
    </button>
  );
};

export default VibeButton;
