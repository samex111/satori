import { ChevronLeft, ChevronRight } from "lucide-react"

const slide = [
    {text:'Every night I check if her chest is rising.can’t fall asleep until I’m sure.' , from:'-Mother,UK'}
]
export default function  ParentsVoice(){
    return <section className=" w-full md:py-20 text-white">
        <h2 className="text-3xl mb-14 font-bold ml-4 ">
            Inspired by the Voices <br />
            of Parents Everywhere.
        </h2>
        <div className="flex-1 h-[50vh] flex justify-between mx-2 items-center">
            
         <button  className="p-2 rounded-full border  hover:bg-white/20">
                            <ChevronLeft size={18} />
                        </button>
           {
            slide.map((story,i)=>(
                <div key={i} className="text-3xl  md:max-w-2xl text-center">
                   <p> {story.text }</p>
                     <p className="text-xs ">{story.from}</p>
                </div>
                
            ))
           }
            <button  className="p-2 rounded-full border hover:bg-white/20">
                            <ChevronRight size={18} />
                        </button>


        </div>

    </section>

}