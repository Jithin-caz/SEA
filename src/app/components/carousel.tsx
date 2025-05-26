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
                interval={4000}
                stopOnHover={false}
                dynamicHeight={false}
                showStatus={false}
                showArrows={false}
                showIndicators={true}
            >   
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/sea1.jpeg" alt="Slide 1" />
                </div>
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/sea2.jpeg" alt="Slide 2" />
                </div>
                <div>
                    <img className="h-[100dvh] w-[100dvw] object-cover" src="/images/sea3.jpeg" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
