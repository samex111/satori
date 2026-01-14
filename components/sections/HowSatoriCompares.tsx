export default function HowSatoriCompares() {
  return (
    <section className="bg-[#070b2a] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          How Satori Compares
        </h2>

        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full border-collapse text-sm">
            <thead className="hidden md:table-header-group">
              <tr className="text-left text-white/70 border-b border-white/10">
                <th className="py-4 pr-4 w-[18%]">Comparison</th>
                <th className="py-4 pr-4 w-[14%]">Air Quality</th>
                <th className="py-4 pr-4 w-[14%]">Weather Apps</th>
                <th className="py-4 pr-4 w-[14%]">Asthma Care</th>
                <th className="py-4 pr-0 w-[40%] text-white">Satori</th>
              </tr>
            </thead>

            <tbody className="text-white/80">
              <Row title="What They Measure" cols={[
                "Pollution averages (PM2.5, PM10, ozone).",
                "Temperature, humidity, storms.",
                "Symptoms, inhaler logs, lung function.",
                "Child-sensitive triggers: PM2.5 spikes, ozone peaks, NO₂, traffic plumes, lightning pollen, cold-dry air, humidity drops, weather shifts, smoke drift."
              ]} />

              <Row title="Timing" cols={[
                "24-hour averages — no danger windows.",
                "Weather timing only.",
                "Respond after symptoms appear.",
                "Precise danger windows: AM traffic, afternoon ozone, nighttime pooling, cold-dry mornings, pre-visible smoke."
              ]} />

              <Row title="Pediatric Science" cols={[
                "None (adult thresholds).",
                "None (adult thresholds).",
                "Clinical guidance, not environmental.",
                "Built on pediatric respiratory science: young lungs react earlier at lower levels in predictable cycles."
              ]} />

              <Row title="Guidance & Delivery" cols={[
                "General air quality messages in app.",
                "General weather advice in app.",
                "Symptom management in app.",
                "Real-time pediatric steps by SMS — no app, no setup, instant for every caregiver."
              ]} />

              <Row title="Intelligence Level" cols={[
                "Generic air data.",
                "Generic weather data.",
                "Generic symptom tracking.",
                "Personalized environmental intelligence that understands your child and generates unique early alerts."
              ]} />
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="relative mt-20 bg-[#6b6df5] rounded-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="absolute -top-2 right-24 w-4 h-4 bg-[#6b6df5] rotate-45" />

          <div>
            <p className="font-semibold text-lg">
              All this protection for less than $0.66/day.
            </p>
            <p className="text-sm opacity-90">$19.97/month</p>
          </div>

          <button className="mt-6 md:mt-0 bg-white text-[#6b6df5] px-6 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition">
            Start Free 14-Day Trial
          </button>
        </div>
      </div>
    </section>
  )
}
function Row({ title, cols }: { title: string; cols: string[] }) {
  return (
    <>
      {/* DESKTOP ROW */}
      <tr className="hidden md:table-row border-b border-white/5 align-top">
        <td className="py-6 pr-4 text-white/75 w-[18%]">{title}</td>
        {cols.map((c, i) => (
          <td
            key={i}
            className={`py-6 pr-4 leading-relaxed ${
              i === 3
                ? "text-white w-[40%]"
                : "text-white/75 w-[14%]"
            }`}
          >
            {c}
          </td>
        ))}
      </tr>

      {/* MOBILE STACK */}
      <tr className="md:hidden border-b border-white/10">
        <td colSpan={5} className="py-6 space-y-4">
          <p className="font-semibold text-white">{title}</p>
          <div className="space-y-3 text-sm text-white/80">
            <p><span className="text-white/60">Air Quality:</span> {cols[0]}</p>
            <p><span className="text-white/60">Weather:</span> {cols[1]}</p>
            <p><span className="text-white/60">Asthma Care:</span> {cols[2]}</p>
            <p><span className="text-white font-medium">Satori:</span> {cols[3]}</p>
          </div>
        </td>
      </tr>
    </>
  )
}
