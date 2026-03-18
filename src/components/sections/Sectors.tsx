import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { SECTORS } from '../../constants';

export const Sectors = () => (
  <section id="sectors" className="py-24 md:py-32 border-y border-white/10 relative overflow-hidden">
    {/* Background Map */}
    <div className="absolute inset-0 z-0 opacity-10">
      <img 
        src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_60/v1773661977/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_4_m6alum.jpg" 
        alt="Map Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading subtitle="Sectors" title="Twelve sectors, one standard." align="center" />
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
        We source across the highest-demand categories. Each sector has a dedicated supplier portfolio, pre-vetted and audited.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SECTORS.map((sector, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-2xl bg-background/80 backdrop-blur-sm border border-white/10 flex items-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              {sector.icon}
            </div>
            <span className="font-medium text-foreground text-sm">{sector.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
