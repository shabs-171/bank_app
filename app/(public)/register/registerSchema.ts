import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    email: z.email("Please enter a valid email"),
    phone: z.string().regex(/^01[3-9]\d{8}$/, "Invalid phone number format (01XXXXXXXXX)"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    role: z.enum(["user", "agent"], { message: "Please select a valid role" }),
    file: z.any().optional(),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
