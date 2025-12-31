
import { overviewData } from "@/app/servers/user";
import OverviewCards from "./OverviewCards";
import OverviewCharts from "./OverviewCharts";
import TransactionHistory from "./TransactionHistory";
import { OverviewData } from "./type";

export default async function UserDashboardOverview() {
    const res = await overviewData();
    const data: OverviewData = res?.data;


    if (!data) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-red-600">Failed to load overview data</h2>
                <p className="text-gray-500">Please try again later.</p>
            </div>
        );
    }

    return (
        <section className="p-6 space-y-6">
            <section className="sticky top-0 z-10 bg-white p-4 shadow mb-12 text-center space-y-2">
                <h2 className="text-4xl font-bold    ">Overview</h2>
                <p className="text-sm text-gray-500">These figures reflect the transactions, balances, and spending patterns recorded over the current year - {new Date().getFullYear()}.</p>
            </section>
            <OverviewCards data={data} />
            <OverviewCharts data={data} />
            <TransactionHistory data={data} />
        </section>
    );
}
