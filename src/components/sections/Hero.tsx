import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => (
  <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center text-center">
    {/* Background Image */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img 
        src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773695722/VT_09_Web_Portfolio_Hero_vom_Bakground_1920x900_ktwqd3.webp"
        alt="Hero Background"
        className="w-full h-full object-cover opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-background/40 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>
    </div>

    {/* Background Gradients */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
    </div>

    <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full"
      >
        <div className="flex items-center gap-4 text-primary text-xs font-mono tracking-[0.2em] uppercase mb-8">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Operational Partner · Shenzhen, China</span>
          <span className="w-8 h-[1px] bg-primary"></span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-semibold leading-[0.9] mb-8 tracking-tight text-foreground">
          Operational Trade <br className="hidden md:block" />
          <span className="italic font-normal text-muted-foreground">Execution</span> Built for <span className="text-primary">Global Business.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Strategic sourcing, supplier verification and trade execution powered from China, delivered worldwide. We operate on the factory floor so your cargo arrives with precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button className="w-full sm:w-auto !px-8 !py-4 text-sm">
            Initiate a Trade Operation <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="w-full sm:w-auto !px-8 !py-4 text-sm">
            Our Execution Model
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Stats Bar */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-full max-w-6xl mx-auto mt-24 px-6 relative z-20"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-8 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-ring" />
          <span className="text-xs font-mono tracking-widest uppercase text-green-400">Operations Active</span>
        </div>
        
        <div className="flex items-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-semibold text-foreground mb-1">487<span className="text-primary">+</span></div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Verified Suppliers</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-semibold text-foreground mb-1">12<span className="text-primary">+</span></div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Active Sectors</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-semibold text-foreground mb-1">98<span className="text-primary">%</span></div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Delivery Rate</div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
