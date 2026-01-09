"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight ,Plus } from "lucide-react"

const stories = [
  { image: "/trees.jpg", text: "When pollution rises before you can see " },
  { image: "/tired.png", text: "When afternoon turns harsh on young lungs." },
  { image: "/steet.png", text: "When invisible exhaust builds as the begins." },
  { image: "/night.png", text: "When the night traps what the day leaves behind" },
  { image: "/wind.jpg", text: "When the wheather shifts faster than young lungs can adapt" },
]

const slides = [
  stories[stories.length - 1],
  ...stories,
  stories[0],
]

export default function Enviroment() {
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
      requestAnimationFrame(() => setTransition(true))
    }
  }, [transition])

  const startAuto = () => {
    stopAuto()
    timer.current = setInterval(next, 3500)
  }

  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current)
  }

  return (
    <section className="h-[90vh]  w-full text-white overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
          Asthma feels unpredictable even when you do everything right.
        </h2>
        

        <div onMouseEnter={stopAuto} onMouseLeave={startAuto} className="relative">

          <div className="">
            <div
              className={`flex gap-6 pt-2 ${transition ? "transition-transform duration-700 ease-out" : ""}`}
              style={{ transform: `translateX(-${index * 70}%)` }}
            >
              {slides.map((story, i) => (
                <div key={i} className="relative w-[70%] h-[22rem] shrink-0 rounded-2xl overflow-hidden">
                  <Image src={story.image} alt="story" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-6 left-3  md:left-6 text-sm max-w-[50vw]">{story.text}</p>
                  <Plus className="absolute rounded-full right-3  bg-blue-500  p-2 md:right-6 bottom-6"></Plus>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 -bottom-14 flex gap-3 z-10">
            <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
