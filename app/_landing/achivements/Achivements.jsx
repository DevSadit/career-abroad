"use client";
import Image from "next/image";
import React from "react";
import students from "../../../../data/students.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Achivements = () => {
  return (
    <section className="pt-8 md:pt-12 lg:pt-26 xl:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head title */}
        <div className="text-center flex flex-col justify-center mb-12 md:mb-16">
          <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Achivements
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Latest Achievements
          </h2>

          <div className="flex justify-center items-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* swiperjs slider */}
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <Carousel
            autoPlay
            interval={2500}
            infiniteLoop
            transitionTime={600}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            stopOnHover={false}
            swipeable
            emulateTouch
          >
            {students.map((student) => (
              <div
                key={student.id}
                className="px-1 xs:px-2 sm:px-4 py-4 sm:py-5"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 xs:p-7 sm:p-10 md:p-12 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl border-2 border-[#364bc5]/10 hover:border-[#364bc5] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#364bc5] to-[#5b6fd8]"></div>

                  <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-3 sm:border-4 border-[#364bc5] shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center shadow-md border-2 sm:border-3 border-white animate-pulse">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight px-2 sm:px-0">
                    {student.name}
                  </h3>

                  <p className="text-sm xs:text-base sm:text-lg font-semibold text-[#364bc5] mb-1 sm:mb-1.5 px-2 sm:px-0">
                    {student.title}
                  </p>

                  <p className="text-xs xs:text-sm text-gray-600 mb-4 sm:mb-5 font-medium px-2 sm:px-0">
                    {student.institution}, {student.country}
                  </p>

                  <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
                    {student.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
