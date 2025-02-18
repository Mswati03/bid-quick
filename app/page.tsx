'use client'
import { useState } from 'react'
import { auctions, categories } from '@/data/auctions'
import { AuctionCard } from '@/components/AuctionCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredAuctions = activeCategory === 'All' 
    ? auctions 
    : auctions.filter(auction => auction.category === activeCategory)
    const categoryArray = categories._def.values;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-[50px]">Active Auctions</h2>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="All" onClick={() => setActiveCategory('All')}>All</TabsTrigger>
          {categoryArray.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="All" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        </TabsContent>
        {categoryArray.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAuctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

