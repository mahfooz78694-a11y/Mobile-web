'use client';

import { motion } from 'motion/react';
import { Product } from '@/lib/types';
import { PRODUCTS } from '@/lib/data';
import { TiltCard } from './TiltCard';

import { Eye } from 'lucide-react';

function ProductCard({ product, onBuyClick }: { product: Product, onBuyClick: (product: Product) => void }) {
  return (
    <div className="w-full h-full relative">
      {/* Feature 4: Live Stock Badge */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full shadow-xl">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
        <span className="text-[9px] font-bold text-white/90 tracking-widest uppercase">Only 2 Left</span>
      </div>

      <TiltCard>
        <div className="relative w-full h-[350px] flex items-center justify-center [transform-style:preserve-3d]">
          {/* Feature 5: Quick View */}
          <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-colors cursor-pointer shadow-lg [transform:translateZ(30px)]">
            <Eye className="w-4 h-4" />
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={product.image} 
            className="max-w-full max-h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] [transform:translateZ(100px)_scale(1.1)]" 
            alt="Phone" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div 
          className="flex flex-col gap-4 mt-auto"
          style={{ transform: "translateZ(60px)" }}
        >
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">{product.name}</h3>
            
            {/* Feature 1: Tech Specs Badges */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/70 uppercase tracking-wider">12GB RAM</span>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/70 uppercase tracking-wider">256GB ROM</span>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/70 uppercase tracking-wider">Snapdragon 8 Gen 3</span>
            </div>

            {/* Feature 2: Color Variants */}
            <div className="flex items-center gap-2 mt-4 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#b0b3b8] shadow-[0_0_8px_rgba(176,179,184,0.4)] border border-white/20 cursor-pointer transition-transform hover:scale-110"></div>
              <div className="w-3 h-3 rounded-full bg-[#1c1c1e] shadow-[0_0_8px_rgba(28,28,30,0.4)] border border-white/20 cursor-pointer transition-transform hover:scale-110"></div>
              <div className="w-3 h-3 rounded-full bg-[#f5f5f7] shadow-[0_0_8px_rgba(245,245,247,0.4)] border border-white/20 cursor-pointer transition-transform hover:scale-110"></div>
            </div>

            <p className="text-purple-400 font-medium mt-1">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
            </p>
            
            {/* Feature 3: EMI Breakdown */}
            <p className="text-[10px] text-white/40 mt-1 font-medium tracking-wide">
              Starts from ₹4,500/mo with No-Cost EMI
            </p>
          </div>
          
          <button 
            onClick={() => onBuyClick(product)}
            className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#e2e2e2] to-[#b0b0b0] text-black font-extrabold px-8 py-3 rounded-full transition-all duration-200 shadow-[0_6px_0_#828282,0_15px_20px_rgba(0,0,0,0.4)] active:translate-y-[6px] active:shadow-none before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent mt-2"
          >
            Buy Now
          </button>
        </div>
      </TiltCard>
    </div>
  );
}

export function Shop({ onBuyClick }: { onBuyClick: (product: Product) => void }) {
  return (
    <section id="shop" className="relative bg-[#050505] overflow-hidden z-20 pointer-events-auto py-24 px-6">
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(192,192,192,0.2)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Collection
          </h2>
          <p className="text-white/50 mb-8">Uncompromising performance. Unrivaled design.</p>
          
          {/* Trust Banner */}
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="text-lg">🚚</span> Free Fast Shipping
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="text-lg">🛡️</span> 1-Year Brand Warranty
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="text-lg">🔒</span> Secure Checkout
            </div>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          style={{ perspective: "1500px" }}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{ perspective: "1500px" }}
            >
              <ProductCard product={product} onBuyClick={onBuyClick} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
