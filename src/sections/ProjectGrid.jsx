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
      className="relative z-10 w-full pt-4 md:pt-6 pb-20 md:pb-28 px-4 md:px-12 bg-[#1e222b] font-sans clear-both block"
    >
      <div className="max-w-[1700px] mx-auto">
        
        {/* Section Title Header - Margins tightened to shift main grid upward */}
        <div className="mb-4 border-b border-[#2d3139] pb-4 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <KineticText>
            <h2 className="text-4xl md:text-5xl font-black text-[#ffffff] uppercase tracking-tight font-sans">Selected Work</h2>
            <p className="text-[#61afef] mt-1.5 tracking-[0.3em] uppercase text-xs font-bold font-mono">Production Editing Suite // v2.0</p>
          </KineticText>

          {/* Mobile & Tablet Category Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-full sm:w-auto sm:min-w-[280px] p-4 bg-[#181a1f] border border-[#2d3139] rounded-xl flex items-center justify-between text-[#abb2bf] active:bg-[#21252b] transition-colors shadow-lg"
          >
            <div className="flex items-center gap-3 text-left font-mono">
              <span className="text-xs uppercase tracking-wider text-[#61afef] font-bold">📁 SEQUENCE:</span>
              <span className="text-sm font-black tracking-wide text-white">
                {activeFolder === 'long-form' ? 'Long Form' : 'Shorts & Reels'}
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#21252b] w-6 h-6 rounded-md border border-[#2d3139] ml-4">
              <span className="text-[#abb2bf] text-xs">▼</span>
            </div>
          </button>
        </div>

        {/* WORKSPACE FRAME SHELL */}
        <div className="bg-[#181a1f] border border-[#2d3139] rounded-2xl shadow-[0_35px_75px_-10px_rgba(0,0,0,0.6)] p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 select-none min-h-0 w-full">
          
          {/* PANEL 1: MEDIA BIN (Left - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#21252b] border border-[#2d3139] rounded-xl flex-col lg:min-h-[580px] xl:min-h-[680px] overflow-hidden">
            <div className="flex border-b border-[#181a1f] bg-[#1e222b] flex-shrink-0">
              <button 
                onClick={() => { setActiveFolder('long-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-black uppercase tracking-[0.15em] transition-all relative font-mono ${activeFolder === 'long-form' ? 'bg-[#21252b] text-white' : 'text-[#5c6370] hover:text-[#abb2bf]'}`}
              >
                📁 Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#61afef]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-black uppercase tracking-[0.15em] transition-all relative font-mono ${activeFolder === 'short-form' ? 'bg-[#21252b] text-white' : 'text-[#5c6370] hover:text-[#abb2bf]'}`}
              >
                📁 Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#61afef]"></div>}
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#21252b]">
              <p className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#e5c07b] px-1 pb-1">Project Bin / Media Pool</p>
              {filteredProjects.map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-3.5 p-2 rounded-lg transition-all border ${activeId === p.id ? 'bg-[#2c313c] border-[#4b5263] text-white shadow-md' : 'border-transparent text-[#abb2bf] hover:bg-[#2c313c]/50 hover:text-white'}`}
                >
                  <img src={p.thumb} className="w-18 h-12 object-cover rounded border border-[#181a1f] flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-sm font-bold truncate tracking-tight text-[#c8ccd4]">{p.title}</p>
                    <p className="text-[11px] text-[#5c6370] font-mono mt-0.5 truncate font-medium">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* PANELS 2 & 3: MONITOR & TIMELINE ENGINE (Center) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col bg-[#21252b] border border-[#2d3139] rounded-xl overflow-hidden relative z-10 min-h-0 lg:min-h-[580px] xl:min-h-[680px] w-full">
            
            {/* Monitor Title Header Bar */}
            <div className="bg-[#1e222b] px-5 py-3.5 flex justify-between items-center border-b border-[#181a1f] flex-shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e06c75] flex-shrink-0 animate-pulse"></span>
                <span className="text-sm font-mono font-bold text-white uppercase tracking-wider truncate block">{active.title}</span>
              </div>
              <span className="hidden sm:block text-xs font-mono font-black text-[#e5c07b] tracking-widest flex-shrink-0">PROGRAM MONITOR</span>
            </div>
            
            {/* Main Program Playback Output */}
            <div className="flex-1 flex items-center justify-center p-4 bg-[#21252b] min-h-0 relative z-20">
              <div className={`relative w-full shadow-2xl rounded-lg overflow-hidden border border-[#181a1f] bg-black ${active.aspect === 'aspect-[9/16]' ? 'max-w-[200px] sm:max-w-[240px] mx-auto' : 'max-w-4xl'}`}>
                <ProjectCard videoUrl={active.videoUrl} aspect={active.aspect} />
              </div>
            </div>

            {/* TIMELINE COMPONENT CONTAINER */}
            <div className="bg-[#1e222b] border-t border-[#181a1f] p-4 pb-5 font-mono selection:bg-transparent overflow-hidden relative z-10 w-full flex-shrink-0 block mt-auto">
              <div className="overflow-x-auto w-full scrollbar-none pb-1 min-h-0">
                <div className="min-w-[580px] lg:min-w-0 w-full flex flex-col gap-2">

                  {/* Timeline Header Track Controls */}
                  <div className="grid grid-cols-[45px_1fr] items-center mb-1.5 border-b border-[#2d3139] pb-2 px-1">
                    <div className="text-xs text-[#61afef] font-black tracking-wider">00:00</div>
                    <div className="relative w-full h-3 flex items-end">
                      <div className="absolute inset-x-0 bottom-0 h-1.5 border-b border-[#2d3139] flex justify-between px-2 text-[10px] text-[#5c6370] font-bold pointer-events-none">
                        <span>|</span><span>.</span><span>|</span><span>.</span><span>|</span><span>.</span><span>|</span>
                      </div>
                      <div className="absolute left-[35%] bottom-0 w-0.5 h-3.5 bg-[#61afef] z-10">
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#61afef] rotate-45 rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Track Sequencer Rows */}
                  <div className="space-y-1.5 text-xs w-full">
                    
                    {/* Track V2 - Title FX */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-[#abb2bf] font-black text-center border-r border-[#181a1f] text-xs bg-[#21252b] py-1 rounded-l select-none">V2</div>
                      <div className="relative h-7 md:h-8 flex gap-1 w-full bg-[#21252b] rounded-r border border-[#181a1f] overflow-hidden shadow-inner">
                        <div className="w-[30%] h-full bg-[#c678dd] border-r border-[#181a1f] text-[#21252b] flex items-center px-2.5 truncate font-black text-xs">
                          [T] Title Overlays
                        </div>
                        <div className="w-[10%]"></div>
                        <div className="w-[45%] h-full bg-[#61afef]/25 border-x border-[#181a1f] text-[#61afef] flex items-center px-2.5 truncate font-black text-xs">
                          B-ROLL_Sony_Cut02.mov
                        </div>
                      </div>
                    </div>

                    {/* Track V1 - Primary Video Sequence */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-white font-black text-center border-r border-[#181a1f] text-xs bg-[#61afef] py-1 rounded-l select-none">V1</div>
                      <div className="relative h-7 md:h-8 flex gap-0.5 w-full bg-[#21252b] rounded-r border border-[#181a1f] overflow-hidden shadow-inner">
                        <div className="w-[40%] h-full bg-[#4b5263] border-r border-[#181a1f] text-white flex items-center px-2.5 truncate font-black text-xs">
                          A-ROLL_Interview_Main
                        </div>
                        <div className="w-[25%] h-full bg-[#3e4451] border-r border-[#181a1f] text-[#c8ccd4] flex items-center px-2.5 truncate font-black text-xs">
                          A-ROLL_Angle_B
                        </div>
                        <div className="w-[35%] h-full bg-[#4b5263] text-white flex items-center px-2.5 truncate font-black text-xs">
                          Outro_Sequence
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-[#2d3139] my-1 w-full"></div>

                    {/* Track A1 - Voice Mix */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-white font-black text-center border-r border-[#181a1f] text-xs bg-[#98c379] py-1 rounded-l select-none">A1</div>
                      <div className="relative h-7 md:h-8 flex gap-0.5 w-full bg-[#21252b] rounded-r border border-[#181a1f] overflow-hidden shadow-inner">
                        <div className="w-[40%] h-full bg-[#98c379]/25 border-r border-[#181a1f] text-[#98c379] flex items-center px-2.5 truncate font-black text-xs">
                          🔊 Voice_Norm.wav
                        </div>
                        <div className="w-[25%] h-full bg-[#98c379]/15 border-r border-[#181a1f] text-[#98c379]/90 flex items-center px-2.5 truncate font-black text-xs">
                          🔊 VO_P2.wav
                        </div>
                        <div className="w-[35%] h-full bg-[#98c379]/25 text-[#98c379] flex items-center px-2.5 truncate font-black text-xs">
                          🔊 Outro.wav
                        </div>
                      </div>
                    </div>

                    {/* Track A2 - Foley Design & Score */}
                    <div className="grid grid-cols-[45px_1fr] gap-2 items-center">
                      <div className="text-[#abb2bf] font-black text-center border-r border-[#181a1f] text-xs bg-[#21252b] py-1 rounded-l select-none">A2</div>
                      <div className="w-full h-7 md:h-8 bg-[#21252b] rounded-r border border-[#181a1f] flex items-center overflow-hidden shadow-inner">
                        <div className="w-[90%] h-full bg-[#56b6c2]/25 text-[#56b6c2] flex items-center px-2.5 truncate font-black text-xs">
                          🎵 Ambient_Music_Bed.mp3
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE / TABLET INJECTED INFOSPECTOR SYSTEM */}
            <div className="lg:hidden w-full bg-[#21252b] border-t border-[#181a1f] p-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-black bg-[#1e222b] text-[#61afef] border border-[#2d3139] px-2.5 py-1 rounded inline-block mb-3.5 tracking-wider">
                  METADATA INSPECTOR // STATUS LIVE
                </span>
                <p className="text-xs font-mono font-black text-[#e5c07b] uppercase tracking-widest mb-1">Project / Client</p>
                <p className="text-2xl text-white font-black tracking-tight leading-tight">{active.client}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-widest mb-2">Core Function</p>
                  <div className="bg-[#1e222b] border border-[#2d3139] px-4 py-3 rounded-lg text-sm text-[#c8ccd4] font-semibold leading-relaxed">
                    {active.role}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-widest mb-2">Engine Pipeline</p>
                  <div className="flex flex-wrap gap-2">
                    {active.software.map((tool, index) => (
                      <span key={index} className="bg-[#2c313c] border border-[#3e4451] text-[#61afef] text-xs font-mono font-bold px-3 py-1.5 rounded-md shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-widest mb-2">Key Performance Markers</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white font-bold leading-snug">
                      <span className="text-[#61afef] mt-0.5 text-xs">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#181a1f] pt-4">
                <div className="grid grid-cols-2 gap-3 text-center text-white font-mono text-xs font-black">
                  <div className="bg-[#1e222b] border border-[#2d3139] p-2.5 rounded-lg">
                    <span className="block text-[#5c6370] text-[10px] uppercase font-bold mb-0.5">Output</span> 
                    <span className="text-[#abb2bf]">{active.aspect === 'aspect-[9/16]' ? '9:16 Vertical' : '16:9 Master'}</span>
                  </div>
                  <div className="bg-[#1e222b] border border-[#2d3139] p-2.5 rounded-lg">
                    <span className="block text-[#5c6370] text-[10px] uppercase font-bold mb-0.5">Render Profile</span> 
                    <span className="text-[#98c379]">ProRes 422</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* PANEL 4: METADATA INSPECTOR (Right - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#21252b] border border-[#2d3139] rounded-xl flex-col p-5 overflow-y-auto lg:min-h-[550px] xl:min-h-[660px]">
            {/* Asset Preview Window */}
            <div className="relative mb-5 border border-[#181a1f] rounded-lg overflow-hidden shadow-inner flex-shrink-0">
              <img src={active.thumb} className="w-full h-28 object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21252b] via-transparent to-transparent" />
            </div>

            <div className="mb-4">
              <span className="text-xs font-mono font-black bg-[#181a1f] text-[#61afef] border border-[#2d3139] px-3 py-1 rounded inline-block tracking-wider">
                METADATA ENGINE
              </span>
            </div>
            
            <div className="space-y-6 flex-grow">
              <div>
                <p className="text-xs font-mono font-black text-[#e5c07b] uppercase tracking-wider mb-1">Project / Client</p>
                <p className="text-3xl text-white font-black tracking-tight leading-tight">{active.client}</p>
              </div>

              <div>
                <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-wider mb-2">Core Function</p>
                <div className="bg-[#1e222b] border border-[#181a1f] px-3.5 py-3 rounded-lg text-sm text-[#c8ccd4] font-bold leading-relaxed shadow-inner">
                  {active.role}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-wider mb-2">Engine Pipeline</p>
                <div className="flex flex-wrap gap-2">
                  {active.software.map((tool, index) => (
                    <span key={index} className="bg-[#2c313c] border border-[#3e4451] text-[#61afef] text-xs font-mono font-bold px-3 py-1.5 rounded-md shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono font-black text-[#5c6370] uppercase tracking-wider mb-2">Key Performance Markers</p>
                <ul className="space-y-3">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-white font-bold leading-snug">
                      <span className="text-[#61afef] mt-0.5 text-xs">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#2d3139] flex-shrink-0">
              <div className="grid grid-cols-2 gap-2 text-center text-white font-mono text-xs font-black">
                <div className="bg-[#1e222b] border border-[#181a1f] p-2.5 rounded-lg">
                  <span className="block text-[#5c6370] text-[9px] uppercase font-bold mb-0.5">Output</span> 
                  <span className="text-[#abb2bf]">{active.aspect === 'aspect-[9/16]' ? '9:16 Vertical' : '16:9 Master'}</span>
                </div>
                <div className="bg-[#1e222b] border border-[#181a1f] p-2.5 rounded-lg">
                  <span className="block text-[#5c6370] text-[9px] uppercase font-bold mb-0.5">Render Profile</span> 
                  <span className="text-[#98c379]">ProRes 422</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING ISLAND MODAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:hidden">
          <div className="bg-[#21252b] w-full max-w-xl max-h-[80vh] rounded-2xl border border-[#2d3139] flex flex-col overflow-hidden shadow-2xl my-auto mx-2">
            <div className="p-4 border-b border-[#181a1f] flex justify-between items-center bg-[#1e222b]">
              <span className="text-xs font-mono text-white uppercase tracking-widest font-black">Select Source File</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-[#2c313c] border border-[#3e4451] text-white flex items-center justify-center font-black text-sm hover:bg-[#3e4451] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex border-b border-[#181a1f] bg-[#1e222b]">
              <button 
                onClick={() => { setActiveFolder('long-form'); setActiveId(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-black uppercase tracking-[0.1em] font-mono relative ${activeFolder === 'long-form' ? 'text-white bg-[#21252b]' : 'text-[#5c6370]'}`}
              >
                Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#61afef]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); setActiveId(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-black uppercase tracking-[0.1em] font-mono relative ${activeFolder === 'short-form' ? 'text-white bg-[#21252b]' : 'text-[#5c6370]'}`}
              >
                Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#61afef]"></div>}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#21252b]">
              {PROJECTS.filter(p => p.folder === activeFolder).map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-4 p-2 rounded-lg border transition-all ${activeId === p.id ? 'bg-[#2c313c] border-[#4b5263] text-white' : 'border-[#181a1f] bg-[#1e222b] text-[#abb2bf] hover:bg-[#2c313c]'}`}
                >
                  <img src={p.thumb} className="w-18 h-12 object-cover rounded border border-[#181a1f] flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-sm font-bold truncate text-white">{p.title}</p>
                    <p className="text-[11px] text-[#5c6370] font-mono mt-0.5 truncate">{p.client}</p>
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