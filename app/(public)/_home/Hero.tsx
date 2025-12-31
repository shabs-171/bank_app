"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Slide data with vibrant light colors
const slides = [
    {
        id: 1,
        badge: "Instant Transfers",
        title: "Send Money Across Borders in Seconds",
        description: "Low fees, real-time delivery, and 24/7 support for every transaction.",
        primaryBtn: { label: "Sign Up Free", href: "/signup" },
        secondaryBtn: { label: "How It Works", href: "#how-it-works" },
        stats: [
            { value: "0.5%", label: "Fee" },
            { value: "15s", label: "Avg. Time" },
            { value: "100+", label: "Currencies" },
        ],
        bgGradient: "from-cyan-50 to-blue-100",
        accentColor: "text-cyan-600",
        btnBg: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
        id: 2,
        badge: "Rewards Program",
        title: "Earn Cashback on Every Transaction",
        description: "Get up to 5% back on all your payments. The more you send, the more you earn!",
        primaryBtn: { label: "Join Now", href: "/rewards" },
        secondaryBtn: { label: "View Offers", href: "#offers" },
        stats: [
            { value: "5%", label: "Max Cashback" },
            { value: "2M+", label: "Rewards Given" },
            { value: "Free", label: "To Join" },
        ],
        bgGradient: "from-amber-50 to-orange-100",
        accentColor: "text-amber-600",
        btnBg: "bg-amber-500 hover:bg-amber-600",
    },
    {
        id: 3,
        badge: "Business Solutions",
        title: "Payroll & Invoicing Made Simple",
        description: "Automate payments, track expenses, and manage your team’s finances in one place.",
        primaryBtn: { label: "Try for Business", href: "/business" },
        secondaryBtn: { label: "Schedule Demo", href: "#demo" },
        stats: [
            { value: "90%", label: "Time Saved" },
            { value: "50k+", label: "Businesses" },
            { value: "API", label: "Integrations" },
        ],
        bgGradient: "from-emerald-50 to-green-100",
        accentColor: "text-emerald-600",
        btnBg: "bg-emerald-500 hover:bg-emerald-600",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const goTo = (index: number) => setCurrent(index);

    // Auto-slide every 6s
    useEffect(() => {
        timeoutRef.current = setTimeout(next, 6000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current]);

    // Animate stats on slide change
    useEffect(() => {
        if (slides[current].stats && statsRefs.current) {
            gsap.killTweensOf(statsRefs.current);
            gsap.fromTo(
                statsRefs.current,
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );
        }
    }, [current]);

    const slide = slides[current];

    return (
        <section
            id="home"
            className={`relative h-screen bg-linear-to-br ${slide.bgGradient} overflow-hidden`}
        >
            {/* Decorative Blobs (light & colorful) */}
            <div className="absolute top-16 left-16 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-16 right-16 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="text-center lg:text-left">
                                <motion.span
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${slide.accentColor} bg-opacity-10`}
                                    style={{ backgroundColor: `${slide.accentColor.replace('text', 'bg').replace('-600', '-100')}` }}
                                >
                                    {slide.badge}
                                </motion.span>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                    {slide.title}
                                </h1>

                                <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto lg:mx-0">
                                    {slide.description}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href={slide.primaryBtn.href}
                                            className={`w-full sm:w-auto text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ${slide.btnBg}`}
                                        >
                                            {slide.primaryBtn.label}
                                        </Link>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href={slide.secondaryBtn.href}
                                            className="w-full sm:w-auto bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200"
                                        >
                                            {slide.secondaryBtn.label}
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                                    {slide.stats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            ref={(el: any) => (statsRefs.current[i] = el)}
                                            className="text-center"
                                        >
                                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-gray-600">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Placeholder (you can replace with illustration) */}
                            <div className="hidden lg:flex justify-center">
                                <div className="relative w-64 h-64">
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform rotate-6"></div>
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform -rotate-6"></div>
                                    <div className="absolute inset-2 bg-linear-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center">
                                        <div className={`text-6xl font-bold ${slide.accentColor}`}>
                                            {slide.id === 1 ? "💸" : slide.id === 2 ? "🎁" : "🏢"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Controls */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
                <button
                    onClick={prev}
                    className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-full text-gray-700 hover:bg-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === current ? "w-8 bg-gray-800" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-full text-gray-700 hover:bg-white transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link href="#features" className="text-gray-600 hover:text-gray-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}