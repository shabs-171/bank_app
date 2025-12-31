import { brandDetails, testimonialsList } from "../../../data";
import Reveal from "./Reveal";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Loved by <span className="text-pink-600">Millions</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our users have to say about {brandDetails.name}.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsList.map((testimonial, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`fas fa-star ${i < Math.floor(testimonial.rating)
                                                ? "text-yellow-400"
                                                : i < testimonial.rating
                                                    ? "fas fa-star-half-alt text-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        ></i>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
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
