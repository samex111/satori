
import BlurMomentsCollage from "@/components/sections/BlurMomentsCollage";
import Enviroment from "@/components/sections/Enviroment";
import GlobarWarming from "@/components/sections/GlobalWarming";
import Hero from "@/components/sections/Hero";
import MeetSatori from "@/components/sections/MeetSatori";
import MomentsCollage from "@/components/sections/MomentsCollage";
import MomsLove from "@/components/sections/MomLove";
import ProblemStories from "@/components/sections/ProblemStories";

export default function Home() {
  return (
   <div className="bg-[#0b0f2a]">
   <Hero/>
   <ProblemStories/>
   <MomentsCollage/>
   <BlurMomentsCollage />
   <MomsLove/>
   <Enviroment/>
   <GlobarWarming/>
   <MeetSatori/>
   </div>
  );
}
