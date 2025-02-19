import {z} from "zod";
export const auctionOwnerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  avatar: z.string().url(),
  rating: z.number().min(1).max(5),
  totalAuctions: z.number().nonnegative(),
  joinedDate: z.date(),
});