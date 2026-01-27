import { z } from "zod";

export const memberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Minimum 2 characters long")
    .max(32, "Maximum 32 characters long"),

  description: z
    .string()
    .trim()
    .max(140, "Maximum 140 characters long")
    .optional(),
});

export type MemberForm = z.infer<typeof memberSchema>;