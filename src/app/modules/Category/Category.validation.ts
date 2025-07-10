import { z } from "zod";

 const CategorySchema = z.object({
    body: z.object({
        name: z.string(),
        color: z.string(),
    }),
 });

 const updateCategorySchema = z.object({
    body: z.object({
        name: z.string().optional(),
        color: z.string().optional(),
    }),
});

export const CategoryValidation = {
    CategorySchema,
    updateCategorySchema
}