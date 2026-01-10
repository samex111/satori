import Image from "next/image";

export default function ProtectiveHero() {
  return (
    <section className="relative h-[120vh] w-full  overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 pt-8 rounded-md flex flex-col bg-[#6b6df5] items-center gap-16">

        {/* TOP HEADING */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight max-w-4xl">
          A protective intelligence that understands what leads to asthma
          symptoms — and warns you before they begin.
        </h1>

        {/* CONTENT ROW */}
       <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">


          {/* LEFT TEXT */}
          <div className="max-w-md text-white text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              How Satori Appears <br /> in Your Life
            </h3>

            <p className="mt-4 font-medium">
              No app. No logins. Just protection.
            </p>

            <p className="mt-4 text-white/80 leading-relaxed">
              Satori works by text — reading the air around your child and
              translating hidden risk into simple guidance, wherever they are.
            </p>
          </div>

          {/* RIGHT PHONES */}
          <div className="relative flex mb-auto gap-8 flex-shrink-0">
            <PhoneMockup screen="/chat-photo.png"  className="translate-y-16 hidden md:block" />
            <Image alt="photo" className="object-contain z-20 pointer-events-none" src={'/fullmobile.png'} width={'260'} height={'520'}></Image>
          </div>

        </div>
      </div>
    </section>
  );
}

export function PhoneMockup({ screen, className = "" }:{
  screen: string;
  className?: string;
}) {
  return (
    <div
  className={`relative aspect-[255/520] ${className}`}
  style={{ width: "clamp(190px, 24vw, 280px)" }}
>

      {/* FRAME */}
      <Image
        src="/Vector.png"
        alt="Phone frame"
        fill
        priority
        className="object-contain pointer-events-none z-20"
      />

      {/* SCREEN CUTOUT */}
      <div
        className="
          absolute
          z-10
          overflow-hidden
          rounded-t-[10%]
        "
        style={{
          top: "18.6%",
          left: "3.5%",
          width: "93%",
          height: "63.5%",
        }}
      >
        <Image
          src={screen}
          alt="Screen"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}
