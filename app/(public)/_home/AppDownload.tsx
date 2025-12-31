"use client";

import { appDownloadData } from "../../../data";
import Reveal from "./Reveal";

export default function AppDownload() {
    return (
        <section id="download" className="py-20 bg-linear-to-br from-primary-600 via-primary-800 to-secondary-600 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                {appDownloadData.title}
                            </h2>
                            <p className="text-white/80 text-lg mb-8 max-w-xl">
                                {appDownloadData.description}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="#"
                                    className="w-full sm:w-auto bg-black text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors"
                                >
                                    <i className="fab fa-apple text-3xl"></i>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400">Download on the</p>
                                        <p className="font-semibold">App Store</p>
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="w-full sm:w-auto bg-black text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors"
                                >
                                    <i className="fab fa-google-play text-3xl"></i>
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400">Get it on</p>
                                        <p className="font-semibold">Google Play</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        {appDownloadData.userImages.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                className="w-8 h-8 rounded-full border-2 border-white"
                                                alt="User"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white text-sm">{appDownloadData.downloadCount}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <i className="fas fa-star text-yellow-400"></i>
                                    <span className="text-white font-semibold">{appDownloadData.rating}</span>
                                    <span className="text-white/70 text-sm">{appDownloadData.ratingLabel}</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10 relative">
                                    <div className="w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden">
                                        <img
                                            src={appDownloadData.screenshots[0]}
                                            alt="App Screenshot"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -right-8 top-20 w-56 h-[450px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                    <div className="w-full h-full bg-gray-100 rounded-4xl overflow-hidden">
                                        <img
                                            src={appDownloadData.screenshots[1]}
                                            alt="App Screenshot"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
