import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from assets/images using the exact filenames from your tree
import VideoEditingImg from '../assets/images/Efficient-Video-Editing-Workflow.webp';
import MotionDesignImg from '../assets/images/Motion Design.jpg';
import AudioPostImg from '../assets/images/Audio Post production.jpg';

const SERVICES = [
  {
    num: "01",
    title: "Video Editing",
    tag: "Narrative & Flow",
    image: VideoEditingImg,
    desc: "High-retention video tailoring focused on narrative structure, seamless pacing rhythms, and deep engagement analytics optimization.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Frame.io"],
    capabilities: ["Long-form Documentaries", "YouTube Retention Engines", "Pacing & Structural Cuts"]
  },
  {
    num: "02",
    title: "Motion Graphics",
    tag: "Visual Impact",
    image: MotionDesignImg,
    desc: "Dynamic visual architecture translating complex data maps, modern kinetic typography overlays, and custom UI sequences into video layers.",
    tools: ["Adobe After Effects", "Illustrator", "Blender"],
    capabilities: ["Kinetic Typography maps", "2D/3D Tracking Integration", "Premium Infographics"]
  },
  {
    num: "03",
    title: "Audio Post-Production",
    tag: "Sonic Precision",
    image: AudioPostImg,
    desc: "Complete sonic balancing including immersive spatial mastering, multi-source dialogue repairs, sound design, and custom sound effects layering.",
    tools: ["Pro Tools", "Adobe Audition", "iZotope RX 10"],
    capabilities: ["Dialogue Rescue & Levelling", "Sound Design & SFX Wraps", "Loudness Compliance Mapping"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section 
      id="services" 
      className="relative block clear-both z-10 py-16 lg:py-24 bg-[#0A0A0A] w-full border-t border-zinc-900/60 snap-start overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 w-full flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block */}
        <div className="w-full border-b border-zinc-900/40 pb-5">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
            Services
          </h2>
        </div>

        {/* Structural Matrix Split - Rebalanced to 3:9 to give the right terminal maximum span */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Side: Compact Navigation Links (3 Columns) */}
          <div className="lg:col-span-3 relative w-full">
            {/* Visual fade cue on mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-20 lg:hidden" />
            
            <div className="flex flex-row lg:flex-col gap-3 w-full overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory pr-10 lg:pr-0">
              {SERVICES.map((service, index) => (
                <button
                  key={service.num}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center gap-5 text-left p-5 lg:p-6 transition-all duration-300 border-l-2 border-t-0 border-r-0 border-b-0 rounded-r-md w-[82%] sm:w-[55%] lg:w-full shrink-0 snap-start outline-none ${
                    activeTab === index 
                      ? 'border-white bg-white/[0.02]' 
                      : 'border-zinc-900 bg-transparent hover:border-zinc-800 hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border transition-colors flex items-center justify-center shrink-0 ${activeTab === index ? 'border-white' : 'border-zinc-800 group-hover:border-zinc-600'}`}>
                    {activeTab === index && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                    )}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <span className={`block text-[11px] font-mono mb-0.5 uppercase tracking-widest transition-colors ${activeTab === index ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {service.num}
                    </span>
                    <h3 className={`text-lg lg:text-xl font-black uppercase tracking-tight transition-colors truncate ${activeTab === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Showcase Terminal Expanded (9 Columns) */}
          <div className="lg:col-span-9 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full bg-[#0F0F0F] border border-zinc-900 rounded-xl p-6 lg:p-10 shadow-2xl"
              >
                {/* Internal Layout Grid: Reallocated proportions inside the panel for maximum visual weight */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* Left inner side: Panoramic Image Frame (Assigned 7 of 12 internal columns) */}
                  <div className="xl:col-span-7 relative w-full aspect-video bg-black border border-zinc-900/80 rounded-lg overflow-hidden group shadow-lg">
                    <img 
                      src={SERVICES[activeTab].image} 
                      alt={SERVICES[activeTab].title}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/20 to-transparent flex items-center justify-start pointer-events-none">
                      <span className="px-3.5 py-1.5 bg-black/90 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-widest border border-zinc-800 rounded-sm">
                        {SERVICES[activeTab].tag}
                      </span>
                    </div>
                  </div>

                  {/* Right inner side: Wide Text Details Engine (Assigned 5 of 12 internal columns) */}
                  <div className="xl:col-span-5 flex flex-col gap-6 justify-between min-h-full">
                    
                    {/* Description Module */}
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <h4 className="text-zinc-500 uppercase font-bold text-[11px] font-mono tracking-widest">
                          System Module // 0{SERVICES[activeTab].num}
                        </h4>
                      </div>
                      <p className="text-zinc-300 text-sm lg:text-base leading-relaxed font-medium">
                        {SERVICES[activeTab].desc}
                      </p>
                    </div>

                    {/* Capabilities Cluster */}
                    <div className="border-t border-zinc-900/80 pt-5">
                      <h5 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Core Scope
                      </h5>
                      <ul className="space-y-2.5">
                        {SERVICES[activeTab].capabilities.map((capability, i) => (
                          <li key={i} className="text-xs lg:text-sm text-zinc-200 font-medium flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Production Pipeline Stack */}
                    <div className="border-t border-zinc-900/80 pt-5">
                      <h5 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Production Pipeline
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES[activeTab].tools.map((tool, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded font-medium tracking-wide"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}