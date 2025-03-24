
import React from 'react';
import { Code, Terminal } from 'lucide-react';

interface CodeSnippetProps {
  position: string;
  title: string;
  icon: 'code' | 'terminal';
  gradient: string;
  code: string;
  delay?: string;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  position, 
  title, 
  icon, 
  gradient, 
  code,
  delay = "0s",
  className = ""
}) => {
  return (
    <div className={`absolute ${position} z-0 opacity-90 code-snippet-card ${className}`} style={{animationDelay: delay}}>
      <div className={`bg-white border-2 border-black rounded-lg p-2 transform ${position.includes('right') ? 'rotate-[3deg]' : 'rotate-[-5deg]'} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:${position.includes('right') ? 'rotate-[1deg]' : 'rotate-[-3deg]'}`} style={{
        maxWidth: "280px"
      }}>
        <div className={`flex items-center mb-1 bg-gradient-to-r ${gradient} p-2 rounded-t border-b border-gray-200`}>
          {icon === 'code' ? (
            <Code size={16} className="mr-2 text-indigo-500 animate-pulse-light" />
          ) : (
            <Terminal size={16} className="mr-2 text-pink-500 animate-pulse-light" />
          )}
          <span className="font-terminal text-xs text-purple-700">{title}</span>
        </div>
        <pre className={`text-left text-xs font-terminal bg-gradient-to-br ${gradient.replace('from-', 'from-').replace('to-', 'to-')} p-3 rounded`}>
          <code className="code-highlight" dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
