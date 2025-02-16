'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BidForm({ auctionId, currentBid }: { auctionId: string, currentBid: number }) {
  const [bidAmount, setBidAmount] = useState(currentBid + 1)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (bidAmount <= currentBid) {
      setMessage('Your bid must be higher than the current bid.')
      return
    }
    // Here you would typically send the bid to your backend
    setMessage(`Bid of $${bidAmount} placed successfully!`)
    // Reset bid amount
    setBidAmount(currentBid + 1)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(Number(e.target.value))}
          min={currentBid + 1}
          step="0.01"
          className="w-32"
          placeholder='Enter your bid'
        />
        <Button type="submit">Place Bid</Button>
      </div>
      {message && <p className="mt-2 text-sm text-blue-600">{message}</p>}
    </form>
  )
}

