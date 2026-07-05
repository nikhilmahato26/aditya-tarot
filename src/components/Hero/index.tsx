import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: '#0D0D12' }}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #7B3FA0 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', filter: 'blur(60px)' }} />
        
        {/* Subtle star-like dots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Mobile-only circular profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center mb-8 lg:hidden"
          >
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, #7B3FA0, #D4AF37, #A855F7)',
              boxShadow: '0 0 40px rgba(168,85,247,0.4)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #0D0D12',
              }}>
                <img
                  src="/aditya-hero.jpg"
                  alt="Aditya Sevani - Tarot Reader"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
            style={{ background: 'rgba(168,85,247,0.15)', borderColor: 'rgba(168,85,247,0.3)', color: '#C084FC' }}
          >
            ✦ Premium Spiritual Guidance
          </motion.div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
            Find <span className="text-gradient">Clarity.</span><br />
            Find <span className="text-gradient">Direction.</span><br />
            Find <span className="text-gradient">Peace.</span>
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Gain trusted spiritual guidance through Tarot Card Reading, Face Reading, and Numerology with Aditya Sevani. Every consultation is rooted in honesty, compassion, and spiritual integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-buttons text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-white" style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)' }}>
              <Calendar size={20} />
              Book Your Reading
            </a>
            <a href="https://wa.me/919784249695" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-buttons text-base hover:-translate-y-1 transition-all group" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
              <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              WhatsApp Now
            </a>
            <a href="https://www.instagram.com/tarot_aditya?igsh=MXRvNTE0dHdpZDRqaQ==" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-buttons text-base hover:-translate-y-1 transition-all group" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform" style={{ stroke: 'url(#ig-grad-hero)' }}>
                <defs>
                  <linearGradient id="ig-grad-hero" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Right Side Image & Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] w-full hidden lg:block"
        >
          {/* Main Portrait */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src="/aditya-hero.jpg" alt="Aditya Sevani - Tarot Reader" className="w-full h-full object-cover object-top" />
          </div>

          {/* Floating Card 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-12 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
            style={{ background: '#1E1E28', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="text-2xl">🌍</div>
            <p className="font-medium text-sm text-white">Worldwide Online<br/>Consultations</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-8 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
            style={{ background: '#1E1E28', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="text-2xl">❤️</div>
            <p className="font-medium text-sm text-white">Honest & Fear-Free<br/>Guidance</p>
          </motion.div>
          
          {/* Floating Card 3 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 left-10 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
            style={{ background: '#1E1E28', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="text-2xl">📞</div>
            <p className="font-medium text-sm text-white">Chat • Phone • Video</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
