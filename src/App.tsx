import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Globe2, ShieldCheck, Zap, Users, BarChart3, Search, 
  FileText, Truck, MessageSquare, ChevronDown, Menu, X, Building2, Factory, 
  HardHat, Cpu, Utensils, Shirt, Stethoscope, Car, Package, Armchair, Shield, 
  FlaskConical, Linkedin, Instagram, Facebook, Twitter, Mail, MapPin, Phone, Play
} from 'lucide-react';
import ChatWidget from './components/ChatWidget';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

interface Sector {
  name: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  location: string;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'Identification and selection of qualified suppliers across the entire Chinese industrial ecosystem.',
    icon: <Search className="w-6 h-6" />,
    details: ['Market mapping', 'Production capacity analysis', 'Comparative cost reports']
  },
  {
    id: 'verification',
    title: 'Supplier Verification',
    description: 'Rigorous due diligence and auditing of manufacturers to eliminate fraud and quality risks.',
    icon: <ShieldCheck className="w-6 h-6" />,
    details: ['License verification', 'Physical factory audit', 'Export history analysis']
  },
  {
    id: 'procurement',
    title: 'Procurement Support',
    description: 'Full support for the purchasing process, from initial order to financial settlement.',
    icon: <FileText className="w-6 h-6" />,
    details: ['PO management', 'Secure payment control', 'Document compliance']
  },
  {
    id: 'facilitation',
    title: 'Trade Facilitation',
    description: 'Smoothing the entire commercial chain, removing bureaucratic and logistical barriers.',
    icon: <Zap className="w-6 h-6" />,
    details: ['Process optimization', 'Customs clearance', 'International certifications']
  },
  {
    id: 'negotiation',
    title: 'Negotiation & Representation',
    description: 'Direct negotiation on behalf of the client to ensure the best terms, prices, and priority.',
    icon: <Users className="w-6 h-6" />,
    details: ['Cost reduction', 'Favorable payment terms', 'Local representation in Shenzhen']
  },
  {
    id: 'consultancy',
    title: 'Trade Consultancy',
    description: 'Strategic consultancy for expansion and structuring of international operations.',
    icon: <BarChart3 className="w-6 h-6" />,
    details: ['Market strategy', 'Risk analysis', 'Logistical planning']
  }
];

const SECTORS: Sector[] = [
  { name: 'Construction & Materials', icon: <HardHat className="w-5 h-5" /> },
  { name: 'Industrial Equipment', icon: <Factory className="w-5 h-5" /> },
  { name: 'Energy & Solar', icon: <Zap className="w-5 h-5" /> },
  { name: 'Tech & Electronics', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Food & Agro', icon: <Utensils className="w-5 h-5" /> },
  { name: 'Textile & Apparel', icon: <Shirt className="w-5 h-5" /> },
  { name: 'Health & Pharma', icon: <Stethoscope className="w-5 h-5" /> },
  { name: 'Automotive & Parts', icon: <Car className="w-5 h-5" /> },
  { name: 'Packaging & Logistics', icon: <Package className="w-5 h-5" /> },
  { name: 'Furniture & Interiors', icon: <Armchair className="w-5 h-5" /> },
  { name: 'Security & Surveillance', icon: <Shield className="w-5 h-5" /> },
  { name: 'Chemicals & Plastics', icon: <FlaskConical className="w-5 h-5" /> }
];

const PROCESS_STEPS = [
  { number: '01', title: 'Initial Briefing', description: 'Understanding needs, volumes, and technical specifications.' },
  { number: '02', title: 'Sourcing & Verification', description: 'Identification and due diligence of qualified manufacturers.' },
  { number: '03', title: 'Negotiation', description: 'Price and condition optimization directly in China.' },
  { number: '04', title: 'Production Monitoring', description: 'Rigorous supervision and quality inspections.' },
  { number: '05', title: 'Logistics & Delivery', description: 'Document management and coordination to final destination.' }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendes",
    role: "Procurement Director",
    location: "Horizonte Construction, Angola",
    content: "Before Vena, we lost sleep wondering if the materials would arrive with the quality we paid for. Having someone in Shenzhen who actually goes to the factory and inspects the goods before loading changed our entire operation."
  },
  {
    name: "Ricardo Silva",
    role: "CEO",
    location: "TechMundo Distribution, Brazil",
    content: "The hardest part of importing electronics isn't finding a supplier, it's finding one that won't cut corners on the second batch. Vena audited factories for us and saved us from a $100k mistake. I don't ship a single container without them now."
  },
  {
    name: "Amina Diop",
    role: "Operations Manager",
    location: "AgriTech Solutions, Senegal",
    content: "Communicating with manufacturers used to be a nightmare due to time zones and language barriers. Vena's team took over the negotiation for our machinery, secured better payment terms, and handled all the logistics straight to Dakar."
  }
];

const FAQS = [
  { q: "How does the process work?", a: "We start with a briefing to understand your needs, followed by sourcing, verification, negotiation, production monitoring, and finally logistics coordination." },
  { q: "What is the minimum order volume?", a: "We typically work with volumes starting from USD 50,000 per operation to ensure the viability of our supervision structure." },
  { q: "Which sectors do you work with?", a: "We operate across 12 key industries, including construction, industrial equipment, solar energy, electronics, and more." },
  { q: "How do you guarantee quality?", a: "Through physical audits of factories, rigorous inspections during production, and pre-shipment quality checks by our local team in Shenzhen." },
  { q: "How is payment made to suppliers?", a: "We support the structuring of secure payments, including Letters of Credit (LC) and monitored international transfers." },
  { q: "How long does the process take?", a: "Timelines vary by product and volume, but we provide a clear schedule during the initial briefing phase." },
  { q: "Do you handle logistics?", a: "Yes, we coordinate the entire logistical chain, from the factory gate in China to the port of destination, including all necessary documentation." },
  { q: "Can you help with custom branding?", a: "Absolutely. We facilitate OEM/ODM projects, helping you develop your own brand with verified manufacturers." }
];

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/logo-horizontal-light_dw9oqm.svg" 
      alt="Vena Trading Logo" 
      className="h-6 w-auto"
    />
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' }) => {
  const baseStyles = "relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2 active:scale-95 text-sm";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    outline: "border border-primary/30 text-primary hover:border-primary hover:bg-primary/5",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5"
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

const SectionHeading = ({ title, subtitle, align = 'left' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      {align === 'center' && <div className="w-8 h-[1px] bg-primary"></div>}
      <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
        {subtitle}
      </span>
      <div className="w-8 h-[1px] bg-primary"></div>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [contactMessage, setContactMessage] = useState('');
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setContactMessage('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Oops! There was a problem submitting your form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={isNavHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 w-full z-50 px-6 flex justify-center"
      >
        <div className="w-full max-w-7xl bg-background/60 backdrop-blur-xl border border-white/10 rounded-xl px-6 h-16 flex items-center justify-between shadow-2xl">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Sectors', 'Process', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button variant="primary" className="!py-2 !px-5 text-xs">Start a Project</Button>
          </div>

          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {['About', 'Services', 'Sectors', 'Process', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-semibold text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full max-w-xs mt-8">Start a Project</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
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
              Where China Meets <br className="hidden md:block" />
              <span className="italic font-normal text-muted-foreground">Africa</span> In <span className="text-primary">Trade.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Your operational arm in Shenzhen. We source, verify, negotiate and deliver — so your container arrives with exactly what you ordered, every time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button className="w-full sm:w-auto !px-8 !py-4 text-sm">
                Start Sourcing <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto !px-8 !py-4 text-sm">
                Explore Services
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
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl py-8 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
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

      {/* Ticker Section */}
      <div className="py-6 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap flex">
        <div className="flex animate-ticker items-center">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {['Product Sourcing', 'Supplier Verification', 'Procurement Support', 'Trade Facilitation', 'Negotiation', 'Shenzhen HQ'].map((item) => (
                <div key={item} className="flex items-center gap-6 px-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* About Section */}
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
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
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
                  src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Reuni%C3%A3o_executiva_Africa_Asia_mw81za.webp" 
                  alt="Business Negotiation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Based in Shenzhen</div>
                  <div className="font-semibold text-foreground">Operational since 2026</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 bg-white/5 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Problem" title="Sourcing from China is broken." align="center" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
            Businesses lose millions every year to failed procurement. The supply chain from China is full of friction, opacity and risk.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
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
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-destructive/50 transition-colors"
              >
                <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-destructive/10 transition-colors">{item.num}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
              "VENA exists because we lived this problem. We saw businesses lose money, time and trust. So we built the solution — from inside China."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What We Do" title="Six pillars of execution." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(service)}
                className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-24 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Sectors" title="Twelve sectors, one standard." align="center" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
            We source across the highest-demand categories. Each sector has a dedicated supplier portfolio, pre-vetted and audited.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((sector, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {sector.icon}
                </div>
                <span className="font-medium text-foreground text-sm">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* China Presence Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="China Presence" title="On the ground in Shenzhen." />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in the world's manufacturing epicentre, VENA operates directly within China's industrial supply chain. No remote management, no third-party guessing. Our team speaks the language, knows the factories and negotiates face-to-face.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '487+', label: 'Verified Suppliers' },
                  { val: '12+', label: 'Sectors' },
                  { val: '24h', label: 'Response Time' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 border-t-2 border-t-primary">
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 rounded-xl overflow-hidden border border-white/10 aspect-[16/9] relative"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Interior_f%C3%A1brica_chinesa_v1_vng90w.webp" alt="Factory" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-widest border border-white/10">Factory · Shenzhen</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden border border-white/10 aspect-square relative"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Firefly_supervis%C3%A3o_armaz%C3%A9m_v_1_n7d6lq.webp" alt="Production" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-white/10 aspect-square relative"
              >
                <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Armaz%C3%A9m_v_4_v5w8u8.webp" alt="Warehouse" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="How It Works" title="Five steps to delivery." align="center" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
            Every engagement follows the same structured process. No improvisation, no skipped steps.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
            
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-colors shadow-xl">
                  <span className="text-3xl font-bold text-primary opacity-50 group-hover:opacity-100 transition-opacity">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Testimonials" title="What our clients say." />
          
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-primary text-lg">★</span>)}
                </div>
                <p className="text-foreground/90 italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                    {t.name.substring(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading subtitle="FAQ" title="Common questions." align="center" />
          
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <details key={i} className="group bg-background border border-white/10 rounded-xl overflow-hidden">
                <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold list-none hover:bg-white/5 transition-colors">
                  <span className="text-foreground">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 bg-white/[0.02]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="Get in Touch" title="Start your first operation." />
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Fill in the form and we respond within 24 hours with a structured briefing template and a proposed call. No sales pitch, just process.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, text: 'contact@venaglobaltrading.com' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Shenzhen, Guangdong, China' },
                  { icon: <Phone className="w-5 h-5" />, text: 'Response within 24 business hours' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Company</label>
                    <input type="text" name="company" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</label>
                    <input type="email" name="email" required className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Country</label>
                    <input type="text" name="country" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="e.g. Angola" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Message / Briefing</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none" 
                    placeholder="Tell us about your project..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                </div>
                <Button className="w-full !py-4 text-sm" disabled={isSubmitting || isSubmitted}>
                  {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Briefing'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Logo className="mb-6" />
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                Your operational partner bridging China and the world through trust, process and execution.
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/venaglobaltrading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="https://instagram.com/venaglobaltrading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="https://facebook.com/venaglobaltrading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="https://x.com/venaglobaltrading" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Product Sourcing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Supplier Verification</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Procurement Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trade Facilitation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#sectors" className="hover:text-primary transition-colors">Sectors</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>© 2026 Vena Trading (Shenzhen) Co., Ltd. All rights reserved.</p>
            <p>venaglobaltrading.com</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setActiveService(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-background border border-white/10 p-8 md:p-12 rounded-xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveService(null)} 
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                {activeService.icon}
              </div>
              
              <h3 className="text-3xl font-semibold mb-4 text-foreground">{activeService.title}</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeService.description}
              </p>
              
              <div className="space-y-4 mb-10 bg-white/5 p-6 rounded-xl border border-white/5">
                <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">What's included:</h4>
                {activeService.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90">{detail}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full !py-4 text-sm" onClick={() => {
                setContactMessage(`I am interested in the ${activeService.title} service. Please provide more information.`);
                setActiveService(null);
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}>
                Book a Consultation
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
