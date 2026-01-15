import Image from "next/image"

const photos = [
  { src: "/moment8.jpg", rotate: "rotate-10", x: "translate-x-50",  y: "translate-y-10" },
  { src: "/moment9.jpg", rotate: "rotate-10", x: "translate-x-18", y: "translate-y-22" },
  { src: "/moment6.jpg", rotate: "rotate-6", x: "-translate-x-39", y: "-translate-y-0" },
  { src: "/moment1.jpg", rotate: "-rotate-16", x: "translate-x-15", y: "-translate-y-30" },
  { src: "/moment3.jpg", rotate: "-rotate-18",  x: "-translate-x-17",   y: "-translate-y-22" },
  { src: "/moment7.jpg", rotate: "-rotate-11",  x: "-translate-x-24",  y: "translate-y-24" },
  { src: "/moment5.jpg", rotate: "-rotate-8",  x: "translate-x-48",  y: "-translate-y-21" },
  { src: "/moment4.jpg", rotate: "rotate-10", x: "translate-x-30",  y: "-translate-y-5" },
  { src: "/moment2.jpg", rotate: "rotate-3",  x: "-translate-x-0", y: "-translate-y-0" },

]

export default function MomentsCollage() {
  return (
    <section className="h-[80vh] md:min-h-screen w-full md:py-8 text-white text-center">

  {/* HEADING FIRST */}
  <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto mb-12 px-6">
    Your child’s life is bigger than asthma.  
    It’s made of moments you never want to miss.
  </h2>

  {/* COLLAGE BLOCK */}
  <div className="relative flex justify-center items-center h-[28rem] overflow-hidden">

    {photos.map((p, i) => (
      <div
        key={i} 
        className={`absolute ${p.rotate} ${p.x} ${p.y}
          transition-transform duration-500 hover:scale-105`}
      >
        <div className="bg-white p-1 rounded-sm shadow-xl">
          <div className="relative w-42 h-32 md:w-48 md:h-36  overflow-hidden">
            <Image src={p.src} alt="moment" fill className="object-cover" />
          </div>
        </div>
      </div>
    ))}

  </div>
</section>

  )
}