import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const faqs = [
  {
    question: "What can I ask during a Tarot consultation?",
    answer: "You can ask about almost anything that is troubling you or where you need direction. Common topics include love and relationships, career choices, financial stability, marriage compatibility, and personal growth. It is best to come with specific, open-ended questions."
  },
  {
    question: "How does the process work?",
    answer: "Once you book a consultation, you will need to share some basic details. Depending on your preference, the session can be conducted via Chat, Phone, or Video Call. During the session, I will connect with your energy, draw cards (for Tarot) or analyze features (for Face Reading), and provide honest, actionable guidance."
  },
  {
    question: "Which consultation modes are available?",
    answer: "We offer complete flexibility. You can choose from WhatsApp Chat, Voice Call, or Video Call (via Zoom/WhatsApp) based on your comfort and time zone."
  },
  {
    question: "Is my information confidential?",
    answer: "Absolutely. We follow a strict code of ethics. Everything discussed during your consultation, along with your personal details, remains 100% private and confidential."
  },
  {
    question: "Do you provide worldwide consultations?",
    answer: "Yes, I consult clients globally. We have clients from India, USA, UK, Canada, Australia, UAE, and many other countries. Time slots are adjusted to accommodate different time zones."
  },
  {
    question: "What is the Monthly Tarot Report?",
    answer: "The Monthly Tarot Report is a comprehensive, personalized guide for your upcoming month. For just ₹351, you receive detailed insights on your career, finances, relationships, health, and important dates to watch out for."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-dark/70 text-lg font-light">
            Find answers to common questions about consultations and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === index ? "border-primary/20 bg-soft-lavender/30" : "border-gray-100 bg-white"
              )}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-semibold text-xl text-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "text-primary shrink-0 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-dark/70 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
