"use client"
import { useState } from "react"
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <span className="text-xl font-bold text-white">
          Beyond <br />Intelligence
        </span>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="#">Insight</a>
          <a href="#">Products</a>
          <a href="#">Press</a>
          <a href="#">Keynotes</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

      </div>
    </header>
  )
}


function DropDown(){
    const [isClick , setIsClick] = useState(false)
    const handleClick = ()=>{
        setIsClick((click)=>!click)
    }
    return(
        <li onClick={handleClick}>
            Products {isClick && (
                <div>
                    <ul>
                        <li>product 1 </li>
                        <li>product 2</li>
                        <li>product 3</li>
                    </ul>
                </div>
            )}
        </li>
    )
}