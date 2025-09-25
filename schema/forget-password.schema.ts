import z from "zod";

export const ForgetPasswordSchema = z
  .object({
    password: z
      .string({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ForgetPasswordSchemaTypes = z.infer<typeof ForgetPasswordSchema>;
