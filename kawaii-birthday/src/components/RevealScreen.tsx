import { motion } from 'motion/react';

export default function RevealScreen({ onReveal }: { onReveal: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(210,18,46,0.15),transparent_70%)] animate-pulse"></div>
      
      <motion.button
        onClick={onReveal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="group relative px-12 py-6 cursor-pointer"
      >
        <div className="absolute inset-0 bg-cherry rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="font-serif italic text-cream/40 text-xl md:text-2xl">Psst...</div>
          <div className="font-display text-3xl md:text-5xl text-cream uppercase tracking-tighter group-hover:text-cherry transition-colors duration-500">
            guess what's special today
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="h-[1px] flex-1 bg-cream/10"></div>
            <div className="font-mono text-[10px] text-cream/30 uppercase tracking-[0.5em]">Click to Initialize</div>
            <div className="h-[1px] flex-1 bg-cream/10"></div>
          </div>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-cream/5 rounded-[2rem] group-hover:border-cherry/50 transition-colors duration-500"></div>
      </motion.button>
    </motion.div>
  );
}
