import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiArrowUp } from 'react-icons/fi'
import { FOOTER_CONTENT } from '../constants'

export default function Footer() {
    return (
        <footer className="bg-[#050e1a] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src="/images/Final_logo_large_file.jpg.jpeg"
                                alt="Precise WaterTek Logo"
                                className="h-10 w-auto rounded-lg shadow-lg shadow-teal-500/10"
                            />
                            <span className="text-white font-bold text-xl font-['Outfit']">
                                {FOOTER_CONTENT.brandName} <span className="text-teal-400">{FOOTER_CONTENT.brandHighlight}</span>
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
                            {FOOTER_CONTENT.description}
                        </p>
                        <div className="flex gap-3">
                            {[FiTwitter, FiLinkedin, FiFacebook, FiInstagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-teal-400 hover:border-teal-400/40 hover:bg-teal-500/10 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(FOOTER_CONTENT.links).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-white/45 hover:text-teal-400 text-sm transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        {FOOTER_CONTENT.copyright}
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <FiArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

