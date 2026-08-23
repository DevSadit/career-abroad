"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import reviews from "../../data/reviews.json";

const PRIMARY = "#364bc5";
const INTERVAL = 6000;

function useVisibleCount() {
  const [count, setCount] = useState(2);
  useEffect(() => {
    const update = () => setCount(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const WA_SVG = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ReviewsCarousel() {
  const visibleCount = useVisibleCount();
  const total = reviews.length;
  const items = [...reviews, ...reviews];
  const slidePercent = 100 / visibleCount;

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => setCurrent((p) => p + 1), []);
  const goPrev = () => setCurrent((p) => p - 1);

  // Infinite-loop snap-back
  useEffect(() => {
    if (current >= total) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setTransitioning(true)));
      }, 520);
      return () => clearTimeout(t);
    }
    if (current < 0) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrent(total - 1);
        requestAnimationFrame(() => requestAnimationFrame(() => setTransitioning(true)));
      }, 520);
      return () => clearTimeout(t);
    }
  }, [current, total]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, INTERVAL);
    return () => clearInterval(id);
  }, [paused, goNext]);

  // Reset on resize
  useEffect(() => { setCurrent(0); }, [visibleCount]);

  const dotActive = ((current % total) + total) % total;

  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
      <div className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-wider text-gray-500">Student Reviews</p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">What Our Students Say</h2>
        <p className="mt-1 text-sm text-gray-500">
          Real feedback shared in our WhatsApp group after receiving their visas.
        </p>

        {/* Carousel */}
        <div
          className="relative mt-7"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Track */}
          <div className="overflow-hidden mx-4">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * slidePercent}%)`,
                transition: transitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {items.map((r, i) => (
                <div key={i} style={{ minWidth: `${slidePercent}%` }} className="px-3 box-border">
                  <div
                    className="flex flex-col h-full rounded-2xl border bg-white p-5"
                    style={{ borderColor: `${PRIMARY}22`, borderTop: `3px solid ${PRIMARY}` }}
                  >
                    {/* Date badge */}
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className="text-4xl font-serif leading-none select-none"
                        style={{ color: `${PRIMARY}30` }}
                      >
                        ❝
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                        {r.date}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">{r.text}</p>

                    {/* Attribution */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100">
                          <Image
                            src={r.photo}
                            alt={r.name}
                            width={44}
                            height={44}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                          <p className="text-xs text-gray-500">{r.program}</p>
                          <p className="text-xs text-gray-400">{r.university}</p>
                        </div>
                      </div>
                      <span
                        className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        {WA_SVG} WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: dotActive === i ? "24px" : "8px",
                height: "8px",
                backgroundColor: dotActive === i ? PRIMARY : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
      <div className="h-1.5" style={{ backgroundColor: PRIMARY }} aria-hidden="true" />
    </div>
  );
}
