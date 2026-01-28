import Image from "next/image";
import React from "react";
import courses from "../../../data/courses.json";
import CourseCard from "./CourseCard";
import Link from "next/link";
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
            Our All Courses
          </h2>

          <div>
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* premium mentorship programme card */}
        <div className="max-w-full mx-auto my-9 text-center">
          <div className="relative bg-linear-to-r from-[#485dd7] via-[#5a6fe3] to-[#485dd7] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/10 rounded-full blur-3xl"></div>

            {/* Animated linear overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-50"></div>

            {/* Premium Sticker Badge */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20">
              <div className="relative">
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-yellow-300 to-yellow-500 rounded-full animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>

                {/* Main badge */}
                <div className="relative w-20 h-20 md:w-30 md:h-30 bg-linear-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center border-4 border-white transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center px-2">
                    <div className="text-[#485dd7] font-black text-xs md:text-sm leading-tight">
                      ALL COURSE
                    </div>
                    <div className="text-[#485dd7] font-black text-xs md:text-sm leading-tight">
                      IN ONE
                    </div>
                  </div>

                  {/* Sparkle effects */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-2 left-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                Our Most Popular Course
              </h3>

              <div className="my-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-yellow-300 mb-2 tracking-tight drop-shadow-lg">
                  Complete Mentorship Program
                </h1>
                <p className="text-sm md:text-base text-white/95 font-medium">
                  Your Agency-Free Path to Study Abroad Success
                </p>

                <div className="flex gap-4 items-center justify-center flex-wrap my-5">
                  <div className="inline-flex items-baseline gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border-2 border-white/40 shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl font-black text-yellow-300 drop-shadow-lg">
                      €150
                    </span>
                  </div>
                  <div className="bg-white/25 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-xl md:text-2xl border-2 border-white/40 shadow-lg hover:scale-105 transition-transform duration-300">
                    30 SESSIONS
                  </div>
                </div>
              </div>

              <Link
                href={"/complete-mentorship-program"}
                className="inline-block bg-white text-[#485dd7] px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-300 hover:text-[#485dd7] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 mt-2"
              >
                Know More
              </Link>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-300/50 to-transparent"></div>
          </div>
        </div>

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
