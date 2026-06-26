import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import KineticText from '../components/KineticText';
import Button from '../components/Button';

// Import logos directly from your file system
import a24Logo from '../assets/logos/a24-logo.svg';
import haywardLogo from '../assets/logos/hayward.svg';
import carharttLogo from '../assets/logos/logo-carhartt.svg';
import giantsLogo from '../assets/logos/new-york-giants-1.svg';
import nikeLogo from '../assets/logos/nike-6.svg';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Background autoplay blocked:", e));
    }
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById('portfolio-projects');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const logos = [
    { name: 'A24', src: a24Logo },
    { name: 'Hayward', src: haywardLogo },
    { name: 'Carhartt', src: carharttLogo },
    { name: 'Giants', src: giantsLogo },
    { name: 'Nike', src: nikeLogo },
    { name: 'A24', src: a24Logo },
    { name: 'Hayward', src: haywardLogo },
    { name: 'Carhartt', src: carharttLogo },
    { name: 'Giants', src: giantsLogo },
    { name: 'Nike', src: nikeLogo }
  ];

  return (
    /* OUTER FRAME CLEANUP:
      - Removed heavy top padding from the section entirely (`pt-0 pb-6`).
      - Keeps the ambient video pinned tightly behind the navigation header.
    */
    <section className="relative h-screen lg:min-h-screen w-full bg-[#050505] flex flex-col justify-start lg:justify-center px-6 sm:px-12 md:px-16 overflow-x-hidden pt-0 pb-6 lg:py-24">
      
      {/* Ambient Background Video Frame */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>

      {/* CONTENT INNER GRID LAYER:
        - `items-start lg:items-center` prevents vertical alignment centering inside rows on mobile viewports.
        - `mt-16 sm:mt-20 lg:my-auto` brings text content tight under standard global header boundaries.
      */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center relative z-10 mt-16 sm:mt-20 lg:my-auto py-0 overflow-y-auto lg:overflow-visible scrollbar-none max-h-[calc(100vh-6rem)] lg:max-h-full">
        
        {/* Left Column: Typography Stack */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          <KineticText className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-2 lg:mb-6">
            editing // motion // color
          </KineticText>
          
          <KineticText delay={0.1} className="w-full">
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-white leading-[0.95] mb-3 md:mb-4 lg:mb-8">
              I make sharp, <br /> catchy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">videos.</span>
            </h1>
          </KineticText>
          
          <KineticText delay={0.2}>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-lg font-medium leading-relaxed mb-4 md:mb-6 lg:mb-10">
              Video Editing, Motion graphics, and Color for your projects. My goal is to keep things moving fast and sounding great so people stay focused on your work from start to finish.
            </p>
          </KineticText>
          
          <KineticText delay={0.3}>
            <Button onClick={scrollToWork}>See My Work</Button>
          </KineticText>
        </div>

        {/* Right Column: NLE Showreel Console Block */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full pb-4 lg:pb-0">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none bg-[#0d0d0d] border border-zinc-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-xl p-3 sm:p-4 select-none">
            
            <div className="bg-[#0a0a0a] border border-zinc-900 rounded-lg overflow-hidden w-full">
              {/* NLE Window Header bar */}
              <div className="bg-[#121212] px-4 py-3 flex items-center justify-between border-b border-zinc-900">
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">File</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Edit</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Sequence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">SHOWREEL.seq</span>
                </div>
              </div>
              
              {/* Video Monitor Box */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <iframe 
                  id="vimeo-showreel"
                  src="https://player.vimeo.com/video/1204862002?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  className="absolute top-0 left-0 w-full h-full z-10"
                  title="My Show Reel"
                />

                <div className="absolute top-3 left-3 flex flex-col gap-1 z-20 pointer-events-none">
                  <span className="text-[10px] font-mono font-bold text-white/70 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/5 tracking-wider">
                    TC: 00:00:12:04
                  </span>
                </div>
              </div>

              {/* NLE Core Timeline Section */}
              <div className="bg-[#121212] border-t border-zinc-900 p-4 relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex gap-4 items-center font-mono uppercase">
                    <div className="flex gap-3 text-zinc-600 text-[10px] font-bold">
                      <span>V1</span>
                      <span>A1</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded text-blue-400 text-[10px] font-bold tracking-widest font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      MASTER_CUT
                    </div>
                  </div>
                  
                  <button 
                    onClick={scrollToWork}
                    className="w-full sm:w-auto bg-zinc-800 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 transition-all border border-zinc-750 rounded-sm shadow-sm"
                  >
                    View Projects
                  </button>
                </div>
                
                {/* Structural Multi-track Layers */}
                <div className="space-y-2">
                  <div className="h-8 w-full bg-[#050505] rounded border border-zinc-900 flex items-center px-1.5 relative overflow-hidden">
                    <div className="h-5 w-[42%] bg-zinc-800 border border-zinc-700/60 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-400 font-mono font-bold truncate">B-ROLL_CUT.mp4</span>
                    </div>
                    <div className="absolute top-0 left-[42%] w-[2px] h-full bg-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </div>
                  
                  <div className="h-8 w-full bg-[#050505] rounded border border-zinc-900 flex items-center px-1.5 overflow-hidden">
                    <div className="h-5 w-[65%] bg-zinc-900 border border-zinc-800 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-500 font-mono font-bold truncate">AUDIO_SFX.wav</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Ticker */}
      <div className="w-full hidden lg:flex justify-center opacity-20 pt-6 mt-auto">
        <div 
          className="w-full max-w-5xl overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <motion.div 
            className="flex gap-24 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.name} 
                className="h-11 object-contain" 
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}