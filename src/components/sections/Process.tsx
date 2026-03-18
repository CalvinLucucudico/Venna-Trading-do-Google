import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STEPS } from '../../constants';

export const Process = () => (
  <section id="process" className="py-24 md:py-32 bg-white/5 border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading subtitle="How It Works" title="Five steps to delivery." align="center" />
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
        Every engagement follows the same structured process. No improvisation, no skipped steps.
      </p>
      
      <div className="grid md:grid-cols-5 gap-8 relative">
        {/* Connecting Line for Desktop */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
        
        {PROCESS_STEPS.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-colors shadow-xl relative overflow-hidden">
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
              <span className="text-3xl font-bold text-primary opacity-50 group-hover:opacity-100 transition-opacity relative z-10">{step.number}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
