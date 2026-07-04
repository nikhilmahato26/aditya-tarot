import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

const includes = [
  "Relationship Overview",
  "Career Guidance",
  "Financial Insights",
  "Health Overview",
  "Opportunities",
  "Challenges",
  "Important Dates",
  "Spiritual Guidance",
  "Personalized Tarot Interpretation"
];

export default function MonthlyReport() {
  return (
    <section id="monthly-report" className="py-24 bg-dark relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-royal-gold/30 to-transparent rounded-bl-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side */}
            <div>
              <div className="flex items-center gap-2 text-royal-gold mb-4">
                <Sparkles size={20} />
                <span className="font-buttons font-medium uppercase tracking-widest text-sm">Exclusive Offering</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Personalized <br/>
                <span className="text-gradient">Monthly Tarot Report</span>
              </h2>
              <p className="text-white/70 font-light text-lg mb-8 leading-relaxed">
                Start every month with clarity and confidence. Get a detailed, personalized roadmap of the energies, opportunities, and challenges that await you.
              </p>
              
              <div className="flex items-end gap-3 mb-10">
                <span className="text-5xl font-heading font-bold text-white">₹351</span>
                <span className="text-white/50 mb-1">/ Month</span>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-royal-gold to-[#B38D1B] hover:from-[#B38D1B] hover:to-royal-gold text-dark px-10 py-4 rounded-full font-buttons font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Get My Monthly Report
              </a>
            </div>
            
            {/* Right side - What's included */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">What's Included?</h3>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-royal-gold" />
                    </div>
                    <span className="text-white/80 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
