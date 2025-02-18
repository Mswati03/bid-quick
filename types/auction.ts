
import { z } from "zod";

export const auctionImageSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  alt: z.string().min(1).max(100),
});
  
export const specificationSchema = z.object({
  id: z.string().uuid(),
  value: z.string().min(1).max(100),
  color: z.string().min(1).max(50),
  size: z.string().min(1).max(50),
});
export type Specification = z.infer<typeof specificationSchema>
  
export const reviewSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  username: z.string().min(1).max(50),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1).max(1000),
  createdAt: z.date(),
});
  
export const auctionOwnerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  avatar: z.string().url(),
  rating: z.number().min(1).max(5),
  totalAuctions: z.number().nonnegative(),
  joinedDate: z.date(),
});
  
export const auctionSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  currentBid: z.number().nonnegative(),
  startingBid: z.number().nonnegative(),
  endTime: z.date(),
  category: z.string().min(1).max(50),
  images: z.array(auctionImageSchema).min(1),
  specifications: z.array(specificationSchema),
  owner: auctionOwnerSchema,
  reviews: z.array(reviewSchema),
  createdAt: z.date(),
});
  
  
  