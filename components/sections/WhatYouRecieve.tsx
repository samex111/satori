import Image from "next/image"
const photos = [
    {image:'/message-1.png', heading:'Daily Predictive Forecasts' , text: "Each morning, Satori gives you a clear picture of how your child’s day is shaping up — so you can plan with confidence instead of guessing."},
    {image:'/message-2.png', heading:'Early Risk Alerts' , text: "Satori warns you before symptoms begin by identifying the specific time windows when environmental changes are most likely to affect your child."},
    {image:'/message-3.png', heading:'Clear Answers About What’s Happening' , text: "When you have questions, Satori looks at the current air and conditions through your child’s profile and helps explain what’s happening — so you don’t have to guess or worry."},
    {image:'/message-4.png', heading:'Child-Specific Understanding' , text: ""},
    {image:'/message-5.png', heading:'' , text: ""},
]

export default function WhatYouRecieve() {
    return <section className="h-[120vh] text-white w-full bg-[#0b0f2a] mt-10 ">
        <div className=" flex flex-1 justify-center  mx-2 bg-[#6b6df5] h-[110vh] rounded-md">

            <div className="flex flex-col col pt-28">
                <h2 className="font-semibold text-4xl ">What You Recieve</h2>
                <div className="">
                    
                </div>
            </div>
        </div>
    </section>
}