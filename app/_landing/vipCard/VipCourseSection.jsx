import Image from "next/image";
import React from "react";
import VipCard from "./VipCard";

const VipCourseSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Most Popular Course
          </h2>

          <div>
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* vip course card */}
        <VipCard />
      </div>
    </section>
  );
};

export default VipCourseSection;
