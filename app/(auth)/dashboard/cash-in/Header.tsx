"use client";
import { motion } from "framer-motion";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Header() {
    return (
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-8 text-center ">
            <motion.h1
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold flex items-center justify-center gap-2  text-white"
            >
                <FaMoneyBillTrendUp /> Cash In
            </motion.h1>
            <p className="text-blue-100 mt-2">Send money to a user's wallet</p>
        </div>
    );
}
