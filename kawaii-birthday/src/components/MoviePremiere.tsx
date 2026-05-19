import { motion } from 'motion/react';

export default function MoviePremiere() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-12 mb-24 bg-black overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* LED Marquee Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative">
            {/* LED Border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose via-cherry to-rose rounded-lg blur-lg opacity-70 animate-pulse"></div>
            
            {/* Main text with LED style */}
            <div className="relative bg-black px-8 py-4 rounded-lg border-4 border-rose">
              <motion.div
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(233, 150, 122, 0.5)',
                    '0 0 20px rgba(233, 150, 122, 0.8)',
                    '0 0 10px rgba(233, 150, 122, 0.5)',
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-display text-5xl md:text-7xl font-black text-rose tracking-widest"
              >
                NOW SHOWING 🎬
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Premiere Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-rose blur-lg opacity-75"></div>
            <div className="relative bg-rose text-black px-8 py-3 rounded-full font-mono font-black text-lg tracking-widest shadow-2xl border-4 border-black transform -rotate-12">
              🎭 PREMIERE 🎭
            </div>
          </div>
        </motion.div>

        {/* Movie Theater Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-12"
        >
          {/* Red Velvet Curtain Left */}
          <div className="absolute -left-12 md:-left-24 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-rose/80 to-transparent rounded-r-3xl shadow-2xl z-10 hidden md:block">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] rounded-r-3xl"></div>
          </div>

          {/* Red Velvet Curtain Right */}
          <div className="absolute -right-12 md:-right-24 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-rose/80 to-transparent rounded-l-3xl shadow-2xl z-10 hidden md:block">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] rounded-l-3xl"></div>
          </div>

          {/* Video Player Container */}
          <div className="relative bg-black rounded-3xl border-8 border-cherry shadow-2xl overflow-hidden">
            {/* Golden frame effect */}
            <div className="absolute inset-0 border-2 border-yellow-600/30 rounded-3xl pointer-events-none"></div>
            
            {/* Video */}
            <video
              src="/memory4.mp4"
              controls
              className="w-full aspect-video object-cover bg-black"
            />

            {/* Film strip overlay top */}
            <div className="absolute -top-8 left-0 right-0 flex justify-between px-4 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-black border-2 border-yellow-600 rounded-sm"></div>
              ))}
            </div>

            {/* Film strip overlay bottom */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-4 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-black border-2 border-yellow-600 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Theater lights */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                className="w-3 h-3 bg-rose rounded-full shadow-lg shadow-rose"
              />
            ))}
          </div>
        </motion.div>

        {/* Movie Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block border-4 border-rose rounded-2xl px-8 py-4 bg-black/50 backdrop-blur-sm">
            <p className="font-cursive text-2xl md:text-4xl text-rose mb-2">A Moment of Pure Joy</p>
            <p className="font-mono text-xs md:text-sm text-cream/60 uppercase tracking-widest">The Funniest & Most Memorable Scene</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
