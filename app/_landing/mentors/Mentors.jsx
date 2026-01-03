import Image from "next/image";
import React from "react";
import mentors from "../../../../data/mentors.json";

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
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-[#364bc5]/10 border border-gray-100 hover:border-[#364bc5]/30 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-r from-[#364bc5] to-indigo-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-4 ring-gray-100 group-hover:ring-[#364bc5]/20 transition-all duration-300 overflow-hidden">
                        <Image
                          className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                          src={mentor.image}
                          width={128}
                          height={128}
                          alt={`${mentor.name} profile`}
                        />
                      </div>
                      {/* Status Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-[#364bc5] text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                        Expert
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Name and Status */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#364bc5] transition-colors duration-300 mb-2">
                        {mentor.name}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-linear-to-r from-[#364bc5]/10 to-indigo-100 border border-[#364bc5]/20">
                        <span className="text-sm md:text-base text-gray-700 font-medium italic">
                          {mentor.currentStatus} in {mentor.institution}
                        </span>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="relative pl-4 border-l-2 border-[#364bc5]/20 group-hover:border-[#364bc5] transition-colors duration-300">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {mentor.experience}
                      </p>
                    </div>

                    {/* Education */}
                    <div className="space-y-2">
                      {mentor.education.map((edu, eduIndex) => (
                        <div
                          key={eduIndex}
                          className="flex items-start gap-2 group/edu"
                        >
                          <div className="shrink-0 mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#364bc5] group-hover/edu:scale-150 transition-transform duration-300" />
                          </div>
                          <p className="text-sm md:text-base text-gray-700 font-medium group-hover/edu:text-[#364bc5] transition-colors duration-200">
                            {edu}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-1.5 bg-linear-to-r from-transparent via-[#364bc5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
