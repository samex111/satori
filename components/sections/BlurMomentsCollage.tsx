import Image from "next/image"
const photos = [
  { src: "/moment1.jpg", rotate: "-rotate-6", x: "-translate-x-32", y: "-translate-y-6" },
  { src: "/moment2.jpg", rotate: "rotate-3",  x: "-translate-x-12", y: "-translate-y-24" },
  { src: "/moment3.jpg", rotate: "rotate-6",  x: "translate-x-8",   y: "-translate-y-10" },
  { src: "/moment4.jpg", rotate: "-rotate-2", x: "translate-x-24",  y: "translate-y-10" },
  { src: "/moment5.jpg", rotate: "rotate-24",  x: "translate-x-40",  y: "-translate-y-20" },
  { src: "/moment6.jpg", rotate: "-rotate-3", x: "-translate-x-16", y: "translate-y-24" },
  { src: "/moment7.jpg", rotate: "rotate-3",  x: "translate-x-10",  y: "translate-y-28" },
  { src: "/moment8.jpg", rotate: "-rotate-1", x: "translate-x-32",  y: "translate-y-36" },
]
export default function BlurMomentsCollage(){

return<section className="relative h-[80vh] w-full py-6 text-white flex items-center justify-center text-center">

  {/* TEXT LAYER (TOP) */}
  <h3 className="relative z-10 text-3xl font-bold max-w-3xl px-6">
    But behind your family's favorite moments,
    <br />
    the <span className="text-[#6366F1]">air can change in ways you can't see,</span>
    <br />
    often long before symptoms appear.
  </h3>

  {/* IMAGE LAYER (BACKGROUND) */}
  <div className="absolute inset-0 flex justify-center items-center blur-sm opacity-20">
    <div className="relative w-full h-[28rem] flex justify-center items-center">

      {photos.map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.rotate} ${p.x} ${p.y}`}
        >
          <div className="bg-white p-1 rounded-xl shadow-xl">
            <div className="relative w-36 h-24 md:w-48 md:h-32 overflow-hidden rounded-lg">
              <Image src={p.src} alt="moment" fill className="object-cover" />
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

}