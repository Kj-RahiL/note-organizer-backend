import { z } from "zod";

const CreateUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email({
      message: "Valid email is required.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    }),
  }),
});

const UserLoginValidationSchema = z.object({
  body: z.object({
    email: z.string().email().nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
  }),
});

const userUpdateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    profilePicture: z.string().optional(),
  }),
});

export const UserValidation = {
  CreateUserValidationSchema,
  UserLoginValidationSchema,
  userUpdateSchema,
};
