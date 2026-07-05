import { useState, useEffect } from 'react';
import { PhoneCall, FileText, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
      
      {/* Monthly Report Banner (Desktop mostly) */}
      <a 
        href="#monthly-report"
        className="hidden md:flex items-center gap-3 bg-gradient-accent text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all pointer-events-auto group"
      >
        <FileText size={20} />
        <span className="font-buttons text-sm font-medium">Get Monthly Report</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919784249695" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all pointer-events-auto overflow-hidden"
        aria-label="WhatsApp Us"
      >
        <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-14 h-14 object-cover" />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919784249695"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all pointer-events-auto md:hidden"
        aria-label="Call Us"
      >
        <PhoneCall size={24} />
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all pointer-events-auto text-white"
            style={{ background: '#1E1E28', border: '1px solid rgba(255,255,255,0.12)' }}
            aria-label="Back to Top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
