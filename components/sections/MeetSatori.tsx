import Image from "next/image"
export default function MeetSatori() {
    return <section className="h-[70vh] text-white flex justify-center items-center flex-col">
          <Meet/>
        <Image src={'/Satorilogo.png'} alt="Satori" width={'553'} height={'155'} className="text-5xl font-extrabold md:text-7xl mb-3">
        </Image>
        <p className="text-center mx-2 "> From the Japanese <i>satori—</i> sudden understanding of underlying truth.</p>
      
    </section>
}

function Meet() {
  return (
    <div className="relative w-[10rem] h-[4.1rem] mt-1 shrink-0 overflow-hidden">
      <Image src="/meet.png" alt="Meet badge" fill className="object-cover z-0" />
      <span className="absolute inset-0 flex items-center justify-center z-10 text-3xl  font-bold text-[#0b0f2a]">
        Meet
      </span>
    </div>
  )
}
