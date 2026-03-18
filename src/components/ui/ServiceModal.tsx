import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Service } from '../../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export const ServiceModal = ({ service, onClose, onBookConsultation }: ServiceModalProps) => {
  return (
    <AnimatePresence>
      {service && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={onClose} />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-background border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
              {service.icon}
            </div>
            
            <h3 className="text-3xl font-semibold mb-4 text-foreground">{service.title}</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="space-y-4 mb-10 bg-white/5 p-6 rounded-2xl border border-white/5">
              <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">What's included:</h4>
              {service.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground/90">{detail}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full !py-4 text-sm" onClick={() => onBookConsultation(service.title)}>
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
