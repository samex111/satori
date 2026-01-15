"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
const stories = [
    { image: "/vel-1.jpg",heading:'Reducing exposure reduces attacks.', text: "Avoiding high-risk air moments lowers symptoms and ER visits — this is proven pediatric science." , button:"Learn More"},
    { image: "/vel-2.png",heading:'We monitor the triggers pediatric experts warn about — the exact conditions linked to symptoms, flare-ups, and ER spikes.', text: "" },
    { image: "/vel-3.png",heading:'Our guidance follows pediatric asthma guidelines — simple, proven actions that protect sensitive airways.', text: "" },
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
        <section className="bg-[#0b0f2a]  h-screen  md:h-[120vh]  text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl ml-4 font-semibold mb-14 max-w-xl">
                   Scientifically Grounded. <br />
                   Medically Validated.
                </h2>

                <div onMouseEnter={stopAuto} onMouseLeave={startAuto} className="relative">
                    <div className="">
                        <div
                            className={`flex gap-2 ${transition ? "transition-transform  duration-700 ease-out" : ""}`}
                            style={{ transform: `translateX(-${index * 90}%)` }}
                        >
                            {slides.map((story, i) => (
                                <div key={i} className="relative h-[70vh] w-[90%] md:h-[90vh]  shrink-0 rounded-2xl overflow-hidden">
                                <Image src={story.image} alt="story" fill className="absolute   inset-0 h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-sm max-w-3xl">
                                        <h1 className="text-xl md:text-2xl">{story.heading}</h1>
                                        <p>{story.text}</p>
                                        {story.button && (<Button variant={'ghost'} className="border mt-2 text-sm font-normal">{story.button}</Button>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute right-0 pb-2 -bottom-14 flex gap-3 z-10">
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
