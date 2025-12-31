"use client";

import { topUp } from "@/app/servers/wallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { toast } from "sonner";
import { Schema, SchemaFormValues } from "./Schema";

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<SchemaFormValues>({
        resolver: zodResolver(Schema),
        mode: "onChange",
        defaultValues: {
            to: "",
            amount: undefined,
        },
    });

    const onSubmit = async (data: SchemaFormValues) => {
        setIsSubmitting(true);
        try {
            const result = await topUp(data);
            if (result.success) {
                toast.success(result.message || "Top up successful!");
                reset();
            } else {
                toast.error(result.message || "Top up failed. Please try again.");
            }
        } catch (error) {
            console.error("Top up submission error:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient Mobile Number
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-gray-400 text-lg" />
                    </div>
                    <input
                        id="to"
                        type="tel"
                        inputMode="numeric"
                        {...register("to")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.to ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                        placeholder="017XXXXXXXX"
                        maxLength={11}
                    />
                </div>
                {errors.to && <p className="mt-1 text-sm text-red-600">{errors.to.message}</p>}
            </div>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (BDT)
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBangladeshiTakaSign className="text-gray-400 text-lg" />
                    </div>
                    <input
                        id="amount"
                        type="number"
                        inputMode="numeric"
                        min="10"
                        max="50000"
                        step="1"
                        {...register("amount", { valueAsNumber: true })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.amount ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                        placeholder="100"
                    />
                </div>
                {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>}
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || !isDirty || !isValid}
                className={`w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg transition ${isSubmitting || !isDirty || !isValid
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    }`}
            >
                {isSubmitting ? "Processing..." : "Top Up Now"}
            </motion.button>
        </form>
    );
}
