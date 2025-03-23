
import React from 'react';
import FloatingIcons from './hero/FloatingIcons';
import GamepadAnimation from './hero/GamepadAnimation';
import RocketAnimation from './hero/RocketAnimation';
import CodeSnippet from './hero/CodeSnippet';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero: React.FC = () => {
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
      <GamepadAnimation />
      <RocketAnimation />
      
      <FloatingIcons />
      
      <CodeSnippet 
        position="bottom-[30%] left-[8%]"
        title="game.js"
        icon="code"
        gradient="from-indigo-50 to-sky-50"
        code={gameCodeSnippet}
      />
      
      <CodeSnippet 
        position="top-[35%] right-[8%]"
        title="ai.js"
        icon="terminal"
        gradient="from-pink-50 to-purple-50"
        code={aiCodeSnippet}
        delay="1.5s"
      />
      
      <HeroContent />
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
