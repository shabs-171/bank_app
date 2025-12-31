"use client";
import { motion } from "framer-motion";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full h-12 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition"
            >
                <FcGoogle className="text-2xl" />
            </motion.button>
            <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full h-12 bg-black text-white rounded-xl shadow-sm hover:shadow-md transition"
            >
                <FaApple className="text-2xl" />
            </motion.button>
            <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full h-12 bg-blue-700 text-white rounded-xl shadow-sm hover:shadow-md transition"
            >
                <FaFacebook className="text-2xl" />
            </motion.button>
        </div>
    );
}
