"use client";
import Link from "next/link";
import {
  DollarSign,
  HelpingHandIcon,
  LayoutDashboardIcon,
  MenuIcon,
  Store,
  Bell,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div>
      <header className="container mx-auto px-4 py-6 bg-white h-[70px] flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-semibold inline-block"
            prefetch={false}
          >
            <span className="flex items-center">
              <Store className="h-6 w-6 mr-2 mb-2" />
              BidQuick
              <span className="sr-only">BidQuick</span>
            </span>
          </Link>
          <div className="hidden gap-6 items-center mx-auto justify-center text-sm font-medium md:flex">
            <Link href="#" className="hover:underline" prefetch={false}>
              Browse Auctions
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Create Listing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Help & Support
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="max-w-sm">
              <SheetTitle>Navigation</SheetTitle>
              <div className="grid gap-6 p-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 font-medium hover:underline"
                  prefetch={false}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  Browse Auctions
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 font-medium hover:underline"
                  prefetch={false}
                >
                  <DollarSign className="h-5 w-5" />
                  Create Listing
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 font-medium hover:underline"
                  prefetch={false}
                >
                  <HelpingHandIcon className="h-5 w-5" />
                  Help & Support
                </Link>
                {session && (
                  <div className="flex flex-col mt-4">
                    <div className="flex items-center gap-2">
                      <User2 className="h-6 w-6" />
                      <span>{session?.user?.name}</span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="w-full mt-2">Account Options</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>My Account</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => signOut()}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Notification icon is visible on all screens */}
          {session && (
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </Link>
          )}

          {/* User icon with username visible on larger screens */}
          {session && (
            <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="hidden md:flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-900">
                <User2 className="h-7 w-7" />
                <span className="text-sm">{session?.user?.name}</span>
              </div>
              
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          )}

          {!session && (
            <Link href="/api/auth/signup" prefetch={false}>
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}