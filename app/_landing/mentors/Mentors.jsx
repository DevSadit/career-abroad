import Image from "next/image";
import React from "react";
import mentors from "../../../data/mentors.json";
import MentorCard from "./MentorCard";
import Title from "@/app/_shared/Title";

const Mentors = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <Title title={"Mentors"} subtitle={"Our Expert Mentors"} />

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
