'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <div className="h-[100dvh] w-[100dvw] overflow-hidden">
            <Carousel 
                showThumbs={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={false}
                dynamicHeight={false}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
            >   
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/bg.png" alt="Slide 1" />
                </div>
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/bg1.png" alt="Slide 2" />
                </div>
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/bg.png" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
