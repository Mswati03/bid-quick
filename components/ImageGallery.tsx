"use client"

import { useState } from "react"
import Image from "next/image"
import type { AuctionImage } from "@/types/auction"

export function ImageGallery({ images }: { images: AuctionImage[] }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative h-96 w-full">
        <Image
          src={mainImage.url || "/placeholder.svg"}
          alt={mainImage.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image)}
            className={`relative h-20 w-20 flex-shrink-0 ${image.id === mainImage.id ? "ring-2 ring-blue-500" : ""}`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

