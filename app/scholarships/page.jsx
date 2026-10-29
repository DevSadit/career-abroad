import { Info, Tag } from "lucide-react";
import Title from "@/app/_shared/Title";
import ScholarshipsGrid from "./ScholarshipsGrid";
import Videos from "@/app/_shared/Videos";
import RelatedServices from "@/app/_shared/RelatedServices";

const scholarshipVideos = [
  { title: "Erasmus Mundus Scholarship",        url: "https://youtu.be/2Q9bulkFNRY" },
  { title: "Swedish Institute Scholarship",     url: "https://youtu.be/9HFzH-Xje4s" },
  { title: "IDEX Scholarship",                  url: "https://youtu.be/85fMGHa26nY" },
  { title: "Stipendium Hungaricum Scholarship", url: "https://youtu.be/bwE9UJYruD4" },
  { title: "Italy Government Scholarship",      url: "https://youtu.be/-7zwm7tY2q8" },
  { title: "Italy Regional Scholarship",        url: "https://youtu.be/gCd2wwcQYg8" },
  { title: "Czech Govt. Scholarship",           url: "https://youtu.be/LPr0UbWlQ4U" },
  { title: "Romania Government Scholarship",    url: "https://youtu.be/Ye7hp2NNVdc" },
  { title: "Japan MEXT Scholarship",            url: "https://youtu.be/29xJz16mbCA" },
];

const primary = "#364bc5";

const scholarships = [
  {
    id: "erasmus",
    name: "Erasmus Mundus",
    badge: "EU · Master's",
    flag: "🇪🇺",
    logos: ["/scolarships/Erusmus.png"],
    fees: [{ label: null, amountEur: 75, note: "per application · +€30 each additional" }],
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
    fees: [{ label: null, amountEur: 75, note: null }],
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
      { label: "Eiffel", amountEur: 75, note: null },
      { label: "IDEX", amountEur: 60, note: null },
    ],
    windows: [
      { label: "Eiffel", value: "October – January" },
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
    fees: [{ label: null, amountEur: 65, note: null }],
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
      { label: "MAECI", amountEur: 60, note: null },
      { label: "IYT", amountEur: 60, note: null },
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
    fees: [{ label: null, amountEur: 65, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
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
    fees: [{ label: null, amountEur: 60, note: null }],
    windows: [{ label: null, value: "February – April" }],
    includes: [
      "Scholarship scheme & course matching",
      "English essay & academic profile review",
      "A2A application checklist & review",
    ],
  },
];

export const metadata = {
  title: "Scholarship Packages | Career Abroad Mentors",
  description: "Scholarship application support packages for Erasmus Mundus, Swedish Institute, French, Hungarian, Italian, Czech, Romanian, MEXT, Chinese, Korean and Indian scholarships.",
  openGraph: {
    title: "Scholarship Packages | Career Abroad Mentors",
    description: "Expert-guided support for Erasmus Mundus, SI, Eiffel, Stipendium Hungaricum, Italian Govt, MEXT, GKS and more.",
    url: "https://ahsansuny.com/scholarships",
    siteName: "Career Abroad Mentors",
    images: [{ url: "https://ahsansuny.com/unnamed.png", width: 800, height: 800, alt: "Career Abroad Mentors" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Scholarship Packages | Career Abroad Mentors",
    description: "Expert-guided support for Erasmus Mundus, SI, Eiffel, Stipendium Hungaricum and more.",
  },
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

        {/* ── Cards grid (client component — fetches live BDT rate) ── */}
        <ScholarshipsGrid scholarships={scholarships} />

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

        {/* ── Scholarship Videos ── */}
        <Videos
          videos={scholarshipVideos}
          title="Watch our Scholarship Guidelines"
          subtitle="Short, practical videos — step by step guidelines."
        />

        <RelatedServices exclude="/scholarships" />

      </div>
    </section>
  );
}
