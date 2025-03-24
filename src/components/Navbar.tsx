
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Joystick, Sparkles, Cpu, Braces, GamepadIcon, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { href: "#about", icon: <Code className="w-4 h-4 mr-1.5 text-indigo-500" />, label: "About" },
    { href: "#jury", icon: <Cpu className="w-4 h-4 mr-1.5 text-violet-500" />, label: "Jury" },
    { href: "#sponsors", icon: <Braces className="w-4 h-4 mr-1.5 text-green-500" />, label: "Sponsors" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 md:px-6 lg:px-12",
        scrolled 
          ? "bg-white bg-opacity-95 border-b-2 border-black" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-terminal text-xl md:text-2xl flex items-center group">
          <Joystick className="w-5 h-5 md:w-6 md:h-6 mr-2 text-indigo-600 group-hover:text-pink-500 transition-colors duration-300 animate-pulse" />
          <div className="relative">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">#vibejam</span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="font-terminal text-lg hover:underline transition-all duration-300 hover:text-indigo-600 flex items-center"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
          
          <Button 
            asChild
            variant="submit"
            size="sm"
            className="px-4 py-2 text-sm font-terminal"
          >
            <a 
              href="http://jam.pieter.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GamepadIcon className="w-4 h-4 mr-1.5" />
              <span>Submit Entry</span>
              <Sparkles className="w-4 h-4 ml-1.5" />
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[385px] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 flex items-center justify-between border-b border-gray-200">
                  <div className="font-terminal text-xl flex items-center">
                    <Joystick className="w-5 h-5 mr-2 text-indigo-600" />
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">#vibejam</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-auto py-6 px-6">
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <a 
                        key={item.label}
                        href={item.href} 
                        className="font-terminal text-lg py-2 flex items-center border-b border-gray-100 pb-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="mt-auto p-6 border-t border-gray-200">
                  <Button 
                    asChild
                    variant="submit"
                    size="lg"
                    className="w-full py-6 text-base font-terminal"
                  >
                    <a 
                      href="http://jam.pieter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <GamepadIcon className="w-5 h-5 mr-2" />
                      <span>Submit Entry</span>
                      <Sparkles className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
