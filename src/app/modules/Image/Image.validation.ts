import { z } from "zod";

export const ImageSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
    }),
});
