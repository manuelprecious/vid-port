import ContactImage from '../assets/images/myprofile.jpg';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-[1800px] mx-auto w-full bg-[#0A0A0A] border-t border-zinc-900/60 snap-start">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
        
        {/* Left Side: Clean, Full-Color Photo Column */}
        <div className="w-full aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden rounded-lg shadow-xl">
          <img 
            src={ContactImage} 
            alt="Manuel Precious Profile" 
            className="w-full h-full object-cover object-center transition-all duration-700 brightness-95 hover:brightness-100 select-none"
          />
        </div>

        {/* Right Side: Identity + Action Interface Column */}
        <div className="flex flex-col gap-10">
          
          {/* Text block moved here to clean up the bottom space */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none">
              Let's work <br />
              <span className="text-zinc-700">together.</span>
            </h2>
            <p className="text-zinc-400 font-medium text-base lg:text-lg leading-relaxed max-w-xl">
              Manuel Precious. Video editor and motion designer. Focused on high-retention storytelling and technical precision.
            </p>
          </div>

          {/* Action Links Stack */}
          <div className="flex flex-col gap-4 w-full">
            <a 
              href="mailto:devmanuelprecious@gmail.com" 
              className="group flex flex-col p-6 sm:p-8 bg-zinc-950/40 border border-zinc-900 rounded-lg hover:border-zinc-700 hover:bg-white/[0.01] transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1.5">
                Inquiry
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                Send a Message
              </span>
            </a>

            <a 
              href="https://www.facebook.com/manuel.n.precious/" 
              target="_blank" 
              rel="noreferrer"
              className="group p-6 sm:p-8 bg-zinc-950/40 border border-zinc-900 rounded-lg hover:border-zinc-700 hover:bg-white/[0.01] transition-all duration-300 flex justify-between items-center"
            >
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                Facebook
              </span>
              <span className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all font-mono">
                ↗
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}