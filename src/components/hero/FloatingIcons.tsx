
import React from 'react';
import { Star, Sparkles, GamepadIcon, Joystick, TerminalSquare, CodeSquare, Bug } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingIcons: React.FC = () => {
  const isMobile = useIsMobile();
  const iconScale = isMobile ? 0.6 : 1;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating code and game icons with pastel colors - scaled down for mobile */}
      <div className="absolute top-20 left-10 animate-float-element opacity-80">
        <Star size={50 * iconScale} className="text-indigo-200" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float-element" style={{
        animationDelay: "2s"
      }}>
        <Star size={70 * iconScale} className="text-sky-200" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float-element" style={{
        animationDelay: "1.5s"
      }}>
        <Sparkles size={60 * iconScale} className="text-violet-200" />
      </div>
      <div className="absolute top-1/4 left-[15%] animate-float-element" style={{
        animationDelay: "3.2s"
      }}>
        <GamepadIcon size={40 * iconScale} className="text-green-200" />
      </div>
      <div className="absolute bottom-1/3 left-[20%] animate-float-element" style={{
        animationDelay: "2.7s"
      }}>
        <Joystick size={45 * iconScale} className="text-pink-200" />
      </div>
      <div className="absolute top-2/3 right-[25%] animate-float-element" style={{
        animationDelay: "1.2s"
      }}>
        <TerminalSquare size={38 * iconScale} className="text-amber-200" />
      </div>
      <div className="absolute top-1/2 left-[30%] animate-float-element" style={{
        animationDelay: "4s"
      }}>
        <CodeSquare size={42 * iconScale} className="text-blue-200" />
      </div>
      <div className="absolute bottom-1/4 right-[30%] animate-float-element" style={{
        animationDelay: "3.5s"
      }}>
        <Bug size={35 * iconScale} className="text-purple-200" />
      </div>
    </div>
  );
};

export default FloatingIcons;
