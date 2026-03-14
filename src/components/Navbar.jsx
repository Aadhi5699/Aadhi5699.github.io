import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiLinkedin } from 'react-icons/fi'
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
                        src="public/images/ChatGPT Image Mar 14, 2026, 04_00_19 PM.png"
                        alt="Precise WaterTek Logo"
                        className="h-14 w-auto rounded-xl shadow-lg shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="hidden sm:block">
                        <span className="text-white font-bold text-2xl leading-none tracking-tight font-['Outfit']">
                            Precise
                        </span>
                        <span className="text-teal-400 font-bold text-2xl leading-none tracking-tight font-['Outfit']">
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

                {/* Social Icon */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/vidhya-r-1898b49a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjrBziJGbRCiH48d%2BsEj0ug%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-teal-400 hover:border-teal-400/40 hover:bg-teal-500/10 transition-all duration-300"
                        title="LinkedIn"
                    >
                        <FiLinkedin size={20} />
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
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/vidhya-r-1898b49a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjrBziJGbRCiH48d%2BsEj0ug%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white/80 hover:text-teal-400 transition-colors"
                                >
                                    <FiLinkedin size={18} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

