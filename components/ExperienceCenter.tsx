'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { TiltCard } from './TiltCard';

export function ExperienceCenter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const images = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', // modern glass building exterior
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', // tech corporate headquarters
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', // futuristic architecture
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop', // modern glass flagship store
  ];

  return (
    <section ref={containerRef} className="relative z-20 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Visit Our Premium Experience Center
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          Immerse yourself in the world of cutting-edge technology. Touch, feel, and experience the future before you buy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ perspective: "1500px" }}>
        <motion.div style={{ y: y1, perspective: "1500px" }}>
          <TiltCard className="h-full" innerClassName="p-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105" style={{ transform: "translateZ(80px)" }}>
              <Image src={images[0]} alt="Tech HQ 1" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </TiltCard>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 md:gap-12" style={{ perspective: "1500px" }}>
          <motion.div style={{ y: y2, perspective: "1500px" }}>
            <TiltCard className="h-full" innerClassName="p-4">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105" style={{ transform: "translateZ(80px)" }}>
                <Image src={images[1]} alt="Tech HQ 2" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </TiltCard>
          </motion.div>
          <motion.div style={{ y: y3, perspective: "1500px" }}>
            <TiltCard className="h-full" innerClassName="p-4">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105" style={{ transform: "translateZ(80px)" }}>
                <Image src={images[2]} alt="Tech HQ 3" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div style={{ y: y1, perspective: "1500px" }} className="md:col-span-2">
          <TiltCard className="h-full" innerClassName="p-4">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105" style={{ transform: "translateZ(80px)" }}>
              <Image src={images[3]} alt="Tech HQ 4" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
