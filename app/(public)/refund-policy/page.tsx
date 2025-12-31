"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiAlertCircle, FiClock, FiDollarSign, FiRefreshCcw } from "react-icons/fi";

export default function RefundPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-block p-3 bg-red-100 rounded-full mb-4"
                    >
                        <FiRefreshCcw className="text-3xl text-red-600" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Refund Policy</h1>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                        Clear and transparent guidelines for transaction reversals and refund requests.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiDollarSign className="text-2xl text-emerald-500" />
                            <h2 className="text-2xl font-bold m-0 italic">Transaction Reversals</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                                <p>Failed transactions where money was deducted will be automatically refunded within <span className="font-bold text-gray-900">24-72 hours</span>.</p>
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                                <p>Money sent to a wrong number cannot be reversed if the recipient has already cashed out or used the funds.</p>
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                                <p>Disputed transactions must be reported within <span className="font-bold text-gray-900">7 days</span> of performance.</p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiClock className="text-2xl text-blue-500" />
                            <h2 className="text-2xl font-bold m-0 italic">Timeline & Fees</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-1">Standard Processing</h4>
                                <p className="text-sm text-gray-500">Most refunds are processed within 3 business days.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-1">Fee Handling</h4>
                                <p className="text-sm text-gray-500">Service fees for successful transactions are non-refundable.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-linear-to-br from-red-600 to-rose-700 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <FiAlertCircle className="text-3xl text-red-200" />
                            <h2 className="text-3xl font-bold m-0">Need a Refund?</h2>
                        </div>
                        <p className="text-red-50 opacity-90 text-lg leading-relaxed">
                            For any unauthorized transactions or failed payments, please raise a ticket immediately or call our 24/7 helpline.
                        </p>
                    </div>
                    <Button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl" asChild>
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
