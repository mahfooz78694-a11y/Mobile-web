'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function Footer({ onAdminClick }: { onAdminClick: () => void }) {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const policies = {
    privacy: {
      title: 'Privacy Policy',
      content: 'We take your privacy seriously. This policy describes what personal information we collect and how we use it. We do not share your data with third parties without your explicit consent. All transactions are encrypted and securely processed. We may use cookies to enhance your browsing experience. By using our site, you agree to our privacy practices.'
    },
    terms: {
      title: 'Terms & Conditions',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time.'
    },
    return: {
      title: 'Return Policy',
      content: 'We offer a 14-day return policy for all unused devices in their original packaging. If you are not completely satisfied with your purchase, you may return it for a full refund or exchange. Please note that return shipping costs are the responsibility of the customer unless the item is defective. Refunds will be processed within 5-7 business days after we receive the returned item.'
    }
  };

  return (
    <>
      <footer className="relative z-20 bg-black/40 backdrop-blur-2xl border-t border-white/10 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">NEXUS</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The Future of Mobile. Experience uncompromising performance and unrivaled design.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#shop" className="text-sm text-white/50 hover:text-white transition-colors">Shop</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Experience Center</a>
              </li>
              <li>
                <button onClick={onAdminClick} className="text-sm text-white/50 hover:text-white transition-colors">Admin Login</button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => setActivePolicy('privacy')} className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => setActivePolicy('terms')} className="text-sm text-white/50 hover:text-white transition-colors">Terms & Conditions</button>
              </li>
              <li>
                <button onClick={() => setActivePolicy('return')} className="text-sm text-white/50 hover:text-white transition-colors">Return Policy</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} NEXUS Mobile. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30">Designed in Silicon Valley</span>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <button 
                onClick={() => setActivePolicy(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {policies[activePolicy as keyof typeof policies].title}
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-white/60 leading-relaxed">
                  {policies[activePolicy as keyof typeof policies].content}
                </p>
                <p className="text-sm text-white/60 leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mt-4">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
