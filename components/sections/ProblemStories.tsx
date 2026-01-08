"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  { image: "/3ae4d56fde510b61a29ff868059b5caa6818eeaa.jpg", text: "Her breathing changed so suddenly." },
  { image: "/71c9bd0257a930df8e0ba95898a3661545826d8b.jpg", text: "He was fine this morning." },
  { image: "/1fbfc8549ee445b4571273a80f06a5c80038a299.jpg", text: "We didn’t see it coming." },
]

export default function ProblemStories() {
  const [index, setIndex] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const next = () => setIndex((i) => (i + 1) % stories.length)
  const prev = () => setIndex((i) => (i - 1 + stories.length) % stories.length)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  const startAuto = () => {
    stopAuto()
    timer.current = setInterval(next, 2000)
  }

  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current)
  }

  return (
    <section className="bg-[#0b0f2a] max-h-screen py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-12 max-w-xl">
          Asthma feels unpredictable even when you do everything right.
        </h2>

        <div
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="relative grid grid-cols-[70%_30%] gap-6 items-end "
        >

          {/* MAIN IMAGE */}
          <div className="relative h-[22rem] rounded-2xl overflow-hidden">
            <Image
              src={stories[index].image}
              alt="story"
              fill
              priority
              className="object-cover transition-all duration-200 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent duration-500" />
            <p className="absolute bottom-6 left-6 text-sm">
              {stories[index].text}
            </p>
          </div>

          {/* PREVIEW */}
          <div className="relative h-[22rem] rounded-2xl overflow-hidden opacity-80 scale-95">
            <Image
              src={stories[(index + 1) % stories.length].image}
              alt="next"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-xs">
              {stories[(index + 1) % stories.length].text}
            </p>
          </div>

          {/* CONTROLS */}
          <div className="absolute right-0 -bottom-14 flex gap-3">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  

  )
}
