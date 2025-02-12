import { z } from "zod"

export const reviewSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  username: z.string(),
  auctionId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(500),
  createdAt: z.date(),
})

export type Review = z.infer<typeof reviewSchema>

