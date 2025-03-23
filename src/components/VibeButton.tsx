
import React, { useState } from 'react';
import { Terminal, Code, Braces } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Create code particles effect
    const button = document.querySelector('.vibe-button');
    if (button) {
      // Create code line particles
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('span');
        particle.classList.add('code-line-particle');
        
        // Different code symbols
        const symbols = ['{', '}', '<>', '()', '=>', '++', '::', '[]'];
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        particle.textContent = randomSymbol;
        
        // Position particles around the button
        const angle = (i / 8) * 2 * Math.PI;
        const distance = 40 + Math.random() * 20;
        particle.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
        particle.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
        
        // Pastel colors for code particles
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
        }, 1500);
      }
      
      // Add pulse ring effect
      const ring = document.createElement('span');
      ring.classList.add('code-pulse-ring');
      button.appendChild(ring);
      
      // Remove ring after animation
      setTimeout(() => {
        if (ring && ring.parentNode) {
          ring.remove();
        }
      }, 1500);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };
  
  return (
    <button
      onClick={handleClick}
      className={`vibe-button relative overflow-hidden ${isAnimating ? 'animate-pulse-light' : ''}`}
      aria-label="Run code"
      disabled={isAnimating}
    >
      <span className="flex items-center gap-2 relative z-10">
        <Terminal className="w-5 h-5 text-indigo-500" />
        <span className="font-mono">run(vibeCode)</span>
        <Code className={`w-5 h-5 text-indigo-500 transition-all ${isAnimating ? 'animate-pulse-light' : 'opacity-70'}`} />
      </span>
    </button>
  );
};

export default VibeButton;
