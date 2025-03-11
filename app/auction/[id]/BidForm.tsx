'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { useSession } from "next-auth/react"
import Link from 'next/link'

export default function BidForm({ auctionId, currentBid }: { auctionId: string, currentBid: number }) {
  const { data: session } = useSession()
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
      <div className="flex items-center gap-1">
        M
        <Input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(Number(e.target.value))}
          min={currentBid + 1}
          step="0.01"
          className="w-32"
          placeholder='Enter your bid'
        />
        {session ? (
          <Button type="submit" className="ml-2">Place Bid</Button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-2">Place Bid</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cannot Place Bid</DialogTitle>
                <DialogDescription>
                  This error occurs because you are currently not signed in.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Link href="/api/auth/login">
            <Button type="button" variant="secondary">
              Login to place bid
            </Button>
            </Link>
          </DialogClose>
        </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
      {message && <p className="mt-2 text-sm text-blue-600">{message}</p>}
    </form>
  )
}

