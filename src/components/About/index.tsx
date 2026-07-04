import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn } from 'lucide-react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#0F0F16' }}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-[40%] h-[60%] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #7B3FA0 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(-50%)' }} />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
               {/* Real portrait */}
               <img src="/aditya-about.jpg" alt="Aditya Sevani" className="absolute inset-0 w-full h-full object-cover object-center" />
               
               {/* Decorative elements */}
               <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full" style={{ background: 'rgba(212,175,55,0.15)', filter: 'blur(30px)' }} />
               <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full" style={{ background: 'rgba(123,63,160,0.2)', filter: 'blur(40px)' }} />
            </div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -right-8 md:bottom-10 md:-right-12 rounded-2xl p-6 shadow-2xl max-w-[200px]"
              style={{ background: '#1E1E28', border: '1px solid rgba(168,85,247,0.3)' }}
            >
              <h4 className="font-heading text-4xl font-bold mb-1 text-gradient">10+</h4>
              <p className="text-sm font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.7)' }}>Years of Spiritual Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Guided by Faith. <br/>
              <span className="text-gradient">Rooted in Honesty.</span>
            </h2>
            
            <div className="space-y-6 font-light text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <p>
                Hello, I am <strong className="font-medium" style={{ color: '#C084FC' }}>Aditya Sevani</strong>. 
                For over a decade, I have dedicated my life to helping individuals navigate their most complex life challenges through Tarot Card Reading, Face Reading, and Numerology.
              </p>
              <p>
                My approach is entirely different from traditional astrology. I do not believe in instilling fear to sell more consultations. Instead, I focus on practical, actionable, and spiritually uplifting guidance that empowers you to make confident decisions.
              </p>
              <p>
                Whether you are seeking clarity in your career, harmony in your relationships, or a deeper understanding of your life's purpose, every session is conducted with the utmost confidentiality, compassion, and integrity.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Signature_Placeholder.svg" alt="Signature" className="h-16 opacity-20 invert" />
               <div>
                  <h4 className="font-heading font-bold text-xl text-white">Aditya Sevani</h4>
                  <p className="text-sm uppercase tracking-wider font-medium mt-1" style={{ color: '#C084FC' }}>Spiritual Guide</p>
               </div>
            </div>
          </motion.div>

        </div>

        {/* Credentials & Certificate Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Certificate Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <Award style={{ color: '#C084FC' }} className="w-6 h-6" />
                <span className="font-buttons uppercase tracking-wider text-sm font-semibold" style={{ color: '#C084FC' }}>Verified Accreditations</span>
              </div>
              
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Certified Tarot Master
              </h3>
              
              <p className="font-light text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Formally certified as a Tarot Master, Aditya Sevani has completed intensive course work and demonstration of intuitive excellence under the guidance of renowned Tarot card reader and coach, Deepali Singhv.
              </p>

              {/* Accreditations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Course Completion', sub: 'Tarot Master Course (PsychDoor)' },
                  { title: 'Professional Authority', sub: 'Authorized for Independent Practice' },
                  { title: 'Quality Assurance', sub: 'ISO 9001:2015 Standards Compliant' },
                  { title: 'Official Registration', sub: 'MSME Registered Enterprise' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl flex items-start gap-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#D4AF37' }} />
                    <div>
                      <h5 className="font-medium text-white text-sm">{item.title}</h5>
                      <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Image Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setIsModalOpen(true)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl p-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] max-w-md w-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="relative aspect-[1016/716] overflow-hidden rounded-xl" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <img 
                    src="/aditya-certificate.jpg" 
                    alt="Tarot Master Course Certificate - Aditya Sevani" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <ZoomIn className="w-8 h-8 mb-2 animate-bounce" />
                    <span className="font-buttons font-medium text-sm">View Certificate</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
            style={{ background: 'rgba(0,0,0,0.9)' }}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 transition-colors p-2 rounded-full cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.1)' }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full p-3 rounded-2xl shadow-2xl cursor-default"
              style={{ background: '#1E1E28' }}
            >
              <img 
                src="/aditya-certificate.jpg" 
                alt="Tarot Master Course Certificate - Aditya Sevani" 
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
