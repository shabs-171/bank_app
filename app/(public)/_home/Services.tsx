import { servicesList } from "../../../data";
import Reveal from "./Reveal";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Our Services
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Everything You Need in <span className="gradient-text">One Wallet</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            From sending money to paying bills, our digital wallet offers a complete suite of financial services at
                            your fingertips.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="service-card relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden card-hover group h-full">
                                <div
                                    className={`service-icon w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
                                >
                                    <i
                                        className={`${service.icon} text-${service.color}-600 text-2xl group-hover:text-primary-600 transition-colors`}
                                    ></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 group-hover:text-white/80 transition-colors">
                                    {service.description}
                                </p>
                                {/* <div className="flex items-center text-primary-600 font-medium group-hover:text-white transition-colors">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                                </div> */}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
