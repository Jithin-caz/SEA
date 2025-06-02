import Card from "@/app/components/card";
import Heading from "@/app/components/heading";
import YT_Video_Card from "@/app/components/yt_video_card";

export default function Events()
{
    const events=[
        {id:1,title:"Aarohan 25 and golden jubilee celebrations", content:"April 2025", image:"/images/aarohan-logo.svg"}
    ]

    const past_events = [
        {id:1, link: "https://youtu.be/s9MIleBoYoE?si=glSkyWQ1Fhqtqcm3"},
        {id:1, link: "https://youtu.be/KIZFzhaoY94?si=hn5hxILNF3i810VK"},
        {id:1, link: "https://youtu.be/_idAaCJWjds?si=xjltsoxTn6zSIabP"},
        {id:1, link: "https://youtu.be/yoW4ep1sHiw?si=8dNTlk-QjcP7XUV9"},
        {id:1, link: "https://youtu.be/6qAdkZWkbYo?si=Kk-WvQe80kP9ryHR"},
        {id:1, link: "https://youtu.be/RauLrxl67WE?si=IL3JX3CEl3rUeuxs"},
    ]

    return(
        <section className=" p-3 flex flex-col">
            {/* <div className=" px-2 sm:px-10 flex flex-col">
                <Heading text1="Latest & Upcoming" text2="Events"/>
                <div className=" mt-12 grid grid-cols-4 gap-5 place-items-center">
                    {events.map(event=><Card key={event.id} classname=" col-span-4 sm:col-span-2 md:col-span-1" image={event.image} title={event.title} content={event.content}/>)}
                </div>
            </div>  */}
            <div className=" mt-8 px-2 sm:px-10 flex flex-col">
                <Heading text1="Past" text2="Events"/>
                <div className="col-span-1 mt-12">
                    <a href="https://drive.google.com/drive/folders/1oWafY5blKU6azAtsE0uXFByeMeu9zTOv" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className=" max-w-sm block mt-6 text-xl font-semibold text-blue-50  hover:scale-105 transition-all duration-300 bg-blue-600 rounded-lg p-4 shadow-md text-center">
                        📸 Aarohan 25 photos 🎉
                    </a>
                    {events.map(event=><Card key={event.id} classname="w-full" image={event.image} title={event.title} content={event.content}/>)}
                    
                </div>
                <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 gap-3">
                  
                    {past_events.map(event=><YT_Video_Card key={event.id} classname=" col-span-4 sm:col-span-2 md:col-span-1" link={event.link} />)}
               
                </div>
            </div> 
        </section>
    )
}