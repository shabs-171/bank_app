"use client";

import { motion } from "framer-motion";
import { FiAward, FiBook, FiCheckSquare, FiGlobe } from "react-icons/fi";

const complianceItems = [
    {
        title: "AML/CFT Compliance",
        label: "Anti-Money Laundering",
        desc: "We strictly adhere to the Anti-Money Laundering Act and Counter-Terrorism Financing (CFT) guidelines issued by Bangladesh Bank.",
        icon: <FiCheckSquare className="text-primary-600" />
    },
    {
        title: "PCI DSS Standards",
        label: "Data Security",
        desc: "Our systems are built to meet Payment Card Industry Data Security Standard (PCI DSS) for protecting cardholder data.",
        icon: <FiAward className="text-secondary-600" />
    },
    {
        title: "Regulatory Licensing",
        label: "License Info",
        desc: "PayBD is a licensed Payment Service Provider (PSP) authorized and regulated by the Payment Systems Department of Bangladesh Bank.",
        icon: <FiBook className="text-primary-600" />
    },
    {
        title: "Customer Identification",
        label: "KYC/e-KYC",
        desc: "We implement mandatory Know Your Customer (KYC) procedures through electronic verification (e-KYC) to prevent identity theft.",
        icon: <FiGlobe className="text-secondary-600" />
    }
];

export default function Compliance() {
    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3 sticky top-32"
                    >
                        <h1 className="text-5xl font-black text-slate-900 mb-6 leading-[1.1]">Regulatory Compliance</h1>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            At PayBD, transparency and regulatory adherence are the foundation of our trust. We work closely with financial regulators to ensure a safe digital ecosystem.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">ISO 27001 Certified</span>
                            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">GDPR Compliant</span>
                            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">BB Authorized</span>
                        </div>
                    </motion.div>

                    {/* Right Side: Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {complianceItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-slate-200 transition-all flex flex-col items-start gap-4"
                            >
                                <div className="p-3 bg-slate-50 rounded-2xl text-2xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-1 block">
                                        {item.label}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-slate-900 p-12 rounded-[3rem] text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Security is Our Top Priority</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Our compliance team monitors every transaction in real-time to detect and prevent fraudulent activities before they happen.
                    </p>
                    <div className="inline-flex gap-8 items-center border-t border-slate-800 pt-10">
                        <div className="text-left">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Last Audit</p>
                            <p className="text-white font-black">Nov 2025</p>
                        </div>
                        <div className="w-px h-10 bg-slate-800"></div>
                        <div className="text-left">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Status</p>
                            <p className="text-emerald-400 font-black">Fully Compliant</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
