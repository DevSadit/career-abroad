import Image from "next/image";
import React from "react";
import mentors from "../../../../data/mentors.json";
import MentorCard from "./MentorCard";

const Mentors = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head title */}
        <div className="text-center flex flex-col justify-center mb-12 md:mb-16">
          <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Mentors
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Expert Mentors
          </h2>

          <div className="flex justify-center items-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* mentors grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
