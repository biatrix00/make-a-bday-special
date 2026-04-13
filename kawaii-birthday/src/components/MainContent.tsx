import { motion } from 'motion/react';
import FilmStrip from './FilmStrip';
import Stickers from './Stickers';
import Sidebar from './Sidebar';
import Cake from './Cake';
import BeautifulMessage from './BeautifulMessage';
import EvidenceBoard from './EvidenceBoard';
import EmbarrassingGrid from './EmbarrassingGrid';
import RetroBackground from './RetroBackground';

export default function MainContent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      className="relative flex min-h-screen w-full flex-col pt-10"
    >
      <RetroBackground />

      <Stickers />

      <Sidebar />

      <main className="relative z-10 flex flex-1 flex-col overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mb-16 md:mb-24 z-20 mt-8 relative"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-cherry/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-rose/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-black leading-[0.85]">
              HAPPY<br />BIRTHDAY
            </h1>
            <h2 className="font-cursive text-7xl md:text-9xl text-cherry -mt-6 md:-mt-12 rotate-[-4deg] drop-shadow-2xl z-30 relative">
              Kawaii!
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-black/20"></span>
              <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-black/40">Est. 2026 // Special Edition</span>
              <span className="h-[2px] w-12 bg-black/20"></span>
            </div>
          </motion.div>
          
          <div className="flex flex-col items-center justify-center gap-12 w-full max-w-7xl px-4">
            <div className="relative group">
              <div className="absolute -inset-4 bg-cherry/5 rounded-[4rem] blur-2xl group-hover:bg-cherry/10 transition-colors duration-700"></div>
              <FilmStrip />
            </div>
            <Cake />
          </div>
        </section>

        {/* MESSAGE SECTION */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center p-8 md:p-16 bg-black text-cream border-y-[12px] border-cherry rounded-tl-[5rem] rounded-br-[5rem] my-24 mx-4 md:mx-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.05] pointer-events-none"></div>
          <div className="max-w-4xl text-center w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-cherry text-white font-mono text-xs font-black uppercase tracking-widest rounded-full mb-12 shadow-lg"
            >
              Private Transmission
            </motion.div>
            <div className="text-cherry font-serif italic text-4xl md:text-6xl mb-12 drop-shadow-md">A little note for you...</div>
            <BeautifulMessage message={`Happy Birthday Kawaii! 💖\n\nSending so much love to the cutest sister today\nYou’ve always been the one I can be real with. I hope you’re doing great and have a beautiful year ahead. Don’t forget to breathe and celebrate yourself today. I hope you find moments of pure peace amidst the chaos. Keep shining, and have the most beautiful day.\n\nI’m always in your corner, whether you’re celebrating a win or need to vent about a heavy day. I hope your birthday is as bright and lovely as you are`} />
          </div>
        </section>

        {/* MEMORY DUMP SECTION */}
        <section className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-12 mb-24">
          <div className="mb-12 md:mb-20 text-center relative">
            <div className="font-serif italic text-rose text-2xl md:text-3xl mb-2">Collection 01</div>
            <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">memory dump</h2>
            <div className="font-mono text-[10px] md:text-xs mt-4 opacity-40 uppercase tracking-[0.5em]">Interactive Investigation Required</div>
          </div>
          <EvidenceBoard />
        </section>

        {/* RESTRICTED ACCESS SECTION */}
        <section className="relative flex min-h-screen flex-col items-center justify-center p-8 md:p-16 bg-cherry border-t-[12px] border-black rounded-t-[6rem] mt-24 shadow-[0_-20px_50px_rgba(210,18,46,0.3)]">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
          <div className="mb-16 md:mb-24 text-center text-cream relative z-10">
            <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none mb-6">Restricted Access</h2>
            <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-2xl">
              <div className="w-2 h-2 bg-cherry rounded-full animate-ping"></div>
              <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest">High-Level Security Clearance Required</p>
            </div>
          </div>
          <EmbarrassingGrid />
        </section>

        {/* FOOTER */}
        <footer className="py-8 md:py-12 text-center font-mono text-xs md:text-sm font-bold border-t-8 border-black bg-black text-white">
          Made with ❤️ by you baby brother
        </footer>

      </main>
    </motion.div>
  );
}
