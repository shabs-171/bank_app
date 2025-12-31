"use client";

import { motion } from "framer-motion";
import { FiLock, FiShield, FiUserCheck } from "react-icons/fi";

const sections = [
    {
        title: "1. Information We Collect",
        content: "We collect information you provide directly to us when you create an account, including your name, email address, phone number, and National ID details. We also collect transaction information and device data to ensure security and improve our services.",
        icon: <FiUserCheck className="text-primary-500 text-2xl" />
    },
    {
        title: "2. How We Use Your Data",
        content: "Your data is used to process transactions, prevent fraud, comply with regulatory requirements from Bangladesh Bank, and provide you with personalized offers. We never sell your personal information to third parties.",
        icon: <FiShield className="text-primary-500 text-2xl" />
    },
    {
        title: "3. Data Security",
        content: "We implement bank-level security measures, including 256-bit encryption and multi-factor authentication, to protect your data. Your sensitive information is stored in secure, encrypted servers.",
        icon: <FiLock className="text-primary-500 text-2xl" />
    }
];

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last Updated: December 2025</p>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
                        <section>
                            <p className="text-lg leading-relaxed">
                                At PayBD, we take your privacy seriously. This policy describes how we collect, use, and handle your information when you use our website, mobile app, and services.
                            </p>
                        </section>

                        {sections.map((section, index) => (
                            <motion.section
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-4 border-primary-100 pl-6 py-2"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {section.icon}
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">{section.title}</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}

                        <section className="bg-primary-50 p-6 rounded-2xl border border-primary-100 mt-12">
                            <h2 className="text-xl font-bold text-primary-900 mb-3">Questions?</h2>
                            <p className="text-primary-700">
                                If you have any questions about our Privacy Policy, please contact our data protection officer at <span className="font-semibold underline">***@***.com</span>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
