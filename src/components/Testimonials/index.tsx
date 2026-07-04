import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The guidance was incredibly accurate and helped me make an important career decision.",
    author: "Client from USA",
    service: "Tarot Card Reading"
  },
  {
    text: "Very honest consultation. No unnecessary fear or pressure. I felt completely at peace.",
    author: "Client from India",
    service: "Face Reading"
  },
  {
    text: "I booked Numerology and was amazed by the accuracy. Highly recommended for finding direction.",
    author: "Client from UK",
    service: "Numerology"
  },
  {
    text: "Professional online consultation from Canada. The session was transformative.",
    author: "Client from Canada",
    service: "Tarot Card Reading"
  },
  {
    text: "Patient, practical and spiritually uplifting. Aditya ji gave me clarity when I needed it most.",
    author: "Client from UAE",
    service: "Complete Consultation"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 bg-ivory overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Trusted <span className="text-gradient">Worldwide</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-dark/70 text-lg leading-relaxed font-light"
          >
            Read what clients across the globe have to say about their experience and the guidance they received.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 pl-4 py-8">
                  <div className="glass-panel rounded-xl p-8 h-full flex flex-col border border-primary/20 relative mt-4 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                    
                    {/* Tarot Inner Border */}
                    <div className="absolute inset-3 border border-primary/30 rounded-lg pointer-events-none" />
                    <div className="absolute inset-4 border border-primary/10 rounded-md pointer-events-none" />

                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-ivory z-10">
                      <Quote size={18} fill="currentColor" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full mt-4 text-center">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-royal-gold" fill="#D4AF37" />
                        ))}
                      </div>
                      
                      <p className="text-dark/80 font-medium text-lg italic leading-relaxed mb-8 flex-grow">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-center gap-2 mb-3 opacity-70">
                          <div className="h-px w-6 bg-primary/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                          <div className="h-px w-6 bg-primary/40" />
                        </div>
                        <p className="font-heading font-bold text-xl text-primary">{testimonial.author}</p>
                        <p className="text-xs text-dark/50 font-medium uppercase tracking-wider mt-1">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === selectedIndex ? 'bg-primary w-8' : 'bg-primary/20'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
