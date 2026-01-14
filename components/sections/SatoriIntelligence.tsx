'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const stories = [
    { image: '/intelligence-1.jpg', heading: 'Intelligence That Understands Why Symptoms Happen', subheading: 'Satori understands cause and effect as it unfolds around your child.', text: "Rather than relying on generalized rules or isolated triggers, Satori combines your child's information with real-time changes in the air, weather, and daily environment to understand when breathing risk is increasing for this child, in this place, at this moment. This grounded, cause-and-effect approach allows risk to be identified earlier — before symptoms begin, not after." },
    { image: '/intelligence-2.jpg', heading: 'The Environment changes Fast. Satori Keeps Up.', subheading: 'The environment around your child is constantly changing.', text: "Ground conditions can shift hour by hour — sometimes minute by minute — as pollution, ozone, weather, and wind move through your neighborhood. Satori tracks these changes in real time, recognizing the precise moments they become risky for your child and alerting you with clear guidance on what to do right then" },
    { image: '/intelligence-3.jpg', heading: 'Technology That Understands Children', subheading: 'The same air can affect children very differently — and Satori understands why', text: "It learns when your child is most vulnerable, which triggers affect them most, how their routines and activity shape risk, and how their home and school environments change what’s safe for them, allowing the same conditions to be interpreted differently — and more accurately — for every family" },
    { image: '/intelligence-4.jpg', heading: 'Intelligence That Learns Your Child Over Time', subheading: 'Satori gets smarter by learning from what actually happens to your child', text: "At key moments, Satori may ask a simple yes-or-no question after an alert or forecast. These quick check-ins help it understand which risks truly affect your child, when symptoms really begin, and which guidance actually helps — so future alerts become fewer, earlier, and more precise, without you having to configure anything" },
    { image: '/intelligence-5.jpg', heading: 'The Right Warning at the Right Time', subheading: 'Timing matters as much as the warning itself.', text: "Satori identifies specific danger windows by aligning atmospheric physics with your child’s daily rhythm — understanding how risk changes between morning routines, school hours, afternoon activity, and nighttime rest. This allows alerts to arrive when they're actually useful, not too early to ignore and not too late to help." },
    { image: '/intelligence-6.jpg', heading: 'Environment-Aware Pediatric Care', subheading: 'Children don’t experience asthma in a clinic — they experience it in the real world.', text: "Satori brings pediatric respiratory science into the environment itself, interpreting changing air, weather, and conditions through your child’s biology in real time. This allows guidance to be delivered when and where risk actually emerges — tailored to your child’s sensitivities, daily life, and surroundings, not adult thresholds or generic air scores." },
]

// To make the slider infinite, we buffer the start and end
const slides = [
    ...stories.slice(-2),
    ...stories,
    ...stories.slice(0, 2),
]

export default function SatoriIntelligence() {
    const [index, setIndex] = useState(2); // Start at the first actual slide
    const [transition, setTransition] = useState(true);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const next = () => setIndex(i => i + 1);
    const prev = () => setIndex(i => i - 1);

    useEffect(() => {
        if (index === slides.length - 2) {
            setTimeout(() => {
                setTransition(false);
                setIndex(2);
            }, 700);
        }
        if (index === 1) {
            setTimeout(() => {
                setTransition(false);
                setIndex(slides.length - 3);
            }, 700);
        }
    }, [index]);

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => setTransition(true));
        }
    }, [transition]);

    return (
        <section className=" pt-32 text-white w-full overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-zinc-400 font-medium mb-4 text-lg">Inside</span>
                    <Image src={'/SatoriIntelligence.png'} alt='Satori Intelligence' width={'840'} height={'100'} ></Image>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    <div
                        className={`flex gap-8 ${transition ? "transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)" : ""}`}
                        style={{ transform: `translateX(-${index * 51.5}%)` }}
                    >
                        {slides.map((story, i) => (
                            <div key={i} className="w-[49%] shrink-0 flex flex-col">
                                {/* IMAGE BOX */}
                                <div className="relative aspect-[1.5/1] rounded-3xl overflow-hidden mb-8">
                                    <Image 
                                        src={story.image} 
                                        alt={story.heading} 
                                        fill 
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>

                                {/* CONTENT BOX */}
                                <div className="pr-10">
                                    <h3 className="text-[22px] font-bold text-white mb-4 leading-tight">
                                        {story.heading}
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[15px] font-bold text-white leading-snug">
                                            {story.subheading}
                                        </p>
                                        <p className="text-[15px] text-zinc-400 font-medium leading-relaxed">
                                            {story.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - Positioned exactly like the image */}
                    <div className="flex justify-end gap-3 mt-12 pr-4">
                        <button 
                            onClick={prev} 
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-400 transition-colors"
                        >
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button 
                            onClick={next} 
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-400 transition-colors"
                        >
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}