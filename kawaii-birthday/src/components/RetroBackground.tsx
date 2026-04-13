import { motion } from 'motion/react';

const Star = ({ size, top, left, delay }: { size: number; top: string; left: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0], 
      scale: [0, 1, 0],
      rotate: [0, 90, 180]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none text-[#D2122E]/30"
    style={{ top, left }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  </motion.div>
);

export default function RetroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-cream">
      {/* Animated Mesh-like Blobs - Refined with better blending */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: ['-20%', '10%', '-20%'],
          y: ['-10%', '15%', '-10%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] rounded-full bg-cherry/5 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.4, 1, 1.4],
          x: ['20%', '-10%', '20%'],
          y: ['10%', '-15%', '10%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-rose/10 blur-[150px]"
      />

      {/* Subtle Moving Grid Lines - Expertly tuned */}
      <motion.div 
        animate={{
          y: [0, 60]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Y2K Stars - Varied sizes and speeds */}
      <Star size={60} top="10%" left="5%" delay={0} />
      <Star size={120} top="70%" left="80%" delay={2} />
      <Star size={40} top="40%" left="95%" delay={4} />
      <Star size={80} top="85%" left="10%" delay={1} />
      <Star size={50} top="5%" left="80%" delay={3} />
      <Star size={70} top="55%" left="2%" delay={5} />

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      
      {/* Scanline effect - More subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
    </div>
  );
}
