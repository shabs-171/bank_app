"use client";

import { getAgentList, getPendingAgents, updateWalletStatus } from "@/app/servers/admin";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCallback, useEffect, useState } from "react";
import {
    FiBriefcase,
    FiChevronLeft,
    FiChevronRight,
    FiRefreshCcw
} from "react-icons/fi";
import { toast } from "sonner";
import UserTable from "./_components/UserTable";
import { User } from "./types";

export default function AgentManagementClient() {
    const [pendingAgents, setPendingAgents] = useState<User[]>([]);
    const [agents, setAgents] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState<string | null>(null);
    const limit = 10;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [paRes, aRes] = await Promise.all([
                getPendingAgents(),
                getAgentList(page, limit)
            ]);

            if (paRes.success) setPendingAgents(paRes.data || []);
            if (aRes.success) setAgents(aRes.data || []);
        } catch (error) {
            console.error("Data fetch error:", error);
            toast.error("Failed to sync agent network");
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
                toast.success(res.message || `Agent status updated: ${status}`);
                fetchData();
            } else {
                toast.error(res.message || "Failed to update agent");
            }
        } catch (error) {
            toast.error("Network communication error");
        } finally {
            setUpdatingId(null);
        }
    };

    if (loading && page === 1 && agents.length === 0) {
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
                        <div className="p-2.5 bg-purple-600 rounded-xl text-white shadow-lg shadow-purple-200">
                            <FiBriefcase className="text-2xl" />
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Agent Network</h1>
                    </div>
                    <p className="text-gray-500 font-medium max-w-2xl">
                        Validate agent identities and manage their service status. Official agents facilitate
                        vital ecosystem liquidity through cash-in operations.
                    </p>
                </div>
                <Button
                    variant="outline"
                    onClick={() => fetchData()}
                    className="rounded-xl font-bold gap-2 border-gray-200 hover:bg-white hover:text-purple-600 hover:border-purple-200 transition-all"
                >
                    <FiRefreshCcw className={loading ? "animate-spin" : ""} />
                    Refresh Network
                </Button>
            </header>

            <div className="space-y-16">
                {/* Pending Tasks */}
                <section>
                    <UserTable
                        users={pendingAgents}
                        title="Agent Applications"
                        description="Prospective service agents awaiting verification"
                        onStatusChange={handleStatusChange}
                        updatingId={updatingId}
                    />
                </section>

                {/* Main Directory */}
                <section className="space-y-6">
                    <UserTable
                        users={agents}
                        title="Authorized Agents"
                        description="Verified list of active and restricted agent accounts"
                        onStatusChange={handleStatusChange}
                        updatingId={updatingId}
                    />

                    {/* Pagination */}
                    <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-gray-900 px-3 py-1 bg-gray-100 rounded-lg">Page {page}</span>
                            <span className="text-gray-400">Viewing {agents.length} agents on this page</span>
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
                                disabled={agents.length < limit || loading}
                                className="rounded-xl font-bold px-6 bg-white border-purple-100 text-purple-600 shadow-sm"
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
