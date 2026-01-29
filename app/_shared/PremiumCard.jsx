import Link from "next/link";
import React from "react";

const PremiumCard = () => {
  return (
    <div className="max-w-full mx-auto my-8 md:my-10 px-4 sm:px-6 lg:px-8">
      <div
        className="relative rounded-3xl sm:rounded-4xl overflow-hidden 
    bg-linear-to-br from-[#1E2A78] via-[#485dd7] to-[#1E2A78]
    shadow-[0_30px_80px_rgba(72,93,215,0.4)] md:shadow-[0_40px_120px_rgba(72,93,215,0.45)]"
      >
        {/* Luxury overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-white/10 opacity-60"></div>

        {/* Ambient lights (scaled for screens) */}
        <div
          className="absolute -top-20 -right-20 sm:-top-24 sm:-right-24 
      w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/10 rounded-full blur-[120px]"
        ></div>

        <div
          className="absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 
      w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-[120px]"
        ></div>

        {/* VIP Badge */}
        <div className="absolute top-4 right-4 hidden md:block sm:top-6 sm:right-6 z-20">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-md opacity-60"></div>
            <div
              className="relative px-4 sm:px-5 py-1.5 sm:py-2 
          rounded-full bg-linear-to-r from-yellow-300 to-yellow-500 
          text-[#1E2A78] text-[10px] sm:text-xs font-extrabold tracking-widest shadow-xl"
            >
              FLAGSHIP PROGRAM
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 text-center">
          <p
            className="uppercase tracking-[0.25em] sm:tracking-[0.35em] 
        text-white/70 text-[10px] sm:text-xs mb-3 sm:mb-4"
          >
            Most Popular Program
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-extrabold text-white leading-tight"
          >
            Complete Mentorship Program
          </h1>

          <p
            className="mt-3 sm:mt-4 text-white/90 
        text-sm sm:text-base md:text-lg 
        max-w-xl md:max-w-2xl mx-auto"
          >
            A premium, guidance program designed to guide you step-by-step,
            towards your study abroad success.
          </p>

          {/* Price Section */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center 
        gap-4 sm:gap-6 my-8 sm:my-10"
          >
            <div
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
          bg-white/15 backdrop-blur-xl border border-white/25 shadow-lg"
            >
              <span className="text-3xl sm:text-4xl font-black text-yellow-300">
                €150
              </span>
            </div>

            <div
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
          bg-white/15 backdrop-blur-xl border border-white/25 shadow-lg 
          text-white font-bold text-lg sm:text-xl"
            >
              30 LIVE SESSIONS
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/complete-mentorship-program"
            className="inline-flex items-center gap-2 
          px-8 sm:px-10 py-3.5 sm:py-4 rounded-full 
          bg-linear-to-r from-yellow-300 to-yellow-400 
          text-[#1E2A78] font-bold text-base sm:text-lg
          shadow-[0_18px_50px_rgba(255,215,0,0.45)]
          hover:shadow-[0_30px_80px_rgba(255,215,0,0.6)]
          hover:-translate-y-1 transition-all duration-300"
          >
            Explore Program
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 
      bg-linear-to-r from-transparent via-yellow-300 to-transparent"
        ></div>
      </div>
    </div>
  );
};

export default PremiumCard;
