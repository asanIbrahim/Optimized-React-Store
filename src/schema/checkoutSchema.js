import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(3, "Name required"),
  email: z.string(),
  address: z.string().min(10)
});