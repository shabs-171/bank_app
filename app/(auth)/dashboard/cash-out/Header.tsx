"use client";
import { BsCashCoin } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="bg-linear-to-r from-green-500 to-emerald-600 p-8 text-center ">
            <motion.h1
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold flex items-center justify-center gap-2  text-white"
            >
                <BsCashCoin /> Cash Out
            </motion.h1>
            <p className="text-green-100 mt-2">To any mobile number in Bangladesh</p>
        </div>
    );
}
