import React from 'react';
import { 
  Search, ShieldCheck, FileText, Zap, Users, BarChart3, 
  HardHat, Factory, Cpu, Utensils, Shirt, Stethoscope, 
  Car, Package, Armchair, Shield, FlaskConical 
} from 'lucide-react';
import { Service, Sector, Testimonial, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'Identification and selection of qualified suppliers across the entire Chinese industrial ecosystem.',
    icon: React.createElement(Search, { className: "w-6 h-6" }),
    details: ['Market mapping', 'Production capacity analysis', 'Comparative cost reports'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_1_kw2icw.jpg'
  },
  {
    id: 'verification',
    title: 'Supplier Verification',
    description: 'Rigorous due diligence and auditing of manufacturers to eliminate fraud and quality risks.',
    icon: React.createElement(ShieldCheck, { className: "w-6 h-6" }),
    details: ['License verification', 'Physical factory audit', 'Export history analysis'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_2_wubtop.jpg'
  },
  {
    id: 'procurement',
    title: 'Procurement Support',
    description: 'Full support for the purchasing process, from initial order to financial settlement.',
    icon: React.createElement(FileText, { className: "w-6 h-6" }),
    details: ['PO management', 'Secure payment control', 'Document compliance'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_3_xwrzkc.jpg'
  },
  {
    id: 'facilitation',
    title: 'Trade Facilitation',
    description: 'Smoothing the entire commercial chain, removing bureaucratic and logistical barriers.',
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    details: ['Process optimization', 'Customs clearance', 'International certifications'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661250/Armazen_V_4_il656j.jpg'
  },
  {
    id: 'negotiation',
    title: 'Negotiation & Representation',
    description: 'Direct negotiation on behalf of the client to ensure the best terms, prices, and priority.',
    icon: React.createElement(Users, { className: "w-6 h-6" }),
    details: ['Cost reduction', 'Favorable payment terms', 'Local representation in Shenzhen'],
    image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661707/Conteiner_v1_yktq6m.jpg'
  },
  {
    id: 'consultancy',
    title: 'Trade Consultancy',
    description: 'Strategic consultancy for expansion and structuring of international operations.',
    icon: React.createElement(BarChart3, { className: "w-6 h-6" }),
    details: ['Market strategy', 'Risk analysis', 'Logistical planning'],
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
  { number: '01', title: 'Initial Briefing', description: 'Understanding needs, volumes, and technical specifications.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Inspe%C3%A7%C3%A3o_com_tabletprancheta_v1_fkg5xw.jpg' },
  { number: '02', title: 'Sourcing & Verification', description: 'Identification and due diligence of qualified manufacturers.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661251/Aperto_de_m%C3%A3o_assinatura_contrato_01_qyjbch.webp' },
  { number: '03', title: 'Negotiation', description: 'Price and condition optimization directly in China.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661253/Inspe%C3%A7%C3%A3o_com_tabletprancheta_v2_d0zfaa.jpg' },
  { number: '04', title: 'Production Monitoring', description: 'Rigorous supervision and quality inspections.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661252/Armaz%C3%A9m_contentor_log%C3%ADstica_V1_m2yvvv.jpg' },
  { number: '05', title: 'Logistics & Delivery', description: 'Document management and coordination to final destination.', image: 'https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661708/Conteiner_v3_kmsxnb.jpg' }
];

export const TESTIMONIALS: Testimonial[] = [
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

export const FAQS = [
  { q: "How does the process work?", a: "We start with a briefing to understand your needs, followed by sourcing, verification, negotiation, production monitoring, and finally logistics coordination." },
  { q: "What is the minimum order volume?", a: "We typically work with volumes starting from USD 50,000 per operation to ensure the viability of our supervision structure." },
  { q: "Which sectors do you work with?", a: "We operate across 12 key industries, including construction, industrial equipment, solar energy, electronics, and more." },
  { q: "How do you guarantee quality?", a: "Through physical audits of factories, rigorous inspections during production, and pre-shipment quality checks by our local team in Shenzhen." },
  { q: "How is payment made to suppliers?", a: "We support the structuring of secure payments, including Letters of Credit (LC) and monitored international transfers." },
  { q: "How long does the process take?", a: "Timelines vary by product and volume, but we provide a clear schedule during the initial briefing phase." },
  { q: "Do you handle logistics?", a: "Yes, we coordinate the entire logistical chain, from the factory gate in China to the port of destination, including all necessary documentation." },
  { q: "Can you help with custom branding?", a: "Absolutely. We facilitate OEM/ODM projects, helping you develop your own brand with verified manufacturers." }
];
