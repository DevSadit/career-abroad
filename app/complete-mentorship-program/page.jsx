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
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      G & H
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
                      <button
                        className="w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                        style={{ backgroundColor: primary }}
                      >
                        Enroll Now{" "}
                        <ArrowRight className="inline-block ml-2 h-4 w-4" />
                      </button>

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

                <button
                  className="mt-6 w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: primary }}
                >
                  Get Started
                </button>
              </div>

              <div className="px-6 sm:px-7 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-500">
                  Clean process • Clear docs • Consistent execution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small footer */}
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
