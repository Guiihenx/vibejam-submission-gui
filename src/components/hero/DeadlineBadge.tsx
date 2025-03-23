
import React from 'react';
import { AlertTriangle, CalendarClock } from 'lucide-react';

const DeadlineBadge: React.FC = () => {
  return (
    <div className="inline-block deadline-badge transform transition-all duration-300 hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center gap-2 bg-white border-2 border-black rounded-md px-4 py-2 shadow-md font-terminal text-lg">
        <AlertTriangle className="text-amber-500 w-5 h-5" />
        <CalendarClock className="text-indigo-500 w-5 h-5 mr-1" />
        <span className="bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent font-semibold">
          Game deadline: 1 April 2025
        </span>
      </div>
    </div>
  );
};

export default DeadlineBadge;
