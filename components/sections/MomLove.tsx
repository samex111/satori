export default function MomsLove(){
    return <section className="relative h-[60vh] py-8 md:h-[150vh] w-full overflow-hidden">

  {/* DESKTOP HERO */}
  <div
    className="absolute inset-0  md:block"
    style={{
      backgroundImage: "url(/momeslove.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "50% 10%"
    }}
  />

  {/* MOBILE HERO */}
  {/* <div
    className="absolute hidden inset-0 md:hidden bg-top bg-contain bg-no-repeat"
    style={{ backgroundImage: "url(/momeslove.png)" }}
  /> */}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#070b2a]" />

  {/* CONTENT */}
  <div className="relative w-full flex justify-end text-end z-10 mx-auto px-6 pt-36 text-white">
    <h1 className="text-xl md:text-4xl md:right-20 absolute md:top-10 top-0 bottom-10 right-0 mr-1 font-bold max-w-md md:max-w-2xl">
      The Air Carries Hidden <br /> 
      Risks And They Shape Your <br />
       Child’s Asthma.
    </h1>
  </div>

</section>


}