"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiActivity,
    FiCheckCircle,
    FiLoader,
    FiMail,
    FiMoreVertical,
    FiPhone,
    FiSlash,
    FiUser
} from "react-icons/fi";

interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    wallet: {
        status: "pending" | "active" | "blocked";
    };
}

interface UserTableProps {
    users: User[];
    title: string;
    description?: string;
    onStatusChange: (userId: string, status: string) => Promise<void>;
    updatingId?: string | null;
}

const StatusBadge = ({ status }: { status: "pending" | "active" | "blocked" }) => {
    const config = {
        active: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100", dot: "bg-emerald-500" },
        pending: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100", dot: "bg-amber-500" },
        blocked: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100", dot: "bg-rose-500" },
    };

    const { bg, text, border, dot } = config[status] || config.pending;

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${bg} ${text} ${border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
};

export default function UserTable({ users, title, description, onStatusChange, updatingId }: UserTableProps) {
    return (
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 border-b border-gray-100 bg-linear-to-r from-white to-gray-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
                        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border border-blue-100">
                        <FiActivity className="text-blue-500" />
                        {users.length} Records
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold">
                        <tr>
                            <th className="px-8 py-4">Account Holder</th>
                            <th className="px-8 py-4">Contact & Identity</th>
                            <th className="px-8 py-4">Status & Role</th>
                            <th className="px-8 py-4 text-right">Care Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <AnimatePresence mode="popLayout">
                            {users.length === 0 ? (
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <td colSpan={4} className="px-8 py-16 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                                <FiUser className="text-3xl" />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-semibold">No entries matches your criteria</p>
                                                <p className="text-sm text-gray-500 mt-1">This list is currently empty of records.</p>
                                            </div>
                                        </div>
                                    </td>
                                </motion.tr>
                            ) : (
                                users.map((user, idx) => (
                                    <motion.tr
                                        key={user._id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group hover:bg-blue-50/30 transition-all duration-300"
                                    >
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm transform group-hover:scale-110 transition-transform">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{user.name}</span>
                                                    <span className="text-[10px] text-gray-400 font-mono mt-0.5">{user._id.slice(-8)}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FiMail className="text-gray-400 shrink-0" />
                                                    <span className="truncate max-w-[180px]">{user.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FiPhone className="text-gray-400 shrink-0" />
                                                    <span>{user.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col items-start gap-2">
                                                <StatusBadge status={user.wallet.status} />
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${user.role === 'agent' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                {user.wallet.status === 'pending' && (
                                                    <>
                                                        <Button
                                                            size="sm"
                                                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-4 h-9 shadow-sm"
                                                            disabled={updatingId === user._id}
                                                            onClick={() => onStatusChange(user._id, 'active')}
                                                        >
                                                            {updatingId === user._id ? <FiLoader className="animate-spin" /> : <FiCheckCircle className="mr-2" />}
                                                            Approve
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-lg px-4 h-9"
                                                            disabled={updatingId === user._id}
                                                            onClick={() => onStatusChange(user._id, 'blocked')}
                                                        >
                                                            {updatingId === user._id ? <FiLoader className="animate-spin" /> : <FiSlash className="mr-2" />}
                                                            Block
                                                        </Button>
                                                    </>
                                                )}

                                                {user.wallet.status === 'active' && (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-lg px-4 h-9"
                                                        disabled={updatingId === user._id}
                                                        onClick={() => onStatusChange(user._id, 'blocked')}
                                                    >
                                                        {updatingId === user._id ? <FiLoader className="animate-spin" /> : <FiSlash className="mr-2" />}
                                                        Block Account
                                                    </Button>
                                                )}

                                                {user.wallet.status === 'blocked' && (
                                                    <Button
                                                        size="sm"
                                                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 h-9 shadow-sm"
                                                        disabled={updatingId === user._id}
                                                        onClick={() => onStatusChange(user._id, 'active')}
                                                    >
                                                        {updatingId === user._id ? <FiLoader className="animate-spin" /> : <FiActivity className="mr-2" />}
                                                        Restore Access
                                                    </Button>
                                                )}

                                                <Button size="icon" variant="ghost" className="h-9 w-9 text-gray-400 hover:text-gray-900">
                                                    <FiMoreVertical />
                                                </Button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
