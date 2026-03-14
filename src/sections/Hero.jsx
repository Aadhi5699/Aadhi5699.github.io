import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { HERO_CONTENT } from '../constants'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/hero_bg.png)' }}
            />

            {/* Multi-layer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/50 to-[#0a1628]/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/40" />

            {/* Animated Particles / Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" style={{ animation: 'pulseGlow 4s ease-in-out infinite' }} />

            {/* Content */}
            {/* Content flex container for spacing */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-20 md:gap-28">
                <div>
                    {/* Badge */}
                    {HERO_CONTENT.badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-500/10 backdrop-blur-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            <span className="text-teal-300 text-sm font-medium">{HERO_CONTENT.badge}</span>
                        </motion.div>
                    )}

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Outfit'] leading-[1.05] tracking-tight"
                    >
                        <span className="text-white">{HERO_CONTENT.mainTitle.line1}</span>
                        <br />
                        <span className="gradient-text">{HERO_CONTENT.mainTitle.line2}</span>
                        <br />
                        <span className="text-white/80">{HERO_CONTENT.mainTitle.line3}</span>
                    </motion.h1>

                    {/* Subtext - Only rendered if not empty */}
                    {HERO_CONTENT.subtext && (
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
                        >
                            {HERO_CONTENT.subtext}
                        </motion.p>
                    )}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
                >
                    {HERO_CONTENT.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text font-['Outfit']">{stat.value}</div>
                            <div className="text-white/45 text-sm mt-2 tracking-wide uppercase">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-teal-400/60 to-transparent" style={{ animation: 'float 2s ease-in-out infinite' }} />
            </motion.div>
        </section>
    )
}
