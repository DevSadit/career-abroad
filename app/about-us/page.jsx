import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us | Career Abroad Mentors",
  description: "Learn about Career Abroad Mentors — founded by Ahsan Suny, a PhD researcher at ICIQ Spain, to guide Bangladeshi students through higher education in Europe.",
  openGraph: {
    title: "About Us | Career Abroad Mentors",
    description: "Learn about Career Abroad Mentors — founded by Ahsan Suny, a PhD researcher at ICIQ Spain, to guide Bangladeshi students through higher education in Europe.",
    url: "https://ahsansuny.com/about-us",
    siteName: "Career Abroad Mentors",
    images: [{ url: "https://ahsansuny.com/unnamed.png", width: 800, height: 800, alt: "Career Abroad Mentors" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Us | Career Abroad Mentors",
    description: "Learn about Career Abroad Mentors — founded by Ahsan Suny, a PhD researcher at ICIQ Spain.",
  },
};
import Videos from "../_shared/Videos";
import videos from "../../data/videos.json";
const Page = () => {
  const primary = "#364bc5";

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

            <p
              lang="bn"
              className="font-bn mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl"
            >
              আমাদের যাত্রা
            </p>

            <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: main story */}
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                  <div
                    lang="bn"
                    className="font-bn space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-800"
                  >
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
                      তার ইউটিউব ভিডিও সিরিজের মধ্যে — ফ্রান্সে ও স্পেনে মাস্টার্স,
                      ব্যাচেলর প্রোগ্রাম, স্টুডেন্ট লাইফ, এবং ভিসা প্রসেসিং
                      বিশেষভাবে প্রশংসিত। পাশাপাশি তিনি ইউরোপের বিভিন্ন দেশের
                      Scholarship নিয়েও নিয়মিত লেখালেখি ও ইনফরমেটিভ ভিডিও ব্লগ তৈরী করেন ইউটিউব, ফেসবুক ও
                      ইন্সটাগ্রাম ও টেলিগ্রাম চ্যানেলে। প্রতিটি কনটেন্ট ও Scholarship তথ্য
                      তিনি যাচাই-বাছাই ও গবেষণার মাধ্যমে প্রকাশ করেন।
                    </p>

                    <p>
                      এই ধারাবাহিক প্রচেষ্টার মধ্যেই অসংখ্য শিক্ষার্থী তাদের
                      উচ্চশিক্ষার ফাইল প্রসেস করার অনুরোধ জানাতে শুরু করেন।
                      কিন্তু নৈতিকতার জায়গা থেকে, তিনি কখনোই প্রচলিত এজেন্সি
                      পদ্ধতিতে কাজ করতে স্বাচ্ছন্দ্যবোধ করেননি। কারণ, বহু
                      এজেন্সি শিক্ষার্থীদের কাছে বিভ্রান্তিকর তথ্য প্রদান করে, যা একজন সচেতন
                      মেন্টর হিসেবে তাঁর মূল্যবোধের সাথে সঙ্গতিপূর্ণ নয়। তিনি
                      বরং বিশ্বাস করেন — উচ্চশিক্ষার স্বপ্ন বিক্রি নয়, বরং সঠিক
                      দিকনির্দেশনা ও হাতে-কলমে প্রশিক্ষণ দিয়েই শিক্ষার্থীদের
                      আত্মনির্ভর করা যায়।
                    </p>

                    <p>
                      এই বিশ্বাস থেকেই তৈরি হয় Career Abroad Mentors—একটি
                      Learning প্ল্যাটফর্ম, যেখানে শিক্ষার্থীরা এজেন্সির ওপর
                      নির্ভর না করে নিজেই আবেদন করতে শিখবে, এবং আমাদের মেন্টররা
                      ধাপে ধাপে গাইড করবে।
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: key points card */}
              <div className="lg:col-span-4">
                <div
                  lang="bn"
                  className="font-bn rounded-2xl border border-gray-200 p-5 sm:p-6 bg-gray-50"
                >
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
                          className="mt-1.5 h-2 w-2 rounded-full shrink-0"
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
                      September 2027 intake
                    </p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                      বর্তমানে আমরা September 2027 intake-এর জন্য নিবেদিতভাবে
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
              <div
                lang="bn"
                className="font-bn space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-800"
              >
                <p>
                  এহসান সানি তার সাথে থাকা কিছু সফল বর্তমান/প্রাক্তন আন্তর্জাতিক
                  শিক্ষার্থীদের নিয়ে গঠন করেন Career Abroad Mentors Panel।
                  ইতোমধ্যে আমরা নিয়মিত বিভিন্ন ফ্রি ওয়েবিনার আয়োজন করেছি এবং ২০০০+
                  সদস্যের একটি কমিউনিটির মাধ্যমে নিয়মিত ফ্রি গাইডলাইন দিয়ে যাচ্ছি। পাশাপাশি 
                  আমরা শুধুমাত্র আগ্রহী শিক্ষার্থীদের <a href="/services" className="font-semibold underline underline-offset-2" style={{ color: "#364bc5" }}>স্টুডেন্ট ফাইল</a> নিয়েও কাজ করছি, এবং বিভিন্ন <a href="/scholarships" className="font-semibold underline underline-offset-2" style={{ color: "#364bc5" }}>প্রতিযোগিতামূলক
                  স্কলারশিপ</a> এপলিকেশনে পেইড সাপোর্ট দিচ্ছি। তবে আমরা সর্বদাই স্টুডেন্টদের
                  হাতে কলমে শিখে নিজে নিজে আবেদন ও ভিসা প্রসেস করতে উদবুদ্ধ করি। 
                </p>
              </div>
            </div>
          </div>

          {/* Accent bottom line (clean, not flashy) */}
          <div className="h-1.5" style={{ backgroundColor: primary }} />
        </div>

        {/* FOUNDER */}
        <div className="mt-10">
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {/* Section header */}
            <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border"
                style={{ borderColor: `${primary}22`, backgroundColor: `${primary}08`, color: primary }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: primary }} />
                About Our Founder
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div
                  className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-2xl overflow-hidden border-2 shadow-md"
                  style={{ borderColor: `${primary}33` }}
                >
                  <Image
                    src="/mentors/Suny_Mentor1.png"
                    alt="Ahsan Suny"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-2 w-48 sm:w-56">
                  {[
                    { label: "ICIQ Profile", href: "https://iciq.org/staff/ahsan-md-shahnauze/" },
                    { label: "Research Lab", href: "https://sites.google.com/view/ahsanslab" },
                    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_7HPSf4AAAAJ&hl=en&oi=ao" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/eeehsan94/" },
                    { label: "YouTube", href: "https://www.youtube.com/@AhsanSuny" },
                    { label: "Facebook", href: "https://www.facebook.com/AhsanSunyOfficial/" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-[#364bc5] hover:text-white hover:border-[#364bc5]"
                      style={{ borderColor: `${primary}44`, color: primary }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-3 text-[15px] sm:text-base leading-relaxed text-gray-700">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Ahsan Suny</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Founder, Career Abroad Mentors</p>
                </div>

                <p>
                  Meet <span className="font-semibold text-gray-900">Ahsan Suny</span>, the driving force behind Career Abroad Mentors. He is currently pursuing a Spanish Government-funded PhD in <span className="font-semibold text-gray-900">Robotics & AI</span> at the <span className="font-semibold text-gray-900">Nanosystems, Bioengineering and Energy department of University Rovira i Virgili and ICIQ</span>, Spain — a journey shaped by multiple competitive scholarships, research grants, and industry experience across three countries.
                </p>

                <p>
                  He completed his Master&apos;s in <span className="font-semibold text-gray-900">Embedded Systems at Grenoble INP (Grenoble Institute of Technology)</span>, France, fully funded by the <span className="font-semibold text-gray-900">Grenoble INP Excellence Scholarship</span>. During his studies, he also completed a paid internship at <span className="font-semibold text-gray-900">Schneider Electric</span>.
                </p>

                <p>
                  He was subsequently awarded the <span className="font-semibold text-gray-900">Catalan Government Fund (AGAUR)</span> to work as a Research Software Engineer at ICIQ, where he led the development of software for an Intelligent Photoreactor. He then received a <span className="font-semibold text-gray-900">4-year doctoral fellowship from the Spanish Ministry of Education</span> to pursue research in <em>AI-driven Robotics for Catalyst Development</em>.
                </p>

                <p>
                  Ahsan has delivered <span className="font-semibold text-gray-900">8+ successful projects</span> for startups, research institutes, and multinational companies across Bangladesh, France, and Spain. His peer-reviewed journal articles and conference papers are indexed on his{" "}
                  <a href="https://scholar.google.com/citations?user=_7HPSf4AAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-2" style={{ color: primary }}>Google Scholar</a>. He is committed to empowering the next generation of Bangladeshi students to achieve their own international academic and career milestones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 1:1 SESSION CALLOUT */}
        <div
          className="mt-6 rounded-2xl border-l-4 border border-gray-200 px-5 py-4"
          style={{ borderLeftColor: primary, backgroundColor: `${primary}06` }}
        >
          <p lang="bn" className="font-bn text-sm sm:text-base text-gray-700 leading-relaxed">
            কান্ট্রি স্পেসিফিক প্রোফাইল ইভালুয়েশন ও ডিসকাশন এর জন্য আমাদের দেশভিত্তিক মেন্টরদের{" "}
            <a
              href="/#mentors"
              className="font-semibold underline underline-offset-2"
              style={{ color: primary }}
            >
              1:1 পেইড সেশন
            </a>{" "}
            বুক করুন
          </p>
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
                href={"mailto:mentors.career.abroad26@gmail.com"}
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
