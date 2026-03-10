'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export function AdminLoginModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'BOSS2026') {
      toast.success('Access Granted');
      onSuccess();
    } else {
      setIsError(true);
      toast.error('Invalid Passcode');
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isError ? { x: [-10, 10, -10, 10, 0] } : { opacity: 1, scale: 1 }}
        transition={{ duration: isError ? 0.4 : 0.2 }}
        className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Restricted Access</h2>
          <p className="text-white/50 text-sm">Enter the secret passcode to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passcode"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-center tracking-widest"
              autoFocus
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(236,72,153,0.4)]"
          >
            Authenticate
          </button>
        </form>
      </motion.div>
    </div>
  );
}
