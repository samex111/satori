"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="text-xl font-bold text-white leading-tight">
          Beyond <br /> Intelligence
        </span>

        <nav className="hidden md:flex gap-8 text-sm text-white/80 items-center">
          <Link href="#" className="hover:text-white transition">Insight</Link>

          <ProductsDropdown />

          <Link href="#" className="hover:text-white transition">Press</Link>
          <Link href="#" className="hover:text-white transition">Keynotes</Link>
          <Link href="#" className="hover:text-white transition">About</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}


export function ProductsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 hover:text-white transition outline-none">
          Products
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" sideOffset={8} className="w-44">
        <DropdownMenuItem asChild>
          <Link href="#">Asthma Guardian</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="#">Allergy Shield</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="#">Health Reports</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
