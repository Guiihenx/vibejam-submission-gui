
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import JurySection from '@/components/JurySection';
import SponsorsSection from '@/components/SponsorsSection';
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
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
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
      <AboutSection />
      <JurySection />
      <SponsorsSection />
      <SubmitSection />
      <Footer />
    </div>
  );
};

export default Index;
