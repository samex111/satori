import { CircleCheck } from "lucide-react";
import { Button } from "../ui/button";

const working = [
  {
    heading: "Tell Satori who your child is and how they breathe.",
    text:
      "In a quick 5-minute setup, you share key details about your child’s age, sensitivities, routines, and environment. This helps Satori understand how your child responds to changing air — so protection is precise from the start."
  },
  {
    heading: "Satori quietly watches the environment around your child.",
    text:
      "Satori continuously monitors how air quality and weather change around your child’s home and daily environments. Most of the time, it stays silent — working in the background without apps, dashboards, or constant notifications."
  },
  {
    heading: "Satori understands when changes become risky.",
    text:
      "Every hour, Satori analyzes shifts in pollution, ozone, temperature, humidity, and wind — and how those patterns interact with your child’s sensitivities and daily rhythm to recognize when breathing risk is rising."
  },
  {
    heading: "Alerts designed for calm, clarity, and peace of mind.",
    text:
      "Satori provides a simple daily forecast to help you plan, and sends real-time alerts only when a specific risk window is approaching. Each alert explains what’s happening, when risk is most likely, and what (if anything) to do — so you can feel confident you’ve done everything that can be done and get back to your day."
  }
];

export default function HowSatoriWorks() {
  return (
    <section className="w-full py-20 flex justify-center text-white">
      <div className="w-full max-w-3xl flex flex-col mx-2 md:mx-0 items-center">

        <h1 className="text-4xl font-bold mb-14 text-center">
          How Satori Works
        </h1>

        <div className="flex flex-col gap-12 w-full">
          {working.map((item, i) => (
            <div key={i} className="flex gap-5 items-start">

              <div className="mt-1">
                <CircleCheck className="w-6 h-6 text-indigo-400" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold leading-snug">
                  {item.heading}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>
        <div className="flex  flex-col gap-2 mt-16">
          <p className="text-center ">
            No credit card required. <br />
            Get immediate protection.
          </p>
          <Button className=" text-white  text-center  bg-blue-500">Start free 14-Day Trial</Button>
        </div>
      </div>
    </section>
  );
}
