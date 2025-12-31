import { brandDetails, footerSections, navLinks, socialLinks } from "@/data";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                <i className="fas fa-wallet text-primary-600 text-xl"></i>
                            </div>
                            <span className="text-white text-xl font-bold">{brandDetails.name}</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {brandDetails.description}
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <SocialIcon key={index} icon={link.icon} href={link.href} />
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <FooterLink key={index} href={link.href} text={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {footerSections.legal.map((link, index) => (
                                <FooterLink key={index} href={link.href} text={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Support</h4>
                        <ul className="space-y-3">
                            {footerSections.support.map((link, index) => (
                                <FooterLink key={index} href={link.href} text={link.label} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {brandDetails.copyrightYear} {brandDetails.name}. All rights reserved. {brandDetails.license}</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: string; href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
        >
            <i className={icon}></i>
        </a>
    );
}

function FooterLink({ href, text }: { href: string; text: string }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                {text}
            </Link>
        </li>
    );
}
