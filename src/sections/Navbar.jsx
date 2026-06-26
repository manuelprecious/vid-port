import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Button from '../components/Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: '01', name: 'Portfolio', href: '#portfolio-projects' },
    { id: '02', name: 'Services', href: '#services' },
    { id: '03', name: 'Contact', href: '#contact' }
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Motion Variants for Premium Menu Reveal
  const sidebarVariants = {
    hidden: { 
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      opacity: 0 
    },
    visible: { 
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 40, 
        restDelta: 2,
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    },
    exit: { 
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      opacity: 0,
      transition: { 
        ease: [0.16, 1, 0.3, 1], 
        duration: 0.6,
        staggerChildren: 0.05,
        staggerDirection: -1
      } 
    }
  };

  const linkVariants = {
    hidden: { y: 60, opacity: 0, rotate: 3 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 } 
    },
    exit: { 
      y: -30, 
      opacity: 0,
      transition: { ease: 'easeIn', duration: 0.2 } 
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-zinc-900/80 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-50"
    >
      <div className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center relative z-20">
        
        {/* Typographic Logo */}
        <a href="/portfolio" className="flex items-baseline gap-1.5 select-none group">
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            Manuel
          </span>
          <span className="text-xl font-serif italic text-zinc-400 group-hover:text-white transition-colors">
            Precious
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="hover:text-white transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-5">
          
          {/* Availability Badge */}
          <div className="hidden sm:flex items-center gap-2.5 text-[10px] text-zinc-300 font-bold uppercase tracking-widest border border-zinc-800 bg-[#121212] px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available — 2026
          </div>

          {/* Let's Talk Button (Desktop) */}
          <div className="hidden lg:block">
             <Button onClick={scrollToContact}>Let's Talk</Button>
          </div>

          {/* iPad & Mobile Responsive Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative rounded-full bg-zinc-900/40 border border-zinc-800/60"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
          
        </div>
      </div>

      {/* Full-Screen Motion Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-[#060606] lg:hidden z-10 flex flex-col justify-between px-8 sm:px-16 pt-32 pb-16 overflow-hidden"
          >
            {/* Tech UI Layout Guide Borders */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] border-x border-dashed border-white mx-8 sm:mx-16 my-24" />
            <div className="absolute top-24 right-8 sm:right-16 font-mono text-[9px] text-zinc-600 tracking-widest hidden sm:block">
              INDEX // MENU_SYS_V2
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-8 relative z-20">
              {navItems.map((item) => (
                <div key={item.name} className="overflow-hidden py-1 flex items-baseline gap-4 group">
                  <motion.span 
                    variants={linkVariants}
                    className="font-mono text-xs text-blue-500 font-bold"
                  >
                    {item.id}
                  </motion.span>
                  <motion.a 
                    variants={linkVariants}
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                </div>
              ))}
            </nav>
            
            {/* Lower Drawer Section */}
            <motion.div 
              variants={linkVariants}
              className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-20"
            >
              <div className="flex flex-col gap-1 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                <span>© 2026 Portfolio Core</span>
              </div>
              <div className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto justify-center px-8 py-4 text-xs" onClick={scrollToContact}>
                  Let's Talk
                </Button>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}