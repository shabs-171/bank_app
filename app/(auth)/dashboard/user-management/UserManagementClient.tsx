"use client";

import { getPendingUsers, getUserList, updateWalletStatus } from "@/app/servers/admin";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
    FiActivity,
    FiCheckCircle,
    FiChevronLeft,
    FiChevronRight,
    FiLoader,
    FiMail,
    FiPhone,
    FiRefreshCcw,
    FiSlash,
    FiUser,
    FiUsers
} from "react-icons/fi";
import { toast } from "sonner";

// --- Types ---
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

// --- Components ---

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

const UserTable = ({
    users,
    title,
    description,
    onStatusChange,
    updatingId
}: {
    users: User[];
    title: string;
    description?: string;
    onStatusChange: (userId: string, status: string) => Promise<void>;
    updatingId?: string | null;
}) => (
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
                                key="empty"
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
                                            <StatusBadge status={user.wallet?.status} />
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${user.role === 'agent' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            {user.wallet?.status === 'pending' && (
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

                                            {user.wallet?.status === 'active' && (
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

                                            {user.wallet?.status === 'blocked' && (
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

// --- Main Client Component ---

export default function UserManagementClient() {
    const [pendingUsers, setPendingUsers] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState<string | null>(null);
    const limit = 10;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [puRes, uRes] = await Promise.all([
                getPendingUsers(),
                getUserList(page, limit)
            ]);

            if (puRes.success) setPendingUsers(puRes.data || []);
            if (uRes.success) setUsers(uRes.data || []);
        } catch (error) {
            console.error("Data fetch error:", error);
            toast.error("Failed to fetch user data");
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleStatusChange = async (userId: string, status: string) => {
        setUpdatingId(userId);
        try {
            const res = await updateWalletStatus(userId, { status });
            if (res.success) {
                toast.success(res.message || `Status updated to ${status}`);
                fetchData();
            } else {
                toast.error(res.message || "Failed to update status");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        } finally {
            setUpdatingId(null);
        }
    };

    if (loading && page === 1 && users.length === 0) {
        return (
            <div className="p-8 max-w-7xl mx-auto space-y-12 bg-gray-50/50 min-h-screen">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-64 rounded-xl" />
                    <Skeleton className="h-4 w-96 rounded-lg" />
                </div>
                <div className="space-y-8">
                    <Skeleton className="h-[400px] w-full rounded-3xl" />
                    <Skeleton className="h-[400px] w-full rounded-3xl" />
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-12 bg-gray-50/30 min-h-screen">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                            <FiUsers className="text-2xl" />
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">User Management</h1>
                    </div>
                    <p className="text-gray-500 font-medium max-w-2xl">
                        Review registration requests and manage digital identities for regular users.
                        Ensure community integrity by monitoring account activities.
                    </p>
                </div>
                <Button
                    variant="outline"
                    onClick={() => fetchData()}
                    className="rounded-xl font-bold gap-2 border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-200 transition-all"
                >
                    <FiRefreshCcw className={loading ? "animate-spin" : ""} />
                    Sync Directory
                </Button>
            </header>

            <div className="space-y-16">
                {/* Pending Tasks */}
                <section>
                    <UserTable
                        users={pendingUsers}
                        title="Awaiting Verification"
                        description="New account applications pending admin approval"
                        onStatusChange={handleStatusChange}
                        updatingId={updatingId}
                    />
                </section>

                {/* Main Directory */}
                <section className="space-y-6">
                    <UserTable
                        users={users}
                        title="Member Directory"
                        description="Complete registry of all registered user accounts"
                        onStatusChange={handleStatusChange}
                        updatingId={updatingId}
                    />

                    {/* Pagination */}
                    <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-gray-900 px-3 py-1 bg-gray-100 rounded-lg">Page {page}</span>
                            <span className="text-gray-400">Total {users.length} members in current view</span>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1 || loading}
                                className="rounded-xl font-bold px-4"
                            >
                                <FiChevronLeft className="mr-2" />
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setPage(p => p + 1)}
                                disabled={users.length < limit || loading}
                                className="rounded-xl font-bold px-6 bg-white border-blue-100 text-blue-600 shadow-sm"
                            >
                                Next
                                <FiChevronRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
