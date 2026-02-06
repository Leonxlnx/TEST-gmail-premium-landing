import { Envelope, CaretDown, MagnifyingGlass, GearSix, SquaresFour } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        >
            {/* Left: Branding */}
            <div className="flex items-center gap-2">
                <div className="flex-shrink-0 text-google-red p-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer">
                    <list className="h-6 w-6 hidden" /> {/* Placeholder */}
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5.25L12 12L3 5.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-google-red" />
                        <path d="M3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80" />
                    </svg>
                </div>
                <span className="text-xl font-display font-medium tracking-tight text-white/90">
                    Gmail <span className="text-white/40 font-light">Premium</span>
                </span>
            </div>

            {/* Center: Search (Floating Glass) */}
            <div className="hidden md:flex items-center w-full max-w-2xl mx-8">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-google-blue transition-colors">
                        <MagnifyingGlass size={20} weight="light" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search mail"
                        className="w-full h-12 bg-white/5 border border-white/10 rounded-full pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300 backdrop-blur-md"
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                        <button className="p-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <SquaresFour size={20} weight="light" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5">
                    <GearSix size={24} weight="light" />
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-google-blue to-google-green p-[2px] cursor-pointer">
                    <div className="w-full h-full rounded-full bg-dark-base flex items-center justify-center text-sm font-medium">
                        L
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
