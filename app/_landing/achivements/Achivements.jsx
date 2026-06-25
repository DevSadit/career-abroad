"use client";
import Image from "next/image";
import React from "react";
import students from "../../../data/students.json";
import Title from "@/app/_shared/Title";

const countryFlag = {
  France: "🇫🇷",
  Belgium: "🇧🇪",
  USA: "🇺🇸",
  Germany: "🇩🇪",
  Spain: "🇪🇸",
  Italy: "🇮🇹",
  Austria: "🇦🇹",
  Hungary: "🇭🇺",
  Estonia: "🇪🇪",
};

const Achivements = () => {
  return (
    <section id="achivement" className="pt-8 md:pt-12 lg:pt-20 xl:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title={"Achievements"} subtitle={"Our Achievements"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#364bc5]/10 hover:border-[#364bc5]/30 transition-all duration-400 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#364bc5] to-indigo-400" />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Achievement badge */}
                <div className="inline-flex self-start items-center gap-2 bg-[#364bc5]/8 border border-[#364bc5]/20 text-[#364bc5] text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {student.quote}
                </div>

                {/* Student info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#364bc5]/25 transition-all duration-300 shrink-0">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#364bc5] transition-colors duration-200 truncate">
                      {student.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{student.affiliation}</p>
                  </div>
                </div>

                {/* University & country */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{student.university}</p>
                    <p className="text-xs text-gray-500">{student.program}</p>
                  </div>
                  <span
                    className="shrink-0 inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-2.5 py-1 text-xs font-semibold text-slate-600"
                    title={student.country}
                  >
                    <span className="text-base leading-none">{countryFlag[student.country] ?? "🌍"}</span>
                    {student.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achivements;
