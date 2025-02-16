import { Key } from "react";

export interface AuctionImage {
   id:string
    url: string
    alt: string
  }
  
  export interface Specification {
  
  id:string;
    value:string;
    color: string; size: string
  }
  
  export interface Review {
    id: string
    userId: string
    username: string
    rating: number
    comment: string
    createdAt: Date
  }
  
  export interface AuctionOwner {
    id: string
    name: string
    avatar: string
    rating: number
    totalAuctions: number
    joinedDate: Date
  }
  
  export interface Auction {
    id: string
    title: string
    description: string
    currentBid: number
    startingBid: number
    endTime: Date
    category: string
    images: AuctionImage[]
    specifications: Specification[]
    owner: AuctionOwner
    reviews: Review[]
  }
  
  