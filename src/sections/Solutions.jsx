import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import { SOLUTIONS_CONTENT } from '../constants'

function SolutionCard({ solution, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 cursor-pointer group"
            style={{ transition: 'all 0.3s ease' }}
        >
            {/* Tag */}
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/20 mb-4">
                {solution.tag}
            </span>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} bg-opacity-20 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ background: `linear-gradient(135deg, ${solution.color.includes('teal-500') ? 'rgba(13,148,136,0.3)' : 'rgba(6,182,212,0.3)'}, rgba(20,184,166,0.15))` }}
            >
                <solution.icon className="text-teal-400 text-2xl" />
            </div>

            {/* Content */}
            <h3 className="text-white font-semibold text-lg mb-2 font-['Outfit']">{solution.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-5">{solution.description}</p>

            {/* Link */}
            <div className="flex items-center gap-2 text-teal-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                View Details <FiArrowRight className="text-xs" />
            </div>
        </motion.div>
    )
}

export default function Solutions() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="solutions" className="section-padding animated-gradient">
            {/* Background accent */}
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

            <div className="relative max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                        {SOLUTIONS_CONTENT.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        {SOLUTIONS_CONTENT.titleMain}
                        <span className="gradient-text">{SOLUTIONS_CONTENT.titleHighlight}</span>
                    </h2>
                    <p className="text-white/55 max-w-2xl mx-auto text-base leading-relaxed">
                        {SOLUTIONS_CONTENT.description}
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="relative">
                    {/* Background decoration */}
                    <div
                        className="absolute inset-0 opacity-5 bg-[url('/images/filtration.png')] bg-cover bg-center rounded-3xl"
                    />
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SOLUTIONS_CONTENT.solutions.map((solution, i) => (
                            <SolutionCard key={solution.title} solution={solution} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


