"use client";
import Image from "next/image";
import React from "react";
import countries from "../../../../data/countries.json";

const Faq = () => {
  if (!countries || countries.length === 0) {
    return (
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            No countries data available
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12 lg:py-26 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <div className="text-center flex flex-col justify-center mb-12 md:mb-16">
          <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Faq
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Based On Countries
          </h2>

          <div className="flex justify-center items-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {countries.map((country, index) => (
            <div
              key={country.code}
              className="group relative bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-[#364bc5] transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#364bc5]/10 cursor-pointer transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#364bc5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative flex flex-col items-center justify-center space-y-4">
                {/* Flag Container */}
                <div className="relative w-24 h-24 rounded-full bg-linear-to-brr from-[#364bc5]/10 to-[#364bc5]/5 p-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg group-hover:shadow-[#364bc5]/20 transition-shadow duration-300">
                    {country.flagPath && (
                      <Image
                        src={country.flagPath}
                        alt={`${country.name} flag`}
                        width={64}
                        height={64}
                        className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </div>
                </div>

                {/* Country Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#364bc5] transition-colors duration-300">
                  {country.name}
                </h3>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-linear-to-br from-transparent via-[#364bc5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#364bc5]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;
