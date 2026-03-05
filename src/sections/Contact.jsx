import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const contactInfo = [
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
]

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section
            id="contact"
            className="section-padding relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #061624 0%, #0a1f30 50%, #050d1a 100%)',
            }}
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#061624]/50 to-[#050d1a]/80" />

            {/* Glowing orb */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col gap-12 md:gap-20">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                        Contact Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        Let's Build a
                        <span className="gradient-text"> Water-Secure Future</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full max-w-2xl space-y-4"
                    >
                        {/* Info panel */}
                        <div className="glass-card p-10">
                            <h3 className="text-white font-semibold text-2xl mb-8 font-['Outfit'] text-center">Get in Touch</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {contactInfo.map((item) => (
                                    <a key={item.label} href={item.href} className="flex flex-col items-center text-center gap-4 group">
                                        <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/25 transition-all duration-300 group-hover:scale-110">
                                            <item.icon className="text-teal-400" size={24} />
                                        </div>
                                        <div>
                                            <div className="text-white/40 text-xs mb-1 uppercase tracking-wider font-semibold">{item.label}</div>
                                            <div className="text-white/80 text-sm group-hover:text-teal-300 transition-colors duration-200">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Status card */}
                        {/*  <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-white/70 text-sm">Our technical team is online</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-white/10" />
                            <p className="text-white/40 text-xs font-medium">Average response time: &lt; 2 hours</p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

