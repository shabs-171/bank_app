import {
    ArrowPathIcon,
    BanknotesIcon,
    GiftIcon
} from "@heroicons/react/24/outline";

export const overviewCards = [
    {
        title: "Wallet Balance",
        value: "৳ 25,000",
        color: "bg-blue-50 text-blue-700",
        icon: BanknotesIcon,
    },
    {
        title: "Total Transactions",
        value: "320",
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

export const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Spending (৳)",
            data: [5000, 7000, 4000, 6500, 8000, 7200],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            tension: 0.3,
        },
    ],
};

export const pieData = {
    labels: ["Food", "Shopping", "Bills", "Travel", "Others"],
    datasets: [
        {
            data: [3000, 2000, 1500, 1000, 500],
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

export const transactions = [
    { id: 1, date: "2025-12-20", Method: "Cash In", To: "01312345678", amount: 1500, status: "Success" },
    { id: 2, date: "2025-12-20", Method: "Cash Out", To: "01312345678", amount: 1500, status: "Success" },
    { id: 3, date: "2025-12-20", Method: "Send Money", To: "01312345678", amount: 1500, status: "Success" },
];
