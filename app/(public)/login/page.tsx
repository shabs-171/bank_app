"use client";

import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import SignupLink from "./SignupLink";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            {/* Decorative Blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
                <LoginHeader />

                <div className="p-8">
                    <LoginForm />
                    {/* <Divider /> */}
                    {/* <SocialLogin /> */}
                    <SignupLink />
                </div>
            </motion.div>
        </div>
    );
}