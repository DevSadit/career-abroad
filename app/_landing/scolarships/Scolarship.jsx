import Title from "@/app/_shared/Title";
import React from "react";
import Image from "next/image";
import sco_images from "../../../data/sco_images.json";

const Scholarship = () => {
  return (
    <section className="py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head text */}
        <Title
          title={"Scholarships"}
          subtitle={"We approach for our students"}
        />

        {/* Scholarship Grid */}
        <div className="mt-12 md:mt-16">
          {/* Responsive masonry-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
            {sco_images.map((scholarship, index) => (
              <div
                key={scholarship.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Image */}
                <Image
                  src={scholarship.image}
                  alt={scholarship.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#3d4ece]/0 group-hover:bg-[#3d4ece]/90 transition-all duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {scholarship.name}
                  </p>
                </div>

                {/* Number badge */}
                <div className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-[#3d4ece]">
                    {scholarship.id}
                  </span>
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
