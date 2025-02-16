import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function AuctionCard({ auction }: { auction: any }) {
  return (
    <Link href={`/auction/${auction.id}`} className="block">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image src="https://placehold.co/400x400.png" alt="Auction item" layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{auction.title || "Untitled Auction"}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {auction.description || "No description available."}
          </p>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-blue-600">Current Bid: M{auction.currentBid || 0}</span>
            <span className="text-sm text-gray-500">
              Ends: {auction.endTime ? new Date(auction.endTime).toLocaleDateString() : "N/A"}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-5 h-5 rounded-full bg-gray-300 mr-2"></div>
            <span>Auction Owner</span>
            <div className="flex items-center ml-2">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.5</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

