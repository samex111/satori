export default function HeroVideo() {
  return (
    <section className="relative h-screen overflow-hidden text-white">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/childvideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col">

        {/* Bottom row */}
        <div className="mt-auto pb-12 flex justify-between items-end">

          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <span className="inline-flex text-4xl items-center gap-2   ">
              Satori <span className="text-[10px] px-2 mt-4 text-black bg-white/80 rounded-full">BETA</span>
            </span>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              We Protect Your Child <br />
              Before Asthma Can Hurt Them.
            </h1>

            <p className="mt-4 md:text-sm text-white/80">
              Satori is a text-first asthma & allergy guardian — <i> no app, no passwords, no friction </i>.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="text-center">
            <p className="text-xs text-white/70 mb-2">
              No credit card required.<br />Get immediate protection.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md text-sm font-medium">
              Start Free 14-Day Trial
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
