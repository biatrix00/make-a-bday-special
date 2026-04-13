import { useRef } from 'react';
import { motion } from 'motion/react';

type EvidencePhoto = {
  id: number;
  src: string;
  x: number;
  y: number;
  rot: number;
};

const photos: EvidencePhoto[] = [
  { id: 1, src: '/memory1.jpeg', x: -15, y: -25, rot: -5 },
  { id: 2, src: '/memory2.jpeg', x: 15, y: -15, rot: 8 },
  { id: 3, src: '/memory3.jpeg', x: -10, y: 20, rot: -12 },
  { id: 4, src: '/memory4.jpeg', x: 15, y: 25, rot: 5 },
];

export default function EvidenceBoard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] border-[12px] border-black bg-cream overflow-hidden shadow-[32px_32px_0px_0px_rgba(0,0,0,0.05)] rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl group">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(0,0,0,0.02)_30px,rgba(0,0,0,0.02)_60px)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="absolute top-6 left-8 flex items-center gap-4 z-0">
        <div className="w-3 h-3 bg-cherry rounded-full animate-pulse"></div>
        <div className="bg-black text-white px-6 py-2 font-mono text-xs font-black uppercase tracking-[0.4em] rounded-full shadow-xl">memory board</div>
      </div>

      {photos.map((p, i) => (
        <motion.div
          key={p.id}
          drag
          dragConstraints={containerRef}
          className="absolute p-3 pb-12 md:p-6 md:pb-20 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] cursor-grab active:cursor-grabbing rounded-2xl group/photo"
          style={{ left: `calc(50% + ${p.x}%)`, top: `calc(50% + ${p.y}%)`, rotate: p.rot, translateX: '-50%', translateY: '-50%' }}
          whileHover={{ scale: 1.05, zIndex: 10, rotate: p.rot + (i % 2 === 0 ? 5 : -5) }}
          whileDrag={{ scale: 1.1, zIndex: 20, boxShadow: '24px 24px 0px 0px rgba(0,0,0,0.1)' }}
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-cherry/10 mix-blend-overlay opacity-50 group-hover/photo:opacity-0 transition-opacity duration-500"></div>
            <img
              src={p.src}
              alt={`Exhibit ${String.fromCharCode(65 + i)}`}
              className="w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover pointer-events-none grayscale group-hover/photo:grayscale-0 transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute bottom-3 md:bottom-6 left-0 w-full text-center">
            <div className="font-cursive text-lg md:text-3xl font-black text-black/80">Exhibit {String.fromCharCode(65 + i)}</div>
            <div className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest opacity-30 mt-1">File_ID: 00{p.id}</div>
          </div>
          {/* Tape effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-cream/60 backdrop-blur-sm border-2 border-black/5 rotate-[-2deg] shadow-sm"></div>
        </motion.div>
      ))}
    </div>
  );
}
