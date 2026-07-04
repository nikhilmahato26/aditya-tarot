import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-lavender/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel border-white/50 relative">
               {/* Real portrait */}
               <img src="/aditya-about.jpg" alt="Aditya Sevani" className="absolute inset-0 w-full h-full object-cover object-center" />
               
               {/* Decorative elements */}
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-royal-gold/20 rounded-full blur-2xl" />
               <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -right-8 md:bottom-10 md:-right-12 bg-white rounded-2xl p-6 shadow-2xl max-w-[200px]"
            >
              <h4 className="font-heading text-4xl font-bold text-primary mb-1">10+</h4>
              <p className="text-sm font-medium text-dark/70 leading-tight">Years of Spiritual Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-8">
              Guided by Faith. <br/>
              <span className="text-gradient">Rooted in Honesty.</span>
            </h2>
            
            <div className="space-y-6 text-dark/70 font-light text-lg leading-relaxed mb-10">
              <p>
                Hello, I am <strong className="text-primary font-medium">Aditya Sevani</strong>. 
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
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Signature_Placeholder.svg" alt="Signature" className="h-16 opacity-30 invert" />
               <div>
                  <h4 className="font-heading font-bold text-xl text-dark">Aditya Sevani</h4>
                  <p className="text-sm text-primary uppercase tracking-wider font-medium mt-1">Spiritual Guide</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
