import { z } from "zod";

export const CategorySchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
    }),
});
