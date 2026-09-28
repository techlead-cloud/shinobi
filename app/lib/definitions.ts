import { z } from "zod";

export const SignupFormSchema = z.object({
  displayName: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address.").trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter.")
    .regex(/[0-9]/, "Password must contain at least one number."),
});

export const LoginFormSchema = z.object({
  email: z.email("Please enter a valid email address.").trim(),
  password: z.string().min(1, "Password is required."),
});

export const CommentFormSchema = z.object({
  body: z
    .string()
    .trim()
    .min(1, "Comment can't be empty.")
    .max(2000, "Comment must be 2000 characters or fewer."),
});

export type FormState =
  | {
      errors?: Record<string, string[]>;
      message?: string;
    }
  | undefined;
