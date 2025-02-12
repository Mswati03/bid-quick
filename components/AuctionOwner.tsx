import Image from "next/image"

import { Star } from "lucide-react"
import { AuctionOwner } from "@/types/auction"

export function AuctionOwnerInfo({ owner }: { owner: AuctionOwner }) {
  return (
    <div className="flex items-center space-x-4 mt-6">
      <Image
        src={owner.avatar || "/placeholder.svg"}
        alt={owner.name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold text-lg">{owner.name}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span>
            {owner.rating.toFixed(1)} ({owner.totalAuctions} auctions)
          </span>
        </div>
        <p className="text-sm text-gray-500">Member since {owner.joinedDate.toLocaleDateString()}</p>
      </div>
    </div>
  )
}

