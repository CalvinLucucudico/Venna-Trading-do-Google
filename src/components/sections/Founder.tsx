import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const Founder = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="The Founder" title="Visionary leadership in global trade." />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cynthia leads VENA Trading with a deep understanding of the complexities of international trade between China and Africa. Her presence in Shenzhen ensures that every client receives the highest level of operational excellence and transparency.
            </p>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Cynthia</h4>
                <p className="text-sm text-muted-foreground">Founder & CEO, VENA Trading</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <img 
                src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661741/Fundadora_Op%C3%A7%C3%A3o-03_a_Cynthia_Gostou_ffpgea.webp"
                alt="Founder Default"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img 
                src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661743/Fundadora_Op%C3%A7%C3%A3o-01_mpvwvw.webp"
                alt="Founder Hover"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
