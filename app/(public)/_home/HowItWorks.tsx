import { steps } from "../../../data";
import Reveal from "./Reveal";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Get Started in <span className="text-secondary-600">3 Easy Steps</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Opening your digital wallet is quick, easy, and completely free. Start managing your money in minutes.
                        </p>
                    </div>
                </Reveal>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {steps.map((item, index) => (
                            <Reveal key={index} delay={0.1 * (index + 1)}>
                                <div className="relative">
                                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10 h-full">
                                        <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                                            <span className="text-white text-3xl font-bold">{item.step}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">{item.title}</h3>
                                        <p className="text-gray-600 text-center lg:text-left mb-6">{item.description}</p>
                                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <i className={item.detail1.icon}></i>
                                                <span>{item.detail1.text}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <i className={item.detail2.icon}></i>
                                                <span>{item.detail2.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.4}>
                        <div className="text-center mt-12">
                            <a
                                href="register"
                                className="inline-flex items-center space-x-2 gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <span>Create Your Free Account</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
