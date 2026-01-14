"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How does getting started work? Is it complicated?",
    a: "Not at all. Satori was built for parents who already have enough to manage. There’s no app to download, no account to create, and no dashboard to learn. Once you sign up, Satori simply starts texting you protective alerts and forecasts for your child. That same text thread is how you manage everything — adding caregivers, updating your address, changing alert preferences, or pausing alerts. If you can send a text, you can use Satori."
  },
  { q: "How is Satori different from air quality apps?", a: "Satori interprets air, weather, and environmental change through your child’s biology, not generic city averages or adult thresholds." },
  { q: "Is Satori medically legitimate?", a: "Yes. Satori is built on pediatric respiratory science and clinical research, not consumer AQI shortcuts." },
  { q: "How accurate are the alerts?", a: "Alerts are generated using real-time atmospheric physics and your child’s individual sensitivity profile." },
  { q: "Does Satori replace my child’s doctor?", a: "No. Satori supports families between visits, helping you reduce risk — it does not replace medical care." },
  { q: "What exactly do the alerts tell me?", a: "They explain what’s changing in your child’s environment and what actions (if any) can reduce risk." },
  { q: "How early are the warnings?", a: "Often hours before symptoms begin, based on environmental patterns rather than reactions." },
  { q: "Will Satori wake me up at night?", a: "Only when a true risk window emerges that could affect your child’s breathing." },
  { q: "Is my child’s data safe?", a: "Yes. Data is encrypted, never sold, and used only to protect your child." }
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#070b2a] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[40%_60%] gap-16">

        {/* LEFT PANEL */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Still Have Questions?<br />We’ve Got Answers.
          </h2>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left text-base font-medium py-4"
              >
                {item.q}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-white/80 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
