
import React, { useState } from 'react';
import { Sparkles, Code } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Create code particles effect
    const button = document.querySelector('.vibe-button');
    if (button) {
      // Create code snippet particles
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('span');
        particle.classList.add('code-particle');
        
        // Random code symbols
        const symbols = ['{ }', '( )', '< >', ';', '=>', '++', '--', '&&', '||', '==', '0101'];
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        particle.textContent = randomSymbol;
        
        // Position particles in a circle around the button
        const angle = (i / 12) * 2 * Math.PI;
        const distance = 40 + Math.random() * 20;
        particle.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
        particle.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
        
        // Random colors for code particles
        const colors = ['#D3E4FD', '#E5DEFF', '#FFDEE2', '#FDE1D3', '#F2FCE2'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.color = randomColor;
        
        // Set random animation delays
        particle.style.animationDelay = `${i * 30}ms`;
        button.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle && particle.parentNode) {
            particle.remove();
          }
        }, 1000);
      }
      
      // Add code ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('code-ripple');
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        if (ripple && ripple.parentNode) {
          ripple.remove();
        }
      }, 1000);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };
  
  return (
    <button
      onClick={handleClick}
      className={`vibe-button inline-flex items-center justify-center gap-2 relative overflow-hidden 
        ${isAnimating ? 'animate-pulse-light' : ''} 
        bg-gradient-to-r from-indigo-50 to-white hover:from-indigo-100 hover:to-white border-2 border-black rounded-full px-8 py-3 font-mono text-lg
      `}
      aria-label="Run code"
      disabled={isAnimating}
    >
      <Code className="w-5 h-5 text-indigo-500" />
      <span className="font-mono">run(vibeCode)</span>
      <Sparkles className={`w-5 h-5 text-indigo-500 transition-all ${isAnimating ? 'animate-pulse-light' : 'opacity-70'}`} />
    </button>
  );
};

export default VibeButton;
