import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CurrencyConverter } from '../ui/CurrencyConverter';
import { SERVICES } from '../../constants';
import { Service } from '../../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

export const Services = ({ onServiceClick }: ServicesProps) => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <SectionHeading subtitle="What We Do" title="Execution Capabilities." />
        </div>
        <div className="lg:w-1/3">
          <CurrencyConverter />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onServiceClick(service)}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                View Details <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
