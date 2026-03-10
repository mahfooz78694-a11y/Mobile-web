'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Product } from '@/lib/types';
import { toast } from 'sonner';

export function CheckoutModal({ 
  product, 
  onClose, 
  onSubmit 
}: { 
  product: Product, 
  onClose: () => void, 
  onSubmit: (data: any) => void 
}) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.address || !formData.pincode) {
      toast.error('Please fill all fields');
      return;
    }
    onSubmit(formData);
    toast.success('Order Sent to Admin');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-lg p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Checkout</h2>
          <p className="text-white/50 text-sm">Complete your details to order the {product.name}.</p>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 mb-6">
          <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-white font-medium">{product.name}</h3>
            <p className="text-purple-400 text-sm">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5">Full Name</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5">Mobile Number</label>
            <input 
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5">Complete Address</label>
            <textarea 
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all min-h-[100px] resize-none"
              placeholder="123 Luxury Avenue, Tech Park..."
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5">Pincode</label>
            <input 
              type="text"
              value={formData.pincode}
              onChange={(e) => setFormData({...formData, pincode: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="400001"
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
