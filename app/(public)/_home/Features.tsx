import { brandDetails, featuresList } from "../../../data";
import Reveal from "./Reveal";

export default function Features() {
    return (
        <section
            id="features"
            className="py-20 bg-linear-to-br from-primary-900 via-secondary-900 to-primary-800 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Powerful Features for{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-300 to-secondary-300">
                                Modern Finance
                            </span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Discover why millions trust {brandDetails.name} for their daily financial needs.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feature, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 group h-full">
                                <div
                                    className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                                >
                                    <i className={`${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/70">{feature.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
