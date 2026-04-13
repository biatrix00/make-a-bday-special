import { motion } from 'motion/react';

export default function BeautifulMessage({ message }: { message: string }) {
  const paragraphs = message.split('\n');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(5px)",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="font-sans text-base md:text-lg leading-relaxed text-left space-y-8 max-w-3xl mx-auto bg-cream text-black p-10 md:p-16 border-[12px] border-black shadow-[32px_32px_0px_0px_rgba(210,18,46,0.1)] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-6 right-10 font-serif italic text-cherry/20 text-6xl select-none">"</div>
      
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className="flex flex-wrap gap-x-2 gap-y-1 relative z-10">
          {paragraph.split(" ").map((word, wIndex) => (
            <motion.span 
              variants={child} 
              key={`${pIndex}-${wIndex}`} 
              className={`inline-block ${word.includes('💖') || word.includes('Kawaii') ? 'text-cherry font-black' : 'font-medium opacity-80'}`}
            >
              {word}
            </motion.span>
          ))}
        </p>
      ))}

      <div className="pt-8 border-t-2 border-black/5 flex justify-between items-end relative z-10">
        <div className="font-cursive text-3xl text-cherry rotate-[-2deg]">With love,</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-30">Ref: B-DAY-2026</div>
      </div>
    </motion.div>
  );
}
