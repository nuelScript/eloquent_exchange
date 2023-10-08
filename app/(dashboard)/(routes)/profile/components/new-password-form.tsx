import * as z from "zod";

export const formSchema = z
  .object({
    new_password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    re_new_password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    current_password: z
      .string()
      .min(8, {
        message: "Current password must be at least 8 characters long",
      }),
  })
  .refine((data) => data.new_password === data.re_new_password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
