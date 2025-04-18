
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import FloatingIcons from './hero/FloatingIcons';
import GamepadAnimation from './hero/GamepadAnimation';
import RocketAnimation from './hero/RocketAnimation';
import CodeSnippet from './hero/CodeSnippet';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import ComputerAnimation from './hero/ComputerAnimation';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  const gameCodeSnippet = `function <span class="text-pink-500 glow-text">vibeCode</span>() {
  const <span class="text-green-500 glow-text">game</span> = new Game();
  <span class="text-green-500 glow-text">game</span>.createWorld();
  <span class="text-green-500 glow-text">game</span>.addPlayer();
  return <span class="text-indigo-500 glow-text">game</span>.<span class="text-purple-500 glow-text">start</span>();
}`;

  const aiCodeSnippet = `class <span class="text-blue-500 glow-text">AIController</span> {
  constructor() {
    this.<span class="text-pink-500 glow-text">model</span> = loadModel();
    this.<span class="text-green-500 glow-text">learning</span> = true;
  }
  
  <span class="text-purple-500 glow-text">predict</span>(input) {
    return this.<span class="text-pink-500 glow-text">model</span>.run(input);
  }
}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Show in mobile but at different sizes/positions */}
      <GamepadAnimation />
      <RocketAnimation />
      <ComputerAnimation />
      
      <FloatingIcons />
      
      {/* Code snippets on larger screens and custom for mobile */}
      {isMobile ? (
        <>
          <CodeSnippet 
            position="bottom-32 -left-8 opacity-40"
            title="game.js"
            icon="code"
            gradient="from-indigo-50 to-sky-50"
            code={gameCodeSnippet}
            className="scale-[0.4] animate-float max-w-[120px] z-0"
          />
          
          <CodeSnippet 
            position="top-28 -right-8 opacity-40"
            title="ai.js"
            icon="terminal"
            gradient="from-pink-50 to-purple-50"
            code={aiCodeSnippet}
            delay="1.5s"
            className="scale-[0.4] animate-float max-w-[120px] z-0"
          />
        </>
      ) : (
        <>
          <CodeSnippet 
            position="bottom-[30%] left-[8%]"
            title="game.js"
            icon="code"
            gradient="from-indigo-50 to-sky-50"
            code={gameCodeSnippet}
            className="animate-float"
          />
          
          <CodeSnippet 
            position="top-[30%] right-[8%]"
            title="ai.js"
            icon="terminal"
            gradient="from-pink-50 to-purple-50"
            code={aiCodeSnippet}
            delay="1.5s"
            className="animate-float"
          />
        </>
      )}
      
      <HeroContent />
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
