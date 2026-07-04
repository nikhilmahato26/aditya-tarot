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
    const message = `Hello Aditya,\n\nMy name is ${data.name}.\nPhone: ${data.phone}\nI am interested in: ${data.service}\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/919784249695?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  const inputStyle = {
    width: '100%',
    background: '#12121A',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    color: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: '#0F0F16' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7B3FA0 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to find <br/>
              <span className="text-gradient">your direction?</span>
            </h2>
            <p className="font-light text-lg mb-12 max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Reach out today to book your personalized spiritual consultation. I am here to listen and guide you without judgment.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}>
                  <Phone size={20} style={{ color: '#C084FC' }} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-white mb-1">Call Us</h4>
                  <p className="font-light mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>Available for worldwide calls</p>
                  <a href="tel:+919784249695" className="font-medium hover:underline" style={{ color: '#C084FC' }}>+91 97842 49695</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}>
                  <Mail size={20} style={{ color: '#C084FC' }} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-white mb-1">Email Us</h4>
                  <p className="font-light mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>For detailed queries</p>
                  <a href="mailto:astroadityasevani@gmail.com" className="font-medium hover:underline" style={{ color: '#C084FC' }}>astroadityasevani@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}>
                  <MapPin size={20} style={{ color: '#C084FC' }} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-white mb-1">Location</h4>
                  <p className="font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>Jaipur, Rajasthan, India<br/>(Online Consultations Globally)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/919784249695" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-buttons text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                style={{ background: '#25D366' }}
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
            className="p-8 md:p-10 rounded-[2rem] shadow-2xl"
            style={{ background: '#1A1A22', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="font-heading text-3xl font-bold text-white mb-8">Book a Consultation</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  style={inputStyle}
                  placeholder="John Doe"
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  style={inputStyle}
                  placeholder="+1 234 567 8900"
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>Service Interested In</label>
                <select 
                  id="service"
                  {...register('service')}
                  style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="Tarot Reading" style={{ background: '#1A1A22' }}>Tarot Card Reading</option>
                  <option value="Face Reading" style={{ background: '#1A1A22' }}>Face Reading</option>
                  <option value="Numerology" style={{ background: '#1A1A22' }}>Numerology</option>
                  <option value="Monthly Report" style={{ background: '#1A1A22' }}>Monthly Tarot Report</option>
                  <option value="General Enquiry" style={{ background: '#1A1A22' }}>General Enquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>Brief Message (Optional)</label>
                <textarea 
                  id="message"
                  {...register('message')}
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  placeholder="How can I help you?"
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.1)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              
              <button 
                type="submit"
                className="w-full text-white py-4 rounded-xl font-buttons text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #7B3FA0, #A855F7)' }}
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
