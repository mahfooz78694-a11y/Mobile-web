'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TiltCard({ children, className = '', innerClassName = 'p-6' }: { children: React.ReactNode, className?: string, innerClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl p-[2px] overflow-hidden group w-full h-full ${className}`}
    >
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,_transparent,_#00f2fe,_#FA93FA,_transparent)] animate-[spin_4s_linear_infinite]"></div>
      <div 
        className={`relative bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-2xl h-full w-full flex flex-col z-10 ${innerClassName}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
