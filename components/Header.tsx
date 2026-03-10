'use client';

import { Lock } from 'lucide-react';

export function Header({ onLockClick }: { onLockClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-transparent pointer-events-none">
      <div className="text-xl font-black tracking-widest text-white drop-shadow-md">
        NEXUS
      </div>
      <button 
        onClick={onLockClick}
        className="pointer-events-auto p-2 rounded-full hover:bg-red-500/10 transition-all duration-300 opacity-50 hover:opacity-100 group"
        title="Admin Login"
      >
        <Lock size={18} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,1)] transition-all" />
      </button>
    </header>
  );
}
