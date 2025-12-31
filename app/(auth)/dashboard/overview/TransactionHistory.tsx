"use client";

import { OverviewData } from "./type";



export default function TransactionHistory({ data }: { data: OverviewData }) {
    const transactions = data?.last5Transactions || [];

    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Transaction History</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-2">Date</th>
                            <th className="text-left py-2">Method</th>
                            <th className="text-left py-2">Details</th>
                            <th className="text-left py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="border-b hover:bg-gray-50">
                                <td className="py-2">
                                    {new Date(tx.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </td>
                                <td className="py-2 capitalize">{tx.method.replace("-", " ")}</td>
                                <td className="py-2">
                                    <div className="flex flex-col">
                                        <span className="">To: {tx.to}</span>

                                    </div>
                                </td>
                                <td className="py-2 font-semibold">৳ {tx.amount.toLocaleString()}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {transactions.length === 0 && (
                <div className="text-center py-4 text-gray-500">No recent transactions found</div>
            )}
        </div>
    );
}









