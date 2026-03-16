import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3, 
  Search, 
  FileText, 
  Truck, 
  MessageSquare, 
  ChevronDown, 
  Menu, 
  X,
  Building2,
  Factory,
  HardHat,
  Cpu,
  Utensils,
  Shirt,
  Stethoscope,
  Car,
  Package,
  Armchair,
  Shield,
  FlaskConical,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

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
    name: "J.M.",
    role: "Construction Sector",
    location: "Global Importer",
    content: "VENA transformed our way of importing. We used to fear sending capital to China; today we have a partner who verifies everything on the ground."
  },
  {
    name: "A.O.",
    role: "Tech Distributor",
    location: "International Distributor",
    content: "Quality control in Shenzhen is the game-changer. We receive exactly what we ordered, with no unpleasant surprises upon arrival."
  },
  {
    name: "Industrial Group",
    role: "Operations Manager",
    location: "Multinational Operations",
    content: "Total transparency. The production reports give us the security needed to plan our sales months in advance."
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

const Logo = ({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src={variant === "light" 
        ? "https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/logo-horizontal-light_dw9oqm.svg" 
        : "https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/logo-horizontal-dark_gfqomb.svg"
      } 
      alt="Vena Trading Logo" 
      className="h-8 w-auto"
    />
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' }) => {
  const baseStyles = "relative px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-gold text-navy hover:bg-gold-hover shadow-lg shadow-gold/20",
    outline: "border border-gold/30 text-gold hover:border-gold hover:bg-gold/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gold font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-[var(--section-h2)] font-semibold leading-tight"
      style={{ color: light ? 'var(--navy)' : 'var(--white)' }}
    >
      {title}
    </motion.h2>
  </div>
);

const TradeMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-[16/9] max-w-5xl mx-auto overflow-hidden cursor-crosshair"
    >
      <motion.div
        style={{
          x: mousePos.x * 20,
          y: mousePos.y * 20,
        }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          {/* Shenzhen Point */}
          <g>
            <circle cx="820" cy="220" r="6" fill="#F2B40C">
              <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="835" y="225" fill="white" fontSize="10" className="font-mono font-bold tracking-widest">SHENZHEN HQ</text>
          </g>
          
          {/* Routes */}
          {[
            { to: [250, 350], label: 'Luanda, AO' },
            { to: [300, 280], label: 'Lagos, NG' },
            { to: [450, 320], label: 'Nairobi, KE' },
            { to: [420, 420], label: 'Durban, ZA' },
            { to: [150, 150], label: 'New York, US' },
            { to: [600, 100], label: 'London, UK' },
            { to: [700, 150], label: 'Dubai, UAE' },
            { to: [900, 400], label: 'Sydney, AU' }
          ].map((route, i) => (
            <g key={i}>
              <motion.path
                d={`M 820 220 Q 600 150 ${route.to[0]} ${route.to[1]}`}
                fill="none"
                stroke="#F2B40C"
                strokeWidth="1"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: i * 0.5 }}
              />
              {/* Progress Dot */}
              <motion.circle
                r="3"
                fill="#F2B40C"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                style={{
                  offsetPath: `path('M 820 220 Q 600 150 ${route.to[0]} ${route.to[1]}')`,
                }}
              />
              <motion.circle
                cx={route.to[0]}
                cy={route.to[1]}
                r="4"
                fill="#F2B40C"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3 + i * 0.5 }}
              />
              <text x={route.to[0]} y={route.to[1] + 20} fill="white" fontSize="10" textAnchor="middle" className="opacity-40 font-mono">
                {route.label}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 00. Navigation */}
      <nav className="fixed top-6 w-full z-50 px-6 flex justify-center">
        <div className="w-full max-w-[1160px] glass rounded-full border border-white/10 px-6 h-16 flex items-center justify-between shadow-2xl bg-navy/50 backdrop-blur-md">
          <Logo variant="light" />

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Sectors', 'Process', 'Leadership', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-semibold uppercase tracking-widest text-white/60 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button variant="primary" className="!py-2.5 !px-6 text-[11px] font-semibold tracking-widest uppercase">Start a Project</Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['About', 'Services', 'Sectors', 'Process', 'Leadership', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-bold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full mt-4">Start a Project</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 01. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-[#020810]">
        {/* Stars Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Background Earth Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[800px] max-w-[1400px] h-[85%] z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-transparent to-transparent z-10" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-transparent to-transparent z-10 opacity-60" />
           <img 
             src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661730/globe-bg_xbbvyk.webp" 
             alt="Global Network" 
             className="w-full h-full object-contain object-bottom mix-blend-screen opacity-80"
           />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 text-gold text-[11px] font-mono tracking-[0.2em] uppercase mb-8">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span>Operational Partner · Shenzhen, China · Est. 2026</span>
              <span className="w-8 h-[1px] bg-gold"></span>
            </div>
            
            <h1 className="text-[var(--hero-headline)] font-semibold leading-[0.9] mb-8 tracking-tight">
              Where China Meets <span className="italic font-normal text-white/65">Africa</span><br />
              In <span className="text-gold">Trade.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-[54ch] leading-relaxed">
              Your operational arm in Shenzhen — structured sourcing, verification and global delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
              <Button className="!px-8 !py-4 text-[11px] font-semibold tracking-widest uppercase">
                Start Sourcing <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost" className="!px-8 !py-4 text-[11px] font-semibold tracking-widest uppercase text-white/60 hover:text-white">
                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar (Hero Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-20 w-full"
        >
          <div className="bg-[#06101e]/85 backdrop-blur-[20px] border-t border-gold/15 py-6 px-6">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
                <div className="pt-4 md:pt-0">
                  <div className="text-4xl font-semibold text-white mb-2 tracking-tight">487<span className="text-gold">+</span></div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono">Verified Suppliers</div>
                </div>
                <div className="pt-4 md:pt-0">
                  <div className="text-4xl font-semibold text-white mb-2 tracking-tight">12<span className="text-gold">+</span></div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono">Sectors</div>
                </div>
                <div className="pt-4 md:pt-0">
                  <div className="text-4xl font-semibold text-white mb-2 tracking-tight">98<span className="text-gold">%</span></div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono">Delivery Rate</div>
                </div>
              </div>
              
              {/* Trust Bar */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-6 pt-6 border-t border-white/5 text-[10px] text-white/40 font-mono uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-gold" />
                  Response in 24h
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-gold" />
                  No commitment required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-gold" />
                  Free initial briefing
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 02. Ticker Section */}
      <div className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="flex animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Sourcing', 'Verification', 'Negotiation', 'Procurement', 'Shenzhen', 'Luanda', 'Lagos', 'Nairobi', 'Durban', 'Trade Facilitation', 'Quality Control'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="text-gold font-bold text-lg">•</span>
                  <span className="text-white/40 font-mono text-sm uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 03. About Section */}
      <section id="about" className="py-32 bg-white text-navy">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Our Identity" 
                title="Not a broker. A true operational partner." 
                light 
              />
              <p className="text-lg text-navy/70 mb-8 leading-relaxed">
                VENA Trading was conceived as the flow channel in the international trade system. Just as veins transport blood, we ensure that capital and goods flow without obstruction between Chinese manufacturers and global markets.
              </p>
              <div className="space-y-4">
                {[
                  'Direct physical presence in Shenzhen',
                  'Clear and documented processes',
                  'Focus on execution and concrete results',
                  'Total transparency at every stage'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Reuni%C3%A3o_executiva_Africa_Asia_mw81za.webp" 
                  alt="Business Negotiation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Problem Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-[0.09] pointer-events-none grayscale-[40%]">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661984/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_2_qp35zy.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeading subtitle="The Challenge" title="The gap in global trade" />
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'Unverified Suppliers', 
                desc: 'Difficulty in verifying the legitimacy and real capacity of Chinese suppliers.',
                icon: <ShieldCheck className="w-8 h-8 text-gold" />
              },
              { 
                title: 'Quality Mismatch', 
                desc: 'Cultural and linguistic differences resulting in products out of specification.',
                icon: <MessageSquare className="w-8 h-8 text-gold" />
              },
              { 
                title: 'Hidden Costs & Delays', 
                desc: 'Documentary complexity and lack of quality control during production.',
                icon: <Truck className="w-8 h-8 text-gold" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                className="glass p-10 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Pivot Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center border-t border-white/10 pt-20"
          >
            <p className="text-2xl font-normal italic text-white/80 leading-relaxed">
              "International trade should not be a gamble. It must be infrastructure. I founded Vena Trading with the singular purpose of providing clarity, predictability and operational excellence across borders."
            </p>
            <div className="mt-8 text-gold font-semibold">— Cynthia Paulo</div>
          </motion.div>
        </div>
      </section>

      {/* 05. Services Section */}
      <section id="services" className="py-32 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What We Do" title="Structured solutions for complex operations" light />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                onClick={() => setActiveService(service)}
                className="group p-8 rounded-2xl border border-navy/5 hover:border-gold hover:bg-navy hover:text-white transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-60 mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Sectors Section */}
      <section id="sectors" className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-[0.09] pointer-events-none grayscale-[40%]">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661977/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_4_m6alum.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Sectors" title="Transversal operation in 12 key industries" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SECTORS.map((sector, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.03 }}
                className="glass p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="text-gold group-hover:scale-110 transition-transform">{sector.icon}</div>
                <span className="text-sm font-semibold">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. China Presence Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Interior_f%C3%A1brica_chinesa_v1_vng90w.webp" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" alt="Shenzhen Factory" />
                  <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Firefly_supervis%C3%A3o_armaz%C3%A9m_v_1_n7d6lq.webp" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" alt="Logistics Hub" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Interior_f%C3%A1brica_chinesa_v2_f8p91t.webp" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" alt="Shenzhen Tech" />
                  <img src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Armaz%C3%A9m_v_4_v5w8u8.webp" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" alt="Warehouse" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-center p-4 shadow-xl z-20">
                Boots on the ground in Shenzhen
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="Local Presence" title="Your eyes and ears in the Chinese industrial landscape" light />
              <p className="text-lg text-navy/70 mb-10 leading-relaxed">
                We operate directly from Shenzhen, the technological and industrial epicenter of China. Our local team performs physical audits, cargo supervision, and face-to-face negotiations that would be impossible from a distance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-navy">100%</div>
                  <div className="text-sm text-navy/40 mt-2">Local Verification</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy">0%</div>
                  <div className="text-sm text-navy/40 mt-2">Hidden Intermediaries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. Process Section */}
      <section id="process" className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_2_qp35zy.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Methodology" title="The VENA System: 5 Phases of Execution" />
          
          <div className="relative">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden lg:block -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold text-navy font-bold text-2xl flex items-center justify-center mb-8 shadow-lg shadow-gold/20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09. Testimonials Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-[0.09] pointer-events-none grayscale-[40%]">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661981/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_6_tkwihp.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Results" title="What our partners say" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                className="p-10 rounded-3xl glass border border-white/5 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <div key={j} className="w-4 h-4 text-gold fill-gold">★</div>)}
                </div>
                <p className="text-lg italic mb-8 flex-grow">"{t.content}"</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm opacity-50">{t.role} · {t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-[0.09] pointer-events-none grayscale-[40%]">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661983/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_7_qbxk4h.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionHeading subtitle="FAQ" title="Frequently Asked Questions" />
          
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((item, i) => (
              <details key={i} className="group glass rounded-2xl overflow-hidden h-fit">
                <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold list-none">
                  {item.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Founder Section */}
      <section className="py-32 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Default Photo */}
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Fundadora_Op%C3%A7%C3%A3o-03_a_Cynthia_Gostou_ffpgea.webp" 
                  alt="Cynthia Paulo - Portrait" 
                  className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                  referrerPolicy="no-referrer"
                />
                {/* Executive Photo (Hover) */}
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661726/Fundadora_Op%C3%A7%C3%A3o-01_mpvwvw.webp" 
                  alt="Cynthia Paulo - Executive" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl shadow-xl z-10"
              >
                <div className="text-2xl font-bold">MBA</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Int. Business</div>
              </motion.div>
            </motion.div>
            
            <div>
              <SectionHeading subtitle="Leadership" title="Cynthia Paulo — Founder & CEO" light />
              <p className="text-lg text-navy/70 mb-8 leading-relaxed">
                With an MBA in International Business and extensive operational experience in Shenzhen, Cynthia identified the critical gap between Chinese production capacity and the needs of global entrepreneurs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Strategic Vision</h4>
                    <p className="text-sm opacity-60">Focus on building reliable and replicable trade systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Market Knowledge</h4>
                    <p className="text-sm opacity-60">Deep mastery of the industrial dynamics of China and global markets.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA Section */}
      <section className="py-32 bg-gold text-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661252/Armaz%C3%A9m_contentor_log%C3%ADstica_v2_jazib1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--cta-headline)] font-semibold mb-10 leading-tight"
          >
            The bridge you've <br />been waiting for.
          </motion.h2>
          <p className="text-xl font-semibold mb-12 opacity-80 max-w-2xl mx-auto">
            Don't leave your commercial operation to chance. Build a partnership based on structure, trust and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-navy text-white rounded-full font-semibold text-lg hover:bg-navy/90 transition-all shadow-xl">
              Schedule Free Briefing
            </button>
            <button className="px-12 py-6 border-2 border-navy text-navy rounded-full font-semibold text-lg hover:bg-navy hover:text-white transition-all">
              Talk via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 13. Contact Section */}
      <section id="contact" className="py-32 bg-navy relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_2_qp35zy.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading subtitle="Contact" title="Let's structure your next operation" />
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm uppercase tracking-widest">Email</div>
                    <div className="text-xl font-semibold">hello@venaglobaltrading.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm uppercase tracking-widest">Headquarters</div>
                    <div className="text-xl font-semibold">Shenzhen, China</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm uppercase tracking-widest">Markets</div>
                    <div className="text-xl font-semibold">Angola, Nigeria, Kenya, South Africa</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-10 rounded-3xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="Your company" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Country</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="Your country" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Phone</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="+000 000 000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Sector of Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                      <option className="bg-navy">Select a sector</option>
                      {SECTORS.map(s => <option key={s.name} className="bg-navy">{s.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Estimated Volume (USD)</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                    <option className="bg-navy">Select volume</option>
                    <option className="bg-navy">USD 50k - 100k</option>
                    <option className="bg-navy">USD 100k - 500k</option>
                    <option className="bg-navy">USD 500k - 1M</option>
                    <option className="bg-navy">USD 1M+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Message / Briefing</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="Briefly describe your needs..."></textarea>
                </div>
                <Button className="w-full py-5 text-lg">Send Briefing Request</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Footer */}
      <footer className="py-20 bg-dark border-t border-white/5 relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661727/Opcional_mapa_cartogr%C3%A1fico_escuro_com_linhas_douradas_v_2_qp35zy.jpg" 
            alt="Background Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="mb-8">
                <Logo variant="light" />
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                Vena Trading (Shenzhen) Co., Ltd. is your strategic partner for structured commercial operations between China and the World.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/40 hover:text-gold transition-colors"><Linkedin /></a>
                <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram /></a>
                <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-widest text-[10px] text-gold">Quick Links</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#sectors" className="hover:text-white transition-colors">Sectors</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-widest text-[10px] text-gold">Legal</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">China Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-widest">
            <div>© 2026 Vena Trading (Shenzhen) Co., Ltd. All rights reserved.</div>
            <div className="flex gap-8">
              <span>Shenzhen, China</span>
              <span>venaglobaltrading.com</span>
            </div>
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
            <div className="absolute inset-0 bg-navy/90 backdrop-blur-xl" onClick={() => setActiveService(null)} />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl glass p-10 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button onClick={() => setActiveService(null)} className="text-white/40 hover:text-white transition-colors">
                  <X />
                </button>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-gold text-navy flex items-center justify-center mb-8">
                {activeService.icon}
              </div>
              
              <h3 className="text-3xl font-semibold mb-6">{activeService.title}</h3>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                {activeService.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <h4 className="text-gold font-mono text-xs uppercase tracking-widest">What's included:</h4>
                {activeService.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="text-white/80">{detail}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full">Request Briefing for this Service</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <button 
          onClick={() => alert("Chatbot integration coming soon with Claude API + WhatsApp fallback.")}
          className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        >
          <img 
            src="https://res.cloudinary.com/dwwgnumbe/image/upload/v1773661696/symbol-main_wyiuqm.svg" 
            alt="Vena Chat" 
            className="w-8 h-8"
          />
          <div className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Need help?
          </div>
        </button>
      </motion.div>
    </div>
  );
}
