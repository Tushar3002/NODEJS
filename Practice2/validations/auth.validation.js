import * as z from "zod";

export const registerValidation = z.object({
  name: z.string().min(2, "small Name").max(30, "Too big Name"),
  email: z.string().email("Invalid email").toLowerCase(),
  password: z.string().min(3).max(10),
  phone: z
    .string()
    .trim()
    // .length(10, "Phone must be exactly 10 digits")
    .regex(/^[0-9]{10}$/, "Phone no with 10  allowed"),
  address: z.string(),
});

export const loginValidation = z.object({
  email: z.string().email("Invalid email").toLowerCase(),
  password: z.string().min(1, "Enter your password"),
});
