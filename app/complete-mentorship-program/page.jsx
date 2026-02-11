import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Video,
  Users,
  FileText,
  Mail,
  ShieldCheck,
  Globe,
  GraduationCap,
  ClipboardList,
  CreditCard,
  Link as LinkIcon,
  Info,
} from "lucide-react";

const Page = () => {
  const primary = "#364bc5";

  const youWillLearn = [
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
    "Personalized shortlist + Plan A/B/C roadmap",
    "Scholarship tracker + application deadline tracker",
    "SOP framework + revision checklist",
    "Email templates + follow-up templates",
    "Visa documentation checklist + mock interview question bank",
  ];

  const meta = [
    { icon: CalendarDays, label: "Total sessions", value: "30" },
    { icon: Video, label: "Recorded", value: "10 sessions" },
    { icon: Users, label: "Live", value: "20 sessions" },
    { icon: BadgeCheck, label: "Includes", value: "Courses A to F" },
  ];

  // ✅ New info (Bangla) structured
  const highlightsBn = [
    "সেলফ-মোটিভেটেড শিক্ষার্থীদের জন্য Higher Study Mentorship Program",
    "USA ও Europe-এর ৬ জন অভিজ্ঞ মেন্টর—রিসার্চ/কাজ/হায়ার স্টাডির পাশাপাশি গাইড করবেন",
    "এজেন্সি-ডিপেন্ডেন্ট না হয়ে নিজ হাতে অ্যাপ্লাই করার জন্য পুরো সিস্টেম তৈরি করে দেওয়া হবে",
  ];

  const structureBn = [
    "University Selection → Application → Scholarship → Visa — পুরো জার্নিটাই কাভার",
    "প্রোফাইল অনুযায়ী Plan A/B/C (Safe, Moderate, Ambitious Track)",
    "সপ্তাহের ছুটির দিনগুলোতে Zoom / Google Meet সেশন",
    "অফার লেটার পাওয়া পর্যন্ত ধাপে ধাপে গাইড; শেষে Visa process, documentation ও Mock Interview prep",
    "মোট ৩০টি সেশন (১ একাডেমিক বছর)",
  ];

  const eligibilityBn = [
    "মাস্টার্স আবেদনকারীর ন্যূনতম CGPA 3.00",
    "ব্যাচেলর আবেদনকারীর ন্যূনতম GPA 4.5 (SSC & HSC)",
    "Applicant নিজ দায়িত্বে Dual currency ব্যাংক কার্ড দিয়ে (University application fee, accommodation fee) পেমেন্ট করবে",
    "সর্বোচ্চ ৩টি Scholarship-এর জন্য প্রস্তুতি, গাইডলাইন ও এপ্রোচ করা হবে",
    "Applicant নিজেই সব কিছু করবেন; মেন্টর শুধু গাইড করবেন",
    "কোন ধরনের funding/solvency সাপোর্ট দেওয়া হবে না; তবে ফাইনান্সিয়াল ডকুমেন্ট সঠিকভাবে প্রেজেন্ট করার গাইডলাইন থাকবে",
  ];

  const feeBn = [
    "মাত্র €150 (≈ ২০,০০০ টাকা)",
    "দুই কিস্তিতে পরিশোধ করা যাবে",
    "এনরোলমেন্টের পর কুইট করলে নির্দিষ্ট পরিমাণ ক্যান্সেলেশন ফি প্রযোজ্য",
  ];

  const whyBn = [
    "লক্ষ্য: আপনাকে “এজেন্সি ডিপেন্ডেন্ট” না করে, ভবিষ্যতে নিজেই নিজের গাইড হতে প্রস্তুত করা",
    "নিজের স্বপ্নে ইনভেস্ট করুন—কারণ কেউ আপনার ভবিষ্যৎ আপনার চেয়ে ভালোভাবে তৈরি করতে পারবে না",
  ];

  const registrationUrl = "https://forms.gle/KS6eF5vBJGSeB9sv8";

  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border border-gray-200 rounded-3xl bg-white">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              {/* Left: title */}
              <div className="max-w-2xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                  style={{
                    borderColor: `${primary}22`,
                    color: primary,
                    backgroundColor: `${primary}08`,
                  }}
                >
                  <BadgeCheck className="h-4 w-4" />
                  Complete Mentorship • One application cycle
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Complete Mentorship Program{" "}
                  <span style={{ color: primary }}>(30 Sessions)</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Get end-to-end guidance for your full abroad journey, from
                  profile building to visa, with a structured 30-session
                  roadmap.
                </p>

                {/* Quick notes */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Includes
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      All courses A to F
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Not included
                    </p>
                    <p className="mt-1 text-sm font-semibold  text-gray-900">
                      E. Advanced Robotics & Embedded System
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      H. Thesis, Research & Publication
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {meta.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-gray-200 p-4"
                      >
                        <div className="flex items-center gap-2 text-gray-700">
                          <Icon
                            className="h-4 w-4"
                            style={{ color: primary }}
                          />
                          <span className="text-xs uppercase tracking-wider text-gray-500">
                            {m.label}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {m.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: pricing card */}
              <div className="w-full lg:w-105">
                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-gray-600">Program fee</p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <p className="text-4xl font-semibold tracking-tight text-gray-900">
                        €150
                      </p>
                      <div
                        className="rounded-2xl px-3 py-1.5 text-xs font-semibold border"
                        style={{
                          borderColor: `${primary}22`,
                          color: primary,
                          backgroundColor: `${primary}08`,
                        }}
                      >
                        30 classes (10 recorded + 20 live)
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4">
                        <FileText
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Structured roadmap
                          </p>
                          <p className="text-sm text-gray-600">
                            Clear steps, deadlines, and execution workflow.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4">
                        <Mail
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Emailing + application system
                          </p>
                          <p className="text-sm text-gray-600">
                            Templates, follow-ups, and packaging method.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4">
                        <ShieldCheck
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Visa readiness
                          </p>
                          <p className="text-sm text-gray-600">
                            Checklist + refusal-risk reduction guidance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <button
                          className="w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                          style={{ backgroundColor: primary }}
                        >
                          Enroll Now{" "}
                          <ArrowRight className="inline-block ml-2 h-4 w-4" />
                        </button>
                      </a>

                      <button className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                        Talk to us
                      </button>
                    </div>

                    <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                      Best for serious applicants who want full guidance across
                      one cycle — and want to stay agency-free.
                    </p>
                  </div>

                  {/* Accent bottom bar */}
                  <div
                    className="h-1.5"
                    style={{ backgroundColor: primary }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ New: Bangla Intro (same UI language — card, border, rounded, subtle accent) */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-3xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                  style={{
                    borderColor: `${primary}22`,
                    color: primary,
                    backgroundColor: `${primary}08`,
                  }}
                >
                  <GraduationCap className="h-4 w-4" />
                  উচ্চশিক্ষায় মেন্টরশিপ প্রোগ্রাম, সেলফ-মোটিভেটেড স্টুডেন্টদের
                  জন্য
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900">
                  নিজের হাতে অ্যাপ্লাই করুন — মেন্টররা থাকবেন পাশে গাইড হিসেবে
                </h2>

                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  উচ্চশিক্ষার স্বপ্নে একজন মেন্টরের ভূমিকা অনস্বীকার্য। অনেক
                  সেলফ-মোটিভেটেড শিক্ষার্থী সঠিক দিকনির্দেশনার অভাবে নিজের
                  পটেনশিয়ালিটি অনুযায়ী সিদ্ধান্ত নিতে পারেন না। আবার অনেক
                  এজেন্সি বড় অঙ্কের টাকা দাবি করে—যেটা অনেক সময়ই একজন
                  শিক্ষার্থীর জন্য বোঝা হয়ে যায়। এই মেন্টরশিপ প্রোগ্রাম সেই বাধা
                  ভাঙতে তৈরি।
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlightsBn.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {t}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[360px]">
                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5" style={{ color: primary }} />
                      <p className="text-sm font-semibold text-gray-900">
                        Mentors: USA + Europe
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      ৬ জন অভিজ্ঞ মেন্টর (রিসার্চ/কাজ/হায়ার স্টাডি) — মিনিমাম
                      ফি-তে স্ট্রাকচার্ড গাইডেন্স।
                    </p>

                    <div className="mt-4 rounded-2xl border border-gray-200 p-4">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Fee
                      </p>
                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        €150{" "}
                        <span className="text-sm font-medium text-gray-500">
                          (≈ ২০,০০০ টাকা)
                        </span>
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        দুই কিস্তিতে পরিশোধ করা যাবে
                      </p>
                    </div>
                  </div>

                  <div
                    className="h-1.5"
                    style={{ backgroundColor: primary }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* You will learn */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-gray-200 bg-white">
              <div className="p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      You will learn
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
                      Everything needed to execute end-to-end
                    </h2>
                  </div>
                  <div
                    className="hidden sm:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                    style={{
                      borderColor: `${primary}22`,
                      color: primary,
                      backgroundColor: `${primary}08`,
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Scholarship + Visa focused
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {youWillLearn.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 sm:px-8 py-5 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                  you’ll build a complete personal system (trackers, templates,
                  routines) so you can apply independently in future cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
              <div className="p-6 sm:p-7">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Deliverables
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  You’ll leave with assets you can reuse
                </h3>

                <div className="mt-5 space-y-3">
                  {deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Best for:
                  </p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    Serious applicants who want full guidance across one cycle
                    (and want to stay agency-free).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ New: Program Structure + Eligibility + Fee + Why (same card system) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Program Structure */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      প্রোগ্রামের কাঠামো
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                      University → Application → Scholarship → Visa
                    </h3>
                  </div>
                  <div
                    className="hidden sm:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                    style={{
                      borderColor: `${primary}22`,
                      color: primary,
                      backgroundColor: `${primary}08`,
                    }}
                  >
                    <ClipboardList className="h-4 w-4" />
                    Full journey covered
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {structureBn.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {t}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 p-4">
                  <div className="flex items-start gap-3">
                    <Info
                      className="h-5 w-5 mt-0.5"
                      style={{ color: primary }}
                    />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      প্রতিটি অংশগ্রহণকারীর জন্য প্রোফাইল অনুযায়ী Plan A/B/C
                      তৈরি করা হবে—যাতে Safe, Moderate, Ambitious—সব ট্র্যাকেই
                      আপনার ক্লিয়ার রোডম্যাপ থাকে।
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-5 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Note:</span>{" "}
                  সেশনগুলো সপ্তাহের ছুটির দিনে Zoom / Google Meet-এ হবে।
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility + Fee */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  যোগ্যতা ও শর্তাবলী
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  Eligibility checklist
                </h3>

                <div className="mt-5 space-y-3">
                  {eligibilityBn.map((t, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {t}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fee box */}
                <div className="mt-6 rounded-2xl border border-gray-200 p-4">
                  <div className="flex items-center gap-2">
                    <CreditCard
                      className="h-5 w-5"
                      style={{ color: primary }}
                    />
                    <p className="text-sm font-semibold text-gray-900">
                      প্রোগ্রাম ফি
                    </p>
                  </div>
                  <div className="mt-3 space-y-2">
                    {feeBn.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 mt-0.5"
                          style={{ color: primary }}
                        />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {t}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration */}
                <a
                  href={registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block"
                >
                  <button
                    className="w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    style={{ backgroundColor: primary }}
                  >
                    🔗 Registration Link{" "}
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </a>

                <p className="mt-3 text-xs text-gray-500">
                  Applicant নিজেই সব কিছু করবেন; মেন্টর কেবল গাইড করবেন
                  (agency-free approach)।
                </p>
              </div>

              <div className="px-6 sm:px-8 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-500">
                  Transparent rules • Practical guidance • Reusable system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ New: Why this mentorship */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white">
          <div className="p-6 sm:p-8">
            <div className="flex items-start  gap-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  কেন করবেন এই মেন্টরশিপ?
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  Agency-dependent না হয়ে future-proof তৈরি হন
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {whyBn.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5"
                      style={{ color: primary }}
                    />
                    <p className="text-sm text-gray-800 leading-relaxed">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small footer (kept, but already echoed above—still fine) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Still Have Questions? Mail Us to know more..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
