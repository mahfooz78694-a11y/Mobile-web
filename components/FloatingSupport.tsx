'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingSupport() {
  return (
    <button 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white text-black px-4 py-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300 group"
      onClick={() => alert('Live Chat Support coming soon!')}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-bold text-sm hidden sm:block">Live Chat</span>
      
      {/* Glowing pulse effect */}
      <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-20"></span>
    </button>
  );
}
