import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Monthly Report', href: '#monthly-report' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-4'
          : 'py-6 bg-transparent'
      )}
      style={isScrolled ? { background: 'rgba(13,13,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <span className="font-heading font-semibold text-2xl tracking-wide" style={{ background: 'linear-gradient(135deg, #A855F7, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Aditya Sevani
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full font-buttons text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white"
            style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)' }}
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 backdrop-blur-xl border-b py-6 px-6 flex flex-col gap-6 md:hidden"
              style={{ background: 'rgba(13,13,18,0.97)', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-white/80 hover:text-white block transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-center px-6 py-3 rounded-full font-buttons text-base w-full shadow-lg"
                style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)' }}
              >
                Book Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
