import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiEdit3, FiFileText, FiActivity, FiSettings, FiArrowRight } from 'react-icons/fi'

const steps = [
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
]

export default function ProcessFlow() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section
            id="technology"
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #050e1a 0%, #0a1f35 50%, #071624 100%)',
            }}
        >
            {/* Background decoration */}
            <div
                className="absolute inset-0 opacity-8 bg-[url('/images/filtration.png')] bg-cover bg-center grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050e1a]/80 via-transparent to-[#050e1a]/80" />

            {/* Glowing orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

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
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        Systematic
                        <span className="gradient-text"> Engineering Lifecycle</span>
                    </h2>
                    <p className="text-white/55 max-w-xl mx-auto text-base">
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connector line */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[13%] right-[13%] h-0.5 bg-gradient-to-r from-blue-500/40 via-teal-400/60 to-emerald-400/40" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                {/* Card */}
                                <div className="glass-card p-6 text-center relative overflow-hidden hover:border-teal-400/30">
                                    {/* Step number */}
                                    <div className="absolute top-4 right-4 text-white/10 text-5xl font-bold font-['Outfit'] leading-none">
                                        {step.id}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mx-auto mb-4 shadow-xl ${step.glow} group-hover:scale-110 transition-transform duration-300`}
                                        style={{ background: 'rgba(13,148,136,0.2)' }}
                                    >
                                        <step.icon className="text-teal-300 text-2xl" />
                                    </div>

                                    <h3 className="text-white font-semibold text-base mb-2 font-['Outfit']">{step.title}</h3>
                                    <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-3 text-teal-400/50">
                                        <FiArrowRight className="rotate-90 text-xl" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white/70 text-sm">
                            Focusing on precision, operational efficiency, and constructability
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

