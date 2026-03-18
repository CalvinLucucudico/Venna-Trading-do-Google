import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Armaz%C3%A9m_contentor_log%C3%ADstica_v2_jazib1.jpg" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 md:p-20"
        >
          <SectionHeading subtitle="Ready to Start?" title="Let's build your supply chain." align="center" />
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Stop guessing. Start executing. Join the businesses that trust VENA as their operational arm in China.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto !px-10 !py-4 text-sm">
              Get a Free Quote
            </Button>
            <Button variant="outline" className="w-full sm:w-auto !px-10 !py-4 text-sm">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
