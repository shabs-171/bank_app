"use server";

import { cookies } from "next/headers";
import { BASE_URL } from "./data";





export const updateWalletStatus = async (userId: string, data: { status: string }) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/update-wallet-status/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Update wallet status error:", error);
        return { success: false, message: "Update failed" };
    }
};

export const updateUserProfileByAdmin = async (userId: string, data: any) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/update-user-profile/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Update user profile by admin error:", error);
        return { success: false, message: "Update failed" };
    }
};

export const deleteUser = async (userId: string) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/delete-user/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Delete user error:", error);
        return { success: false, message: "Deletion failed" };
    }
};

export const getUserList = async (page = 1, limit = 10) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/user-list?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Get user list error:", error);
        return { success: false, message: "Failed to fetch users" };
    }
};

export const getAgentList = async (page = 1, limit = 10) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/agent-list?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Get agent list error:", error);
        return { success: false, message: "Failed to fetch agents" };
    }
};

export const getPendingUsers = async () => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/pending-users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Get pending users error:", error);
        return { success: false, message: "Failed to fetch pending users" };
    }
};


export const getPendingAgents = async () => {
    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    try {
        const response = await fetch(`${BASE_URL}/admin/pending-agents`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieString,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Get pending agents error:", error);
        return { success: false, message: "Failed to fetch pending agents" };
    }
};
