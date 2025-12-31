"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiEye,
    FiGlobe,
    FiShield,
    FiTarget,
    FiUsers
} from "react-icons/fi";

// Mock team data (replace with real images in /public/images/team/)
const teamMembers = [
    {
        name: "Rahim Ahmed",
        role: "Founder & CEO",
        bio: "10+ years in fintech. Former central bank advisor. Passionate about financial inclusion in emerging markets.",
        image: "/about/p1.jpg",
    },
    {
        name: "Sabrina Islam",
        role: "Chief Technology Officer",
        bio: "Ex-Google engineer. Built scalable payment systems used by millions. Believes in clean, secure code.",
        image: "/about/p2.jpg",
    },
    {
        name: "Tanvir Hossain",
        role: "Head of Product",
        bio: "Product leader with 8+ years in digital finance. Focused on user-first design and seamless experiences.",
        image: "/about/p3.jpg",
    },
];

export default function AboutPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Banner */}
            <div className="bg-linear-to-r from-[#301CA0] to-[#1C1C1C] text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 text-xl max-w-3xl mx-auto text-blue-100"
                    >
                        Building a more inclusive, secure, and instant digital wallet for everyone in Bangladesh.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Background */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <motion.h2
                        variants={item}
                        className="text-3xl font-bold text-gray-900 text-center mb-12"
                    >
                        Our Journey
                    </motion.h2>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div variants={item} className="flex-1">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Founded in 2020 in Dhaka, our team started with a simple mission: to make digital finance
                                    accessible to every citizen in Bangladesh. What began as a 3-person startup has grown into a
                                    trusted platform serving over 250,000 users nationwide.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                    We’ve partnered with 12+ banks, integrated with national payment gateways, and maintained
                                    99.99% uptime — all while keeping security and user experience at the core.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="flex-1 flex justify-center"
                        >
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                                <div className="absolute inset-0 bg-blue-100 rounded-2xl -z-10"></div>
                                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-full flex items-center justify-center text-gray-500">
                                    <Image
                                        src="/about/team.jpg"
                                        alt="Team Photo"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Mission & Vision */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Mission & Vision
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                                <FiTarget className="text-blue-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                            <p className="text-gray-700">
                                To empower every individual and small business in Bangladesh with instant, secure, and
                                affordable digital financial services — anytime, anywhere.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                                <FiEye className="text-purple-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                            <p className="text-gray-700">
                                A future where financial exclusion is obsolete — where sending money, saving, and growing
                                wealth is as simple as a tap on your phone.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Core Values */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        What Drives Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <FiShield />, title: "Security First", desc: "Your money and data are protected with bank-grade encryption." },
                            { icon: <FiUsers />, title: "User-Centric", desc: "Designed for real people — simple, intuitive, and helpful." },
                            { icon: <FiGlobe />, title: "Inclusive Growth", desc: "Finance for all — regardless of location, income, or background." },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={item}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 text-center"
                            >
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-gray-700">
                                    {value.icon}
                                </div>
                                <h3 className="font-bold text-gray-900">{value.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Team */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                variants={item}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                            >
                                <div className="h-48  bg-linear-to-r from-[#301CA0] to-[#1C1C1C] flex items-center justify-center">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={500}
                                        height={500}
                                        className="rounded-full border-4 h-40 w-32 object-cover border-white shadow-md"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}