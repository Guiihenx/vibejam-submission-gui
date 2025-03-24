
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SponsorsSection from '@/components/SponsorsSection';
import AboutSection from '@/components/AboutSection';
import JurySection from '@/components/JurySection';
import SubmitSection from '@/components/SubmitSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Enable smooth scrolling
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Add offset for mobile to account for the header
            const isMobile = window.innerWidth < 768;
            const offset = isMobile ? -80 : -20;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <SponsorsSection />
      <AboutSection />
      <JurySection />
      <SubmitSection />
      <Footer />
    </div>
  );
};

export default Index;
