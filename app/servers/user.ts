"use server";

import { cookies } from "next/headers";
import { BASE_URL } from "./data";

export const createUser = async (formData: FormData) => {
    try {
        const response = await fetch(`${BASE_URL}/user/create`, {
            method: "POST",
            body: formData,
        });
        return await response.json();
    } catch (error) {
        console.error("Create user error:", error);
        return { success: false, message: "User registration failed" };
    }
};

export const getMe = async () => {
    const cookieStore = await cookies();
    try {
        const response = await fetch(`${BASE_URL}/user/me`, {
            method: "GET",
            headers: {
                Cookie: cookieStore.toString(),
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Get profile error:", error);
        return { success: false, message: "Failed to fetch profile" };
    }
};


export const overviewData = async () => {

    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();



    const response = await fetch(`${BASE_URL}/user/overview`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookieString,
        },
        credentials: 'include',
    });


    return response.json();
};








export const updateMe = async (formData: FormData) => {
    const cookieStore = await cookies();
    try {
        const response = await fetch(`${BASE_URL}/user/me`, {
            method: "PATCH",
            headers: {
                Cookie: cookieStore.toString(),
            },
            body: formData,
        });
        return await response.json();
    } catch (error) {
        console.error("Update profile error:", error);
        return { success: false, message: "Profile update failed" };
    }
};

export const changePassword = async (data: any) => {
    const cookieStore = await cookies();
    try {
        const response = await fetch(`${BASE_URL}/user/change-password`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString(),
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Change password error:", error);
        return { success: false, message: "Password change failed" };
    }
};
