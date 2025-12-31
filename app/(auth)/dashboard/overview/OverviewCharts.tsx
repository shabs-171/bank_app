"use client";

import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { OverviewData } from "./type";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

interface OverviewChartsProps {
    data: OverviewData | null;
}

export default function OverviewCharts({ data }: OverviewChartsProps) {
    const { monthlySpend, categorySpend } = data || {};
    const lineChartData = {
        labels: monthlySpend?.map((item) => item.name) || [],
        datasets: [
            {
                label: "Spending (৳)",
                data: monthlySpend?.map((item) => item.total) || [],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.3,
            },
        ],
    };

    const pieChartLabels = categorySpend ? Object.keys(categorySpend).map(key =>
        key.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    ) : [];

    const pieChartData = {
        labels: pieChartLabels,
        datasets: [
            {
                data: categorySpend ? Object.values(categorySpend) : [],
                backgroundColor: [
                    "rgba(255,99,132,0.6)",
                    "rgba(54,162,235,0.6)",
                    "rgba(255,206,86,0.6)",
                    "rgba(75,192,192,0.6)",
                    "rgba(153,102,255,0.6)",
                ],
                borderColor: "#fff",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-center mx-auto gap-6 ">
            <div className="bg-white p-4 rounded shadow flex-1">
                <h2 className="text-lg font-semibold mb-4">Monthly Spending Trend</h2>
                <Line data={lineChartData} />
            </div>
            <div className="bg-white p-4 rounded shadow flex-1">
                <h2 className="text-lg font-semibold mb-4">Expense Distribution</h2>
                <div className="flex justify-center h-[300px]">
                    <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
}
