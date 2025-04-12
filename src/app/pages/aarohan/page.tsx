"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Heading from "@/app/components/heading";

const images = [
  "/pdf/1.jpg",
  "/pdf/2.jpg",
  "/pdf/3.jpg",
  "/pdf/4.jpg",
  "/pdf/5.jpg",
  "/pdf/6.jpg",
  "/pdf/7.jpg",
  "/pdf/8.jpg",
  "/pdf/9.jpg",
  "/pdf/10.jpg",
  "/pdf/11.jpg",
  "/pdf/12.jpg",
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Specify the type of the ref (HTMLDivElement)
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle Scroll to Update Index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const imageWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="min-h-dvh pt-32 p-3">
      <div className="px-4 sm:px-10 flex flex-col">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/aarohan-logo.svg"
            alt="Aarohan 2025 Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <Heading text1="AAROHAN" text2="2025" />
        </div>

        <div className="mt-20 flex flex-col items-center text-center space-y-2">
          <p className="text-lg font-semibold text-gray-800">
            📍 Venue:{" "}
            <span className="font-normal text-gray-700">
              Al Saj Arena, Trivandrum
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            📅 Date:{" "}
            <span className="font-normal text-gray-700">April 26, 2025</span>
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full mt-8 flex items-center justify-center">
          {/* Left Button */}
          <button
            className="absolute left-0 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 lg:block hidden"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
          >
            ◀
          </button>

          {/* Image Container with Scrollable and Smooth Scrolling */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth w-full max-w-4xl"
          >
            <div
              className="flex gap-x-2"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] flex justify-center"
                >
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            className="absolute right-0 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 lg:block hidden"
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            style={{
              cursor:
                currentIndex === images.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            ▶
          </button>
        </div>

        <div className=" flex items-center justify-center w-full h-16">
          <a
            className=" bg-orange-600 text-white hover:bg-opacity-75 hover:scale-105 rounded-md px-3 py-2 text-sm font-medium"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6YPARoraA9Djo2U4ZGVSQ-rYn5-ZipfSaLv3g1H9FKP16hw/viewform"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
