import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';

export const ChinaPresence = () => {
  const stats = [
    { val: '487+', label: 'Verified Suppliers' },
    { val: '12+', label: 'Sectors' },
    { val: '24h', label: 'Response Time' }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="China Presence" title="On the ground in Shenzhen." />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in the world's manufacturing epicentre, VENA operates directly within China's industrial supply chain. No remote management, no third-party guessing. Our team speaks the language, knows the factories and negotiates face-to-face.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 border-t-2 border-t-primary">
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 rounded-xl overflow-hidden border border-white/10 aspect-[16/9] relative"
            >
              <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Interior_de_f%C3%A1brica_chinesa-Op%C3%A7%C3%A3o-01_fu11cv.jpg" alt="Factory" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-mono uppercase tracking-widest border border-white/10">Factory · Shenzhen</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-white/10 aspect-square relative"
            >
              <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661253/Interior_de_f%C3%A1brica_chinesa-Op%C3%A7%C3%A3o-02_zyit9a.jpg" alt="Production" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-white/10 aspect-square relative"
            >
              <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661247/Armazen_1_paziaw.jpg" alt="Warehouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
