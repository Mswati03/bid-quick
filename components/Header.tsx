"use client";
import Link from "next/link";
import {
  BarChartIcon,
  DollarSign,
  HelpingHandIcon,
  LayoutDashboardIcon,
  MenuIcon,
  MountainIcon,
  Store,
  User2,
  UsersIcon,
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
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Header() {
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
            <SheetContent side="right">
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
                  Create  Listing
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 font-medium hover:underline"
                  prefetch={false}
                >
                  <HelpingHandIcon className="h-5 w-5" />
                  Help & Support
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          {/*<DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
               <User2 className="h-7 w-7 mt-1" />
               
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>*/}
          <Button>Get Started</Button>
        </div>
      </header>
    </div>
  );
}
