import { Store } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          
           
            <Link
            href="/"
            className="text-lg font-semibold inline-block  "
            prefetch={false}
          >
            <span className="flex items-center">
              <Store className="h-6 w-6 mr-2 mb-2" />
              BidQuick
              <span className="sr-only">BidQuick</span>
            </span>
          </Link>
            <p className="text-gray-600 mt-3">BidQuick is your premier destination for fast and exciting online auctions.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/auctions" className="text-gray-600 hover:text-blue-600">
                  Auctions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-blue-600">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-blue-600">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-2">Stay updated with our latest auctions and offers.</p>
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded mb-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Subscribe</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 BidQuick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

