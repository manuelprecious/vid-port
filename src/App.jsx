import { useEffect, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import Services from './sections/Services';
import Footer from './sections/Footer';

export default function App() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentSectionIndex = 0;
    const sections = container.querySelectorAll('.snap-section');

    const syncSectionIndex = () => {
      if (isScrolling.current) return;
      
      const scrollTop = container.scrollTop;
      let closestIndex = 0;
      let minDistance = Math.abs(sections[0].offsetTop - scrollTop);

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - scrollTop);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      currentSectionIndex = closestIndex;
    };

    const handleWheel = (e) => {
      // Avoid scroll-jacking if screen is narrow OR short (like Nest Hubs in landscape)
      if (window.innerWidth < 1024 || window.innerHeight < 780) return;

      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) currentSectionIndex++;
      } else {
        if (currentSectionIndex > 0) currentSectionIndex--;
      }

      const targetSection = sections[currentSectionIndex];
      if (targetSection) {
        isScrolling.current = true;
        
        container.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', syncSectionIndex);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', syncSectionIndex);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 antialiased selection:bg-white selection:text-black lg:short:h-auto lg:h-screen lg:overflow-hidden relative">
      {/* 1. Minimal Navigation Header */}
      <Navbar />

      {/* Main Content Assembly Container */}
      <main ref={containerRef} className="relative h-full overflow-y-auto scrollbar-none scroll-smooth">
        
        {/* 2. Hook section holding desktop/mobile showreels */}
        <div id="hero" className="snap-section w-full h-auto lg:short:h-auto lg:h-screen flex flex-col justify-center">
          <Hero />
        </div>
        
        {/* 3. The asymmetric grid mapping out the projects */}
        <div id="portfolio-projects" className="snap-section w-full h-auto lg:short:h-auto lg:h-screen">
          <ProjectGrid />
        </div>
        
        {/* 4. Technical services with micro-loop text backgrounds */}
        <div id="services" className="snap-section w-full h-auto lg:short:h-auto lg:h-screen">
          <Services />
        </div>

        {/* 5. Contact CTA section with the final midnight loop */}
        <div id="contact" className="snap-section w-full h-auto lg:short:h-auto lg:h-screen">
          <Footer />
        </div>

      </main>
    </div>
  );
}