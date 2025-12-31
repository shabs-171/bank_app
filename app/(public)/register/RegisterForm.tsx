"use client";

import { createUser } from "@/app/servers/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiBriefcase, FiCamera, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { toast } from "sonner";
import { RegisterFormValues, registerSchema } from "./registerSchema";

export default function RegisterForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { register, handleSubmit, setValue, formState: { errors, isDirty, isValid } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        defaultValues: {
            role: "user"
        }
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue("file", file, { shouldDirty: true, shouldValidate: true });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data: RegisterFormValues) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("password", data.password);
            formData.append("role", data.role);
            if (data.file) {
                formData.append("file", data.file);
            }

            const result = await createUser(formData);

            if (result.success) {
                toast.success("Registration successful! Please wait for admin approval.");
                router.push("/login");
            } else {
                toast.error(result.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center justify-center mb-6">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden transition-all group-hover:border-blue-500">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <FiCamera className="text-3xl text-slate-400 group-hover:text-blue-500 transition-colors" />
                        )}
                    </div>
                    <label
                        htmlFor="file-upload"
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-blue-700 transition-colors"
                    >
                        <FiCamera size={16} />
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Upload Avatar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiUser className="text-slate-400" />
                        </div>
                        <input
                            {...register("name")}
                            className={`w-full pl-11 pr-4 py-3 rounded-2xl border ${errors.name ? "border-rose-300 bg-rose-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm`}
                            placeholder="John Doe"
                        />
                    </div>
                    {errors.name && <p className="text-[11px] text-rose-500 font-bold ml-1">{errors.name.message}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiMail className="text-slate-400" />
                        </div>
                        <input
                            type="email"
                            {...register("email")}
                            className={`w-full pl-11 pr-4 py-3 rounded-2xl border ${errors.email ? "border-rose-300 bg-rose-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm`}
                            placeholder="john@example.com"
                        />
                    </div>
                    {errors.email && <p className="text-[11px] text-rose-500 font-bold ml-1">{errors.email.message}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiPhone className="text-slate-400" />
                        </div>
                        <input
                            {...register("phone")}
                            className={`w-full pl-11 pr-4 py-3 rounded-2xl border ${errors.phone ? "border-rose-300 bg-rose-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm`}
                            placeholder="01712345678"
                        />
                    </div>
                    {errors.phone && <p className="text-[11px] text-rose-500 font-bold ml-1">{errors.phone.message}</p>}
                </div>

                {/* Role Selection */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">Join As</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiBriefcase className="text-slate-400" />
                        </div>
                        <select
                            {...register("role")}
                            className={`w-full pl-11 pr-4 py-3 rounded-2xl border ${errors.role ? "border-rose-300 bg-rose-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm appearance-none bg-white`}
                        >
                            <option value="user">Regular User</option>
                            <option value="agent">Agent / Merchant</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <FiChevronDown className="text-slate-400" />
                        </div>
                    </div>
                    {errors.role && <p className="text-[11px] text-rose-500 font-bold ml-1">{errors.role.message}</p>}
                </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700 ml-1">Create Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiLock className="text-slate-400" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        className={`w-full pl-11 pr-12 py-3 rounded-2xl border ${errors.password ? "border-rose-300 bg-rose-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm`}
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                {errors.password && <p className="text-[11px] text-rose-500 font-bold ml-1">{errors.password.message}</p>}
            </div>

            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className={`w-full py-4 rounded-2xl font-black text-white shadow-xl shadow-blue-500/20 transition-all ${isSubmitting || !isDirty || !isValid
                        ? "bg-slate-300 cursor-not-allowed"
                        : "bg-linear-to-r from-blue-600 to-indigo-700 hover:shadow-blue-500/40"
                    }`}
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                    </div>
                ) : "Create Account"}
            </motion.button>
        </form>
    );
}

function FiChevronDown({ className }: { className?: string }) {
    return (
        <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}
