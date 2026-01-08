"use client";

import Link from "next/link";
import React from "react";
import Videos from "../_shared/Videos";
import videos from "../../data/videos.json";
const Page = () => {
  const primary = "#364bc5";

  // ✅ Put your 5/6 images inside: /public/about/
  // Rename like these (example):
  // /public/about/timeline-1.png
  // /public/about/flowchart-1.png
  // /public/about/plans-1.png
  // /public/about/portals-1.png
  // /public/about/roadmap-1.png
  // /public/about/visa-roadmap-1.png
  //   const images = [
  //     { src: "/about/timeline-1.png", alt: "One year timeline" },
  //     { src: "/about/flowchart-1.png", alt: "Higher study flowchart" },
  //     { src: "/about/plans-1.png", alt: "Classified plans" },
  //     { src: "/about/portals-1.png", alt: "Central portals" },
  //     { src: "/about/roadmap-1.png", alt: "Higher study roadmap" },
  //     { src: "/about/visa-roadmap-1.png", alt: "Visa application roadmap" },
  //   ];

  return (
    <section className="min-h-screen bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="rounded-3xl bg-white overflow-hidden">
          <div className="">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
              style={{
                borderColor: `${primary}22`,
                backgroundColor: `${primary}08`,
                color: primary,
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: primary }}
              />
              Career Abroad Mentorship
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              About Us
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              আমাদের যাত্রা
            </p>

            <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: main story */}
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                  <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-800">
                    <p>
                      আমাদের যাত্রা খুব দীর্ঘ নয়, কিন্তু উদ্দেশ্যটি স্পষ্ট,
                      বাংলাদেশি শিক্ষার্থীদের ইউরোপে উচ্চশিক্ষা অর্জনের পথে সঠিক
                      দিকনির্দেশনা দেওয়া।
                    </p>

                    <p>
                      প্রতি বছর অ্যাপ্লিকেশন সিজনে বিপুল সংখ্যক শিক্ষার্থী
                      আমাদের মতো বিদেশে পড়তে আসা সিনিয়রদের সাথে যোগাযোগ করেন
                      তথ্য ও পরামর্শের জন্য। একই প্রশ্ন ও বিভ্রান্তি বারবার
                      শুনে, আমাদের টিম লিডার এহসান সানি ফ্রান্সে উচ্চশিক্ষা
                      বিষয়ে ধারাবাহিকভাবে কিছু শিক্ষামূলক কনটেন্ট তৈরির উদ্যোগ
                      নেন — যেন যে কেউ নিজের প্রস্তুতি শুরু করতে পারে
                      নির্ভরযোগ্য তথ্যের মাধ্যমে।
                    </p>

                    <p>
                      তার ইউটিউব ভিডিও সিরিজের মধ্যে — ফ্রান্সে মাস্টার্স,
                      ব্যাচেলর প্রোগ্রাম, স্টুডেন্ট লাইফ, এবং ভিসা প্রসেসিং
                      বিশেষভাবে প্রশংসিত। পাশাপাশি তিনি ইউরোপের বিভিন্ন দেশের
                      Scholarship নিয়েও নিয়মিত লেখালেখি করেন ফেসবুক পেজ ও
                      টেলিগ্রাম চ্যানেলে। প্রতিটি কনটেন্ট ও Scholarship তথ্য
                      তিনি যাচাই-বাছাই ও গবেষণার মাধ্যমে প্রকাশ করেন।
                    </p>

                    <p>
                      এই ধারাবাহিক প্রচেষ্টার মধ্যেই অসংখ্য শিক্ষার্থী তাদের
                      উচ্চশিক্ষার ফাইল প্রসেস করার অনুরোধ জানাতে শুরু করেন।
                      কিন্তু নৈতিকতার জায়গা থেকে, তিনি কখনোই প্রচলিত এজেন্সি
                      পদ্ধতিতে কাজ করতে স্বাচ্ছন্দ্যবোধ করেননি। কারণ, বহু
                      এজেন্সি শিক্ষার্থীদের কাছে বিভ্রান্তিকর তথ্য প্রদান করে বা
                      ভিসা পরবর্তী মোটা অঙ্কের অর্থ দাবি করে থাকে, যা একজন সচেতন
                      মেন্টর হিসেবে তাঁর মূল্যবোধের সাথে সঙ্গতিপূর্ণ নয়। তিনি
                      বরং বিশ্বাস করেন — উচ্চশিক্ষার স্বপ্ন বিক্রি নয়, বরং সঠিক
                      দিকনির্দেশনা ও হাতে-কলমে প্রশিক্ষণ দিয়েই শিক্ষার্থীদের
                      আত্মনির্ভর করা যায়।
                    </p>

                    <p>
                      এই বিশ্বাস থেকেই তৈরি হয় Career Abroad Mentorship—একটি
                      Learning প্ল্যাটফর্ম, যেখানে শিক্ষার্থীরা এজেন্সির ওপর
                      নির্ভর না করে নিজেই আবেদন করতে শিখবে, এবং আমাদের মেন্টররা
                      ধাপে ধাপে গাইড করবে।
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: key points card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-gray-50">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    এখানে আপনি হাতে-কলমে শিখবেন
                  </p>

                  <ul className="mt-4 space-y-3 text-sm sm:text-[15px] text-gray-800">
                    {[
                      "নিজের প্রোফাইল অনুযায়ী ইউনিভার্সিটি ও স্কলারশিপ খোঁজা ও শর্টলিস্টিং",
                      "Academic CV, LinkedIn, Portfolio",
                      "কার্যকর SOP/Motivation Letter তৈরি",
                      "Professor/Admission-এ যোগাযোগের জন্য ইমেইল লেখা ও follow-up",
                      "অ্যাপ্লিকেশন ট্র্যাকিং, ডকুমেন্ট অর্গানাইজেশন, এবং প্রস্তুতির সিস্টেম",
                      "ভিসা ডকুমেন্টেশন ও মক ইন্টারভিউ প্রিপারেশন (দেশভেদে)",
                    ].map((t, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: primary }}
                        />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-6 rounded-2xl border p-4"
                    style={{
                      borderColor: `${primary}22`,
                      backgroundColor: `${primary}08`,
                    }}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{ color: primary }}
                    >
                      September 2026 intake
                    </p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                      বর্তমানে আমরা September 2026 intake-এর জন্য নিবেদিতভাবে
                      কাজ করছি। আমাদের দৃঢ় বিশ্বাস—এই ব্যাচ থেকেই বেশ কয়েকজন
                      ফুল-ফান্ডেড স্কলার বেরিয়ে আসবে, যা বাংলাদেশি শিক্ষার্থীদের
                      জন্য নতুন একটি উদাহরণ তৈরি করবে।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Continued text */}
            <div className="mt-6 rounded-2xl border border-gray-200 p-5 sm:p-6">
              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-800">
                <p>
                  এহসান সানি তার সাথে থাকা কিছু সফল বর্তমান/প্রাক্তন আন্তর্জাতিক
                  শিক্ষার্থীদের নিয়ে গঠন করেন Career Abroad Mentors Panel।
                  ইতোমধ্যে আমরা বিভিন্ন ফ্রি সেশন, ওয়েবিনার আয়োজন করেছি এবং ৬০০+
                  সদস্যের একটি কমিউনিটির মাধ্যমে নিয়মিত গাইডলাইন দিয়ে যাচ্ছি। এই
                  প্ল্যাটফর্মটি তৈরির পূর্বে এহসান সানি এবং শাফকাত ইসলাম টুম্পা
                  ব্যক্তিগতভাবে বেশ কজন Higher Study Aspirant দের গাইড করে
                  বিদেশের বিভিন্ন ইউনিভার্সিটি গুলোতে স্কলারশিপ-ফান্ডিং সহ
                  এডমিশন পেতে সহযোগিতা করেছেন।
                </p>

                <p>
                  আমাদের মেন্টর প্যানেল এর মোটামুটি সবাই বিভিন্ন
                  ফান্ডিং-স্কলারশিপ নিয়ে তাদের উচ্চশিক্ষার যাত্রাটা শুরু
                  করেছিলেন, এবং এখন অনুজদের পথ দেখিয়ে যাচ্ছেন।
                </p>
              </div>
            </div>
          </div>

          {/* Accent bottom line (clean, not flashy) */}
          <div className="h-1.5" style={{ backgroundColor: primary }} />
        </div>

        {/* VIDEOS */}
        <Videos videos={videos} />

        {/* Footer CTA */}
        <div className="mt-12">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Ready to start your higher study journey?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Learn the process step-by-step and become independent—without
                agency dependency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href={"/complete-mentorship-program"}
                className="w-full md:w-auto rounded-2xl px-6 py-3.5 text-sm font-semibold text-white"
                style={{ backgroundColor: primary }}
              >
                Explore Mentorship
              </Link>
              <Link
                href={"https://wa.me/34613593236"}
                className="w-full md:w-auto rounded-2xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
