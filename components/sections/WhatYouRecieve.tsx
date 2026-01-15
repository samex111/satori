"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Assuming PhoneMockup is imported correctly
import { PhoneMockup } from "./ProtactiveSystem"

const items = [
  { image: "/message-1.png", heading: "Daily Predictive Forecasts", text: "Each morning, Satori gives you a clear picture of how your child’s day is shaping up — so you can plan with confidence instead of guessing." },
  { image: "/message-2.png", heading: "Early Risk Alerts", text: "Satori warns you before symptoms begin by identifying the specific time windows when environmental changes are most likely to affect your child." },
  { image: "/message-3.png", heading: "Clear Answers About What’s Happening", text: "When you have questions, Satori looks at the current air and conditions through your child’s profile and helps explain what’s happening." },
]

// Loopable slides
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
    if (!transition) {
      // Small delay to allow state to settle before turning transition back on
      const raf = requestAnimationFrame(() => {
        setTransition(true)
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [transition])

  const startAuto = () => {
    stopAuto()
    timer.current = setInterval(next, 5000) // Increased to 5s for better readability
  }

  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current)
  }

  return (
    <section className="bg-[#6366F1] mx-2 rounded-md py-16 md:py-24 text-white overflow-hidden">
      <div className="max-w-7xl md:max-w-9xl w-full mx-auto px-6">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          What You Receive
        </h2>

        <div 
          onMouseEnter={stopAuto} 
          onMouseLeave={startAuto} 
          className="relative"
        >
          {/* Wrapper for the Carousel */}
          <div className="overflow-visible"> 
            <div
              className={`flex gap-4 md:gap-8 ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{ 
                // This formula keeps the active slide centered regardless of width
                transform: `translateX(calc(-${index * 85}% - ${index * 16}px + 7.5%))` ,
                // Breakpoint adjustment for Desktop
                inlineSize: '100%',
              }}
              // Applying a responsive CSS variable for the transform calculation
              data-desktop-style={index}
            >
              {slides.map((item, i) => (
                <div 
                  key={i} 
                  className="w-[85%] md:w-[45%] scroll-smooth shrink-0 transition-opacity duration-500"
                  style={{ opacity: index === i ? 1 : 1 }} // Dim inactive slides
                >
                  <div className="bg-white rounded-2xl h-[350px] md:h-[500px] relative mb-6 overflow-hidden shadow-xl flex items-end justify-center">

                 <div className="relative w-full flex justify-center items-end translate-y-12 md:translate-y-16">
                    <PhoneMockup screen={item.image} className="drop-shadow-2xl absolute top-10" />
                  </div>
                  </div>

                  <div className="px-2">
                    <h3 className="font-bold text-xl md:text-2xl mb-3">{item.heading}</h3>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center md:justify-end mt-12 gap-4">
            <button 
                onClick={prev} 
                className="p-3 rounded-full border border-white/40 hover:bg-white hover:text-[#6366F1] transition-colors"
                aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
                onClick={next} 
                className="p-3 rounded-full border border-white/40 hover:bg-white hover:text-[#6366F1] transition-colors"
                aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Responsive math for the transform */
        @media (min-width: 768px) {
          div[data-desktop-style] {
            transform: translateX(calc(-${index * 45}% - ${index * 32}px + 27.5%)) !important;
          }
        }
      `}</style>
    </section>
  )
}