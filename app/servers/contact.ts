"use server";

import { BASE_URL } from "./data";

export const sendContactMessage = async (data: { fullName: string; email: string; message: string }) => {
    try {
        const response = await fetch(`${BASE_URL}/contact-us`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Contact message error:", error);
        return { success: false, message: "Failed to send message" };
    }
};
