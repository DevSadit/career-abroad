"use client";
import Image from "next/image";
import React from "react";
import students from "../../../data/students.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "@/app/_shared/Title";
const Achivements = () => {
  return (
    <section id="achivement" className="pt-8 md:pt-12 lg:pt-26 xl:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head title */}
        <Title title={"Achivements"} subtitle={"Our Achievements"} />

        {/* slider */}
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <Carousel
            autoPlay
            interval={3000}
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
              <div key={student.id} className="px-3 py-6">
                <div className="bg-white border-4 border-[#364bc5] rounded-lg p-8 sm:p-10 text-center relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 left-4 text-5xl md:text-8xl font-bold text-[#364bc5]">
                    “
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base md:text-lg italic text-gray-600 max-w-3xl mx-auto mb-6">
                    {student.quote}
                    <br />
                    <span className="block mt-2 font-medium">
                      {student.university}, {student.country}
                    </span>
                  </p>

                  {/* Divider */}
                  <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>

                  {/* Student Image */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gray-300">
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-[#364bc5]">
                    {student.name}
                  </h3>

                  {/* Affiliation */}
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    {student.affiliation}
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
