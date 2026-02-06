import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Star } from "@phosphor-icons/react";

const COLORS = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC05',
    green: '#34A853',
    darkBase: '#050505',
    darkSurface: '#0a0a0a',
    darkCard: '#111111',
};

export function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Liquid Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"
                    style={{ backgroundColor: `${COLORS.blue}33` }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] mix-blend-screen opacity-40"
                    style={{ backgroundColor: `${COLORS.red}1a` }}
                />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Copy */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <Star weight="fill" style={{ color: COLORS.yellow }} />
                        <span className="text-sm font-medium text-white/80">The future of communication</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                        className="text-7xl font-medium tracking-tight leading-[1.1]"
                    >
                        Email. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            Reimagined.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.6, duration: 0.8 }}
                        className="text-xl text-white/50 max-w-lg leading-relaxed"
                    >
                        Experience the new standard of digital correspondence.
                        Fluid animation, intelligent sorting, and a design that breathes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.7, duration: 0.8 }}
                        className="flex items-center gap-4"
                    >
                        <button
                            className="group relative px-8 py-4 bg-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                            style={{ color: COLORS.darkBase }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Early Access <ArrowRight weight="bold" />
                            </span>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ background: `linear-gradient(to right, ${COLORS.blue}, ${COLORS.red}, ${COLORS.yellow})` }}
                            />
                        </button>

                        <button className="px-8 py-4 text-white/70 hover:text-white font-medium transition-colors">
                            View the film
                        </button>
                    </motion.div>
                </div>

                {/* Right: 3D Tilt Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.8, duration: 1, ease: "easeOut" }}
                    style={{ perspective: 1000 }}
                    className="relative flex justify-center"
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d", backgroundColor: COLORS.darkSurface }}
                        onMouseMove={onMouseMove}
                        onMouseLeave={() => { x.set(0); y.set(0); }}
                        className="w-full max-w-[500px] aspect-[4/3] border border-white/5 rounded-3xl shadow-2xl relative group cursor-pointer"
                    >
                        {/* Glossy Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none z-20" />

                        {/* Content Depth Layers */}
                        <div
                            style={{ transform: "translateZ(30px)", backgroundColor: COLORS.darkCard }}
                            className="absolute inset-6 rounded-2xl border border-white/5 flex flex-col p-6 shadow-inner"
                        >
                            {/* Mock UI Header */}
                            <div className="flex items-center justify-between mb-8 text-white/20">
                                <div className="w-8 h-8 rounded-full bg-white/10" />
                                <div className="w-24 h-2 rounded-full bg-white/10" />
                            </div>

                            {/* Mock Email Rows */}
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors group/row">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{
                                                backgroundColor: i === 1 ? `${COLORS.blue}33` : i === 2 ? `${COLORS.green}33` : `${COLORS.red}33`,
                                                color: i === 1 ? COLORS.blue : i === 2 ? COLORS.green : COLORS.red
                                            }}
                                        >
                                            {i === 1 ? 'G' : i === 2 ? 'F' : 'N'}
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-1/2 h-2 bg-white/20 rounded-full group-hover/row:bg-white/40 transition-colors" />
                                            <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge (High Depth) */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute -right-4 -bottom-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: COLORS.green }} />
                            <span className="text-xs font-mono text-white/80">System Operational</span>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>

            {/* Global Grain Overlay */}
            <div className="grain-overlay" />
        </section>
    );
}
