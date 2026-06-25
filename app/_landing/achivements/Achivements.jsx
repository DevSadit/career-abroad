"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import students from "../../../data/students.json";
import Title from "@/app/_shared/Title";

const INTERVAL = 5000;

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

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

function AchievementCard({ student }) {
  return (
    <div className="group h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#364bc5]/10 hover:border-[#364bc5]/30 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[#364bc5] to-indigo-400" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Badge */}
        <div className="inline-flex self-start items-center gap-2 bg-[#364bc5]/8 border border-[#364bc5]/20 text-[#364bc5] text-xs font-semibold px-3 py-1.5 rounded-full">
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {student.quote}
        </div>

        {/* Student */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#364bc5]/25 transition-all duration-300 shrink-0">
            <Image
              src={student.image}
              alt={student.name}
              width={64}
              height={64}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 group-hover:text-[#364bc5] transition-colors duration-200 truncate">
              {student.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate">{student.affiliation}</p>
          </div>
        </div>

        {/* University & Country */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">{student.university}</p>
            <p className="text-xs text-gray-500 truncate">{student.program}</p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-2.5 py-1 text-xs font-semibold text-slate-600">
            <span className="text-base leading-none">{countryFlag[student.country] ?? "🌍"}</span>
            {student.country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Achivements() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(true);
  const visibleCount = useVisibleCount();
  const total = students.length;

  // Duplicate for seamless infinite loop
  const items = [...students, ...students];
  const slidePercent = 100 / visibleCount;

  const goNext = useCallback(() => setCurrent((p) => p + 1), []);
  const goPrev = () => setCurrent((p) => p - 1);

  // Snap back silently when reaching clone boundary
  useEffect(() => {
    if (current >= total) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setTransitioning(true))
        );
      }, 520);
      return () => clearTimeout(t);
    }
    if (current < 0) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrent(total - 1);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setTransitioning(true))
        );
      }, 520);
      return () => clearTimeout(t);
    }
  }, [current, total]);

  // Reset position on breakpoint change
  useEffect(() => {
    setCurrent(0);
  }, [visibleCount]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, INTERVAL);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const dotActive = ((current % total) + total) % total;

  return (
    <section id="achivement" className="pt-8 md:pt-12 lg:pt-20 xl:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title={"Achievements"} subtitle={"Our Achievements"} />

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev arrow */}
          <button
            onClick={goPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-[#364bc5] hover:text-white hover:border-[#364bc5] transition-all duration-200 text-gray-600"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={goNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-[#364bc5] hover:text-white hover:border-[#364bc5] transition-all duration-200 text-gray-600"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * slidePercent}%)`,
                transition: transitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {items.map((student, i) => (
                <div
                  key={i}
                  style={{ minWidth: `${slidePercent}%` }}
                  className="px-3 box-border"
                >
                  <AchievementCard student={student} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {students.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === dotActive
                    ? "w-6 h-2 bg-[#364bc5]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
