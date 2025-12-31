import { pricingPlans } from "../../../data";
import Reveal from "./Reveal";

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Pricing Plans
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Simple & Transparent <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose the plan that fits your needs. No hidden charges, no surprises.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className={`${plan.highlight
                                    ? "bg-linear-to-b from-primary-600 to-secondary-700 text-white transform md:-translate-y-4 relative"
                                    : "bg-white border border-gray-100 text-gray-900"
                                    } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                                    <p className={`mb-4 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.desc}</p>
                                    <div className="flex items-baseline justify-center">
                                        <span className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                                        <span className={`${plan.highlight ? "text-white/70" : "text-gray-500"} ml-2`}>{plan.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature: any, i) => (
                                        <PricingItem
                                            key={i}
                                            icon={feature.icon}
                                            text={feature.text}
                                            textColor={feature.textColor || (plan.highlight ? "text-white" : "text-gray-600")}
                                            opacity={feature.opacity}
                                        />
                                    ))}
                                </ul>
                                <div className="relative">
                                    <button
                                        disabled={plan.name === "Pro" || plan.name === "Business"}
                                        className={`w-full py-4 rounded-full font-semibold transition-colors ${plan.highlight
                                            ? "bg-white text-primary-600 hover:bg-gray-100"
                                            : "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                                            } ${(plan.name === "Pro" || plan.name === "Business") ? "opacity-80 cursor-not-allowed" : ""}`}
                                    >
                                        {plan.btnText}
                                    </button>
                                    {(plan.name === "Pro" || plan.name === "Business") && (
                                        <span className="absolute -top-3 -right-2 bg-linear-to-r from-rose-500 to-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg ring-2 ring-white animate-pulse">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingItem({
    icon,
    text,
    textColor = "text-gray-600",
    opacity = "",
}: {
    icon: string;
    text: string;
    textColor?: string;
    opacity?: string;
}) {
    return (
        <li className={`flex items-center space-x-3 ${opacity}`}>
            <i className={icon}></i>
            <span className={textColor}>{text}</span>
        </li>
    );
}
