import Card from "@/app/components/card";
import Heading from "@/app/components/heading";

export default function Events()
{
    const events=[
        {id:1,title:"Event 1", content:"Event 1 content", image:"/images/bg.png"},
        {id:2,title:"Event 2", content:"Event 2 content", image:"/images/bg1.png"},
        {id:3,title:"Event 3", content:"Event 3 content", image:"/images/bg.png"},
        {id:4,title:"Event 4", content:"Event 4 content", image:"/images/bg.png"},
        {id:5,title:"Event 5", content:"Event 5 content", image:"/images/bg.png"},
        {id:6,title:"Event 6", content:"Event 6 content", image:"/images/bg.png"},
        {id:7,title:"Event 7", content:"Event 7 content", image:"/images/bg.png"},
    ]
    return <section className=" pt-36 p-3 flex flex-col">
        <div className=" px-2 sm:px-10 flex flex-col">
        <Heading text1="Latest & Upcoming" text2="Events"/>
       <div className=" mt-12 grid grid-cols-4 gap-5 place-items-center">
        {events.map(event=><Card key={event.id} classname=" col-span-4 sm:col-span-2 md:col-span-1" image={event.image} title={event.title} content={event.content}/>)}
       </div>
        </div>
       
        
    </section>
}