'use client'
import CarouselComponent from "@/app/components/carousel";
import RiseUpText from "@/app/components/risingtext";
import { useRef, MouseEvent, useEffect } from "react";


export default function Hero() {
    const glassBoxRef = useRef<HTMLDivElement | null>(null);
  const circleSize = 230; // Set the desired initial circle size

  const updateCircleMask = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    if (glassBoxRef.current) {
      glassBoxRef.current.style.mask = `radial-gradient(circle ${circleSize}px at ${x}px ${y}px, transparent ${circleSize}px, black ${circleSize + 1}px)`;
      glassBoxRef.current.style.webkitMask = `radial-gradient(circle ${circleSize}px at ${x}px ${y}px, transparent ${circleSize}px, black ${circleSize + 1}px)`;
    }
  };

  // Set the initial mask size on component mount
  useEffect(() => {
    if (glassBoxRef.current) {
      glassBoxRef.current.style.mask = `radial-gradient(circle ${circleSize}px at 50% 50%, transparent ${circleSize}px, black ${circleSize + 1}px)`;
      glassBoxRef.current.style.webkitMask = `radial-gradient(circle ${circleSize}px at 50% 50%, transparent ${circleSize}px, black ${circleSize + 1}px)`;
    }
  
  }, [circleSize]);
    const rectangleRef = useRef<HTMLDivElement | null>(null); // Ensure rectangleRef is typed properly
    const maxAngle = 10; // Maximum rotation angle in degrees.

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!rectangleRef.current) return;
      
        const rect = rectangleRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((mouseY - centerY) / centerY) * maxAngle;
        const rotateY = -((mouseX - centerX) / centerX) * maxAngle;
      
        rectangleRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!rectangleRef.current) return;

        rectangleRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    };

    return (
     
        <section className="relative min-h-dvh">
            <div className="w-dvw h-dvh z-0 top-0 left-0 absolute">
                <CarouselComponent />
            </div>
            <div className="p-2 z-10 absolute flex flex-col items-center justify-center top-0 left-0 w-dvw h-dvh bg-black bg-opacity-55 text-white"> </div>
            <div onMouseMove={updateCircleMask} className="  blurBg p-5 relative z-40  w-dvw h-dvh">
            <div
            ref={glassBoxRef}
            className="trans w-full h-full bg-white bg-opacity-5 rounded-lg backdrop-blur-lg overflow-hidden"></div>

            </div>
           <div className="p-2 z-30 absolute flex flex-col items-center justify-center top-0 left-0 w-dvw h-dvh  text-white">
           <RiseUpText>
           <div
                        ref={rectangleRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative z-50 shadow-md bg-white bg-opacity-10 rounded-lg backdrop-blur-sm p-4 md:p-14 flex flex-col items-center justify-center"
                    >
                        
                        <h1 className="glow-effect dela-gothic-one-regular text-center text-6xl sm:text-8xl md:text-9xl tracking-widest text-lightblue">
                            SEA
                        </h1>
                        <h3 className="text-lightblue text-3xl mt-2 text-center">
                            Space Engineers Association
                        </h3>
                    </div>
               
           </RiseUpText>
                   
           </div>
           
        </section>
    );
}
