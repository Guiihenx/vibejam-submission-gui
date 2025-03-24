
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const DeadlineBadge: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full py-2 px-4 md:py-3 md:px-6 font-terminal text-sm md:text-base transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-50 hover:border-indigo-400">
      <Calendar className={`text-pink-500 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
      <span className="font-semibold">Deadline:</span>
      <span>April 1, 2025</span>
      <Clock className={`text-indigo-500 ml-1 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
    </div>
  );
};

export default DeadlineBadge;
