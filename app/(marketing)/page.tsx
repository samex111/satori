
import Hero from "@/components/sections/Hero";
import MomentsCollage from "@/components/sections/MomentsCollage";
import ProblemStories from "@/components/sections/ProblemStories";

export default function Home() {
  return (
   <div className="bg-[#0b0f2a]">
   <Hero/>
   <ProblemStories/>
   <MomentsCollage/>
   </div>
  );
}
