import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import KineticText from '../components/KineticText';

const PROJECTS = [
  { 
    id: 1, 
    folder: "long-form", 
    title: "The Problem With The Diary of a CEO", 
    category: "Investigative Narrative", 
    videoUrl: "https://www.youtube.com/watch?v=II8aZQar7XM", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/II8aZQar7XM/0.jpg",
    client: "Josh Brett",
    role: "Lead Editing, Narrative Pacing, Asset Assembly",
    software: ["Premiere Pro", "After Effects", "Photoshop"],
    highlights: ["Rhythmic Narrative Pacing", "Multi-Source Document Assembly", "Dynamic Structural Flow"]
  },
  { 
    id: 2, 
    folder: "long-form", 
    title: "Desert Storm: The Gulf War 1990-1991", 
    category: "Historical Documentary", 
    videoUrl: "https://www.youtube.com/watch?v=jS-g2JjQSJ4", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/jS-g2JjQSJ4/0.jpg",
    client: "Real Time History",
    role: "Documentary Editing, Archival Management, Lumetri Color Grading",
    software: ["Premiere Pro", "Audition", "Photoshop"],
    highlights: ["Archival Restorations", "Chronological Structural Flow", "Historical Photo Animating"]
  },
  { 
    id: 3, 
    folder: "long-form", 
    title: "The Rise of Nitazenes in Europe", 
    category: "Broadcast Journalism", 
    videoUrl: "https://www.youtube.com/watch?v=j0qUvvzvryc", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/j0qUvvzvryc/0.jpg",
    client: "Bellingcat OSINT",
    role: "Investigative Montage, Audio Restoration, Dynamic Graphic Overlays",
    software: ["Premiere Pro", "After Effects", "Audition"],
    highlights: ["Anonymity Protection Visuals", "Immersive Audio Mastering", "Data-Driven Overlay"]
  },
  { 
    id: 4, 
    folder: "long-form", 
    title: "Why The 2-State Solution Is Impossible Now", 
    category: "Geopolitical Video Essay", 
    videoUrl: "https://www.youtube.com/watch?v=A-2bCKakP7c", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/A-2bCKakP7c/0.jpg",
    client: "RealLifeLore",
    role: "Motion Graphics Design, Kinetic Cartography",
    software: ["After Effects", "Premiere Pro", "Photoshop"],
    highlights: ["Complex Vector Data Rendering", "Fluid Virtual Camera Tracking", "Dynamic Map Matte Masking"]
  },
  { 
    id: 5, 
    folder: "short-form", 
    title: "Sony Brand Spec Commercial", 
    category: "Commercial Showcase", 
    videoUrl: "https://www.youtube.com/watch?v=oYmU8Av_e84", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/oYmU8Av_e84/0.jpg",
    client: "Quiet Noise x Wild Card",
    role: "Cinematography, Advanced Compositing, Commercial Color Match",
    software: ["Premiere Pro", "After Effects", "Photoshop"],
    highlights: ["High-End Luxury Spec B-Roll", "Dynamic Match Cutting", "Sleek Commercial Pacing"]
  },
  { 
    id: 6, 
    folder: "short-form", 
    title: "Guessing Salish's Favorite Artist", 
    category: "High-Retention Short", 
    videoUrl: "https://www.youtube.com/watch?v=096X2CDthvQ", 
    aspect: "aspect-[9/16]", 
    thumb: "https://img.youtube.com/vi/096X2CDthvQ/0.jpg",
    client: "Jordan Matter",
    role: "Retention Strategy Editing, Micro-Animation Asset Design",
    software: ["Premiere Pro", "After Effects"],
    highlights: ["Millisecond Retention Pacing", "High-Contrast Title Pops", "Sound Effect Interjections"]
  },
  { 
    id: 7, 
    folder: "short-form", 
    title: "Losing Muscle While Cutting?", 
    category: "Educational Health Reel", 
    videoUrl: "https://www.youtube.com/watch?v=S4rL5RDYTfw", 
    aspect: "aspect-[9/16]", 
    thumb: "https://img.youtube.com/vi/S4rL5RDYTfw/0.jpg",
    client: "Sean Nalewanyj",
    role: "Vertical Sequence Optimization, Kinetic Typography Engine",
    software: ["Premiere Pro", "After Effects"],
    highlights: ["Aesthetic Text Highlighting", "No-Nonsense Direct Hooking", "Audio Essential Sound Leveling"]
  }
];

export default function ProjectGrid() {
  const [activeFolder, setActiveFolder] = useState('long-form');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  
  const filteredProjects = PROJECTS.filter(p => p.folder === activeFolder);
  const active = PROJECTS.find(p => p.id === activeId) || filteredProjects[0] || PROJECTS[0];

  const handleProjectSelect = (id) => {
    setActiveId(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <section 
      id="portfolio-projects" 
      className="relative z-10 w-full pt-12 pb-8 md:pt-20 md:pb-12 px-4 md:px-12 bg-[#1e1e1e] clear-both block"
    >
      <div className="max-w-[1700px] mx-auto">
        
        {/* Section Title Header */}
        <div className="mb-6 border-b border-zinc-800 pb-5 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <KineticText>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 uppercase tracking-tight">Selected Work</h2>
            <p className="text-zinc-400 mt-2 tracking-[0.25em] uppercase text-xs font-bold">Production Editing Suite</p>
          </KineticText>

          {/* Mobile & Tablet Category Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-full sm:w-auto sm:min-w-[280px] p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between text-white active:bg-zinc-800 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-3 text-left font-mono">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold">📁 SEQUENCE:</span>
              <span className="text-xs font-black tracking-wide text-zinc-100">
                {activeFolder === 'long-form' ? 'Long Form' : 'Shorts & Reels'}
              </span>
            </div>
            <div className="flex items-center justify-center bg-zinc-800 w-6 h-6 rounded-md border border-zinc-700 ml-4">
              <span className="text-zinc-400 text-[10px]">▼</span>
            </div>
          </button>
        </div>

        {/* WORKSPACE FRAME SHELL WITH INTERIOR CUSHION PADDING */}
        <div className="bg-[#141414] border border-[#2c2c2c] rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 select-none min-h-0 w-full">
          
          {/* PANEL 1: STANDALONE MEDIA BIN (Left - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl flex-col lg:min-h-[520px] xl:min-h-[620px] overflow-hidden">
            <div className="flex border-b border-[#2c2c2c] bg-[#222222] flex-shrink-0">
              <button 
                onClick={() => { setActiveFolder('long-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeFolder === 'long-form' ? 'bg-[#141414] text-white font-extrabold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                📁 Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#1473e6]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeFolder === 'short-form' ? 'bg-[#141414] text-white font-extrabold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                📁 Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#141414]">
              <p className="text-[11px] uppercase font-mono font-bold tracking-wider text-zinc-500 px-1 pb-1">Project Bin / Media Pool</p>
              {filteredProjects.map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-3.5 p-2 rounded transition-all border ${activeId === p.id ? 'bg-[#262626] border-[#3e3e3e] text-white shadow-md' : 'border-transparent text-zinc-300 hover:bg-[#1d1d1d] hover:text-white'}`}
                >
                  <img src={p.thumb} className="w-16 h-11 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold truncate tracking-tight">{p.title}</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* PANELS 2 & 3: STANDALONE MONITOR & TIMELINE ENGINE (Center) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl overflow-hidden relative z-10 min-h-0 lg:min-h-[520px] xl:min-h-[620px] w-full">
            
            {/* Monitor Title Header Bar */}
            <div className="bg-[#222222] px-5 py-3 flex justify-between items-center border-b border-[#2c2c2c] flex-shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider truncate block">{active.title}</span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono font-bold text-zinc-400 tracking-widest flex-shrink-0">PROGRAM MONITOR</span>
            </div>
            
            {/* Main Program Playback Output */}
            <div className="flex-1 flex items-center justify-center p-4 bg-[#141414] min-h-0 relative z-20">
              <div className={`relative w-full shadow-2xl rounded overflow-hidden border border-[#2c2c2c] bg-black ${active.aspect === 'aspect-[9/16]' ? 'max-w-[200px] sm:max-w-[240px] mx-auto' : 'max-w-4xl'}`}>
                <ProjectCard videoUrl={active.videoUrl} aspect={active.aspect} />
              </div>
            </div>

            {/* TIMELINE COMPONENT CONTAINER */}
            <div className="bg-[#222222] border-t border-[#2c2c2c] p-4 pb-5 font-mono selection:bg-transparent overflow-hidden relative z-10 w-full flex-shrink-0 block mt-auto">
              <div className="overflow-x-auto w-full scrollbar-none pb-1 min-h-0">
                <div className="min-w-[580px] lg:min-w-0 w-full flex flex-col gap-1.5">

                  {/* Timeline Header Track Controls */}
                  <div className="grid grid-cols-[45px_1fr] items-center mb-2 border-b border-[#2c2c2c] pb-1.5 px-1">
                    <div className="text-[11px] text-sky-400 font-bold tracking-wider">00:00</div>
                    <div className="relative w-full h-3 flex items-end">
                      <div className="absolute inset-x-0 bottom-0 h-1.5 border-b border-zinc-700 flex justify-between px-2 text-[9px] text-zinc-500 font-bold pointer-events-none">
                        <span>|</span><span>.</span><span>|</span><span>.</span><span>|</span><span>.</span><span>|</span>
                      </div>
                      {/* Blue Playhead Tracker */}
                      <div className="absolute left-[35%] bottom-0 w-0.5 h-3.5 bg-[#1473e6] z-10">
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#1473e6] rotate-45 rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Track Sequencer Rows */}
                  <div className="space-y-1 text-[10px] md:text-[11px] w-full">
                    
                    {/* Track V2 - Title FX */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-zinc-400 font-bold text-center border-r border-zinc-700 text-[10px] bg-[#1a1a1a] py-0.5 rounded-l select-none">V2</div>
                      <div className="relative h-5 md:h-6 flex gap-1 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="w-[30%] h-full bg-[#5d4a35] border-r border-zinc-800 text-amber-200 flex items-center px-1.5 truncate font-bold">
                          [T] Title Overlays
                        </div>
                        <div className="w-[10%]"></div>
                        <div className="w-[45%] h-full bg-[#2a4454] border-x border-zinc-800 text-sky-200 flex items-center px-1.5 truncate font-bold">
                          B-ROLL_Sony_Cut02.mov
                        </div>
                      </div>
                    </div>

                    {/* Track V1 - Primary Video Sequence */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-white font-bold text-center border-r border-zinc-700 text-[10px] bg-[#1473e6] py-0.5 rounded-l select-none">V1</div>
                      <div className="relative h-5 md:h-6 flex gap-0.5 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="w-[40%] h-full bg-[#3c3c3c] border-r border-zinc-900 text-zinc-100 flex items-center px-1.5 truncate font-bold">
                          A-ROLL_Interview_Main
                        </div>
                        <div className="w-[25%] h-full bg-[#4a4a4a] border-r border-zinc-900 text-zinc-100 flex items-center px-1.5 truncate font-bold">
                          A-ROLL_Angle_B
                        </div>
                        <div className="w-[35%] h-full bg-[#3c3c3c] text-zinc-300 flex items-center px-1.5 truncate font-bold">
                          Outro_Sequence
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-[#2c2c2c] my-0.5 w-full"></div>

                    {/* Track A1 - Voice Mix */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-white font-bold text-center border-r border-zinc-700 text-[10px] bg-[#1473e6] py-0.5 rounded-l select-none">A1</div>
                      <div className="relative h-5 md:h-6 flex gap-0.5 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="w-[40%] h-full bg-[#2a4d3a] border-r border-zinc-900 text-emerald-200 flex items-center px-1.5 truncate font-bold">
                          🔊 Voice_Norm.wav
                        </div>
                        <div className="w-[25%] h-full bg-[#213b2c] border-r border-zinc-900 text-emerald-300/90 flex items-center px-1.5 truncate font-bold">
                          🔊 VO_P2.wav
                        </div>
                        <div className="w-[35%] h-full bg-[#2a4d3a] text-emerald-200 flex items-center px-1.5 truncate font-bold">
                          🔊 Outro.wav
                        </div>
                      </div>
                    </div>

                    {/* Track A2 - Foley Design & Score */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-zinc-400 font-bold text-center border-r border-zinc-700 text-[10px] bg-[#1a1a1a] py-0.5 rounded-l select-none">A2</div>
                      <div className="w-full h-5 md:h-6 bg-[#1c1c1c] rounded-r border border-[#2d2d2d] flex items-center overflow-hidden">
                        <div className="w-[90%] h-full bg-[#1f3f42] text-teal-200 flex items-center px-1.5 truncate font-bold">
                          🎵 Ambient_Music_Bed.mp3
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE / TABLET INJECTED INFOSPECTOR SYSTEM */}
            <div className="lg:hidden w-full bg-[#181818] border-t border-[#2c2c2c] p-5 space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold bg-[#111] text-sky-400 border border-zinc-800/60 px-2 py-1 rounded inline-block mb-3.5 tracking-wider">
                  METADATA INSPECTOR // STATUS LIVE
                </span>
                <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Project / Client</p>
                <p className="text-xl text-white font-black tracking-tight leading-tight">{active.client}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Core Function</p>
                  <div className="bg-[#111111] border border-[#222222] px-3.5 py-2.5 rounded text-xs text-zinc-300 font-medium leading-relaxed">
                    {active.role}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Engine Pipeline</p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.software.map((tool, index) => (
                      <span key={index} className="bg-[#242424] border border-zinc-800 text-zinc-200 text-[10px] font-mono px-2.5 py-1 rounded shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Key Performance Markers</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-zinc-300 font-medium leading-snug">
                      <span className="text-sky-500 mt-0.5 text-xs">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#262626] pt-4">
                <div className="grid grid-cols-2 gap-2 text-center text-white font-mono text-[10px]">
                  <div className="bg-[#111111] border border-[#222222] p-2 rounded">
                    <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Output</span> 
                    {active.aspect === 'aspect-[9/16]' ? '9:16 Vertical' : '16:9 Master'}
                  </div>
                  <div className="bg-[#111111] border border-[#222222] p-2 rounded">
                    <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Render Profile</span> 
                    ProRes 422
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* PANEL 4: STANDALONE METADATA INSPECTOR (Right - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl flex-col p-5 overflow-y-auto lg:min-h-[520px] xl:min-h-[620px]">
            {/* Asset Preview Window */}
            <div className="relative mb-4 border border-[#2c2c2c] rounded overflow-hidden shadow-inner flex-shrink-0">
              <img src={active.thumb} className="w-full h-28 object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="mb-4">
              <span className="text-[10px] font-mono font-bold bg-zinc-900 text-sky-400 border border-zinc-800 px-2 py-1 rounded inline-block">
                METADATA ENGINE
              </span>
            </div>
            
            <div className="space-y-5 flex-grow">
              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">Project / Client</p>
                <p className="text-xl text-white font-black tracking-tight leading-tight">{active.client}</p>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Core Function</p>
                <div className="bg-[#141414] border border-[#2c2c2c] px-3.5 py-2.5 rounded text-xs text-zinc-200 font-medium leading-relaxed shadow-inner">
                  {active.role}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Engine Pipeline</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.software.map((tool, index) => (
                    <span key={index} className="bg-[#262626] border border-[#3a3a3a] text-zinc-200 text-[10px] font-mono px-2.5 py-1 rounded shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Key Performance Markers</p>
                <ul className="space-y-2">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium leading-snug">
                      <span className="text-sky-500 mt-0.5 text-xs">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[#2c2c2c] flex-shrink-0">
              <div className="grid grid-cols-2 gap-2 text-center text-white font-mono text-[10px]">
                <div className="bg-[#141414] border border-[#2c2c2c] p-2 rounded">
                  <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Output</span> 
                  {active.aspect === 'aspect-[9/16]' ? '9:16 Vertical' : '16:9 Master'}
                </div>
                <div className="bg-[#141414] border border-[#2c2c2c] p-2 rounded">
                  <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Render Profile</span> 
                  ProRes 422
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING ISLAND MODAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:hidden">
          <div className="bg-[#1a1a1a] w-full max-w-xl max-h-[80vh] rounded-2xl border border-[#3c3c3c] flex flex-col overflow-hidden shadow-2xl my-auto mx-2">
            <div className="p-4 border-b border-[#2c2c2c] flex justify-between items-center bg-[#222222]">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold">Select Source File</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-xs hover:bg-zinc-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex border-b border-[#2c2c2c] bg-[#222222]">
              <button 
                onClick={() => { setActiveFolder('long-form'); setActiveId(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.1em] relative ${activeFolder === 'long-form' ? 'text-white font-black bg-[#141414]' : 'text-zinc-400'}`}
              >
                Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); setActiveId(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.1em] relative ${activeFolder === 'short-form' ? 'text-white font-black bg-[#141414]' : 'text-zinc-400'}`}
              >
                Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#141414]">
              {PROJECTS.filter(p => p.folder === activeFolder).map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-4 p-2 rounded border transition-all ${activeId === p.id ? 'bg-[#262626] border-[#3a3a3a] text-white' : 'border-[#222222] bg-[#1a1a1a] text-zinc-300 hover:bg-[#222222]'}`}
                >
                  <img src={p.thumb} className="w-16 h-11 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold truncate">{p.title}</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}