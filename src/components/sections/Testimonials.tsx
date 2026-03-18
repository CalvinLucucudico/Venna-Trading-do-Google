import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../constants';

export const Testimonials = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Background Map */}
    <div className="absolute inset-0 z-0 opacity-10">
      <img 
        src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_60/v1773661981/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_6_tkwihp.jpg" 
        alt="Map Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading subtitle="Testimonials" title="What our clients say." />
      
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-background/60 backdrop-blur-md border border-white/10 flex flex-col"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => <span key={j} className="text-primary text-lg">★</span>)}
            </div>
            <p className="text-foreground/90 italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                {t.name.substring(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</div>
                <div className="text-[10px] text-primary font-mono">{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
