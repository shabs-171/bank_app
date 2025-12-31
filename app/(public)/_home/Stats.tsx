import { statsData } from "../../../data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Stats() {
    return (
        <section id="statistics" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="text-center">
                                <div
                                    className={`w-20 h-20 mx-auto bg-${stat.color}-100 rounded-2xl flex items-center justify-center mb-4`}
                                >
                                    <i className={`${stat.icon} text-${stat.color}-600 text-3xl`}></i>
                                </div>
                                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.gradient}`}>
                                    <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
