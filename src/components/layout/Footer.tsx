import React from 'react';
import { Logo } from '../ui/Logo';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-background border-t border-white/10 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <Logo className="mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Your strategic partner in China. We bridge the gap between global demand and Chinese industrial excellence.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground mb-8">Services</h4>
          <ul className="space-y-4">
            {['Product Sourcing', 'Supplier Audit', 'Quality Control', 'Logistics', 'Trade Finance', 'Negotiation'].map((item, i) => (
              <li key={i}>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground mb-8">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Process', 'Sectors', 'Testimonials', 'FAQ', 'Contact'].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground mb-8">Contact</h4>
          <ul className="space-y-6">
            {[
              { icon: <Mail className="w-4 h-4" />, text: "ops@venaglobaltrading.com" },
              { icon: <Phone className="w-4 h-4" />, text: "+86 135 1054 4452" },
              { icon: <MapPin className="w-4 h-4" />, text: "Shenzhen, China" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-muted-foreground">
                <div className="text-primary">{item.icon}</div>
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vena Trading. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
