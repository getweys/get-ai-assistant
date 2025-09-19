import z from "zod";

export const SigninSchema = z.object({
  fullName: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z
    .string({
      message: "Email is required",
    })
    .trim()
    .email("Invalid Email"),

  password: z
    .string({
      message: "Password is required",
    })
    .min(1, { message: "Password is required" })
    .trim(),
});

export type SigninSchemaTypes = z.infer<typeof SigninSchema>;
