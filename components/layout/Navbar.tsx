"use client"

import Link from "next/link"
import { ChevronDown,  X ,TextAlignEnd } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <span className="text-xl font-bold text-white leading-tight">
          Beyond <br /> Intelligence
        </span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm text-white/80 items-center">
          <Link href="#" className="hover:text-white transition">Insight</Link>
          <ProductsDropdown />
          <Link href="#" className="hover:text-white transition">Press</Link>
          <Link href="#" className="hover:text-white transition">Keynotes</Link>
          <Link href="#" className="hover:text-white transition">About</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <TextAlignEnd  />}
        </button>
      </div>

      {/* MOBILE MENU */}
     <div
  className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0b0f2a]
  ${open ? "max-h-screen py-8" : "max-h-0 py-0"}`}
>
  <nav className="flex flex-col px-8 text-white">
    {/* NAVIGATION LINKS */}
    <div className="flex flex-col space-y-4 text-lg font-medium">
      <div className="border-b border-white/10 pb-4">
        <Link href="#" className="block">Insight</Link>
      </div>
      <div className="border-b border-white/10 pb-4">
  <button
    onClick={() => setProductOpen(!productOpen)}
    className="flex w-full items-center justify-between text-lg"
  >
    Products
    <ChevronDown
      className={`h-5 w-5 transition-transform ${productOpen ? "rotate-180" : ""}`}
    />
  </button>

  <div
    className={`grid transition-all duration-300 overflow-hidden
    ${productOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
  >
    <div className="overflow-hidden flex flex-col gap-3 pl-4 text-base text-white/80">
      <Link href="#">Asthma Guardian</Link>
      <Link href="#">Allergy Shield</Link>
      <Link href="#">Health Reports</Link>
    </div>
  </div>
</div>

      
      <div className="border-b border-white/10 pb-4">
        <Link href="#" className="block">Press</Link>
      </div>

      <div className="border-b border-white/10 pb-4">
        <Link href="#" className="block">Keynote</Link>
      </div>
     
      <div className="border-b border-white/10 pb-4">
        <Link href="#" className="block">About</Link>
      </div>

      <div className="border-b border-white/10 pb-4">
        <Link href="#" className="block">Contact</Link>
      </div>
    </div>

  </nav>
</div>
    </header>
  )
}

function ProductsDropdown() {
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