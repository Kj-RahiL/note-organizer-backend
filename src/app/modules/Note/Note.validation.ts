import { z } from "zod";

export const NoteSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
    }),
});
