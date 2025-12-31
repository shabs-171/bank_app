import { offersList } from "../../../data";
import Reveal from "./Reveal";

export default function Offers() {
    return (
        <section id="offers" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Special Offers
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Exclusive Deals & <span className="text-orange-600">Cashback</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Enjoy amazing discounts and cashback on every transaction. More you use, more you save!
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offersList.map((offer, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className={`relative bg-linear-to-br ${offer.gradient} rounded-3xl p-8 text-white overflow-hidden card-hover group h-full`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{offer.badge}</span>
                                        <span className="text-3xl font-bold">{offer.discount}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                                    <p className="text-white/80 mb-6">{offer.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/70">
                                            {offer.detail.includes(":") ? (
                                                <>
                                                    {offer.detail.split(":")[0]}: <span className="font-bold">{offer.detail.split(":")[1]}</span>
                                                </>
                                            ) : (
                                                offer.detail
                                            )}
                                        </span>
                                        <button
                                            className={`bg-white ${offer.btnColor} px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all group-hover:scale-105 transform`}
                                        >
                                            {offer.btnText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className="absolute -top-3 -right-2 bg-linear-to-r from-rose-500 to-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg ring-2 ring-white animate-pulse">
                                Coming Soon
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
