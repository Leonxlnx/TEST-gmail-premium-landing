import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicReveal({ children }: { children: React.ReactNode }) {
    const [phase, setPhase] = useState<'enter' | 'text' | 'reveal' | 'done'>('enter');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('text'), 600);
        const t2 = setTimeout(() => setPhase('reveal'), 2200);
        const t3 = setTimeout(() => setPhase('done'), 3000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    return (
        <>
            <div className="fixed inset-0 z-[100] pointer-events-none flex">
                <AnimatePresence>
                    {phase !== 'done' && Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "100%" }}
                            animate={phase === 'reveal' ? { height: "0%" } : { height: "100%" }}
                            exit={{ height: "0%" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: i * 0.05
                            }}
                            className="flex-1 bg-dark-base border-r border-white/5 last:border-r-0 relative overflow-hidden"
                        >
                            {/* Optional: subtle gradient for depth */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {phase === 'text' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
                    >
                        <h1 className="text-6xl font-display font-medium text-white tracking-tighter">
                            Gmail <span className="text-google-blue">Premium</span>
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`transition-opacity duration-1000 ${phase === 'done' ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </>
    );
}
