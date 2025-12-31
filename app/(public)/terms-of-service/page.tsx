"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiFileText, FiInfo } from "react-icons/fi";

const terms = [
    {
        title: "Account Eligibility",
        description: "To use PayBD, you must be a resident of Bangladesh, at least 18 years old, and possess a valid National ID (NID). Account verification is mandatory for all users.",
        icon: <FiCheckCircle className="text-secondary-500 text-xl" />
    },
    {
        title: "User Responsibilities",
        description: "You are responsible for maintaining the confidentiality of your account PIN and credentials. Any activity performed through your account is considered your personal responsibility.",
        icon: <FiCheckCircle className="text-secondary-500 text-xl" />
    },
    {
        title: "Forbidden Activities",
        description: "Users must not use PayBD for any illegal activities, including money laundering, terrorist financing, or fraudulent transactions. We reserve the right to suspend accounts immediately upon suspicious activity.",
        icon: <FiCheckCircle className="text-secondary-500 text-xl" />
    },
    {
        title: "Transaction Limits",
        description: "Transaction limits are set according to Bangladesh Bank regulations and account tiers. Users may request limit increases by providing additional documentation if required.",
        icon: <FiCheckCircle className="text-secondary-500 text-xl" />
    }
];

export default function TermsOfService() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <div className="p-4 bg-secondary-100 rounded-2xl">
                        <FiFileText className="text-4xl text-secondary-600" />
                    </div>
                    <div className="text-left">
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Terms of Service</h1>
                        <p className="text-gray-500 font-medium">Effective Date: January 1, 2026</p>
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                    >
                        <div className="flex gap-4 mb-6">
                            <FiInfo className="text-2xl text-primary-500 shrink-0 mt-1" />
                            <p className="text-gray-600 leading-relaxed font-medium">
                                By accessing or using the PayBD platform, you agree to be bound by these Terms of Service. Please read them carefully before creating an account or performing any transactions.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {terms.map((term, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary-200 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">{term.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{term.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{term.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <section className="text-center py-8">
                        <p className="text-gray-500 text-sm italic">
                            PayBD reserves the right to modify these terms at any time. Changes will be notified through the app and website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
