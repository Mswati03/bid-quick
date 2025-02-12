import Link from "next/link"
import { BellRingIcon, ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BidQuick
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
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
            <li>
              <Link href="/cart" className="text-gray-600 hover:text-blue-600">
                <BellRingIcon className="w-6 h-6"/>
              </Link>
            </li>
            <li>
              <Link href="/account" className="text-gray-600 hover:text-blue-600">
                <User className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

