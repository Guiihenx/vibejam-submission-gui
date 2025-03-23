
import React from 'react';
import { Terminal } from 'lucide-react';

const YearBadge: React.FC = () => {
  return (
    <div className="inline-block mb-8 code-year-badge">
      <div className="font-terminal border-2 border-black rounded-full px-3 py-1.5 bg-gradient-to-r from-indigo-50 via-sky-50 to-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex items-center space-x-2">
          <Terminal size={16} className="text-sky-500 code-spin-slow" />
          <code className="text-lg">
            <span className="text-indigo-500">&lt;</span>
            <span className="text-sky-600 code-glow">2025</span>
            <span className="text-indigo-500">/&gt;</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default YearBadge;
