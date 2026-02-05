"use client";
import React from "react";
import Courses from "../_shared/Courses";
import vedio_courses from "../../data/vedio_courses.json";
const Page = () => {
  return (
    <section className="min-h-screen bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Courses courses={vedio_courses} />
      </div>
    </section>
  );
};

export default Page;
