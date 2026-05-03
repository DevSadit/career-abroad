// "use client";
import Image from "next/image";
import React from "react";
import countries from "../../../data/countries.json";
import Link from "next/link";
import Title from "@/app/_shared/Title";

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
    <section id="faq" className="py-8 md:py-12 lg:py-26 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <Title title={"Faq"} subtitle={" Based On Countries"} />

        {/* Countries Pill Row */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 mt-8">
          {countries.filter(c => c.code !== "pl").map((country, index) => (
            <Link
              href={country.href}
              key={country.code}
              className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-gray-200 bg-white hover:border-[#364bc5] hover:bg-[#364bc5]/5 hover:shadow-md transition-all duration-200 shrink-0"
              style={{ animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both` }}
            >
              {country.flagPath && (
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src={country.flagPath}
                    alt={`${country.name} flag`}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#364bc5] transition-colors duration-200 whitespace-nowrap">
                {country.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
