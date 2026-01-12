"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PhoneMockup } from "./ProtactiveSystem"

const items = [
  { image: "/message-1.png", heading: "Daily Predictive Forecasts", text: "Each morning, Satori gives you a clear picture of how your child’s day is shaping up — so you can plan with confidence instead of guessing." },
  { image: "/message-2.png", heading: "Early Risk Alerts", text: "Satori warns you before symptoms begin by identifying the specific time windows when environmental changes are most likely to affect your child." },
  { image: "/message-3.png", heading: "Clear Answers About What’s Happening", text: "When you have questions, Satori looks at the current air and conditions through your child’s profile and helps explain what’s happening." },
]

const slides = [items[items.length - 1], ...items, items[0]]

export default function WhatYouReceive() {
  const [index, setIndex] = useState(1)
  const [transition, setTransition] = useState(true)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const next = () => setIndex(i => i + 1)
  const prev = () => setIndex(i => i - 1)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false)
        setIndex(1)
      }, 700)
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false)
        setIndex(slides.length - 2)
      }, 700)
    }
  }, [index])

  useEffect(() => {
    if (!transition) requestAnimationFrame(() => setTransition(true))
  }, [transition])

  const startAuto = () => {
    stopAuto()
    timer.current = setInterval(next, 3500)
  }

  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current)
  }

  return (
    <section className="bg-[#0b0f2a] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What You Receive
        </h2>

        <div onMouseEnter={stopAuto} onMouseLeave={startAuto} className="relative">

          <div className="overflow-hidden">
            <div
              className={`flex gap-8 ${transition ? "transition-transform duration-700 ease-out" : ""}`}
              style={{ transform: `translateX(-${index * 55}%)` }}
            >
              {slides.map((item, i) => (
                <div key={i} className="w-[55%] shrink-0">
                  
                  <div className="bg-white rounded-xl h-[420px] flex items-center justify-center  mb-8">
                    <PhoneMockup screen={item.image} />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{item.heading}</h3>
                  <p className="text-sm text-white/80 max-w-md">
                    {item.text}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="absolute right-0 -bottom-14 flex gap-3">
            <button onClick={prev} className="p-2 rounded-full border border-white/40 hover:bg-white/10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-white/40 hover:bg-white/10">
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
