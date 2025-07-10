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
    categoryId: z.string(),
    title: z.string(),
    content: z.string(),
    priority: z.nativeEnum(Priority),
    isPinned: z.string(),
    isArchived: z.string(),
  }),
});

export const NoteValidation = {
  NoteSchema,
  UpdateNoteSchema,
};
