import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real application, you would send this to your backend or a service like EmailJS.
    // For now, we'll format a WhatsApp message as a fallback.
    const message = `Hello Aditya,\n\nMy name is ${data.name}.\nPhone: ${data.phone}\nI am interested in: ${data.service}\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/919784249695?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-soft-lavender/30 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6">
              Ready to find <br/>
              <span className="text-gradient">your direction?</span>
            </h2>
            <p className="text-dark/70 font-light text-lg mb-12 max-w-md leading-relaxed">
              Reach out today to book your personalized spiritual consultation. I am here to listen and guide you without judgment.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-primary/10">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-dark mb-1">Call Us</h4>
                  <p className="text-dark/70 font-light mb-2">Available for worldwide calls</p>
                  <a href="tel:+919784249695" className="text-primary font-medium hover:underline">+91 97842 49695</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-dark mb-1">Email Us</h4>
                  <p className="text-dark/70 font-light mb-2">For detailed queries</p>
                  <a href="mailto:astroadityasevani@gmail.com" className="text-primary font-medium hover:underline">astroadityasevani@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-dark mb-1">Location</h4>
                  <p className="text-dark/70 font-light">Jaipur, Rajasthan, India<br/>(Online Consultations Globally)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/919784249695" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-buttons text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
          
          {/* Right - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/50 shadow-xl"
          >
            <h3 className="font-heading text-3xl font-bold text-dark mb-8">Book a Consultation</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-light"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark/70 mb-2">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-light"
                  placeholder="+1 234 567 8900"
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-dark/70 mb-2">Service Interested In</label>
                <select 
                  id="service"
                  {...register('service')}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-light appearance-none"
                >
                  <option value="Tarot Reading">Tarot Card Reading</option>
                  <option value="Face Reading">Face Reading</option>
                  <option value="Numerology">Numerology</option>
                  <option value="Monthly Report">Monthly Tarot Report</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-2">Brief Message (Optional)</label>
                <textarea 
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-light resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-buttons text-base shadow-lg hover:shadow-xl hover:bg-[#3b1754] hover:-translate-y-0.5 transition-all"
              >
                Request Booking
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
