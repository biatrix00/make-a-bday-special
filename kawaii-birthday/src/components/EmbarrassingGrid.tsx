import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const buttons = [
  { id: 1, label: "DO NOT PRESS", img: "/lol1.jpeg", caption: "The look of DISPAIR!!" },
  { id: 2, label: "RESTRICTED", img: "/lol2.jpeg", caption: "PAPARAZI MOMENT" },
  { id: 3, label: "CLASSIFIED", img: "/lol3.jpeg", caption: "Sassy..." },
  { id: 4, label: "DANGER", img: "/lol4.mp4", caption: "This one is cute tho!" },
];

export default function EmbarrassingGrid() {
  const [active, setActive] = useState<any>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {buttons.map(b => (
          <button 
            key={b.id} 
            onClick={() => setActive(b)}
            className="group relative w-full aspect-square bg-cream border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-3 active:translate-y-3 active:shadow-none cursor-pointer rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-stripes opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cherry transition-all duration-500 shadow-lg">
                <span className="font-mono text-xs font-black">0{b.id}</span>
              </div>
              <span className="relative z-10 font-display text-xl font-black tracking-tighter text-black group-hover:text-cherry transition-colors uppercase leading-tight">{b.label}</span>
              <div className="mt-4 h-1 w-0 group-hover:w-12 bg-black transition-all duration-500"></div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, rotate: 5 }}
              className="relative bg-white p-6 pb-24 border-[12px] border-black max-w-xl w-full rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-3xl rounded-bl-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl border-4 border-black group/modal">
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
                {active.img.endsWith('.mp4') ? (
                  <video src={active.img} autoPlay loop muted playsInline className="w-full max-h-[60vh] object-cover grayscale group-hover/modal:grayscale-0 transition-all duration-1000" />
                ) : (
                  <img src={active.img} alt="Embarrassing" className="w-full max-h-[60vh] object-cover grayscale group-hover/modal:grayscale-0 transition-all duration-1000" />
                )}
              </div>
              <div className="absolute bottom-8 left-0 w-full text-center px-8">
                <div className="font-serif italic text-cherry text-4xl md:text-5xl drop-shadow-sm mb-2">{active.caption}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30">Confidential // Do Not Share</div>
              </div>
              <button 
                onClick={() => setActive(null)} 
                className="absolute top-8 right-8 w-14 h-14 bg-cherry border-4 border-black text-white font-display text-2xl flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all cursor-pointer rounded-full shadow-2xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
