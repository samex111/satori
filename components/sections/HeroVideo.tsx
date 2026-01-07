export default function HeroVideo() {
  return (
    <section className="relative h-screen overflow-hidden text-white">

      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/childvideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">
        <button className="mb-6 px-4 py-1 text-xs rounded-full bg-white/20">
          BETA
        </button>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We protect your child <br />
          before asthma can hurt them.
        </h1>

        <p className="mt-6 max-w-xl text-white/80">
          Satori is a text-first asthma & allergy guardian — no app, no passwords, no friction.
        </p>
      </div>

    </section>
  )
}
