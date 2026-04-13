import { motion } from 'motion/react';

export default function FilmStrip() {
  const items = [
    { type: 'image', src: 'public/filmstrip1.jpeg' },
    { type: 'pattern', pattern: 'bg-stripes' },
    { type: 'image', src: 'public/filmstrip2.jpeg' },
    { type: 'pattern', pattern: 'bg-dots' },
    { type: 'image', src: 'public/filmstrip3.jpeg' },
    { type: 'pattern', pattern: 'bg-checkers' },
    { type: 'image', src: 'public/filmstrip4.jpeg' },
  ];

  return (
    <div className="relative h-[65vh] w-full max-w-sm overflow-hidden rotate-[-3deg] border-[10px] border-black bg-black p-5 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] z-10 mx-auto">
      {/* Sprocket holes - Refined */}
      <div className="absolute left-3 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_12px,#F2EFE9_12px,#F2EFE9_24px)] mix-blend-difference z-20 opacity-80"></div>
      <div className="absolute right-3 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_12px,#F2EFE9_12px,#F2EFE9_24px)] mix-blend-difference z-20 opacity-80"></div>

      <motion.div
        animate={{ y: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        className="flex flex-col gap-8 px-6"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="relative aspect-[3/4] w-full overflow-hidden border-4 border-black bg-white shrink-0 group/item">
            <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-500 z-10"></div>
            {item.type === 'image' ? (
              <img src={item.src} alt="Template" className="h-full w-full object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-700" />
            ) : (
              <div className={`h-full w-full ${item.pattern} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="bg-black px-6 py-3 font-display text-2xl text-white uppercase tracking-[0.2em] mix-blend-exclusion border-2 border-white/20 shadow-2xl">Kawaii!</span>
              </div>
            )}
            {/* Photo metadata overlay */}
            <div className="absolute bottom-3 right-3 z-20 font-mono text-[8px] text-white bg-black/50 px-2 py-1 backdrop-blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity">
              ISO 400 // 2026
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
