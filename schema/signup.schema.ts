import z from "zod";

export const SignupSchema = z.object({
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
    .min(8, { message: "Atleast 8 characters" })
    .trim(),
});

export type SignupSchemaTypes = z.infer<typeof SignupSchema>;
