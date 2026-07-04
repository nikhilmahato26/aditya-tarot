import { motion } from 'framer-motion';
import { Moon, Star, Sun, Eye, Circle, Diamond } from 'lucide-react';

export default function TarotBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Sacred Geometry / Mandala Hint */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-[0.03] text-primary"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <path d="M100 10 L100 190 M10 100 L190 100" />
          <path d="M36 36 L164 164 M36 164 L164 36" />
          <polygon points="100,10 190,100 100,190 10,100" />
        </svg>
      </motion.div>

      {/* Moon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] opacity-[0.04] text-primary"
      >
        <Moon size={120} strokeWidth={1} />
      </motion.div>

      {/* Sun */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[-5%] opacity-[0.03] text-royal-gold"
      >
        <Sun size={250} strokeWidth={1} />
      </motion.div>

      {/* Eye / Mystical */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[5%] opacity-[0.04] text-primary"
      >
        <Eye size={80} strokeWidth={1} />
      </motion.div>

      {/* Floating Stars */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] text-royal-gold"
      >
        <Star size={40} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[40%] right-[30%] text-primary"
      >
        <Star size={30} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[10%] left-[15%] text-royal-gold"
      >
        <Diamond size={60} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] left-[50%] opacity-[0.03] text-primary"
      >
        <Circle size={150} strokeWidth={0.5} strokeDasharray="4 4" />
      </motion.div>
    </div>
  );
}
