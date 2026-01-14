"use client"

import { useState } from "react"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const [dark, setDark] = useState(true)

  return (
    <footer className="bg-[#070b2a] text-white py-20">
          <h3 className="font-semibold text-2xl mb-8 ml-5">Beyond<br />Intelligence</h3>

      <div className="c mx-auto px-6 grid grid-cols-1  md:grid-cols-[2fr_1fr_1fr] gap-16">
        
        {/* LEFT – LINKS */}
        <div>

          <div className="grid grid-cols-3 gap-12 text-sm text-white/70">
            <div>
              <h4 className="font-medium text-white mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {["Home","About Us","Blog","Contact","Press","Keynote","FAQs"].map(i=>(
                  <li key={i} className="hover:text-white cursor-pointer">{i}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1 w-fit">
                <h4 className="font-medium text-white mb-2">Contact Us</h4>
                <p>Phone</p>
                <p className="text-white/50">+1 (234) 567-890</p>
                <p className="mt-2">Email</p>
                <p className="text-white/50">support@beyondhealth.ai</p>
                <p className="mt-2">Social</p>
                <Linkedin size={16} className="mt-1 text-white/70" />
            </div>
            <div>
                <h4 className="font-medium text-white mb-2">Information</h4>
                <p className="text-white/50">Privacy Statement</p>
                <p className="text-white/50">Policy</p>
             
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="md:col-span-2 bg-[#0b0f2a] border border-white/10 rounded-xl p-10">
          <h3 className="text-lg font-semibold mb-2">
            Stay Ahead of the Intelligence Curve
          </h3>
          <p className="text-sm text-white/70 mb-8">
            Receive insights from the frontier of planetary intelligence, causality-first AI, and the architecture of consciousness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {["First Name","Last Name","Email"].map(i=>(
              <input
                key={i}
                placeholder={i}
                className="bg-transparent border-b border-white/20 px-2 py-2 text-sm outline-none focus:border-[#6b6df5]"
              />
            ))}
          </div>

          <button className="w-full bg-[#6b6df5] hover:bg-[#7b7df7] transition rounded-md py-2 text-sm font-medium">
            Sign Me Up
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex items-center justify-between text-xs text-white/50">
        <p>Beyond Intelligence © 2025</p>
        <div className="flex items-center gap-2">
          Dark Mode
          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-5 rounded-full p-[2px] transition ${dark ? "bg-[#6b6df5]" : "bg-white/20"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition ${dark ? "translate-x-5" : ""}`} />
          </button>
        </div>
      </div>
    </footer>
  )
}
