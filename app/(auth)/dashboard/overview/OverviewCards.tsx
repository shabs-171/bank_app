"use client";

import {
    ArrowPathIcon,
    BanknotesIcon,
    GiftIcon
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { OverviewData } from "./type";



export default function OverviewCards({ data }: { data: OverviewData }) {
    const { balance, totalTransactions } = data || {};
    const cards = [
        {
            title: "Wallet Balance",
            value: `৳ ${balance?.toLocaleString() || 0}`,
            color: "bg-blue-50 text-blue-700",
            icon: BanknotesIcon,
        },
        {
            title: "Total Transactions",
            value: totalTransactions?.toString() || 0,
            color: "bg-green-50 text-green-700",
            icon: ArrowPathIcon,
        },
        {
            title: "Cashback Earned (coming soon)",
            value: "৳ 0",
            color: "bg-yellow-50 text-yellow-700",
            icon: GiftIcon,
        },
    ];

    return (
        <div className="flex justify-between gap-4">
            {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                    <motion.div
                        key={i}
                        className={`p-4 rounded shadow w-full flex items-center gap-3 ${card.color.split(" ")[0]}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Animated Icon */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon className={`w-7 h-7 ${card.color.split(" ")[1]}`} />
                        </motion.div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <h3 className="text-sm text-gray-600">{card.title}</h3>
                            <p className={`text-xl font-bold ${card.color.split(" ")[1]}`}>
                                {card.value}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
