import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';

export const GlobalReach = () => {
  const regions = [
    { name: 'China', role: 'Operational Base', desc: 'Direct factory floor execution in Shenzhen and industrial hubs.' },
    { name: 'Africa', role: 'Strategic Market', desc: 'Deep expertise in bridging China with emerging African economies.' },
    { name: 'Global', role: 'Expansion', desc: 'Structuring trade operations for clients in Europe, Americas, and beyond.' }
  ];

  return (
    <section id="global-reach" className="py-24 md:py-32 relative overflow-hidden">
      {/* World Map Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661250/Armazen_V_1_kw2icw.jpg" 
          alt="Global Map" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Global Reach" title="China Execution. Global Delivery." />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              From our operational headquarters in Shenzhen, we execute trade operations for clients worldwide. Whether you are expanding in emerging markets or optimizing supply chains in established economies, VENA provides the local intelligence and physical presence required for success.
            </p>
            
            <div className="space-y-6">
              {regions.map((region, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-foreground">{region.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-mono">{region.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{region.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-2 rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] relative shadow-2xl"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Interior_de_f%C3%A1brica_chinesa-Op%C3%A7%C3%A3o-01_fu11cv.jpg" alt="Factory" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest opacity-70">Operational Base</div>
                  <div className="text-lg font-bold">Shenzhen, China</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10 aspect-square relative shadow-xl"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661707/Conteiner_v1_yktq6m.jpg" alt="Logistics" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-white/10 aspect-square relative shadow-xl"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661247/Armazen_1_paziaw.jpg" alt="Warehouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
