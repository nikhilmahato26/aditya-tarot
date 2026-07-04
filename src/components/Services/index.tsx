import { motion } from 'framer-motion';
import { ArrowRight, Star, User, Hash } from 'lucide-react';

const services = [
  {
    id: 'tarot',
    title: 'Tarot Card Reading',
    description: 'Gain profound insights into your past, present, and future. Find answers to your most pressing questions.',
    icon: <Star size={32} style={{ color: '#A855F7' }} />,
    topics: [
      'Love', 'Relationships', 'Marriage', 'Career', 
      'Business', 'Finance', 'Health', 'Personal Growth'
    ],
    delay: 0.1
  },
  {
    id: 'face-reading',
    title: 'Face Reading',
    description: 'Discover your hidden talents, emotional patterns, and life path through the ancient art of face reading.',
    icon: <User size={32} style={{ color: '#A855F7' }} />,
    topics: [
      'Personality', 'Strengths', 'Hidden Talents', 
      'Emotional Patterns', 'Career Direction', 'Compatibility'
    ],
    delay: 0.2
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description: 'Understand the vibrational meaning of numbers in your life to unlock opportunities and harmony.',
    icon: <Hash size={32} style={{ color: '#A855F7' }} />,
    topics: [
      'Career', 'Marriage', 'Lucky Numbers', 
      'Name Correction', 'Finance', 'Future Opportunities'
    ],
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative" style={{ background: '#0D0D12' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[30%] h-[50%] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7B3FA0 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(-50%)' }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Premium Spiritual <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Select the service that resonates with your current life situation. Each reading is tailored to provide clarity and actionable guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative rounded-xl p-8 flex flex-col h-full group perspective-1000 transition-all duration-300"
              style={{ 
                background: '#1A1A22', 
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(168,85,247,0.25)';
                el.style.background = '#1E1E2A';
                el.style.boxShadow = '0 20px 60px rgba(123,63,160,0.15)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(255,255,255,0.07)';
                el.style.background = '#1A1A22';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Tarot Inner Border */}
              <div className="absolute inset-3 rounded-lg pointer-events-none transition-colors group-hover:border-purple-500/20" style={{ border: '1px solid rgba(168,85,247,0.1)' }} />
              <div className="absolute inset-4 rounded-md pointer-events-none" style={{ border: '1px solid rgba(168,85,247,0.05)' }} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  {service.icon}
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="mb-8 font-light leading-relaxed flex-grow text-center" style={{ color: 'rgba(255,255,255,0.6)' }}>{service.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4 justify-center opacity-70">
                     <div className="h-px w-8" style={{ background: 'rgba(168,85,247,0.4)' }} />
                     <Star size={10} style={{ color: '#D4AF37' }} />
                     <div className="h-px w-8" style={{ background: 'rgba(168,85,247,0.4)' }} />
                  </div>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                    {service.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <div className="w-1 h-1 rounded-full" style={{ background: '#D4AF37' }} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className="mt-auto w-full group/btn flex items-center justify-between px-6 py-4 rounded-lg font-buttons text-sm transition-all shadow-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
