import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewLoading() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-center mb-12">
                <Skeleton className="h-20 w-1/2 p-4 rounded shadow" />
            </div>

            {/* OverviewCards Skeleton */}
            <div className="flex justify-between gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded shadow w-full flex items-center gap-3 bg-gray-50">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col gap-2 flex-1">
                            <Skeleton className="h-3 w-1/2" />
                            <Skeleton className="h-5 w-1/3" />
                        </div>
                    </div>
                ))}
            </div>

            {/* OverviewCharts Skeleton */}
            <div className="w-full flex flex-col md:flex-row justify-center mx-auto gap-6">
                <div className="bg-white p-4 rounded shadow flex-1">
                    <Skeleton className="h-6 w-1/3 mb-4" />
                    <Skeleton className="h-[250px] w-full" />
                </div>
                <div className="bg-white p-4 rounded shadow flex-1">
                    <Skeleton className="h-6 w-1/3 mb-4" />
                    <div className="flex justify-center items-center h-[300px]">
                        <Skeleton className="h-[200px] w-[200px] rounded-full" />
                    </div>
                </div>
            </div>

            {/* TransactionHistory Skeleton */}
            <div className="bg-white rounded shadow p-4">
                <Skeleton className="h-6 w-1/4 mb-4" />
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b last:border-0">
                            <Skeleton className="h-4 w-1/5" />
                            <Skeleton className="h-4 w-1/5" />
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-4 w-1/6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
