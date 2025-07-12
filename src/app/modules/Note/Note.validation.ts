import { Priority } from "@prisma/client";
import { z } from "zod";

const NoteSchema = z.object({
  body: z.object({
    categoryId: z.string(),
    title: z.string(),
    content: z.string(),
    priority: z.nativeEnum(Priority),
  }),
});

const UpdateNoteSchema = z.object({
  body: z.object({
    categoryId: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    priority: z.nativeEnum(Priority).optional(),
    isPinned: z.boolean().optional(),
    isArchived: z.boolean().optional(),
  }),
});

export const NoteValidation = {
  NoteSchema,
  UpdateNoteSchema,
};
