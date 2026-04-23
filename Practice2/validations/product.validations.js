import * as z from 'zod'

export const createProductSchema = z.object({
    name:z.string().min(1,"Name required"),
    price:z.coerce.number().positive("Price should be positive"),
    description:z.string().optional(),
    imageUrl:z.string().url()
})

export const updateProductSchema=z.object({
    name:z.string().optional(),
    price:z.coerce.number().positive().optional(),
    description:z.string().optional(),
    imageUrl:z.string().url().optional(),
})