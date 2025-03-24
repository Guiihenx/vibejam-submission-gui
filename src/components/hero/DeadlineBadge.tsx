
import React from 'react';
import { AlertTriangle, CalendarClock, Sparkles } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const DeadlineBadge: React.FC = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="inline-block deadline-badge transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer group">
          <div className="flex items-center gap-2 bg-white border-2 border-black rounded-md px-4 py-2 shadow-md font-terminal text-lg group-hover:shadow-lg group-hover:border-indigo-500 transition-all duration-300">
            <AlertTriangle className="text-amber-500 w-5 h-5 group-hover:animate-pulse" />
            <CalendarClock className="text-indigo-500 w-5 h-5 mr-1 group-hover:text-purple-500 transition-colors duration-300" />
            <span className="bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent font-semibold">
              Game deadline: 1 April 2025
            </span>
            <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-pink-400 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 font-terminal text-base border-2 border-black shadow-lg bg-white">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-amber-500 w-5 h-5" />
            <span className="font-bold text-indigo-600">Important Deadline!</span>
          </div>
          <p className="text-gray-700">
            Submit your vibecoded game before April 1st, 2025 to participate in the jam!
          </p>
          <div className="flex justify-end">
            <Sparkles className="text-purple-500 w-4 h-4 animate-pulse" />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default DeadlineBadge;
