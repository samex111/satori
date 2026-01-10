export default function MomsLove(){
    return <section className="relative py-8 md:h-[150vh] w-full overflow-hidden">

  {/* DESKTOP HERO */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      backgroundImage: "url(/momeslove.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "50% 10%"
    }}
  />

  {/* MOBILE HERO */}
  <div
    className="absolute  inset-0 md:hidden bg-top bg-contain bg-no-repeat"
    style={{ backgroundImage: "url(/momeslove.png)" }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#070b2a]" />

  {/* CONTENT */}
  <div className="relative w-full flex justify-end text-end z-10 mx-auto px-6 pt-36 text-white">
    <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
      The Air Carries Hidden <br /> 
      Risks And They Shape Your <br />
       Child’s Asthma.
    </h1>
  </div>

</section>


}