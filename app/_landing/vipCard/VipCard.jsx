import Image from "next/image";
import React from "react";

const VipCard = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 md:p-8">
      <div className="relative border border-[#364bc5] w-full max-w-7xl h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] bg-linear-to-r from-white to-blue-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
        {/* VIP Badge */}
        <div className="absolute top-5 -right-8 bg-linear-to-r from-yellow-400 to-yellow-300 text-[#364bc5] px-12 py-2 font-black text-xs tracking-widest rotate-45 shadow-lg z-10">
          PREMIUM
        </div>

        {/* Main Layout - Horizontal Split */}
        <div className="h-full flex flex-col md:flex-row">
          {/* Left Section - Course Info */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 border-r-0 md:border-r-2 border-slate-200">
            {/* Header */}
            <div className="relative bg-linear-to-r from-[#364bc5] to-[#4a5fd8] px-6 py-6 rounded-2xl overflow-hidden mb-6">
              <div className="absolute -top-20 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                  Complete Mentorship Program
                </h1>
                <p className="text-sm md:text-base text-white/95 font-medium mb-4">
                  Your Agency-Free Path to Study Abroad Success
                </p>

                <div className="flex gap-4 items-center flex-wrap">
                  <div className="inline-flex items-baseline gap-2 bg-white/20 backdrop-blur-lg px-5 py-2.5 rounded-full border-2 border-white/30">
                    <span className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-lg">
                      €150
                    </span>
                  </div>
                  <div className="bg-white/25 text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm border-2 border-white/30">
                    30 SESSIONS
                  </div>
                </div>
              </div>
            </div>

            {/* Goal Section */}
            <div className="bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-[#364bc5] px-4 md:px-5 py-3 md:py-4 rounded-xl mb-5 shadow-sm">
              <div className="text-xs font-black text-[#364bc5] tracking-widest mb-2">
                🎯 YOUR GOAL
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                Get end-to-end guidance for your full abroad journey — from
                profile building to visa — with a structured 30-session roadmap.
              </p>
            </div>

            {/* What You'll Master */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-linear-to-r from-[#364bc5] to-[#4a5fd8] rounded-full"></div>
                <h2 className="text-base md:text-lg font-black text-[#364bc5]">
                  What {"You'll"} Master
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-2.5 max-h-96 md:max-h-none overflow-y-auto md:overflow-visible">
                {[
                  "Profile evaluation + goal setting + a personalized Plan A/B/C (Safe/Moderate/Ambitious)",
                  "Building a scholarship-ready profile package (CV + LinkedIn + LOR plan)",
                  "SOP & Motivation development with a step-by-step writing and refinement system",
                  "University and program shortlisting using fit-based criteria (supervisor/lab/funding reality)",
                  "Professor/admission/scholarship emailing strategy with templates and follow-up rules",
                  "Application execution: portal handling, document packaging, deadline tracking, submission workflow",
                  "Scholarship strategy: eligibility mapping, document set, timeline planning, tracker setup",
                  "Visa preparation: documentation checklist, financial presentation, study plan, refusal-risk reduction",
                  "Mock interview preparation (visa/interview basics) + final readiness checklist",
                  "A complete personal system: trackers, templates, and routines so you can apply independently in future cycles",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2.5 p-2.5 md:p-3 bg-white rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-[#364bc5] hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="min-w-6 h-6 bg-linear-to-r from-[#364bc5] to-[#4a5fd8] text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Deliverables */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-linear-to-r from-[#364bc5] to-[#4a5fd8] rounded-full"></div>
                <h2 className="text-base md:text-lg font-black text-[#364bc5]">
                  Premium Deliverables
                </h2>
              </div>

              <div className="bg-linear-to-r from-yellow-50 to-yellow-100 px-4 md:px-5 py-4 md:py-5 rounded-xl border-2 border-yellow-400">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Personalized shortlist + Plan A/B/C roadmap",
                    "Scholarship tracker + application deadline tracker",
                    "SOP framework + revision checklist",
                    "Email templates + follow-up templates",
                    "Visa documentation checklist",
                    "Mock interview question bank",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-yellow-400 text-[#364bc5] rounded-full flex items-center justify-center font-black text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Perfect For */}
            <div className="bg-linear-to-r from-green-50 to-green-100 border-l-4 border-green-500 px-4 md:px-5 py-3 md:py-4 rounded-xl">
              <div className="text-xs font-black text-green-700 tracking-widest mb-2">
                ✨ PERFECT FOR
              </div>
              <p className="text-xs md:text-sm text-green-900 font-semibold leading-relaxed">
                Serious applicants who want full guidance across one application
                cycle (and want to stay agency-free).
              </p>
            </div>
          </div>

          {/* Right Section - CTA Area */}
          <div className="w-full md:w-80 lg:w-96 flex flex-col justify-end p-6 md:p-8 lg:p-10 bg-linear-to-r from-slate-50 to-blue-50">
            <div className="space-y-5">
              {/*  */}
              <div className="bg-linear-to-r from-yellow-400 to-yellow-500 p-4 rounded-xl text-center shadow-lg">
                <div className="text-xs font-black text-[#364bc5] mb-1">
                  ⚡ LIMITED OFFER
                </div>
                <div className="text-lg font-black text-white">
                  Save €50 Today!
                </div>
                <div className="text-xs font-semibold text-[#364bc5] mt-1">
                  Regular Price: €200
                </div>
              </div>
              {/* Class Info */}
              <div className="text-center py-4 px-5 bg-white rounded-xl shadow-sm border border-slate-200">
                <p className="text-xs md:text-sm text-[#364bc5] font-bold leading-relaxed">
                  📚 10 Recorded Sessions + 20 Live Interactive Sessions
                </p>
                <p className="text-xs text-slate-600 font-semibold mt-2">
                  Includes Courses A-F
                </p>
              </div>

              {/* Benefits Quick List */}
              <div className="space-y-2">
                {[
                  "✓ Lifetime Access",
                  "✓ Personalized Guidance",
                  "✓ All Templates Included",
                  "✓ Agency-Free Journey",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-linear-to-r from-[#364bc5] to-[#4a5fd8] text-white py-5 px-8 text-base md:text-lg font-black rounded-xl uppercase tracking-wide shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipCard;
