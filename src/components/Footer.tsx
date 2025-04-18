
import React from 'react';
import { Twitter, Github } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="font-terminal text-xl md:text-2xl font-bold mb-4">#vibejam</div>
            <p className="font-terminal opacity-70 mb-6 text-sm md:text-base">
              The first game jam for AI vibecoded games. Push the boundaries of game development with AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-terminal text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#about" className="font-terminal opacity-70 hover:opacity-100 transition-opacity">About</a>
              </li>
              <li>
                <a href="#jury" className="font-terminal opacity-70 hover:opacity-100 transition-opacity">Jury</a>
              </li>
              <li>
                <a href="#sponsors" className="font-terminal opacity-70 hover:opacity-100 transition-opacity">Sponsors</a>
              </li>
              <li>
                <a href="http://jam.pieter.com" target="_blank" rel="noopener noreferrer" className="font-terminal opacity-70 hover:opacity-100 transition-opacity">Submit Entry</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-terminal text-lg font-semibold mb-4">Subscribe</h3>
            <p className="font-terminal opacity-70 mb-4 text-sm md:text-base">
              Stay updated with the latest news about #vibejam.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white bg-opacity-10 border-2 border-white border-opacity-50 px-4 py-2 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-b-none focus:outline-none w-full mb-2 sm:mb-0 font-terminal"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-lg sm:rounded-l-none rounded-l-lg sm:rounded-t-none hover:bg-opacity-90 transition-colors font-terminal">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white border-opacity-10 text-center opacity-60 text-sm font-terminal">
          <p>© 2025 #vibejam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
