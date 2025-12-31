"use server";

import { cookies } from "next/headers";
import { BASE_URL } from "./data";

export const sendMoney = async (data: { amount: string | number; to: string }) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();

    try {
        const response = await fetch(`${BASE_URL}/wallet/send-money`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify({
                ...data,
                amount: data.amount.toString(),
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Send money error:", error);
        return { success: false, message: "Transaction failed" };
    }
};

export const cashOut = async (data: { amount: string | number; to: string }) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/wallet/cash-out`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify({
                ...data,
                amount: data.amount.toString(),
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Cash out error:", error);
        return { success: false, message: "Cash out failed" };
    }
};

export const cashIn = async (data: { amount: string | number; to: string }) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/wallet/cash-in`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify({
                ...data,
                amount: data.amount.toString(),
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Cash in error:", error);
        return { success: false, message: "Cash in failed" };
    }
};

export const topUp = async (data: { amount: string | number; to: string }) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/wallet/top-up`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify({
                ...data,
                amount: data.amount.toString(),
            }),
        });
        return await response.json();
    } catch (error) {
        console.error("Top up error:", error);
        return { success: false, message: "Top up failed" };
    }
};
