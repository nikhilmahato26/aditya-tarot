import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I want to thank Mr. Aditya who helped me in every consequence without having the hurry for fees or anything. His predictions are always correct as if he's the one who wrote it! He'll tell you exactly where you'll lack and where and when exactly everything will align in your favor! Again thanks a lot sir!!",
    author: "Client via WhatsApp",
    service: "Spiritual Guidance"
  },
  {
    text: "Absolutely loved the session with Aditya Sevani ✨ Very accurate reading, helpful remedies, and such a positive vibe throughout the conversation 💫 Felt really good after talking to him. Thank you so much 🤍",
    author: "Karan Sevani",
    service: "Tarot Card Reading"
  },
  {
    text: "Ohh Sir, you are just divine... your Tarot readings are more than predictions, they are blessings of guidance. The clarity, the direction, and the positivity you bring is beyond words. Haven't Seen Such An Amazing Tarot Reader Like You Before 🥰🙏",
    author: "Client via WhatsApp",
    service: "Tarot Card Reading"
  },
  {
    text: "I came across Aditya Sir on Google Maps... From the moment we met him, his calm and composed energy made us feel instantly comfortable. He patiently listened to each one of them, giving us thoughtful and insightful answers. Aditya Sir truly has a gift — not just as a tarot reader, but as someone who radiates kindness and positive energy.",
    author: "Priyam Dixit",
    service: "Personal Session"
  },
  {
    text: "Tarot Reader Aditya is highly intuitive and guided me with accurate and insightful readings. One can definitely rely on him for guidance and answers, helping navigate life's path with greater clarity and confidence.",
    author: "Tanmay Sharma",
    service: "Tarot Card Reading"
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
    <section id="testimonials" className="py-24 overflow-hidden" style={{ background: '#0F0F16' }}>
      {/* Glow accent */}
      <div className="absolute pointer-events-none" style={{ left: '50%', top: '20%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(123,63,160,0.12) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translateX(-50%)' }} />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted <span className="text-gradient">Worldwide</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.6)' }}
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
                  <div className="rounded-xl p-8 h-full flex flex-col relative mt-4 shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ background: '#1A1A22', border: '1px solid rgba(255,255,255,0.07)' }}>
                    
                    {/* Tarot Inner Border */}
                    <div className="absolute inset-3 rounded-lg pointer-events-none" style={{ border: '1px solid rgba(168,85,247,0.1)' }} />
                    <div className="absolute inset-4 rounded-md pointer-events-none" style={{ border: '1px solid rgba(168,85,247,0.04)' }} />

                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-10" style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)', border: '3px solid #0F0F16' }}>
                      <Quote size={18} fill="currentColor" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full mt-4 text-center">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-royal-gold" fill="#D4AF37" />
                        ))}
                      </div>
                      
                      <p className="font-medium text-lg italic leading-relaxed mb-8 flex-grow" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        "{testimonial.text}"
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-center gap-2 mb-3 opacity-70">
                          <div className="h-px w-6" style={{ background: 'rgba(168,85,247,0.4)' }} />
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4AF37' }} />
                          <div className="h-px w-6" style={{ background: 'rgba(168,85,247,0.4)' }} />
                        </div>
                        <p className="font-heading font-bold text-xl" style={{ color: '#C084FC' }}>{testimonial.author}</p>
                        <p className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{testimonial.service}</p>
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
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(168,85,247,0.3)', color: '#C084FC', background: 'rgba(168,85,247,0.08)' }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(168,85,247,0.3)', color: '#C084FC', background: 'rgba(168,85,247,0.08)' }}
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
                className={`h-2.5 rounded-full transition-all`}
                style={{
                  width: index === selectedIndex ? '2rem' : '0.625rem',
                  background: index === selectedIndex ? '#A855F7' : 'rgba(168,85,247,0.25)'
                }}
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
