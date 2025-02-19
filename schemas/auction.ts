import { z } from "zod"
import { userSchema } from "./client"
import { reviewSchema, Specification } from "@/types/auction"
import { auctionImageSchema } from "./auctionimage"
import { specificationSchema } from "./specification"




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

