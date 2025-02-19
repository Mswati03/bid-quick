
import { Review } from "@/types/auction"
import { Star } from "lucide-react"

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex items-center mb-2">
            <span className="font-medium mr-2">{review.username}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
          <p className="text-gray-600">{review.comment}</p>
          <p className="text-sm text-gray-400 mt-1">{review.createdAt.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}

