import Image from "next/image";
import React from "react";
import courses from "../../../data/courses.json";
import CourseCard from "./CourseCard";
import Link from "next/link";
import PremiumCard from "@/app/_shared/PremiumCard";
import Title from "@/app/_shared/Title";
const CoursesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <Title title={"Courses"} subtitle={"Our All Courses"} />

        {/* card section */}
        <div className=" my-4 gap-5 grid grid-cols-1 md:grid-cols-3 ">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
