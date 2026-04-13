import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cake() {
  const [isBlown, setIsBlown] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="font-cursive text-6xl md:text-7xl text-cherry drop-shadow-sm">
          {isBlown ? "Yay! Happy Birthday!" : "Make a wish..."}
        </h3>
        {!isBlown && (
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40 mt-4 animate-pulse">
            Click the cake to make a wish
          </p>
        )}
      </motion.div>

      <motion.div 
        className="relative cursor-pointer group"
        onClick={() => setIsBlown(true)}
        animate={{ 
          y: [-10, 10, -10],
          rotate: [-2, 2, -2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="bdaycake.png" 
          alt="Birthday Cake" 
          className="w-[22.5rem] h-auto md:w-[28rem] object-contain drop-shadow-2xl"
        />
        
        {/* Sparkle effect when clicked */}
        <AnimatePresence>
          {isBlown && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1.5] }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] mix-blend-overlay"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
