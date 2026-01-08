import Image from "next/image"

const photos = [
  { src: "/moment1.jpg", rotate: "-rotate-6", x: "-translate-x-32", y: "-translate-y-6" },
  { src: "/moment2.jpg", rotate: "rotate-3",  x: "-translate-x-12", y: "-translate-y-24" },
  { src: "/moment3.jpg", rotate: "rotate-6",  x: "translate-x-8",   y: "-translate-y-10" },
  { src: "/moment4.jpg", rotate: "-rotate-2", x: "translate-x-24",  y: "translate-y-10" },
  { src: "/moment5.jpg", rotate: "rotate-2",  x: "translate-x-40",  y: "-translate-y-20" },
  { src: "/moment6.jpg", rotate: "-rotate-3", x: "-translate-x-16", y: "translate-y-24" },
  { src: "/moment7.jpg", rotate: "rotate-3",  x: "translate-x-10",  y: "translate-y-28" },
  { src: "/moment8.jpg", rotate: "-rotate-1", x: "translate-x-32",  y: "translate-y-36" },
]

export default function MomentsCollage() {
  return (
    <section className="min-h-screen w-full py-8 text-white text-center">

  {/* HEADING FIRST */}
  <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto mb-16 px-6">
    Your child’s life is bigger than asthma.  
    It’s made of moments you never want to miss.
  </h2>

  {/* COLLAGE BLOCK */}
  <div className="relative flex justify-center items-center h-[24rem] overflow-hidden">

    {photos.map((p, i) => (
      <div
        key={i}
        className={`absolute ${p.rotate} ${p.x} ${p.y}
          transition-transform duration-500 hover:scale-105`}
      >
        <div className="bg-white p-1 rounded-xl shadow-xl">
          <div className="relative w-36 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden">
            <Image src={p.src} alt="moment" fill className="object-cover" />
          </div>
        </div>
      </div>
    ))}

  </div>
</section>

  )
}