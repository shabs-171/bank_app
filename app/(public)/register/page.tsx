"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-slate-50 to-indigo-50 flex items-center justify-center p-6 py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-2xl"
            >
                <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-8 md:p-12 overflow-hidden">

                    <div className="text-center mb-10">

                        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Join PayBD Today</h1>
                        <p className="text-slate-500 font-medium">Create your digital wallet and start managing your finances with ease.</p>
                    </div>

                    <RegisterForm />

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 font-medium">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-blue-600 font-bold hover:text-blue-700 transition-colors underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600"
                            >
                                Login in instead
                            </Link>
                        </p>
                    </div>

                    {/* Trust Footer */}
                    <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <i className="fas fa-shield-halved text-emerald-500"></i>
                            Bank-Grade Security
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <i className="fas fa-lock text-emerald-500"></i>
                            End-to-End Encrypted
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <i className="fas fa-check-circle text-emerald-500"></i>
                            Regulatory Compliant
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
