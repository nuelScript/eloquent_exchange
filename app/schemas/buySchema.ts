import * as z from "zod";

export const formSchema = z.object({
  network: z.string().min(1, { message: "Select a network" }),
  wallet_address: z
    .string()
    .min(24, { message: "Enter a valid wallet address" })
    .max(62, { message: "Enter a valid wallet address" }),
  coin_type: z.string().min(1, {
    message: "Coin type is required",
  }),
  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});
