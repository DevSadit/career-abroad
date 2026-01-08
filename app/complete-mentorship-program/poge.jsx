"use client";
import React from "react";
import {
  CheckCircle,
  BookOpen,
  Users,
  Award,
  FileText,
  Mail,
  Globe,
  Shield,
  Target,
  Sparkles,
} from "lucide-react";

const Page = () => {
  const learningPoints = [
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
  ];

  const deliverables = [
    { icon: Target, text: "Personalized shortlist + Plan A/B/C roadmap" },
    {
      icon: FileText,
      text: "Scholarship tracker + application deadline tracker",
    },
    { icon: BookOpen, text: "SOP framework + revision checklist" },
    { icon: Mail, text: "Email templates + follow-up templates" },
    {
      icon: Shield,
      text: "Visa documentation checklist + mock interview question bank",
    },
  ];

  const features = [
    { icon: BookOpen, label: "30 Sessions", value: "10 Recorded + 20 Live" },
    { icon: Award, label: "All-in-One", value: "Courses A to F Included" },
    { icon: Users, label: "Expert Guidance", value: "End-to-End Support" },
    { icon: Globe, label: "Agency-Free", value: "Independent Journey" },
  ];

  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 xl:py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#485dd7]/5 to-[#5a6fe3]/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-linear-to-br from-[#485dd7] via-[#5a6fe3] to-[#485dd7] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>

            {/* Premium Badge */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20">
              <div className="relative">
                <div
                  className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-yellow-300 to-yellow-500 rounded-full animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center border-4 border-white transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center px-2">
                    <div className="text-[#485dd7] font-black text-xs md:text-sm leading-tight">
                      ALL COURSE
                    </div>
                    <div className="text-[#485dd7] font-black text-xs md:text-sm leading-tight">
                      IN ONE
                    </div>
                  </div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-2 left-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                <span className="text-white/90 text-sm md:text-base font-semibold">
                  Most Popular
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                Complete Mentorship Program
              </h1>

              <p className="text-lg md:text-xl text-white/95 font-medium mb-8 max-w-3xl">
                Your Agency-Free Path to Study Abroad Success
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-8">
                <div className="inline-flex items-baseline gap-2 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full border-2 border-white/40 shadow-lg">
                  <span className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-lg">
                    €150
                  </span>
                </div>
                <div className="bg-white/25 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-xl md:text-2xl border-2 border-white/40 shadow-lg">
                  30 SESSIONS
                </div>
              </div>

              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-4xl">
                Get end-to-end guidance for your full abroad journey — from
                profile building to visa — with a structured 30-session roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#485dd7]/30 group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-gray-600 font-medium mb-1">
                {feature.label}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {feature.value}
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mt-12 md:mt-16 bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {"What's"} Included
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-[#485dd7]">
                All courses A to F are included.
              </span>{" "}
              Courses G & H are not included in this package.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What {"You'll"} Learn
            </h2>
          </div>

          <div className="grid gap-4 md:gap-5">
            {learningPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#485dd7]/30 group"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-12 md:mt-16 bg-linear-to-br from-[#485dd7]/5 to-[#5a6fe3]/5 rounded-3xl p-8 md:p-12 border border-[#485dd7]/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Deliverables
            </h2>
          </div>

          <div className="grid gap-4 md:gap-5">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#485dd7]/30 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#485dd7] to-[#5a6fe3] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed flex-1 pt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best For */}
        <div className="mt-12 md:mt-16 bg-linear-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-yellow-200/50 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Best For
            </h2>
          </div>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            Serious applicants who want full guidance across one application
            cycle (and want to stay agency-free).
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => (window.location.href = "#enrollment")}
            className="inline-block bg-linear-to-r from-[#485dd7] to-[#5a6fe3] text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Enroll Now - €150
          </button>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Limited seats available. Start your journey today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
