import { ImageGallery } from "@/components/ImageGallery";
import { Specifications } from "@/components/Specifications";
import { AuctionOwnerInfo } from "@/components/AuctionOwner";
import { Reviews } from "@/components/Reviews";
import BidForm from "./BidForm";
import { auctions } from "@/data/auctions"; // We'll update this mock data later

export default async function AuctionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const auction = auctions.find((a) => a.id === id);

  if (!auction) {
    return <div>Auction not found</div>;
  }

  return (
    <div  className="max-w-6xl mx-auto mt-20 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ImageGallery images={auction.images} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{auction.title}</h1>
          <p className="text-gray-600 mb-6">{auction.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-2xl font-bold text-blue-600 mb-2">
              Current Bid: M{auction.currentBid}
            </p>
            <p className="text-gray-600">
              Starting Bid: M{auction.startingBid}
            </p>
            <p className="text-gray-600">
              Auction ends: {auction.endTime.toLocaleString()}
            </p>
          </div>
          <BidForm auctionId={auction.id} currentBid={auction.currentBid} />
          <Specifications specs={auction.specifications} />
        </div>
      </div>
      <div className="mt-12">
      <AuctionOwnerInfo owner={{ ...auction.owner, avatar: auction.owner.avatar || '' }} />
        <Reviews reviews={auction.reviews} />
      </div>
    </div>
  );
}
