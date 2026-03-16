import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { STATISTICS_CONTENT } from '../constants'

function StatCard({ stat, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 text-center group cursor-default pulse-glow"
        >
            <div className="text-4xl md:text-5xl font-bold gradient-text font-['Outfit'] mb-2">
                {inView ? (
                    <>
                        {stat.prefix}
                        <CountUp
                            end={stat.value}
                            duration={2.5}
                            decimals={stat.decimal}
                            delay={index * 0.1}
                        />
                        {stat.suffix}
                    </>
                ) : `${stat.prefix || ''}0${stat.suffix || ''}`}
            </div>
            <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
            <div className="text-white/40 text-xs">{stat.sublabel}</div>

            {/* Decorative circle */}
            <div className="absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 70%)',
                }}
            />
        </motion.div>
    )
}

export default function Statistics() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section
            id="impact"
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a1628 0%, #061220 100%)',
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-500/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal-500/8" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-teal-500/10" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
            </div>

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
                        {STATISTICS_CONTENT.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        {STATISTICS_CONTENT.titleMain}
                        <span className="gradient-text">{STATISTICS_CONTENT.titleHighlight}</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {STATISTICS_CONTENT.stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}


