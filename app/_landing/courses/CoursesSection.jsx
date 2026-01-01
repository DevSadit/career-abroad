import Image from "next/image";
import React from "react";
import courses from "../../../../data/courses.json";
import CourseCard from "./CourseCard";
const CoursesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <div className="space-y-2 md:space-y-4">
          <span className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Courses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Most Popular Courses
          </h2>

          <div>
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* card section */}
        <div className=" my-4 grid grid-cols-1 md:grid-cols-2 ">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
