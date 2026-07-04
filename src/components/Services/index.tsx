import { motion } from 'framer-motion';
import { ArrowRight, Star, User, Hash } from 'lucide-react';

const services = [
  {
    id: 'tarot',
    title: 'Tarot Card Reading',
    description: 'Gain profound insights into your past, present, and future. Find answers to your most pressing questions.',
    icon: <Star size={32} className="text-primary" />,
    topics: [
      'Love', 'Relationships', 'Marriage', 'Career', 
      'Business', 'Finance', 'Health', 'Personal Growth'
    ],
    bg: 'bg-soft-lavender',
    delay: 0.1
  },
  {
    id: 'face-reading',
    title: 'Face Reading',
    description: 'Discover your hidden talents, emotional patterns, and life path through the ancient art of face reading.',
    icon: <User size={32} className="text-primary" />,
    topics: [
      'Personality', 'Strengths', 'Hidden Talents', 
      'Emotional Patterns', 'Career Direction', 'Compatibility'
    ],
    bg: 'bg-ivory',
    delay: 0.2
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description: 'Understand the vibrational meaning of numbers in your life to unlock opportunities and harmony.',
    icon: <Hash size={32} className="text-primary" />,
    topics: [
      'Career', 'Marriage', 'Lucky Numbers', 
      'Name Correction', 'Finance', 'Future Opportunities'
    ],
    bg: 'bg-white',
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Premium Spiritual <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-dark/70 text-lg leading-relaxed font-light"
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
              whileHover={{ y: -15, rotateY: 5 }}
              className={`relative rounded-xl p-8 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col h-full ${service.bg} group perspective-1000`}
            >
              {/* Tarot Inner Border */}
              <div className="absolute inset-3 border border-primary/30 rounded-lg pointer-events-none group-hover:border-primary/50 transition-colors" />
              <div className="absolute inset-4 border border-primary/10 rounded-md pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-8 mx-auto border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-dark mb-4 text-center">{service.title}</h3>
                <p className="text-dark/70 mb-8 font-light leading-relaxed flex-grow text-center">{service.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4 justify-center opacity-70">
                     <div className="h-px w-8 bg-primary/40" />
                     <Star size={10} className="text-primary" />
                     <div className="h-px w-8 bg-primary/40" />
                  </div>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                    {service.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-dark/80 font-medium tracking-wide">
                        <div className="w-1 h-1 rounded-full bg-royal-gold" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className="mt-auto w-full group/btn flex items-center justify-between bg-dark text-white px-6 py-4 rounded-lg font-buttons text-sm transition-all hover:bg-primary shadow-lg"
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
