import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MarketingLayout({ children }:{children:ReactNode}) {
  // #0B0C26
  return (
    <><div className="bg-[#0B0C26]">
      <header><Navbar /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
      </div>
    </>
  )
}
