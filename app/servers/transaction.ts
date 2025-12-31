import { BASE_URL } from "./data";

export const getAllTransactions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/transaction/all-transactions`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get all transactions error:", error);
        return { success: false, message: "Failed to fetch transactions" };
    }
};

export const getMyTransactions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/transaction/my-transactions`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get my transactions error:", error);
        return { success: false, message: "Failed to fetch your transactions" };
    }
};

export const getUserTransactionsByAdmin = async (userId: string) => {
    try {
        const response = await fetch(`${BASE_URL}/transaction/${userId}`, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        console.error("Get user transactions by admin error:", error);
        return { success: false, message: "Failed to fetch transactions for user" };
    }
};
