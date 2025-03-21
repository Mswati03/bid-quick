import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react" // Added import for React
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BidQuick - Fast and Easy Online Auctions",
  description: "Bid on exciting items quickly and easily!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className }suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
          </Providers>
        </div>
      </body>
    </html>
  )
}

