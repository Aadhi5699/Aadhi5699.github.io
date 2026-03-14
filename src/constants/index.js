import {
    FiMail, FiPhone, FiMapPin,
    FiFileText, FiPieChart, FiSettings, FiLayers,
    FiDatabase, FiActivity, FiEdit3
} from 'react-icons/fi'

export const NAV_LINKS = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact', href: '#impact' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]
export const HERO_CONTENT = {
    badge: '',

    mainTitle: {
        line1: 'Engineering Precision',
        line2: 'for Water & Wastewater',
        line3: 'Solutions',
    },

    subtext: '',

    stats: [
        { value: '11+', label: 'Industrial Sectors' },
        { value: '2+', label: 'Countries Served' },
        { value: '75+', label: 'Engineering Deliverables' },
    ],
}
/* export const HERO_CONTENT = {
    badge: 'Leading Water Innovation Since 2025',
    mainTitle: {
        line1: 'Pure Water.',
        line2: 'Precise Technology.',
        line3: 'Sustainable Future.',
    },
    subtext: '', // Empty in the original code

    stats: [
        { value: '500M+', label: 'Liters Treated Daily' },
        { value: '30+', label: 'Countries Served' },
        { value: '99.9%', label: 'Purity Rate' },
    ],
} */

export const SOLUTIONS_CONTENT = {
    badge: 'Our Expertise',
    titleMain: 'End-to-End',
    titleHighlight: ' Engineering Consultancy',
    description: '', // Empty in the original code
    solutions: [
        {
            icon: FiFileText,
            title: 'Tender & RFQ Preparation',
            description: 'Scope definition, conceptual treatment schemes, flow balance diagrams, and comprehensive technical specifications for tender documents.',
            tag: 'Consultancy',
            color: 'from-blue-500 to-cyan-400',
        },
        {
            icon: FiPieChart,
            title: 'Proposal Engineering',
            description: 'Preparation of technical proposals, datasheets, power & chemical consumption lists, and essential drawings (P&ID, Layout, PFD).',
            tag: 'Pre-Order',
            color: 'from-teal-500 to-emerald-400',
        },
        {
            icon: FiSettings,
            title: 'Basic & Process Engineering',
            description: 'Process design finalization, treatment schemes, hydraulic calculations, and detailed process flow diagrams (PFDs).',
            tag: 'Process Tech',
            color: 'from-cyan-500 to-blue-400',
        },
        {
            icon: FiLayers,
            title: 'Detailed Engineering',
            description: 'Electro-mechanical engineering, P&IDs, equipment sizing, electrical SLDs, GA drawings, and comprehensive civil input drawings.',
            tag: 'Implementation',
            color: 'from-emerald-400 to-teal-500',
        },
        {
            icon: FiDatabase,
            title: 'Industrial Wastewater (ETP)',
            description: 'Specialized treatment for Chemical, Pharmaceutical, Textile, Food & Beverage, and Solar Cell Manufacturing sectors.',
            tag: 'Industrial',
            color: 'from-blue-400 to-cyan-500',
        },
        {
            icon: FiActivity,
            title: 'Tertiary & ZLD Systems',
            description: 'Advanced water reuse systems and Zero Liquid Discharge (ZLD) solutions for sustainable industrial operations.',
            tag: 'Sustainability',
            color: 'from-teal-400 to-cyan-500',
        },
    ],
}

export const STATISTICS_CONTENT = {
    badge: 'Our Impact',
    titleMain: 'Precision Meets',
    titleHighlight: ' Performance',
    stats: [
        {
            value: 100,
            suffix: '%',
            label: 'Technical Accuracy',
            sublabel: 'Precision-focused engineering approach',
            decimal: 0,
        },
        {
            value: 95,
            suffix: '%',
            label: 'Water Reclamation',
            sublabel: 'Achieving industry-leading reuse rates',
            decimal: 0,
        },
        {
            value: 11,
            suffix: '+',
            label: 'Industrial Sectors',
            sublabel: 'Diverse expertise across disciplines',
            decimal: 0,
        },
        {
            value: 100,
            suffix: '%',
            label: 'Operational Efficiency',
            sublabel: 'Optimized process & design cycles',
            decimal: 0,
        },
        {
            value: 2,
            suffix: '',
            label: 'Global Regions',
            sublabel: 'Projects in India, UAE',
            decimal: 0,
        },
        {
            value: 24,
            suffix: 'Hr',
            label: 'Responsive Support',
            sublabel: 'Average response time for queries',
            decimal: 0,
        },
    ],
}

export const PROCESS_CONTENT = {
    badge: 'Our Approach',
    titleMain: 'Highlighted ',
    titleHighlight: 'Engineering Assignments',
    description: '', // Empty in original
    impactText: 'Focusing on precision, operational efficiency, and constructability',
    steps: [
        {
            id: '01',
            icon: FiEdit3,
            title: 'Crescent Engineering FZE',
            description: 'Post-order mechanical engineering and process support for refinery wastewater treatment systems.',
            color: 'from-blue-500 to-cyan-400',
            glow: 'shadow-blue-500/30',
        },
        {
            id: '02',
            icon: FiFileText,
            title: 'German-based Water & Wastewater EPC Contractor',
            description: 'ETP & ZLD Proposal Engineering – Solar Cell Manufacturing Technical proposal preparation and process design.',
            color: 'from-teal-500 to-cyan-500',
            glow: 'shadow-teal-500/30',
        },
        {
            id: '03',
            icon: FiActivity,
            title: 'Ion Exchange (India) Ltd',
            description: 'Water & Effluent Treatment Basic Engineering Basic engineering documentation including CT and Boiler Blowdown Wastewater.',
            color: 'from-cyan-500 to-teal-400',
            glow: 'shadow-cyan-500/30',
        },
        {
            id: '04',
            icon: FiSettings,
            title: 'Ion Exchange (India) Ltd',
            description: 'Post order UF Skid Engineering and Piping BOQ,piping quantity estimation',
            color: 'from-emerald-400 to-teal-400',
            glow: 'shadow-emerald-500/30',
        },
    ],
}

export const TESTIMONIALS_CONTENT = {
    badge: 'Testimonials',
    titleMain: 'Trusted by',
    titleHighlight: ' Industry Leaders',
    description: 'What experts and partners say about our water innovation and engineering excellence.',
    testimonials: [
        {
            quote: 'An epitome of sincerity and commitment and with the decades of experience and knowledge in water and waste water technology, Vidhya will deliver value to her clients.',
            author: 'Sudheer Kumar M',
            designation: 'Head – Desalination',
            company: 'Jakson Green Limited,India',
        },
        {
            quote: 'R. Vidhya made a key contribution to the development of an energy-efficient CFRO brine concentration platform. Her innovative integration of energy recovery technology significantly improved system efficiency and demonstrated exceptional process engineering insight.',
            author: 'Richard Lindsay Stover',
            designation: 'CTO',
            company: 'GP Water LLC,USA',
        },
        {
            quote: 'We are extremely satisfied with the engineering consultancy services provided by the Precise WaterTek team for our refinery wastewater treatment project.Throughout the project, the team demonstrated a high level of professionalism, responsiveness, and a proactive approach to addressing technical challenges.',
            author: 'Ravichandran',
            designation: 'Technical Lead-Water Treatment',
            company: 'Crescent Engineering FZE,UAE',
        },
    ],
}

export const CONTACT_CONTENT = {
    badge: 'Contact Us',
    titleMain: "Let's Build a",
    titleHighlight: ' Water-Secure Future',
    panelTitle: 'Get in Touch',
    info: [
        {
            icon: FiMail,
            label: 'Email',
            value: 'precisewatertek@gmail.com',
            href: 'mailto:precisewatertek@gmail.com',
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+91-9003165948',
            href: 'tel:+919003165948',
        },
        {
            icon: FiMapPin,
            label: 'Headquarters',
            value: 'Chennai, Tamil Nadu, India',
            href: '#',
        },
    ],
}

export const FOOTER_CONTENT = {
    brandName: 'Precise',
    brandHighlight: 'WaterTek',
    description: 'Pioneering advanced water and wastewater technology solutions for a sustainable, water-secure future.',
    copyright: '© 2025 Precise WaterTek. All rights reserved.',
    links: {
        Solutions: ['Water Treatment', 'Filtration Systems', 'Desalination', 'Smart Monitoring'],
        Company: ['About Us', 'Careers', 'News', 'Sustainability'],
        Resources: ['Case Studies', 'White Papers', 'Documentation', 'Blog'],
    },
}
