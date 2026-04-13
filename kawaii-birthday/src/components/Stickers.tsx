import { useEffect, useState, CSSProperties } from 'react';
import { motion } from 'motion/react';

const Star = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const Heart = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
  </svg>
);

const ASSETS = [
  { type: 'svg-star' },
  { type: 'svg-heart' },
  { type: 'img', src: 'chocolate.png' },
  { type: 'img', src: 'cake.png' },
  { type: 'img', src: 'star.png' },
  { type: 'img', src: 'ribbon.png' },
];

export default function Stickers() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stickers, setStickers] = useState<any[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate stickers
    const newStickers = Array.from({ length: 25 }).map((_, i) => {
      const asset = ASSETS[Math.floor(Math.random() * ASSETS.length)];
      return {
        id: i,
        ...asset,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 30,
        rotation: Math.random() * 360,
        depth: Math.random() * 2 + 0.5, // Parallax depth
        color: Math.random() > 0.5 ? '#D2122E' : '#000000',
      };
    });
    setStickers(newStickers);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stickers.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            color: s.color,
          }}
          animate={{
            x: mousePos.x * 100 * s.depth,
            y: mousePos.y * 100 * s.depth,
            rotate: s.rotation + mousePos.x * 50,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 100 }}
        >
          {s.type === 'svg-star' && <Star className="drop-shadow-md" style={{ width: s.size, height: s.size }} />}
          {s.type === 'svg-heart' && <Heart className="drop-shadow-md" style={{ width: s.size, height: s.size }} />}
          {s.type === 'img' && <img src={s.src} alt="sticker" className="drop-shadow-xl object-contain" style={{ width: s.size, height: s.size }} />}
        </motion.div>
      ))}
    </div>
  );
}
