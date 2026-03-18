import React, { useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Ticker } from '../components/sections/Ticker';
import { About } from '../components/sections/About';
import { Problem } from '../components/sections/Problem';
import { Services } from '../components/sections/Services';
import { Sectors } from '../components/sections/Sectors';
import { GlobalReach } from '../components/sections/GlobalReach';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Founder } from '../components/sections/Founder';
import { Contact } from '../components/sections/Contact';
import { CTA } from '../components/sections/CTA';
import { ServiceModal } from '../components/ui/ServiceModal';
import ChatWidget from '../components/ChatWidget';
import { Service } from '../types';

export default function Home() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [contactMessage, setContactMessage] = useState('');
  const [isNavHidden, setIsNavHidden] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150 && latest > previous) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  const handleBookConsultation = (serviceTitle: string) => {
    setContactMessage(`I am interested in the ${serviceTitle} service. Please provide more information.`);
    setActiveService(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar isHidden={isNavHidden} />

      <main>
        <Hero />
        <Ticker />
        <About />
        <Problem />
        <Services onServiceClick={(service) => setActiveService(service)} />
        <Sectors />
        <GlobalReach />
        <Process />
        <Testimonials />
        <FAQ />
        <Founder />
        <Contact initialMessage={contactMessage} />
        <CTA />
      </main>

      <Footer />

      <ServiceModal 
        service={activeService} 
        onClose={() => setActiveService(null)} 
        onBookConsultation={handleBookConsultation}
      />

      <ChatWidget />
    </div>
  );
}
