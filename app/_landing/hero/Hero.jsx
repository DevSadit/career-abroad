import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import StatsCounter from "./StatsCounter";

const Hero = () => {
  const features = [
    { text: "Best Mentors Guidance" },
    { text: "Trusted by Students" },
    { text: "Realistic Informations" },
    { text: "Live One on One Classes" },
  ];
  return (
    <section
      id="/"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-14"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Right Side - Image (appears first on mobile) */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative">
              {/* Soft background glow */}
              <div className="absolute "></div>

              {/* Simple image with clean styling */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#364bc5] rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#364bc5] rounded-br-3xl"></div>

                <Image
                  src={"/MentorsPanel.png"}
                  width={600}
                  height={700}
                  alt="Students studying abroad"
                  className="w-full rounded-xl h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>

          {/* Left Side - Content (appears second on mobile) */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-[#364bc5] bg-clip-text">Career Abroad</span>{" "}
              Mentors
            </h1>
            {/* Underline decoration */}
            <div className="w-20 md:w-28 h-1 bg-indigo-600 rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              LIVE guidance to help you win scholarships, funding, admission,
              and visas for studying abroad. Connect directly with mentors who
              are currently studying/working abroad and learn the complete
              process through interactive 1:1 sessions + recordings.
            </p>

            {/* features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-indigo-600">
                      <FaCheck className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* btn */}
            <div className="pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto">
                <Link
                  href={"/complete-mentorship-program"}
                  className="bg-[#364bc5] hover:bg-[#2a3ba0] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-between gap-2"
                >
                  Mentorship
                  <FaArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
                <Link
                  href={"/#courses"}
                  className="bg-[#364bc5] hover:bg-[#2a3ba0] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-between gap-2"
                >
                  Courses
                  <FaArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
                <Link
                  href={"/services"}
                  className="border-2 border-[#364bc5] text-[#364bc5] hover:bg-[#364bc5] hover:text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 inline-flex items-center justify-between gap-2"
                >
                  Services
                  <FaArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
                <Link
                  href={"/scholarships"}
                  className="border-2 border-[#364bc5] text-[#364bc5] hover:bg-[#364bc5] hover:text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 inline-flex items-center justify-between gap-2"
                >
                  Scholarships
                  <FaArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>

              {/* Stats or Features */}
              <StatsCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
