"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
const stories = [
    { video: "/video1.mp4",heading:'Air Pollution Shifts 40+ Times a Day.', text: "Air pollution can shift more than 40 times a day — which is why your child can be fine in the morning and wheezing by the afternoon, without anything ‘new’ happening." },
    { video: "/video2.mp4",heading:'Ozone Levels Change 25+ Times a Day', text: "Ozone can rise and fall over 25 times a day — tightening airways even on days that look perfectly clear, which makes asthma harder to predict with your eyes alone." },
    { video: "/video3.mp4",heading:'Nighttime Air Patterns Shift 15+ Times', text: "Nighttime air can shift more than 15 times — trapping pollution near the ground while your child sleeps and increasing the risk of sudden nighttime symptoms." },
    { video: "/video4.mp4",heading:'Nighttime Air Patterns Shift 15+ Times', text: "Nighttime air can shift more than 15 times — trapping pollution near the ground while your child sleeps and increasing the risk of sudden nighttime symptoms." },
]

const slides = [
    stories[stories.length - 1],
    ...stories,
    stories[0],
]

export default function GlobarWarming() {
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
        timer.current = setInterval(next, 4000)
    }

    const stopAuto = () => {
        if (timer.current) clearInterval(timer.current)
    }

    return (
        <section className="bg-[#0b0f2a] md:py-22  text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
                    Asthma feels unpredictable even when you do everything right.
                </h2>

                <div onMouseEnter={stopAuto} onMouseLeave={startAuto} className="relative">
                    <div className="">
                        <div
                            className={`flex gap-2 ${transition ? "transition-transform  duration-700 ease-out" : ""}`}
                            style={{ transform: `translateX(-${index * 90}%)` }}
                        >
                            {slides.map((story, i) => (
                                <div key={i} className="relative  w-[90%] h-[80vh]  shrink-0 rounded-2xl overflow-hidden">
                                <Image src={story.image} alt="story" fill className="absolute  md:left-0 inset-0 h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-sm max-w-xs">
                                        <h1 className="text-3xl">{story.heading}</h1>
                                        <p>{story.text}</p>
                                    </div>
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
