import { z } from "zod";

export const Schema = z.object({
    to: z
        .string()
        .min(1, "Mobile number is required")
        .regex(/^01[3-9]\d{8}$/, "Please enter a valid Bangladeshi mobile number (e.g., 017XXXXXXXX)"),
    amount: z
        .number("Amount must be a number")
        .int("Amount must be a whole number")
        .min(10, "Minimum amount is tk10")
        .max(50000, "Maximum amount is tk50,000"),
});

export type SchemaFormValues = z.infer<typeof Schema>;
