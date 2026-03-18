import React from 'react';
import { 
  Search, ShieldCheck, FileText, Zap, Users, BarChart3, 
  HardHat, Factory, Cpu, Utensils, Shirt, Stethoscope, 
  Car, Package, Armchair, Shield, FlaskConical 
} from 'lucide-react';
import { Service, Sector, Testimonial, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'identification',
    title: 'Supplier Identification',
    description: 'We map and identify qualified manufacturers across the entire Chinese industrial ecosystem, ensuring alignment with global standards.',
    icon: React.createElement(Search, { className: "w-6 h-6" }),
    details: ['Global market mapping', 'Production capacity analysis', 'Strategic cost structuring'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_1_kw2icw.jpg'
  },
  {
    id: 'verification',
    title: 'Factory Verification',
    description: 'We execute rigorous due diligence and physical audits of manufacturers to eliminate operational and quality risks.',
    icon: React.createElement(ShieldCheck, { className: "w-6 h-6" }),
    details: ['License & compliance audit', 'On-site factory inspection', 'Export history validation'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_2_wubtop.jpg'
  },
  {
    id: 'structuring',
    title: 'Negotiation Structuring',
    description: 'We manage direct negotiations to secure the most favorable terms, pricing, and production priority for your operations.',
    icon: React.createElement(Users, { className: "w-6 h-6" }),
    details: ['Cost optimization', 'Payment term structuring', 'Local representation in Shenzhen'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661707/Conteiner_v1_yktq6m.jpg'
  },
  {
    id: 'coordination',
    title: 'Logistics Coordination',
    description: 'We coordinate the entire supply chain, removing bureaucratic barriers and ensuring seamless international transit.',
    icon: React.createElement(Package, { className: "w-6 h-6" }),
    details: ['End-to-end logistics', 'Customs compliance', 'International documentation'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_4_il656j.jpg'
  },
  {
    id: 'assurance',
    title: 'Delivery Assurance',
    description: 'We supervise production and execute pre-shipment inspections to guarantee that your cargo meets every specification.',
    icon: React.createElement(Shield, { className: "w-6 h-6" }),
    details: ['Production monitoring', 'Quality assurance protocols', 'Final loading supervision'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_3_xwrzkc.jpg'
  },
  {
    id: 'consultancy',
    title: 'Trade Consultancy',
    description: 'We provide strategic intelligence for structuring large-scale international trade operations and market expansion.',
    icon: React.createElement(BarChart3, { className: "w-6 h-6" }),
    details: ['Market intelligence', 'Risk mitigation strategies', 'Operational scaling'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661707/Conteiner_v2_lacqlq.jpg'
  }
];

export const SECTORS: Sector[] = [
  { name: 'Construction & Materials', icon: React.createElement(HardHat, { className: "w-5 h-5" }) },
  { name: 'Industrial Equipment', icon: React.createElement(Factory, { className: "w-5 h-5" }) },
  { name: 'Energy & Solar', icon: React.createElement(Zap, { className: "w-5 h-5" }) },
  { name: 'Tech & Electronics', icon: React.createElement(Cpu, { className: "w-5 h-5" }) },
  { name: 'Food & Agro', icon: React.createElement(Utensils, { className: "w-5 h-5" }) },
  { name: 'Textile & Apparel', icon: React.createElement(Shirt, { className: "w-5 h-5" }) },
  { name: 'Health & Pharma', icon: React.createElement(Stethoscope, { className: "w-5 h-5" }) },
  { name: 'Automotive & Parts', icon: React.createElement(Car, { className: "w-5 h-5" }) },
  { name: 'Packaging & Logistics', icon: React.createElement(Package, { className: "w-5 h-5" }) },
  { name: 'Furniture & Interiors', icon: React.createElement(Armchair, { className: "w-5 h-5" }) },
  { name: 'Security & Surveillance', icon: React.createElement(Shield, { className: "w-5 h-5" }) },
  { name: 'Chemicals & Plastics', icon: React.createElement(FlaskConical, { className: "w-5 h-5" }) }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Inquiry / Entry', description: 'Initial requirement assessment and project scoping.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Inspe%C3%A7%C3%A3o_com_tabletprancheta_v1_fkg5xw.jpg' },
  { number: '02', title: 'Requirement Structuring', description: 'Technical specification and volume validation.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661251/Aperto_de_m%C3%A3o_assinatura_contrato_01_qyjbch.webp' },
  { number: '03', title: 'Supplier Matching', description: 'Identification of qualified manufacturers in China.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661253/Inspe%C3%A7%C3%A3o_com_tabletprancheta_v2_d0zfaa.jpg' },
  { number: '04', title: 'Verification & Validation', description: 'Rigorous physical audits and compliance checks.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Armaz%C3%A9m_contentor_log%C3%ADstica_V1_m2yvvv.jpg' },
  { number: '05', title: 'Negotiation', description: 'Direct price and condition optimization.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661708/Conteiner_v3_kmsxnb.jpg' },
  { number: '06', title: 'Execution & Logistics', description: 'Production monitoring and supply chain coordination.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_4_il656j.jpg' },
  { number: '07', title: 'Delivery', description: 'Final assurance and arrival at destination.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661707/Conteiner_v2_lacqlq.jpg' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendes",
    role: "Procurement Director",
    location: "Horizonte Construction, Angola",
    content: "Vena acts as our operational arm in Shenzhen. Their ability to execute factory audits and manage negotiations directly on the floor has transformed our supply chain reliability."
  },
  {
    name: "Ricardo Silva",
    role: "CEO",
    location: "TechMundo Distribution, Brazil",
    content: "We don't just source products; we execute trade operations. Vena's structured process saved us from significant risks by validating manufacturers before any commitment was made."
  },
  {
    name: "Amina Diop",
    role: "Operations Manager",
    location: "AgriTech Solutions, Senegal",
    content: "The complexity of international trade requires a partner who operates with precision. Vena managed our entire machinery procurement from requirement structuring to final delivery."
  }
];

export const FAQS = [
  { q: "How do you execute the verification process?", a: "We perform physical audits of factories in China, verifying licenses, production capacity, and export history to ensure full compliance with global standards." },
  { q: "What is the minimum operational volume?", a: "We manage trade operations starting from USD 50,000 to maintain the high standard of our supervision and execution structure." },
  { q: "Which global markets do you serve?", a: "While we have a strong presence in emerging markets like Africa and Latin America, we execute trade operations for clients worldwide from our base in Shenzhen." },
  { q: "How do you ensure delivery assurance?", a: "Through continuous production monitoring and rigorous pre-shipment inspections executed by our local team on the factory floor." },
  { q: "How are international payments managed?", a: "We structure secure payment protocols, including Letters of Credit (LC) and monitored transfers, ensuring financial security for all parties." },
  { q: "What is the typical operational timeline?", a: "Timelines are established during the requirement structuring phase, based on production complexity and logistical requirements." },
  { q: "Do you coordinate the entire supply chain?", a: "Yes, we manage everything from supplier identification to final delivery at the destination port, including all customs and documentation." },
  { q: "Can you manage custom manufacturing (OEM)?", a: "Absolutely. We structure and supervise OEM/ODM projects, ensuring that manufacturers execute according to your exact technical specifications." }
];
