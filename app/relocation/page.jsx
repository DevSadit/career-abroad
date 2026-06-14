import {
  CheckCircle2,
  BadgeCheck,
  Mail,
  ShieldCheck,
  GraduationCap,
  FileText,
  ChevronRight,
  Globe,
  Home,
  BookOpen,
} from "lucide-react";

const primary = "#364bc5";
const palette = ["#364bc5", "#7c3aed", "#0891b2", "#059669", "#d97706", "#0369a1"];

const trustedRoutes = [
  { flag: "🇬🇧🇪🇸", label: "UK → Spain" },
  { flag: "🇨🇳🇫🇷", label: "China → France" },
  { flag: "🇭🇺🇫🇷", label: "Hungary → France" },
  { flag: "🇸🇦🇫🇷", label: "KSA → France" },
];

const relocationPhases = [
  {
    title: "University Application",
    icon: BookOpen,
    color: "#364bc5",
    bg: "#eef0fb",
    steps: [
      "SOP, CV & cover letter writing",
      "Program shortlisting by fit & funding",
      "Portal handling & deadline tracking",
    ],
  },
  {
    title: "Admission & Enrolment",
    icon: GraduationCap,
    color: "#7c3aed",
    bg: "#f5f3ff",
    steps: [
      "Degree equivalency process",
      "Offer acceptance & enrolment",
      "Document packaging & submission",
    ],
  },
  {
    title: "Scholarship & Funding",
    icon: BadgeCheck,
    color: "#059669",
    bg: "#ecfdf5",
    steps: [
      "National & regional eligibility mapping",
      "Scholarship document set",
      "Funding support guidance",
    ],
  },
  {
    title: "Visa Application",
    icon: ShieldCheck,
    color: "#0891b2",
    bg: "#ecfeff",
    steps: [
      "Full visa application preparation",
      "Appointment booking (incl. third country)",
      "Mock visa interview preparation",
    ],
  },
  {
    title: "Financial Documents",
    icon: FileText,
    color: "#d97706",
    bg: "#fffbeb",
    steps: [
      "Financial document preparation",
      "Notary & certified translation",
      "Bank statement & solvency guidance",
    ],
  },
  {
    title: "Arrival & Settlement",
    icon: Home,
    color: "#0369a1",
    bg: "#eff6ff",
    steps: [
      "Accommodation search & guidance",
      "Travel & insurance planning",
      "Pre-departure checklist",
    ],
  },
];

const whoWeHelp = [
  {
    title: "Students",
    desc: "Bachelor's and Master's candidates moving abroad for a new degree.",
    color: "#364bc5",
  },
  {
    title: "Researchers",
    desc: "Relocating to join a programme, institution or lab in Europe.",
    color: "#7c3aed",
  },
  {
    title: "Interns",
    desc: "Moving for study-linked or academic internships.",
    color: "#0891b2",
  },
  {
    title: "PhD Candidates",
    desc: "Managing the longer, more document-heavy relocation journey.",
    color: "#059669",
  },
  {
    title: "Families",
    desc: "Spouses and children relocating alongside a student or researcher, so you move and settle together.",
    color: "#d97706",
  },
];

const complexitySteps = [
  "Choosing universities",
  "Writing a convincing SOP",
  "Submitting applications",
  "Getting your degree recognised",
  "Accepting the offer and enrolling",
  "Preparing financial documents",
  "Booking a visa appointment — sometimes in a third country",
  "Arranging accommodation, insurance and a flight",
  "Preparing for the visa interview itself",
];

const contactEmail = "mailto:mentors.career.abroad26@gmail.com";

export const metadata = {
  title: "Students Relocation Guidance for Europe | Career Abroad Mentor",
  description:
    "A fully managed, done-for-you study relocation service — from university application to arrival. Study-visa only.",
};

export default function RelocationPage() {
  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <div className="border border-gray-200 rounded-3xl bg-white">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

              {/* Left */}
              <div className="max-w-2xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
                  style={{ borderColor: `${primary}22`, color: primary, backgroundColor: `${primary}08` }}
                >
                  <Globe className="h-4 w-4" />
                  Student Relocation Service
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Students Relocation Guidance for Europe
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Moving for your studies — from the UK, USA, China, Malaysia, or
                  within Europe? We handle the whole journey for you, so you can
                  focus on what matters: your studies.
                </p>

                {/* Two info cards */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Service type</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Fully managed, done-for-you</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500">Scope</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Study-visa relocation only</p>
                    <p className="text-xs text-gray-500 mt-0.5">No work or job relocation</p>
                  </div>
                </div>

                {/* Already done routes */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Already done</p>
                  <div className="flex flex-wrap gap-2">
                    {trustedRoutes.map((route) => (
                      <span
                        key={route.label}
                        className="rounded-full border px-3 py-1 text-xs font-medium"
                        style={{ borderColor: `${primary}33`, color: primary, backgroundColor: `${primary}08` }}
                      >
                        {route.flag} {route.label}
                      </span>
                    ))}
                    <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                      and more
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Contact card */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-gray-600">Get a Quote</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                      Tell us where you're headed
                    </p>
                    <p className="mt-1.5 text-sm text-gray-500">
                      Share your origin and destination — we'll guide you from there.
                    </p>

                    <div className="mt-5 space-y-3">
                      {[
                        { icon: ShieldCheck, color: "#059669", bg: "#ecfdf5", title: "Full visa support", desc: "Appointment, documents, and mock interview." },
                        { icon: FileText,    color: "#7c3aed", bg: "#f5f3ff", title: "Documents handled",  desc: "Notary, translation, financial preparation." },
                        { icon: Home,        color: "#0369a1", bg: "#eff6ff", title: "Until you arrive",   desc: "Accommodation, insurance and travel guidance." },
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

                    <div className="mt-6">
                      <a
                        href={contactEmail}
                        className="flex items-center justify-center gap-2 w-full rounded-2xl px-5 py-3.5 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                        style={{ backgroundColor: primary }}
                      >
                        <Mail className="h-4 w-4" />
                        Request a Quote by Email
                      </a>
                    </div>
                    <p className="mt-3 text-xs text-center text-gray-400">
                      mentors.career.abroad26@gmail.com
                    </p>
                  </div>
                  <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Why It's Hard ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Why it's hard</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              It's not one task.{" "}
              <span style={{ color: primary }}>It's dozens of them.</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              In the right order, on tight deadlines, in a language you may not speak, while you're still living somewhere else.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {complexitySteps.map((step, i) => {
                const c = palette[i % palette.length];
                return (
                  <div
                    key={i}
                    className="rounded-2xl border p-4"
                    style={{ borderColor: `${c}33`, borderLeft: `3px solid ${c}`, backgroundColor: `${c}08` }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: c }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm text-gray-800 leading-relaxed">{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Callout */}
            <div
              className="mt-6 rounded-2xl p-5 border"
              style={{ borderColor: `${primary}33`, borderLeft: `4px solid ${primary}`, backgroundColor: `${primary}08` }}
            >
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                Our relocation service takes that entire process off your shoulders.
              </p>
              <p className="mt-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                This is different from our self-study courses, where you learn each step yourself.
                Here, we do it <em>with</em> you and <em>for</em> you — a fully managed,
                done-for-you relocation, built around your profile and your destination.
              </p>
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── What We Cover ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">The full process</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              From Application to{" "}
              <span style={{ color: primary }}>Arrival — We Cover It All</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Every stage of your relocation, managed end to end.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relocationPhases.map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={idx}
                    className="relative rounded-2xl border p-5 hover:shadow-lg transition-all"
                    style={{ borderColor: `${phase.color}33`, borderTop: `3px solid ${phase.color}`, backgroundColor: phase.bg }}
                  >
                    {(idx + 1) % 3 !== 0 && idx < relocationPhases.length - 1 && (
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

        {/* ── Who We Help ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Who we help</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Built for Every Type of{" "}
              <span style={{ color: primary }}>International Student</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Whether applying from home or relocating within Europe — we build the plan around your exact situation.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoWeHelp.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${group.color}33`, borderLeft: `3px solid ${group.color}`, backgroundColor: `${group.color}08` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: group.color }} />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{group.title}</p>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{group.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Study only note */}
              <div
                className="rounded-2xl border p-5 sm:col-span-2 lg:col-span-1"
                style={{ borderColor: `${primary}22`, backgroundColor: `${primary}06` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: primary }}>
                  📌 Study purpose only
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We work exclusively on study-visa relocations. We do not handle work, job or
                  employment-based relocation — and that focus is exactly why we do this so well.
                </p>
              </div>
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to start your relocation?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Tell us where you're headed and where you're moving from — we'll guide you from there.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={contactEmail}
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: primary }}
            >
              <Mail className="h-4 w-4" />
              Request a Quote →
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Email us at{" "}
            <a href={contactEmail} className="font-medium underline" style={{ color: primary }}>
              mentors.career.abroad26@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
