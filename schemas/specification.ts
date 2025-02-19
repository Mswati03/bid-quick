import { z } from "zod";

export const specificationSchema = z.object({
  id: z.string().uuid(),
  value: z.string().min(1).max(100),
  color: z.string().min(1).max(50),
  size: z.string().min(1).max(50),
});