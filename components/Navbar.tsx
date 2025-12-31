"use client";

import { adminMenu, agentMenu, userMenu } from "@/app/(auth)/_components/MenuList";
import { localLogout } from "@/app/servers/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { brandDetails, categorizedServices, navLinks } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Navbar({ user }: { user?: any }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Close menus on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsProfileOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    const handleLogout = async () => {
        try {
            await localLogout();
            toast.success("Logged out successfully");
            setIsProfileOpen(false);
            router.push("/");
            router.refresh();
        } catch (error) {
            toast.error("Logout failed");
        }
    };

    const getRoleMenu = () => {
        if (!user) return [];
        switch (user.role) {
            case "admin": return adminMenu;
            case "agent": return agentMenu;
            case "user": return userMenu;
            default: return userMenu;
        }
    };

    const roleMenu = getRoleMenu();

    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 transition-all duration-300 w-full"
        >
            <div className="gradient-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                    <i className="fas fa-wallet text-primary-600 text-xl"></i>
                                </div>
                                <span className="text-white text-xl font-bold hidden sm:block">
                                    {brandDetails.name}
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="nav-link text-white font-medium hover:text-primary-200 transition-colors"
                            >
                                Home
                            </Link>

                            {/* Services Mega Menu */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <Button
                                    className="nav-link text-white font-medium hover:text-primary-200 transition-colors flex items-center space-x-1"
                                >
                                    <span>Services</span>
                                    <FiChevronDown className={`text-xs transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                                </Button>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-50 overflow-hidden"
                                        >
                                            <div className="grid grid-cols-2 gap-6 text-left">
                                                <div>
                                                    <h3 className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                                                        Money Transfer
                                                    </h3>
                                                    <div className="space-y-1">
                                                        {categorizedServices.moneyTransfer.map((service, idx) => (
                                                            <ServiceItem key={idx} {...service} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                                                        Bill & Recharge
                                                    </h3>
                                                    <div className="space-y-1">
                                                        {categorizedServices.billRecharge.map((service, idx) => (
                                                            <ServiceItem key={idx} {...service} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="mt-6 pt-6 border-t border-gray-100">
                                                <Link
                                                    href="#services"
                                                    className="flex items-center justify-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                                >
                                                    <span>View All Services</span>
                                                    <i className="fas fa-arrow-right"></i>
                                                </Link>
                                            </div> */}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {navLinks.filter(link => link.label !== "Home").map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="nav-link text-white font-medium hover:text-primary-200 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA / Profile */}
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center space-x-2 focus:outline-none"
                                    >
                                        <Avatar className="h-10 w-10 border-2 border-white/50">
                                            <AvatarImage src={user.avatar || user.file} />
                                            <AvatarFallback className="bg-primary-500 text-white font-bold">
                                                {user.name?.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <FiChevronDown className={`text-white transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 overflow-hidden"
                                            >
                                                <div className="px-4 py-3 border-b border-gray-50 flex items-center space-x-3">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src={user.avatar || user.file} />
                                                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                                                        <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">{user.role}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-1">
                                                    <h1>asdkfjlaskdjfl;ksajdflsjflskjf;lsjfd;jsd</h1>
                                                    {roleMenu.map((item: any, i: number) => (
                                                        <Link
                                                            key={i}
                                                            href={item.url}
                                                            className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                                        >
                                                            <item.icon className="text-lg" />
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    ))}
                                                    <div className="border-t border-gray-50 my-1"></div>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                                    >
                                                        <FiLogOut className="text-lg" />
                                                        <span>Sign Out</span>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="hidden lg:flex items-center space-x-4">
                                    <Link
                                        href="/login"
                                        className="text-white font-medium hover:text-primary-200 transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="bg-white text-primary-600 px-6 py-2.5 rounded-full font-semibold hover:bg-primary-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden text-white p-2 focus:outline-none"
                            >
                                {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white shadow-xl overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/"
                                className="block w-full text-center py-3 text-primary-600 font-semibold border-2 border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                            >
                                Home
                            </Link>
                            <div className="border-b border-gray-100"></div>
                            {navLinks.filter(link => link.label !== "Home").map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="block py-3 px-4 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="border-t border-gray-100 pt-4 space-y-3">
                                {!user ? (
                                    <>
                                        <Link
                                            href="/login"
                                            className="block w-full text-center py-3 text-primary-600 font-semibold border-2 border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block w-full text-center py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        href="/dashboard/overview"
                                        className="block w-full text-center py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                                    >
                                        Go to Dashboard
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function ServiceItem({ icon, title, desc, color, link }: { icon: string; title: string; desc: string; color: string; link: string }) {
    const colorClasses: Record<string, string> = {
        primary: "bg-primary-100 text-primary-600 group-hover:bg-primary-600",
        green: "bg-green-100 text-green-600 group-hover:bg-green-600",
        orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
        purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
        blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
        pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600",
    };

    return (
        <Link
            href={link}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
        >
            <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${colorClasses[color] || colorClasses.primary}`}
            >
                <i className={`${icon} group-hover:text-white transition-colors`}></i>
            </div>
            <div className="min-w-0">
                <p className="font-medium text-gray-800 text-sm truncate">{title}</p>
                <p className="text-xs text-gray-500 truncate">{desc}</p>
            </div>
        </Link>
    );
}
