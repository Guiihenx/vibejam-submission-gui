
import React, { useState } from 'react';
import { GitBranch, Code, Sparkles } from 'lucide-react';

const VibeButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsGlowing(true);
    
    // Create starburst effect
    const button = document.querySelector('.code-pulse-button');
    if (button) {
      // Create colorful starburst particles
      for (let i = 0; i < 16; i++) {
        const particle = document.createElement('span');
        particle.classList.add('starburst-particle');
        
        // Set random pastel colors
        const colors = ['#E5DEFF', '#D3E4FD', '#F2FCE2', '#FFDEE2', '#FDE1D3'];
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
    
    // Reset animation after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    
    // Reset glow after slightly longer
    setTimeout(() => {
      setIsGlowing(false);
    }, 1500);
  };
  
  return (
    <button
      onClick={handleClick}
      className={`code-pulse-button relative overflow-hidden ${
        isAnimating ? 'animate-wiggle' : ''
      } ${
        isGlowing ? 'code-glow-effect' : ''
      } doodle-button bg-gradient-to-r from-violet-50 via-indigo-50 to-white hover:from-violet-100 hover:to-indigo-50 group`}
      aria-label="Click for code effect"
      disabled={isAnimating}
    >
      <Code className="w-5 h-5 text-indigo-500 mr-2 group-hover:animate-spin-slow transition-all" />
      <span>Deploy Codewave</span>
      <GitBranch className={`w-5 h-5 ml-2 text-violet-500 transition-all ${isGlowing ? 'animate-pulse-light' : 'opacity-70'}`} />
    </button>
  );
};

export default VibeButton;
