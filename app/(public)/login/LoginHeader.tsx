"use client";
import { brandDetails } from "@/data";
import { motion } from "framer-motion";

export default function LoginHeader() {
    return (
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-8 text-center">
            <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-white"
            >
                Welcome Back!
            </motion.h1>
            <p className="text-blue-100 mt-2">Sign in to your {brandDetails.name}</p>
        </div>
    );
}
