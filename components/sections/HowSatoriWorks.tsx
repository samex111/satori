  import {CircleCheck} from 'lucide-react'
  const  working =  [
    {heading: 'Tell Satori who your child is and how they breathe.' , text:'In a quick 5-minute setup, you share key details about your child’s age, sensitivities, routines, and environment. This helps Satori understand how your child responds to changing air — so protection is precise from the start.'},
    {heading: 'Satori quietly watches the environment around your child.' , text:'Satori continuously monitors how air quality and weather change around your child’s home and daily environments. Most of the time, it stays silent — working in the background without apps, dashboards, or constant notifications.'},
    {heading: 'Satori understands when changes become risky.' , text:'Every hour, Satori analyzes shifts in pollution, ozone, temperature, humidity, and wind — and how those patterns interact with your child’s sensitivities and daily rhythm to recognize when breathing risk is rising.'},
    {heading: 'Alerts designed for calm, clarity, and peace of mind.' , text:'Satori provides a simple daily forecast to help you plan, and sends real-time alerts only when a specific risk window is approaching. Each alert explains what’s happening, when risk is most likely, and what (if anything) to do — so you can feel confident you’ve done everything that can be done and get back to your day.'},
  ]
export default function HowSatoriWorks(){
  
    return <section className="w-full py-10 flex flex-col items-center  text-white justify-center ">
      <h1 className='text-4xl font-bold' >How Satori works</h1>
      {
        working.map((item,i)=>(
          <div key={i} className='flex flex-col justify-center gap-2'>
            <div className='flex gap-2'>
              <CircleCheck/> 
              <div className='flex flex-col gap-2 '>
                <h3 className='text-2xl font-bold'>{item.heading}</h3>
                 <p>
                  {item.text}
                 </p>
              </div>
              </div>
          </div>
        ))
      }
    </section>
}