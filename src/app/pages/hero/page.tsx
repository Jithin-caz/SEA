'use client'
import CarouselComponent from "@/app/components/carousel";
import RiseUpText from "@/app/components/risingtext";
import { useRef, MouseEvent } from "react";

export default function Hero() {
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
            <div className="p-2 z-10 absolute flex flex-col items-center justify-center top-0 left-0 w-dvw h-dvh bg-black bg-opacity-55 text-white">
                <RiseUpText>
                    <div
                        ref={rectangleRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="shadow-md bg-white bg-opacity-10 rounded-lg backdrop-blur-sm p-4 md:p-14 flex flex-col items-center justify-center"
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
