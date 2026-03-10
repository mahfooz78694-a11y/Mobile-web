'use client';

import { MapPin, Clock, Phone } from 'lucide-react';

export function StoreLocation() {
  return (
    <section className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Our Flagship Store
          </h2>
          <p className="text-white/50">Experience the devices in person before you buy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl p-2">
          <div className="p-8 lg:p-12 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">NEXUS Studio</h3>
              <p className="text-white/60">The ultimate destination for premium tech.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    123 Innovation Drive, Tech District<br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Mon - Sat: 10:00 AM - 9:00 PM<br />
                    Sunday: 11:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Contact</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    +1 (800) 123-4567<br />
                    support@nexus.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-full w-full rounded-2xl overflow-hidden relative bg-[#111]">
            {/* Dark Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/600?grayscale')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            
            {/* Map Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div className="w-4 h-1 bg-black/50 blur-sm rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
