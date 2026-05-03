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
  GraduationCap,
  UserCheck,
  Award,
  ChevronRight,
  CreditCard,
  BookOpen,
  Building2,
  ListChecks,
  FolderOpen,
  FileDown,
  FileCheck2,
} from "lucide-react";

const Page = () => {
  const primary = "#364bc5";
  const palette = ["#364bc5", "#7c3aed", "#0891b2", "#059669", "#d97706", "#0369a1"];

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

  const highlightsBn = [
    "সেলফ-মোটিভেটেড শিক্ষার্থীদের জন্য Higher Study Mentorship Program",
    "USA ও Europe-এর ৬ জন অভিজ্ঞ মেন্টর—রিসার্চ/কাজ/হায়ার স্টাডির পাশাপাশি গাইড করবেন",
    "এজেন্সি-ডিপেন্ডেন্ট না হয়ে নিজ হাতে অ্যাপ্লাই করার জন্য পুরো সিস্টেম তৈরি করে দেওয়া হবে",
  ];

  const eligibilityBn = [
    "মাস্টার্স আবেদনকারীর ন্যূনতম CGPA 2.80",
    "ব্যাচেলর আবেদনকারীর ন্যূনতম GPA 4.5 (SSC & HSC)",
    "Applicant নিজ দায়িত্বে Dual currency ব্যাংক কার্ড দিয়ে payment করবে",
    "Applicant নিজেই সব কিছু করবেন; মেন্টর শুধু গাইড করবেন",
    "কোন ধরনের funding/solvency সাপোর্ট দেওয়া হবে না; তবে financial document presentation-এ গাইড থাকবে",
  ];

  const journeyPhases = [
    {
      title: "Profile Building",
      sessions: "4 sessions",
      icon: UserCheck,
      color: "#364bc5",
      bg: "#eef0fb",
      steps: [
        "CV writing & review",
        "LinkedIn profile optimisation",
        "Portfolio & LOR planning",
      ],
    },
    {
      title: "Academic Emailing",
      sessions: "2 sessions",
      icon: Mail,
      color: "#7c3aed",
      bg: "#f5f3ff",
      steps: [
        "Cold email strategy & templates",
        "Professor & lab outreach system",
        "Follow-up rules & timing",
      ],
    },
    {
      title: "SOP & Motivation Letter",
      sessions: "4 sessions",
      icon: FileText,
      color: "#0891b2",
      bg: "#ecfeff",
      steps: [
        "Story framing & structure",
        "Step-by-step writing system",
        "Revision & refinement checklist",
      ],
    },
    {
      title: "University & Application",
      sessions: "10 sessions",
      icon: GraduationCap,
      color: "#059669",
      bg: "#ecfdf5",
      steps: [
        "Program shortlisting by fit & funding",
        "Portal handling & deadline tracking",
        "Document packaging & submission",
      ],
    },
    {
      title: "Scholarships",
      sessions: "5 sessions",
      icon: Award,
      color: "#d97706",
      bg: "#fffbeb",
      steps: [
        "National & regional eligibility mapping",
        "Scholarship document set",
        "Application tracker setup",
      ],
    },
    {
      title: "Visa & Documentation",
      sessions: "5 sessions",
      icon: ShieldCheck,
      color: "#0369a1",
      bg: "#eff6ff",
      steps: [
        "Visa documentation checklist",
        "Financial document presentation",
        "Mock interview preparation",
      ],
    },
  ];

  const registrationUrl = "https://forms.gle/KS6eF5vBJGSeB9sv8";
  const talkToUsUrl = "https://wa.me/34613593236";

  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <div className="border border-gray-200 rounded-3xl bg-white">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

              {/* Left: title + meta */}
              <div className="max-w-2xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                  style={{ borderColor: `${primary}22`, color: primary, backgroundColor: `${primary}08` }}
                >
                  <BadgeCheck className="h-4 w-4" />
                  Complete Mentorship • One application cycle
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Complete Mentorship Program{" "}
                  <span style={{ color: primary }}>(30 Sessions)</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  End-to-end guidance from profile building to visa — structured
                  across 30 sessions covering one full application cycle.
                </p>

                {/* Includes / Not included */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Includes</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">All courses A to F</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Not included</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">E. Advanced Robotics & Embedded System</p>
                    <p className="text-sm font-semibold text-gray-900">H. Thesis, Research & Publication</p>
                  </div>
                </div>

                {/* Meta stats */}
                <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {meta.map((m, idx) => {
                    const Icon = m.icon;
                    const c = palette[idx];
                    return (
                      <div
                        key={m.label}
                        className="rounded-2xl border p-4"
                        style={{ borderColor: `${c}33`, borderTop: `3px solid ${c}`, backgroundColor: `${c}0d` }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" style={{ color: c }} />
                          <span className="text-xs uppercase tracking-wider text-gray-500">{m.label}</span>
                        </div>
                        <p className="mt-1 text-sm font-bold" style={{ color: c }}>{m.value}</p>
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
                      <p className="text-4xl font-semibold tracking-tight text-gray-900">€150</p>
                      <div
                        className="rounded-2xl px-3 py-1.5 text-xs font-semibold border"
                        style={{ borderColor: `${primary}22`, color: primary, backgroundColor: `${primary}08` }}
                      >
                        30 classes (10 recorded + 20 live)
                      </div>
                    </div>

                    <p className="mt-1.5 text-xs text-gray-500">
                      <CreditCard className="inline h-3.5 w-3.5 mr-1" />
                      দুই কিস্তিতে পরিশোধ করা যাবে
                    </p>

                    <div className="mt-5 space-y-3">
                      {[
                        { icon: FileText, color: "#059669", bg: "#ecfdf5", title: "Structured roadmap", desc: "Clear steps, deadlines, and execution workflow." },
                        { icon: Mail, color: "#7c3aed", bg: "#f5f3ff", title: "Emailing + application system", desc: "Templates, follow-ups, and packaging method." },
                        { icon: ShieldCheck, color: "#0369a1", bg: "#eff6ff", title: "Visa readiness", desc: "Checklist + refusal-risk reduction guidance." },
                      ].map(({ icon: Icon, color, bg, title, desc }) => (
                        <div
                          key={title}
                          className="flex items-start gap-3 rounded-2xl border p-4"
                          style={{ borderColor: `${color}33`, borderLeft: `3px solid ${color}`, backgroundColor: bg }}
                        >
                          <Icon className="h-5 w-5 mt-0.5 shrink-0" style={{ color }} />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{title}</p>
                            <p className="text-sm text-gray-600">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full rounded-2xl px-5 py-3.5 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                        style={{ backgroundColor: primary }}
                      >
                        Enroll Now <ArrowRight className="inline-block ml-2 h-4 w-4" />
                      </a>
                      <a
                        href={talkToUsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Talk to us
                      </a>
                    </div>
                  </div>
                  <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Journey Flow ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Your Journey</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              From Profile to Visa —{" "}
              <span style={{ color: primary }}>30 Sessions, One Cycle</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              A structured path through every stage of studying abroad.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {journeyPhases.map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={idx}
                    className="relative rounded-2xl border p-5 hover:shadow-lg transition-all"
                    style={{ borderColor: `${phase.color}33`, borderTop: `3px solid ${phase.color}`, backgroundColor: phase.bg }}
                  >
                    {(idx + 1) % 3 !== 0 && idx < journeyPhases.length - 1 && (
                      <span className="hidden lg:flex absolute top-6 -right-3 z-10 items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 shadow-sm">
                        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm"
                        style={{ backgroundColor: phase.color }}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ color: phase.color, backgroundColor: `${phase.color}18` }}
                      >
                        {phase.sessions}
                      </span>
                    </div>
                    <Icon className="h-6 w-6 mb-2" style={{ color: phase.color }} />
                    <h3 className="text-base font-semibold text-gray-900">{phase.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {phase.steps.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── Bengali Intro ── */}
        <div lang="bn" className="font-bn mt-8 rounded-3xl border border-gray-200 bg-white">
          <div className="p-6 sm:p-8">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
              style={{ borderColor: `${primary}22`, color: primary, backgroundColor: `${primary}08` }}
            >
              <GraduationCap className="h-4 w-4" />
              উচ্চশিক্ষায় মেন্টরশিপ প্রোগ্রাম, সেলফ-মোটিভেটেড স্টুডেন্টদের জন্য
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900">
              নিজের হাতে অ্যাপ্লাই করুন — মেন্টররা থাকবেন পাশে গাইড হিসেবে
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              উচ্চশিক্ষার স্বপ্নে একজন মেন্টরের ভূমিকা অনস্বীকার্য। অনেক সেলফ-মোটিভেটেড শিক্ষার্থী
              সঠিক দিকনির্দেশনার অভাবে নিজের পটেনশিয়ালিটি অনুযায়ী সিদ্ধান্ত নিতে পারেন না। এই
              মেন্টরশিপ প্রোগ্রাম সেই বাধা ভাঙতে তৈরি — এজেন্সি-নির্ভরতা ছাড়াই।
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlightsBn.map((t, idx) => {
                const c = palette[idx % palette.length];
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border p-4 transition-all hover:shadow-sm"
                    style={{ borderColor: `${c}33`, borderLeft: `3px solid ${c}`, backgroundColor: `${c}08` }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: c }} />
                      <p className="text-sm text-gray-800 leading-relaxed">{t}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Deliverables + Eligibility ── */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Deliverables */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-wider text-gray-500">Deliverables</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                What you leave with
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Tangible assets you can reuse in every future application cycle.
              </p>

              <div className="mt-5 space-y-3">
                {deliverables.map((d, idx) => {
                  const c = palette[idx % palette.length];
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: `${c}33`, borderLeft: `3px solid ${c}`, backgroundColor: `${c}08` }}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: c }} />
                        <p className="text-sm text-gray-800 leading-relaxed">{d}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Also included</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: BookOpen,   label: "SOP Book" },
                    { icon: Building2,  label: "University List" },
                    { icon: ListChecks, label: "Scholarship List" },
                    { icon: FolderOpen, label: "Documents" },
                    { icon: FileDown,   label: "PDF Resources" },
                    { icon: FileCheck2, label: "Successful SOPs" },
                  ].map(({ icon: Icon, label }, idx) => {
                    const c = palette[idx % palette.length];
                    return (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ color: c, backgroundColor: `${c}15` }}
                      >
                        <Icon className="h-3 w-3" />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <p lang="bn" className="font-bn text-xs uppercase tracking-wider text-gray-500">
                যোগ্যতা ও শর্তাবলী
              </p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Eligibility checklist</h3>
              <p className="mt-1 text-sm text-gray-500">
                Sessions run on weekends via Zoom / Google Meet.
              </p>

              <div className="mt-5 space-y-3">
                {eligibilityBn.map((t, idx) => {
                  const c = palette[idx % palette.length];
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: `${c}33`, borderLeft: `3px solid ${c}`, backgroundColor: `${c}08` }}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: c }} />
                        <p lang="bn" className="font-bn text-sm text-gray-800 leading-relaxed">{t}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block w-full rounded-2xl px-5 py-3.5 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: primary }}
              >
                Enroll Now <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-center text-gray-400">
                €150 · দুই কিস্তিতে পরিশোধ করা যাবে · Cancellation fee applies after enrollment
              </p>
            </div>
          </div>

        </div>

        {/* ── Footer note ── */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a href={talkToUsUrl} className="font-medium underline" style={{ color: primary }}>
              Message us on WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Page;
