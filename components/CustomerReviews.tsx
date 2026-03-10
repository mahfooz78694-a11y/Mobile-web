'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Alex M.",
    role: "Verified Buyer",
    content: "The delivery was incredibly fast and the packaging felt premium. The phone itself is a masterpiece.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Verified Buyer",
    content: "Upgraded from my 3-year-old device. The camera quality is mind-blowing. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "David K.",
    role: "Verified Buyer",
    content: "Customer support was very helpful when I had questions about the EMI options. Seamless experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya R.",
    role: "Verified Buyer",
    content: "Absolutely stunning design. The titanium finish feels so luxurious in hand.",
    rating: 5,
  }
];

export function CustomerReviews() {
  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Thousands
          </h2>
          <p className="text-white/50">Don&apos;t just take our word for it.</p>
        </div>

        <div className="flex overflow-hidden space-x-6 group">
          <motion.div 
            className="flex space-x-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <div 
                key={`${review.id}-${index}`}
                className="w-[350px] p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed flex-grow">&quot;{review.content}&quot;</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{review.name}</h4>
                    <p className="text-white/40 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
