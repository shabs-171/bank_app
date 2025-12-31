import { partners } from "../../../data";

export default function Partners() {
    return (
        <section id="partners" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-gray-500 text-lg">Trusted by leading companies and millions of users worldwide</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-8 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
