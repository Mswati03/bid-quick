import { z } from "zod";

export const auctionImageSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  alt: z.string(),
})
