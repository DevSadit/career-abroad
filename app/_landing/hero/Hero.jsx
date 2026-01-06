import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Hero = () => {
  const features = [
    { text: "Best Mentor & Programs" },
    { text: "Trusted by Students" },
    { text: "Online Mentorship" },
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
                  src="/MentorsPanel.PNG"
                  width={600}
                  height={700}
                  alt="Students studying abroad"
                  className="w-full rounded-xl h-auto"
                  quality={100}
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
              Mentorship
            </h1>
            {/* Underline decoration */}
            <div className="w-20 md:w-28 h-1 bg-indigo-600 rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              LIVE guidance to help you win scholarships, funding, and admission
              for graduate studies abroad. Connect directly with mentors who are
              currently studying/working abroad and learn the complete process
              through interactive LIVE classes + recordings.
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
              <div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 md:gap-3">
                  View All Program
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stats or Features */}
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-5 md:pt-2">
                <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
                  <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">
                    100+
                  </p>
                  <p className="text-sm text-gray-600">Universities</p>
                </div>
                <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 delay-75">
                  <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">
                    3+
                  </p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
                <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 delay-150">
                  <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">
                    200+
                  </p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
