import { auctionSchema } from "@/schemas/auction";
import { z } from "zod";

export const auctions = z.array(auctionSchema).parse([
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    title: "Vintage Leather Jacket",
    description: "A classic leather jacket from the 1970s",
    currentBid: 150,
    endTime: new Date("2023-12-31"),
    images: [
      {
        url: "https://placehold.co/400x400.png",
        alt: "Image 1",
        id: "123e4567-e89b-12d3-a456-426614174001",
      },
      {
        url: "https://placehold.co/400x400.png",
        alt: "Image 2",
        id: "123e4567-e89b-12d3-a456-426614174002",
      },
    ],
    category: "Clothing",
    startingBid: 50,
    reviews: [
        {
          id: "123e4567-e89b-12d3-a456-426614174005",
          auctionId: "123e4567-e89b-12d3-a456-426614174000",
          userId: "123e4567-e89b-12d3-a456-426614174006",
          username: "mswatii",
          rating: 5,
          comment: "Good",
          createdAt: new Date(),
        },
      ],
    specifications: [
      {
        key: "color",
        value: "red",
        size: "M",
        id: "123e4567-e89b-12d3-a456-426614174003",
      },
    ],
    owner: {
      name: "Owner 1",
      id: "123e4567-e89b-12d3-a456-426614174004",
      email: "owner1@example.com",
      avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
      rating: 5,
      totalAuctions: 1,
      joinedDate: new Date(),
    },
    
    createdAt: new Date(),
  },
  // ... other auctions ...
]);

export const categories = z.enum([
  "Clothing",
  "Tech",
  "Art",
  "Jewelry",
  "More",
]);
auctions[0].reviews[0].userId;