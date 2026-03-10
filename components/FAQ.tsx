'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What are the available EMI options?",
    answer: "We offer No-Cost EMI up to 12 months with all major credit cards. Standard EMI options are available up to 24 months."
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3-5 business days. We also offer next-day delivery in select metro cities for orders placed before 2 PM."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 14-day hassle-free return policy for unopened items. For defective products, we provide a replacement within 7 days of delivery."
  },
  {
    question: "Are the products genuine?",
    answer: "Yes, all our products are 100% genuine and come directly from the manufacturer with a full 1-year brand warranty."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50">Everything you need to know about your purchase.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-white/50" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
