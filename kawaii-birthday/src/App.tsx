import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import RevealScreen from './components/RevealScreen';
import MainContent from './components/MainContent';

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F2EFE9] text-black font-sans">
      {/* Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.15] mix-blend-overlay bg-noise"></div>
      
      <AnimatePresence mode="wait">
        {!revealed ? (
          <RevealScreen onReveal={() => setRevealed(true)} />
        ) : (
          <MainContent />
        )}
      </AnimatePresence>
    </div>
  );
}
