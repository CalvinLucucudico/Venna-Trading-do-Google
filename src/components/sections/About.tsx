import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Globe2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const About = () => (
  <section id="about" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading 
            subtitle="About VENA" 
            title="Not a broker. A true operational partner." 
          />
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            VENA Trading is your strategic arm in Shenzhen. We don't just connect buyers and sellers. We execute, organise, structure and deliver the entire commercial operation end-to-end — removing every obstacle between your business and the products you need.
          </p>
          
          <div className="space-y-4">
            {[
              { title: 'End-to-End Execution', desc: 'From sourcing to delivery, we own every step. No handoffs. No uncertainty.', icon: <Zap className="w-5 h-5 text-primary" /> },
              { title: 'Trust & Transparency', desc: 'Every supplier verified, every shipment tracked, every contract documented.', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
              { title: 'Local Intelligence', desc: 'On the ground in China, deeply connected across global markets.', icon: <Globe2 className="w-5 h-5 text-primary" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 relative group">
            <img 
              src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661251/Reuni%C3%A3o_executiva_Africa_Asia_mw81za.webp" 
              alt="Business Negotiation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Based in Shenzhen</div>
              <div className="font-semibold text-foreground">Operational since 2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
