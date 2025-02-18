import { z } from "zod"
import { userSchema } from "./user"
import { reviewSchema } from "@/types/auction"

const auctionImageSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  alt: z.string(),
})

const specificationSchema = z.object({
  key: z.string(),
  value: z.string(),
})

export const auctionSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  currentBid: z.number().nonnegative(),
  startingBid: z.number().nonnegative(),
  endTime: z.date(),
  category: z.string(),
  images: z.array(auctionImageSchema).min(1),
  specifications: z.array(specificationSchema),
  reviews: z.array(reviewSchema),
  owner: userSchema,
  createdAt: z.date(),
})

export type Auction = z.infer<typeof auctionSchema>

