"use client";

import { login } from "@/app/servers/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { loginAsOptions } from "./data";
import { LoginFormValues, loginSchema } from "./loginSchema";

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { register, handleSubmit, setValue, formState: { errors, isDirty, isValid } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const handleLoginAs = (email: string, password: string) => {
        setValue("email", email, { shouldDirty: true, shouldValidate: true });
        setValue("password", password, { shouldDirty: true, shouldValidate: true });
    };

    const onSubmit = async (data: LoginFormValues) => {
        setIsSubmitting(true);
        setErrorMsg("");
        try {
            const result = await login(data);
            if (result.success) {
                router.push("/dashboard/overview");
            } else {
                setErrorMsg(result.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Login submission error:", error);
            setErrorMsg("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Login As Options */}
            <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Login As</p>
                <div className="grid grid-cols-2 gap-2">
                    {loginAsOptions.map((option) => (
                        <button
                            key={option.email}
                            type="button"
                            onClick={() => handleLoginAs(option.email, option.password)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${option.colorClass}`}
                        >
                            <option.icon className={option.iconClass} />
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-tighter">
                    <span className="bg-white px-2 text-gray-300">Or use credentials</span>
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                    </div>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                        placeholder="you@example.com"
                    />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                    </div>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        className={`w-full pl-10 pr-12 py-3 rounded-xl border ${errors.password ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
            </div>

            {/* Error Message */}
            {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600 animate-in fade-in duration-300">
                    {errorMsg}
                </div>
            )}

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className={`w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg transition ${isSubmitting || !isDirty || !isValid
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    }`}
            >
                {isSubmitting ? "Logging In..." : "Login"}
            </motion.button>
        </form>
    );
}

