import Events from "@/app/components/event"


export default function Gallery()
{
    // const galleryImages=[
    //     '/images/bg1.png',
    //     '/images/bg.png',   
    //     '/images/bg1.png',
    //     '/images/bg.png',
    //     '/images/bg1.png',
    // ]
    return <section className=" pt-32 p-3">
        {/* <div className=" px-2 sm:px-10">
        <Heading text1={"Gallery"} />
        <div className="grid grid-cols-4 mt-16 gap-4">
            {galleryImages.map((key)=>
            <div  key={key}  className=" col-span-4 sm:col-span-2 md:col-span-1">
                 <img src={key} className=" shadow-md w-full rounded-md" alt="" />
            </div>
           
            )}
        </div>
        </div> */}
        <Events />
    </section>
}