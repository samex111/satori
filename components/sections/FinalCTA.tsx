export default function FinalCTA() {
  return (
    <section className="bg-[#070b2a] py-8 px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* LEFT EDGE GLOW */}
        {/* <div className="absolute inset-y-0 -left-4 w-16 blur-3xl
          bg-gradient-to-b from-transparent via-[#7c7cff]/40 to-transparent" /> */}

        {/* RIGHT EDGE GLOW */}
        {/* <div className="absolute inset-y-0 -right-4 w-16 blu
          bg-gradient-to-b from-transparent via-[#b86bff]/40 to-transparent" /> */}

        {/* BOTTOM CHAKRA GLOW */}
        <div className="absolute -bottom-2 left-0 w-full h-50 blur-sm
          bg-gradient-to-r from-[#7b5cff] via-[#5af0ff] via-[#6cff9d] via-[#f2ff6c] via-[#ffb66c] to-[#ff6c6c]" />

        {/* MAIN CARD */}
        <div className="relative bg-[#0b0f2a] rounded-2xl px-12 py-20 text-center border border-white/10">

          {/* INNER VIGNETTE */}
          <div className="absolute inset-0 rounded-2xl
            bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Your child deserves to breathe safely
          </h2>

          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Satori makes what’s invisible in the air visible — before it harms your child.
          </p>

          <div className="text-xs text-white/50 mb-6">
            No credit card required.<br />
            Get immediate protection.
          </div>

          <button className="bg-[#6b6df5] hover:bg-[#7b7df7] transition
            text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            Start Free 14-Day Trial
          </button>
        </div>
      </div>
    </section>
  )
}
