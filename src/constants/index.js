import {
    FiMail, FiPhone, FiMapPin,
    FiFileText, FiPieChart, FiSettings, FiLayers,
    FiDatabase, FiActivity, FiEdit3
} from 'react-icons/fi'

export const NAV_LINKS = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact', href: '#impact' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
]

export const HERO_CONTENT = {
    badge: 'Leading Water Innovation Since 2025',
    mainTitle: {
        line1: 'Pure Water.',
        line2: 'Precise Technology.',
        line3: 'Sustainable Future.',
    },
    subtext: '', // Empty in the original code
    ctaButtons: {
        primary: 'Explore Solutions',
        secondary: 'View Case Studies',
    },
    stats: [
        { value: '500M+', label: 'Liters Treated Daily' },
        { value: '30+', label: 'Countries Served' },
        { value: '99.9%', label: 'Purity Rate' },
    ],
}

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
            value: 2,
            suffix: 'Hr',
            label: 'Responsive Support',
            sublabel: 'Average response time for queries',
            decimal: 0,
        },
    ],
}

export const PROCESS_CONTENT = {
    badge: 'Our Approach',
    titleMain: 'Systematic',
    titleHighlight: ' Engineering Lifecycle',
    description: '', // Empty in original
    impactText: 'Focusing on precision, operational efficiency, and constructability',
    steps: [
        {
            id: '01',
            icon: FiEdit3,
            title: 'Concept & RFQ',
            description: 'Conceptual treatment schemes, flow balance diagrams, and scope definition for precise RFQ preparation.',
            color: 'from-blue-500 to-cyan-400',
            glow: 'shadow-blue-500/30',
        },
        {
            id: '02',
            icon: FiFileText,
            title: 'Tender Engineering',
            description: 'Technical proposal preparation, P&IDs, major BOQs, and detailed technical specifications for bidding.',
            color: 'from-teal-500 to-cyan-500',
            glow: 'shadow-teal-500/30',
        },
        {
            id: '03',
            icon: FiActivity,
            title: 'Basic Engineering',
            description: 'Treatment scheme finalization, hydraulic calculations, and comprehensive basic engineering documentation.',
            color: 'from-cyan-500 to-teal-400',
            glow: 'shadow-cyan-500/30',
        },
        {
            id: '04',
            icon: FiSettings,
            title: 'Detailed Engineering',
            description: 'Electro-mechanical engineering, GA drawings, electrical SLDs, and technical support during commissioning.',
            color: 'from-emerald-400 to-teal-400',
            glow: 'shadow-emerald-500/30',
        },
    ],
}

export const CASE_STUDIES_CONTENT = {
    badge: 'Case Studies',
    titleMain: 'Transforming Water,',
    titleHighlight: ' Globally',
    description: 'Real projects. Measurable impact. Explore how Precise WaterTek has solved complex water challenges across the world.',
    cta: 'View all case studies',
    caseStudies: [
        {
            title: 'Singapore NEWater Advanced Reuse Facility',
            location: 'Singapore',
            category: 'Municipal',
            description: 'Designed and deployed a complete tertiary water reclamation system treating 500,000 m³/day for Singapore\'s national water reuse program.',
            outcome: '40% reduction in water import dependency',
            imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80',
            badge: 'Award Winning',
        },
        {
            title: 'Gulf Desalination Mega-Plant',
            location: 'UAE, Middle East',
            category: 'Desalination',
            description: 'Pioneered a 350 MW solar-powered reverse osmosis desalination facility delivering freshwater to 1.2 million residents.',
            outcome: '1.2M residents supplied daily',
            imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
            badge: 'Sustainable',
        },
        {
            title: 'Rhine Industrial Water Recovery',
            location: 'Germany, Europe',
            category: 'Industrial',
            description: 'Implemented closed-loop industrial wastewater recovery at Germany\'s largest chemical complex, achieving 95% water reclamation.',
            outcome: '95% water reclamation rate',
            imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80',
            badge: 'Zero Discharge',
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
    description: 'Pioneering advanced water technology solutions for a sustainable, water-secure future. Trusted by industries across 30+ countries.',
    copyright: '© 2025 Precise WaterTek. All rights reserved.',
    links: {
        Solutions: ['Water Treatment', 'Filtration Systems', 'Desalination', 'Smart Monitoring'],
        Company: ['About Us', 'Careers', 'News', 'Sustainability'],
        Resources: ['Case Studies', 'White Papers', 'Documentation', 'Blog'],
    },
}
