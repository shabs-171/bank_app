// Monthly spend item
export interface MonthlySpend {
    name: string;
    total: number;
}

// Category spend object
export interface CategorySpend {
    "cash-out": number;
    "send-money": number;
    "top-up": number;
}

// Transaction object
export interface Transaction {
    _id: string;
    id: string;
    method: string;
    from: string;
    fromUserID: string;
    to: string;
    toUserID: string;
    amount: number;
    date: string;       // ISO date string
    status: string;
    createdAt: string;  // ISO date string
    updatedAt: string;  // ISO date string
    __v: number;
}

// Main overview data
export interface OverviewData {
    balance: number;
    totalTransactions: number;
    monthlySpend: MonthlySpend[];
    categorySpend: CategorySpend;
    last5Transactions: Transaction[];
}

// API response wrapper
export interface OverviewResponse {
    data: OverviewData;
}
