'use client';

import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center">
      {/* 3D Robot Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <iframe 
          src="https://my.spline.design/nexbotrobotcharacterconcept-YxKb6eclw03UjvaIsAS6DESM/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          title="3D Robot"
        ></iframe>
      </div>

      {/* Top Text */}
      <div className="absolute top-28 md:top-32 z-20 text-center pointer-events-none px-4 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-black tracking-tighter gold-text-gradient animate-bg-shimmer drop-shadow-[0_0_15px_rgba(191,149,63,0.5)]"
        >
          THE FUTURE OF MOBILE
        </motion.h1>
      </div>

      {/* Bottom Text & CTA */}
      <div className="absolute bottom-10 z-20 text-center pointer-events-none px-4 flex flex-col items-center gap-6 w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl font-light text-white/80 max-w-2xl drop-shadow-md"
        >
          Experience the pinnacle of technology and design. Curated for the elite.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pointer-events-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-medium tracking-wide hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          onClick={() => {
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Collection
        </motion.button>
      </div>
      
      {/* Gradient Overlays for blending */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#010101]/40 via-transparent to-[#010101]"></div>
    </section>
  );
}
