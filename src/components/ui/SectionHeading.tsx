import React from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ title, subtitle, align = 'left' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      {align === 'center' && <div className="w-8 h-[1px] bg-primary"></div>}
      <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
        {subtitle}
      </span>
      <div className="w-8 h-[1px] bg-primary"></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground"
    >
      {title}
    </motion.h2>
  </div>
);
