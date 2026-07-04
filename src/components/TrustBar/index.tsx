import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const trustPoints = [
  "Worldwide Clients",
  "Private Consultation",
  "Honest Guidance",
  "Online Sessions",
  "WhatsApp Booking",
  "Personalized Readings"
];

export default function TrustBar() {
  return (
    <div className="bg-dark text-white py-4 overflow-hidden border-y border-white/10 relative flex items-center">
      {/* Gradient masks for smooth fading at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex whitespace-nowrap gap-12 px-6"
      >
        {/* We duplicate the array to create a seamless loop */}
        {[...trustPoints, ...trustPoints, ...trustPoints, ...trustPoints].map((point, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-royal-gold" />
            <span className="font-body font-medium text-sm tracking-wide uppercase text-white/90">
              {point}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
