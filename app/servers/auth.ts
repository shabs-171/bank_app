"use server";

import { cookies } from "next/headers";
import { BASE_URL } from "./data";

export const login = async (credentials: any) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const result = await response.json();

        if (result.success) {
            const cookieStore = await cookies();
            const token = result?.data?.accessToken || result?.token || result?.accessToken;

            if (token) {
                cookieStore.set("accessToken", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                });
            }

            const refreshToken = result?.data?.refreshToken || result?.refreshToken;
            if (refreshToken) {
                cookieStore.set("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                });
            }
        }

        return result;
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: "Login failed" };
    }
};

export const logout = async () => {
    const cookieStore = await cookies();
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString(),
            },
        });

        cookieStore.delete("accessToken");
        cookieStore.delete("refreshToken");

        return await response.json();
    } catch (error) {
        console.error("Logout error:", error);
        return { success: false, message: "Logout failed" };
    }
};

export const localLogout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    return { success: true };
};

export const refreshToken = async () => {
    const cookieStore = await cookies();
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString(),
            },
        });
        const result = await response.json();

        if (result.success && (result.data?.accessToken || result.accessToken)) {
            const newToken = result.data?.accessToken || result.accessToken;
            cookieStore.set("accessToken", newToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
            });
        }

        return result;
    } catch (error) {
        console.error("Refresh token error:", error);
        return { success: false, message: "Refresh token failed" };
    }
};