import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

export const Navbar = ({ isHidden = false }: { isHidden?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
            <Button variant="primary" className="!py-2.5 !px-6 text-xs uppercase tracking-widest font-bold flex items-center gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Initiate Operation <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full" onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>Contact Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
