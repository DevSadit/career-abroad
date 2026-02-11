import Title from "@/app/_shared/Title";
import React from "react";
import Image from "next/image";
import sco_images from "../../../data/sco_images.json";

const Scholarship = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 xl:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head text */}
        <Title
          title={"Scholarships"}
          subtitle={"We approach for our students"}
        />

        {/* Scholarship Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 lg:gap-5">
            {sco_images.map((scholarship, index) => (
              <div
                key={scholarship.id}
                className="group relative h-20 sm:h-24 md:h-28 lg:h-32 overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <Image
                  src={scholarship.image}
                  alt={scholarship.alt}
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#3d4ece]/0 group-hover:bg-[#3d4ece]/90 transition-all duration-300 flex items-center justify-center p-2">
                  <p className="text-white text-xs font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {scholarship.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
