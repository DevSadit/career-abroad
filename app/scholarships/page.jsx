import { CheckCircle2, Calendar, ArrowRight, Info, Tag } from "lucide-react";
import Image from "next/image";
import Title from "@/app/_shared/Title";

const primary = "#364bc5";
const palette = ["#364bc5", "#7c3aed", "#0891b2", "#059669", "#d97706", "#0369a1"];

const registerUrl = "https://forms.gle/sKHwjRax2GVn3Seq7";

const scholarships = [
  {
    id: "erasmus",
    name: "Erasmus Mundus",
    badge: "EU · Master's",
    flag: "🇪🇺",
    logos: ["/scolarships/Erusmus.png"],
    fees: [{ label: null, amount: "€75", note: "per application · +€30 each additional" }],
    windows: [{ label: null, value: "October – January" }],
    includes: [
      "Consortium Matching",
      "CV, SOP, LOR, LinkedIn",
      "Motivation Video Guidance",
      "Document checklist & final review",
    ],
  },
  {
    id: "swedish",
    name: "Swedish Institute Scholarship",
    badge: "Sweden · Master's",
    flag: "🇸🇪",
    logos: ["/scolarships/SI.png"],
    fees: [{ label: null, amount: "€75", note: null }],
    windows: [
      { label: "University application", value: "October – January" },
      { label: "SI scholarship", value: "February" },
    ],
    includes: [
      "Programme selection & application",
      "Work experience & leadership document prep.",
      "CV, SOP, LOR, LinkedIn",
    ],
  },
  {
    id: "french",
    name: "French Scholarships",
    badge: "France · Master's & PhD",
    flag: "🇫🇷",
    logos: ["/scolarships/Eiffel.png"],
    fees: [
      { label: "Eiffel", amount: "€75", note: null },
      { label: "IDEX", amount: "€60", note: null },
    ],
    windows: [
      { label: "Eiffel", value: "November – January" },
      { label: "IDEX", value: "Varies by university" },
    ],
    includes: [
      "University & programme searching",
      "CV, SOP, LOR, LinkedIn",
      "Document prep. & application",
      "Translation Support*",
    ],
  },
  {
    id: "stipendium",
    name: "Stipendium Hungaricum",
    badge: "Hungary · Bachelor's, Master's & PhD",
    flag: "🇭🇺",
    logos: ["/scolarships/Stipendium.png"],
    fees: [{ label: null, amount: "€65", note: null }],
    windows: [{ label: null, value: "November 2026 (for 2027/28)" }],
    includes: [
      "Programme & eligibility matching",
      "CV, SOP, LOR, LinkedIn",
      "Ministry & scholarship application",
      "Document prep. & submission",
    ],
  },
  {
    id: "italian-govt",
    name: "Italian Government Scholarships",
    badge: "Italy · MAECI & Invest Your Talent",
    flag: "🇮🇹",
    logos: ["/scolarships/MAECI.png", "/scolarships/IYT.png"],
    fees: [
      { label: "MAECI", amount: "€60", note: null },
      { label: "IYT", amount: "€60", note: null },
    ],
    windows: [
      { label: "MAECI", value: "March" },
      { label: "IYT", value: "April – May" },
    ],
    includes: [
      "Scholarship & eligibility review",
      "CV, SOP, LOR, LinkedIn",
      "Scholarship application",
      "Translation Support*",
    ],
  },
  {
    id: "italy-regional",
    name: "Italy Regional Scholarships",
    badge: "Italy · Regional",
    flag: "🇮🇹",
    logos: ["/scolarships/Lazio.png"],
    fees: [{ label: null, amount: "€65", note: null }],
    windows: [{ label: null, value: "Depends on region & study level" }],
    includes: [
      "Regional scholarship evaluation",
      "Income & asset document prep.",
      "Regional application review",
      "Translation Support*",
    ],
  },
  {
    id: "czech",
    name: "Czech Government Scholarship",
    badge: "Czechia · Master's & PhD",
    flag: "🇨🇿",
    logos: [],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [{ label: null, value: "August – September" }],
    includes: [
      "Eligible programme guidance",
      "CV, SOP, LOR, LinkedIn",
      "Translation Support*",
      "Document checklist & application",
    ],
  },
  {
    id: "romanian",
    name: "Romanian Government Scholarship",
    badge: "Romania · All levels",
    flag: "🇷🇴",
    logos: ["/scolarships/Romania.png"],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [{ label: null, value: "February – March" }],
    includes: [
      "Programme & language-route guidance",
      "Translation Support*",
      "CV, SOP, LOR, LinkedIn",
      "Document checklist & application",
    ],
  },
  {
    id: "mext",
    name: "MEXT Scholarship",
    badge: "Japan · All levels",
    flag: "🇯🇵",
    logos: [],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [{ label: null, value: "April – May" }],
    includes: [
      "Category & eligibility review",
      "Research plan prep.",
      "CV, SOP, LOR, LinkedIn",
      "Document checklist & application",
    ],
  },
  {
    id: "chinese",
    name: "Chinese Government Scholarship",
    badge: "China · Bachelor's, Master's & PhD",
    flag: "🇨🇳",
    logos: [],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [{ label: null, value: "November – January" }],
    includes: [
      "University & scholarship-route matching",
      "CV, SOP, LOR, LinkedIn",
      "Document checklist & application",
      "Translation Support*",
    ],
  },
  {
    id: "gks",
    name: "Global Korea Scholarship",
    badge: "South Korea · Undergraduate, Master's & PhD",
    flag: "🇰🇷",
    logos: [],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [
      { label: "Undergraduate (embassy)", value: "September" },
      { label: "Undergraduate (university)", value: "September – November" },
      { label: "Graduate", value: "February – March" },
    ],
    includes: [
      "Track & programme selection guidance",
      "CV, SOP, LOR, LinkedIn",
      "Document checklist & application",
      "Translation Support*",
    ],
  },
  {
    id: "iccr",
    name: "ICCR Scholarship",
    badge: "India · Undergraduate, Postgraduate & PhD",
    flag: "🇮🇳",
    logos: [],
    fees: [{ label: null, amount: "€60", note: null }],
    windows: [{ label: null, value: "February – April" }],
    includes: [
      "Scholarship scheme & course matching",
      "English essay & academic profile review",
      "A2A application checklist & review",
    ],
  },
];

export const metadata = {
  title: "Scholarship Packages | Career Abroad Mentor",
  description:
    "Scholarship application support packages for Erasmus Mundus, Swedish Institute, French, Hungarian, Italian, Czech, Romanian, MEXT, Chinese, Korean and Indian scholarships.",
};

export default function ScholarshipsPage() {
  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <Title title="Scholarships" subtitle="Scholarship Application Packages" />

        {/* ── Intro note ── */}
        <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto -mt-4 mb-10">
          Expert-guided support to help you put together the strongest possible scholarship application.
        </p>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scholarships.map((s, idx) => {
            const color = palette[idx % palette.length];
            return (
              <div
                key={s.id}
                className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Hover border overlay */}
                <div className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ borderColor: color }} />

                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${color}, ${color}99)` }} />

                <div className="p-5 flex flex-col grow">
                  {/* Logo(s) or flag fallback */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2">
                      {s.logos.length > 0 ? (
                        s.logos.map((logo, li) => (
                          <div key={li} className="h-10 w-auto flex items-center rounded-lg border border-gray-100 bg-white px-2 py-1 shadow-sm">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={logo}
                              alt={s.name}
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        ))
                      ) : (
                        <span className="text-3xl leading-none">{s.flag}</span>
                      )}
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                      style={{ backgroundColor: `${color}14`, color }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:transition-colors leading-snug mb-3" style={{ '--tw-text-opacity': 1 }}>
                    {s.name}
                  </h3>

                  {/* Fees */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {s.fees.map((f, fi) => (
                      <div key={fi} className="rounded-lg px-3 py-1.5" style={{ background: `linear-gradient(to right, ${color}18, ${color}0a)` }}>
                        {f.label && (
                          <span className="text-xs font-semibold text-gray-500 mr-1">{f.label}:</span>
                        )}
                        <span className="text-lg font-bold" style={{ color }}>{f.amount}</span>
                        {f.note && (
                          <span className="text-xs text-gray-400 ml-1">{f.note}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Application window */}
                  <div className="mb-4">
                    {s.windows.map((w, wi) => (
                      <div key={wi} className="flex items-start gap-2 text-xs text-gray-500 mb-1">
                        <Calendar className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color }} />
                        <span>
                          {w.label && <span className="font-semibold text-gray-600">{w.label}: </span>}
                          {w.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* What's included */}
                  <div className="mb-4 grow">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What&apos;s Included</p>
                    <ul className="space-y-1.5">
                      {s.includes.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href={registerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-90 hover:-translate-y-0.5"
                      style={{ backgroundColor: color }}
                    >
                      Register Now
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom notes ── */}
        <div className="mt-14 space-y-4 max-w-4xl mx-auto">

          {/* Eligibility note with mentors link */}
          <div
            className="rounded-2xl border p-5"
            style={{ borderColor: `${primary}33`, borderLeft: `4px solid ${primary}`, backgroundColor: `${primary}06` }}
          >
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 shrink-0 mt-0.5" style={{ color: primary }} />
              <p className="text-sm text-gray-700 leading-relaxed">
                Most scholarships require a balanced profile and academic excellence. Some scholarships like Erasmus, Eiffel and Italian Government Scholarship require a high CGPA. Some scholarships are need-based or family income-based like Italy Regional Scholarships. Some scholarships are leadership and SDG goal-based like SI Scholarship. To check your eligibility, please book an appointment with our{" "}
                <a
                  href="/#mentors"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: primary }}
                >
                  expert mentors
                </a>{" "}
                for a paid 1:1 session.
              </p>
            </div>
          </div>

          {/* Discount note */}
          <div
            className="rounded-2xl border p-5"
            style={{ borderColor: "#05966933", borderLeft: "4px solid #059669", backgroundColor: "#05966906" }}
          >
            <div className="flex items-start gap-3">
              <Tag className="h-5 w-5 shrink-0 mt-0.5 text-green-600" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Multiple scholarship discount —</span>{" "}
                You will get a discount if you apply for multiple scholarships. Contact our support for details.
              </p>
            </div>
          </div>

          {/* Translation charges */}
          <p className="text-xs text-gray-400 px-1">
            * Additional charges will be applied for translation services.
          </p>

          {/* Bengali disclaimer */}
          <div
            className="rounded-2xl border p-5"
            style={{ borderColor: "#d9770633", borderLeft: "4px solid #d97706", backgroundColor: "#d9770606" }}
          >
            <p lang="bn" className="font-bn text-sm text-gray-700 leading-relaxed">
              উল্লেখ্য: ক্যারিয়ার এব্রোড মেন্টরস কোনো রকম এডমিশন, স্কলারশিপ কিংবা ভিসার গ্যারান্টি দেয় না, তবে এপ্লিকেন্টের জন্য সর্বোচ্চ এফোর্ট দেওয়ার চেষ্টা করে।
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
