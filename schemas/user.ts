import { z } from "zod"

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  avatar: z.string().url().optional(),
  rating: z.number().min(0).max(5).default(0),
  totalAuctions: z.number().nonnegative().default(0),
  joinedDate: z.date(),
})

export type User = z.infer<typeof userSchema>

