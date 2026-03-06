import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../constants'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#0a1628]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="/images/Final_logo_large_file.jpg.jpeg"
                        alt="Precise WaterTek Logo"
                        className="h-10 w-auto rounded-lg shadow-lg shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="hidden sm:block">
                        <span className="text-white font-bold text-lg leading-none tracking-tight font-['Outfit']">
                            Precise
                        </span>
                        <span className="text-teal-400 font-bold text-lg leading-none tracking-tight font-['Outfit']">
                            {' '}WaterTek
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white/70 hover:text-teal-400 text-sm font-medium transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 rounded-full" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white/80 hover:text-teal-400 py-2 text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl text-center"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

