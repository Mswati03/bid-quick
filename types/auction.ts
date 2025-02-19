
import { auctionSchema } from "@/schemas/auction";
import { auctionImageSchema } from "@/schemas/auctionimage";
import { auctionOwnerSchema } from "@/schemas/auctionowner";
import { userSchema } from "@/schemas/client";
import { reviewSchema } from "@/schemas/review";
import { specificationSchema } from "@/schemas/specification";
import { z } from "zod";


export type Specification = z.infer<typeof specificationSchema>
  
export type AuctionImage = z.infer<typeof auctionImageSchema>
  
export type AuctionOwner= z.infer<typeof auctionOwnerSchema>
  
export type User = z.infer<typeof userSchema>
  
export type Review = z.infer<typeof reviewSchema>
  
export type Auction = z.infer<typeof auctionSchema>

export { reviewSchema };
