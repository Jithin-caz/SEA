import CarouselComponent from "@/app/components/carousel";

export default function Hero()
{
    return( 
    <section className=" relative min-h-dvh" >
        <div className=" w-dvw h-dvh z-0 top-0 left-0 absolute">
            <CarouselComponent/>
        </div>
        <div className=" z-10 absolute flex flex-col items-center justify-center top-0 left-0 w-dvw h-dvh bg-black bg-opacity-55 text-white">
            <div className=" bg-white bg-opacity-10  rounded-lg backdrop-blur-sm p-4 md:p-8 flex flex-col items-center justify-center">
            <h1 className="dela-gothic-one-regular text-center text-6xl sm:text-8xl md:text-9xl tracking-widest">SEA</h1>
            <h3 className=" text-3xl mt-2 text-center">Space Engineers Association</h3>
            </div>
            
        </div> 
    </section>)
}