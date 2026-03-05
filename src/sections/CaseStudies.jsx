import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiArrowRight, FiAward } from 'react-icons/fi'

const caseStudies = [
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
]

function CaseCard({ study, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="glass-card overflow-hidden group cursor-pointer"
        >
            {/* Image Thumbnail */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        <FiAward size={11} />
                        {study.badge}
                    </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/10">
                        {study.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-teal-400 text-xs mb-3">
                    <FiMapPin size={12} />
                    <span>{study.location}</span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 font-['Outfit'] group-hover:text-teal-300 transition-colors duration-200 leading-snug">
                    {study.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{study.description}</p>

                {/* Outcome */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    <span className="text-teal-300 text-xs font-medium">{study.outcome}</span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-teal-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    Read case study <FiArrowRight size={14} />
                </div>
            </div>
        </motion.div>
    )
}

export default function CaseStudies() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section
            id="case-studies"
            className="section-padding relative"
            style={{
                background: 'linear-gradient(135deg, #060f1c 0%, #0d2137 50%, #071726 100%)',
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                        Case Studies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        Transforming Water,
                        <span className="gradient-text"> Globally</span>
                    </h2>
                    <p className="text-white/55 max-w-xl mx-auto text-base">
                        Real projects. Measurable impact. Explore how Precise WaterTek has solved complex water challenges across the world.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudies.map((study, i) => (
                        <CaseCard key={study.title} study={study} index={i} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-teal-500/30 text-teal-300 text-sm font-medium rounded-xl hover:bg-teal-500/10 hover:border-teal-400/50 transition-all duration-300"
                    >
                        View all case studies <FiArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
