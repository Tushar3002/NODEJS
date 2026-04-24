import * as z from 'zod';

export const registerValidation=z.object({
    name:z.string().min(2,"small Name").max(30,"Too big Name"),
    email:z.string().email("Invalid email").toLowerCase(),
    password:z.string().min(3).max(10)
})

export const loginValidation=z.object({
    email:z.string().email("Invalid email").toLowerCase(),
    password:z.string().min(1,"Eneter your password")
})