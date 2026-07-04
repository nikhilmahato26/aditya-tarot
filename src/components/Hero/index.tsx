import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-royal-gold/10 blur-[150px] animate-pulse delay-1000" />
        
        {/* Abstract Light Rays (CSS or SVG) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.8)] opacity-50 rotate-45" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-primary mb-6 border-primary/20"
          >
            Premium Spiritual Guidance
          </motion.div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-dark mb-6">
            Find <span className="text-gradient">Clarity.</span><br />
            Find <span className="text-gradient">Direction.</span><br />
            Find <span className="text-gradient">Peace.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-dark/70 font-light leading-relaxed mb-10 max-w-xl">
            Gain trusted spiritual guidance through Tarot Card Reading, Face Reading, and Numerology with Aditya Sevani. Every consultation is rooted in honesty, compassion, and spiritual integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-buttons text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              <Calendar size={20} />
              Book Your Reading
            </a>
            <a href="https://wa.me/919784249695" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-buttons text-base shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              WhatsApp Now
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
          {/* Main Portrait - To be replaced with actual image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden glass-panel flex items-center justify-center border-white/40 shadow-2xl">
            <img src="/aditya-hero.jpg" alt="Aditya Sevani - Tarot Reader" className="w-full h-full object-cover object-top" />
          </div>

          {/* Floating Card 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-12 glass-panel px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="text-2xl">🌍</div>
            <p className="font-medium text-sm text-dark">Worldwide Online<br/>Consultations</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-8 glass-panel px-6 py-4 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="text-2xl">❤️</div>
            <p className="font-medium text-sm text-dark">Honest & Fear-Free<br/>Guidance</p>
          </motion.div>
          
          {/* Floating Card 3 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 left-10 glass-panel px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
          >
            <div className="text-2xl">📞</div>
            <p className="font-medium text-sm text-dark">Chat • Phone • Video</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
