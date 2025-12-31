"use client";

import { useState } from "react";
import { brandDetails, faqsList } from "../../../data";
import Reveal from "./Reveal";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-gray-50/50">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary-200/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-100/80 text-primary-600 text-sm font-medium mb-4 backdrop-blur-sm border border-primary-200">
                            Support & Help
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Everything you need to know about {brandDetails.name}. Can't find the answer you're looking for? Please contact our support.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {faqsList.map((faq, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className={`group bg-white rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? "border-primary-200 shadow-xl shadow-primary-100/20"
                                    : "border-gray-200 hover:border-primary-100 hover:shadow-md"
                                    }`}
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <h3
                                        className={`text-lg font-semibold transition-colors duration-300 pr-8 ${openIndex === index ? "text-primary-600" : "text-gray-900 group-hover:text-primary-600"
                                            }`}
                                    >
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${openIndex === index
                                            ? "bg-primary-100 text-primary-600 rotate-180"
                                            : "bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-500"
                                            }`}
                                    >
                                        <i className="fas fa-chevron-down text-sm"></i>
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
