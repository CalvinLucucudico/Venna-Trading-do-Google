import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';

export const Problem = () => {
  const problems = [
    { 
      title: 'Unverified Suppliers', 
      desc: 'You send money to factories you have never seen. No audit, no guarantee. When quality fails, there is no recourse.',
      num: '01'
    },
    { 
      title: 'Wasted Time & Delays', 
      desc: 'Weeks spent on Alibaba comparing listings that all look the same. Communication gaps cause production delays.',
      num: '02'
    },
    { 
      title: 'Hidden Costs & Middlemen', 
      desc: 'Every intermediary adds margin. By the time goods arrive, you have paid 30-40% more than factory price.',
      num: '03'
    }
  ];

  return (
    <section className="py-24 md:py-32 border-y border-white/10 relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_60/v1773661984/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_2_qp35zy.jpg" 
          alt="Map Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="The Problem" title="Sourcing from China is broken." align="center" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
          Businesses lose millions every year to failed procurement. The supply chain from China is full of friction, opacity and risk.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-destructive/50 transition-colors"
            >
              <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-destructive/10 transition-colors">{item.num}</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
            "VENA exists because we lived this problem. We saw businesses lose money, time and trust. So we built the solution — from inside China."
          </p>
        </div>
      </div>
    </section>
  );
};
