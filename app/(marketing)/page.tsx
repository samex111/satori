
import BlurMomentsCollage from "@/components/sections/BlurMomentsCollage";
import Enviroment from "@/components/sections/Enviroment";
import GlobarWarming from "@/components/sections/GlobalWarming";
import Hero from "@/components/sections/Hero";
import HowSatoriWorks from "@/components/sections/HowSatoriWorks";
import MeetSatori from "@/components/sections/MeetSatori";
import MomentsCollage from "@/components/sections/MomentsCollage";
import MomsLove from "@/components/sections/MomLove";
import ParentsVoice from "@/components/sections/ParentsVoice";
import ProblemStories from "@/components/sections/ProblemStories";
import ProtactiveSystem from "@/components/sections/ProtactiveSystem";
import SatoriIntelligence from "@/components/sections/SatoriIntelligence";
import Validated from "@/components/sections/Validated";
import WhatYouRecieve from "@/components/sections/WhatYouRecieve";

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
   <ProtactiveSystem/>
   <HowSatoriWorks/>
   <WhatYouRecieve/>
   <SatoriIntelligence/>
   <Validated/>
   <ParentsVoice/>
   </div>
  );
}
