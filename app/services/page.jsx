import Image from "next/image";
import Link from "next/link";
import RelatedServices from "@/app/_shared/RelatedServices";
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
  Plane,
  Euro,
  Tag,
  RefreshCcw,
  Users,
} from "lucide-react";
import PriceDisplay from "../complete-mentorship-program/PriceDisplay";

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

const packageTiers = [
  {
    id: "standard",
    name: "Standard Package",
    tagline: "Most Popular",
    amountEur: 800,
    countries: [
      { flag: "🇩🇪", name: "Germany" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇧🇪", name: "Belgium" },
      { flag: "🇦🇹", name: "Austria" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇭🇺", name: "Hungary" },
      { flag: "🇪🇪", name: "Estonia" },
      { flag: "🇱🇹", name: "Lithuania" },
    ],
    color: "#364bc5",
    gradient: "linear-gradient(135deg, #364bc5 0%, #5b6fd8 100%)",
  },
  {
    id: "nordic",
    name: "Nordic Package",
    tagline: "⭐ Premium",
    amountEur: 1000,
    countries: [
      { flag: "🇳🇴", name: "Norway" },
      { flag: "🇸🇪", name: "Sweden" },
      { flag: "🇩🇰", name: "Denmark" },
      { flag: "🇫🇮", name: "Finland" },
    ],
    color: "#0369a1",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
  },
  {
    id: "customized",
    name: "Customized Package",
    tagline: "Flexible",
    amountEur: null,
    description: "5 applications across 2 or more countries — tailored to your profile and goals.",
    countries: [],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #9461f5 100%)",
  },
];

const packageInclusions = [
  { icon: CheckCircle2, title: "Profile Assessment",           desc: "Evaluation of your academic background, goals and destination fit." },
  { icon: GraduationCap, title: "University Selection",        desc: "Up to 5 universities shortlisted and matched to your profile." },
  { icon: FileText,      title: "SOP, CV & Letters",           desc: "Statement of Purpose, CV, Motivation Letter and Cover Letter." },
  { icon: BookOpen,      title: "Application Portal Handling", desc: "Portal submission, form filling and deadline tracking." },
  { icon: Mail,          title: "University Follow-up",        desc: "Follow-up emails with universities sent on your behalf." },
  { icon: BadgeCheck,    title: "Scholarship Guidance",        desc: "National and regional scholarship eligibility mapping." },
  { icon: ShieldCheck,   title: "Visa Appointment Support",    desc: "Apostille, financial documents and bank statement requirements." },
  { icon: CheckCircle2,  title: "Mock Visa Interview",         desc: "Preparation for the visa interview with Q&A practice." },
  { icon: Home,          title: "Accommodation Guidance",      desc: "Finding and booking accommodation near your university." },
  { icon: ShieldCheck,   title: "Health Insurance Guidance",   desc: "Suitable health insurance options for your destination country." },
  { icon: Plane,         title: "Flight Ticket Planning",      desc: "Travel timeline planning and flight booking guidance." },
];

const feeStructure = [
  {
    label: "Admission Consultation Fee",
    amount: 300,
    color: "#364bc5",
    note: "Paid in 2 installments",
    installments: [
      { label: "File Opening", amount: 150 },
      { label: "After Getting Offer Letter", amount: 150 },
    ],
    refundable: false,
    refundNote: "Non-refundable — covers services already rendered",
  },
  {
    label: "Visa Consultation Fee",
    amount: 500,
    color: "#059669",
    note: "Paid after admission is secured",
    refundable: true,
    refundNote: "Refundable if visa denied by consulate",
  },
];

const relocationReviews = [
  {
    name: "Rakib Imtiaj Ahmed",
    program: "Masters in Innovative Engineering",
    university: "Universitat Politècnica de Catalunya (UPC), Barcelona — Spain",
    route: "🇧🇩 Bangladesh → 🇬🇧 UK → 🇪🇸 Spain",
    date: "September 2026",
    photo: "/students/rakib.png",
    text: "After completing my first Master's at the University of South Wales, my Post-Study Work visa in the UK was due to end in January 2027, and I wanted to continue my studies in Europe. Spain was my top choice for a second Master's. Luckily, my friend Shahidul suggested I consult Ahsan Bhai, and that turned out to be the right decision.\n\nI received expert guidance at every step: securing admission to an affordable public university, obtaining my ACRO certificate and Bangladesh police clearance, FCDO apostille, affidavit, financial documents, and medical certificate. Each of these has its own requirements, and having someone who knew exactly what was needed saved me a lot of time and worry. I started my classes in September, and I highly recommend his relocation service to anyone planning to move to Spain, especially from the UK.",
  },
  {
    name: "Md Shahidul Islam",
    program: "Masters in Electrical Engineering",
    university: "Universitat Politècnica de Catalunya (UPC), Barcelona — Spain",
    route: "🇧🇩 Bangladesh → 🇬🇧 UK → 🇪🇸 Spain",
    date: "October 2026",
    photo: "/students/shahidul.png",
    text: "I received my Spanish student visa for my Master's in Electrical Engineering at Universitat Politècnica de Catalunya (UPC), Barcelona. Shortly after, my spouse's and our newborn child's dependent visas were also granted by the Spanish Consulate in Manchester, UK. I had already completed my first Master's in Renewable Energy in the UK, and with my Post-Study Work visa (PSW) ending in September, I needed a clear and reliable plan for my next step. I consulted Ahsan Sunny Bhai and enrolled in his complete relocation guidance for Spain.\n\nRelocating to Spain, especially with family, involves a lot of documentation, and a single mistake can cause serious delays. With expert guidance at every step, the whole process felt manageable and stress-free. I strongly recommend his service to anyone planning to move to Spain.",
  },
  {
    name: "Anushree Matabber",
    program: "Masters in Biocontrol Solutions for Plant Health",
    university: "Université Côte d'Azur, Nice — France",
    route: "🇧🇩 Bangladesh → 🇭🇺 Hungary → 🇫🇷 France",
    date: "September 2026",
    photo: "/students/anushree.png",
    text: "I received my French student visa for my second Master's in Biocontrol Solutions for Plant Health at Université Côte d'Azur, Nice. After completing my Bachelor's in Bangladesh and my first Master's in Horticulture Engineering in Hungary, I was uncertain about my next step in Europe. I found Ahsan Sunny Bhai's France playlist on YouTube, booked a 1:1 session, and later enrolled in the complete relocation guidance for France & Spain.\n\nOne thing I realised throughout this journey: there are many opportunities, practical strategies, and important details that are simply not discoverable through Google, YouTube, or even AI tools alone. An experienced mentor who truly understands the process can identify the right opportunities and guide you according to your individual situation.",
  },
];

export const metadata = {
  title: "Services & Packages for Europe Study | Career Abroad Mentors",
  description: "Complete study consultancy from €800 — university application, SOP, visa guidance and settlement support. Standard, Nordic and Customised packages for Europe.",
  openGraph: {
    title: "Services & Packages for Europe Study | Career Abroad Mentors",
    description: "Complete study consultancy from €800 — university application, SOP, visa guidance and settlement support. Standard, Nordic and Customised packages for Europe.",
    url: "https://ahsansuny.com/services",
    siteName: "Career Abroad Mentors",
    images: [{ url: "https://ahsansuny.com/unnamed.png", width: 800, height: 800, alt: "Career Abroad Mentors" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services & Packages for Europe Study | Career Abroad Mentors",
    description: "Complete study consultancy from €800 — Standard, Nordic and Customised packages.",
  },
};

export default function ServicesPage() {
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
                  Student Consultancy Services
                </div>

                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Complete Study Consultancy for Europe
                </h1>

                <p lang="bn" className="font-bn mt-4 text-base text-gray-600 leading-relaxed">
                  ক্যারিয়ার এব্রোড মেন্টরস কোনো প্রচলিত এজেন্সি নয়। আমরা ইউরোপে বর্তমানে অধ্যয়নরত মাস্টার্স ও পিএইচডি শিক্ষার্থীদের একটি দল, যারা উচ্চশিক্ষার জন্য বিদেশে যাওয়ার যাত্রাটি সহজ করতে শিক্ষার্থীদের পথ দেখাই। ভর্তি, ফান্ডিং, ভিসা ও রিলোকেশনের প্রতিটি ধাপ আমরা নিজেরা পার করেছি, তাই আমাদের পরামর্শ ও সিদ্ধান্ত আসে সরাসরি বাস্তব অভিজ্ঞতা থেকে, কোনো সেলস টার্গেট থেকে নয়। আমাদের কাজ হলো পুরো প্রক্রিয়াটিকে সহজ করা: আপনার একাডেমিক প্রোফাইলের সাথে মানানসই ইউনিভার্সিটি খুঁজে বের করা, আপনার পক্ষে আবেদন প্রস্তুত ও জমা দেওয়া, এবং গন্তব্যে পৌঁছানো পর্যন্ত ভিসা প্রসেসিংয়ের প্রতিটি ধাপে সহায়তা করা।
                </p>

                <div
                  className="mt-5 rounded-2xl border p-4"
                  style={{ borderColor: `${primary}33`, borderLeft: `3px solid ${primary}`, backgroundColor: `${primary}06` }}
                >
                  <p lang="bn" className="font-bn text-sm text-gray-700 leading-relaxed">
                    কান্ট্রি স্পেসিফিক প্রোফাইল ইভালুয়েশন ও ডিসকাশন এর জন্য আমাদের দেশভিত্তিক মেন্টরদের <Link href="/#mentors" className="font-semibold underline underline-offset-2" style={{ color: primary }}>1:1 পেইড সেশন</Link> বুক করুন
                  </p>
                </div>
              </div>

              {/* Right: Contact card */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-gray-600">Get a Quote</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                      Tell us where you&apos;re headed
                    </p>
                    <p className="mt-1.5 text-sm text-gray-500">
                      Share your origin and destination — we&apos;ll guide you from there.
                    </p>

                    {/* Pricing teaser */}
                    <div
                      className="mt-3 flex items-center gap-2.5 rounded-2xl border p-3"
                      style={{ borderColor: `${primary}33`, backgroundColor: `${primary}06` }}
                    >
                      <Tag className="h-4 w-4 shrink-0" style={{ color: primary }} />
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold" style={{ color: primary }}>From €800</span>
                        <span className="text-xs text-gray-500">· Standard Package</span>
                      </div>
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
                      <a
                        href="#packages"
                        className="mt-2 flex items-center justify-center gap-2 w-full rounded-2xl px-5 py-3 text-sm font-semibold border transition-colors hover:bg-gray-50"
                        style={{ borderColor: `${primary}44`, color: primary }}
                      >
                        View packages &amp; pricing ↓
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

        {/* ── Our Packages ── */}
        <div id="packages" className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Our packages</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Choose Your Destination —{" "}
              <span style={{ color: primary }}>We Handle the Rest</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fully managed consultancy from application to arrival. All packages include the same 11-service coverage.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {packageTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: `${tier.color}33` }}
                >
                  {/* Gradient header */}
                  <div className="px-5 pt-5 pb-4" style={{ background: tier.gradient }}>
                    <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                      {tier.tagline}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{tier.name}</h3>
                    {tier.countries.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {tier.countries.map((c) => (
                          <span
                            key={c.name}
                            className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white"
                          >
                            {c.flag} {c.name}
                          </span>
                        ))}
                      </div>
                    )}
                    {tier.id === "customized" && (
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{tier.description}</p>
                    )}
                  </div>

                  {/* White body */}
                  <div className="p-5 bg-white">
                    {tier.amountEur !== null ? (
                      <PriceDisplay amountEur={tier.amountEur} />
                    ) : (
                      <div>
                        <span className="text-2xl font-semibold text-gray-900">Contact for pricing</span>
                        <p className="mt-1 text-xs text-gray-400">Tailored to your countries and needs</p>
                      </div>
                    )}

                    {tier.amountEur !== null && (
                      <p className="mt-2 text-xs text-gray-400">+75% of total fee for spouse / dependent</p>
                    )}

                    <div className="mt-4">
                      <a
                        href={contactEmail}
                        className="flex items-center justify-center gap-2 w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                        style={{ backgroundColor: tier.color }}
                      >
                        <Mail className="h-4 w-4" />
                        {tier.id === "customized" ? "Get a Custom Quote" : "Apply for This Package"}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── What's Included ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Included in every package</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              11 Services —{" "}
              <span style={{ color: primary }}>All Covered</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Every package tier includes the complete service list below — no hidden extras.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {packageInclusions.map((item, i) => {
                const c = palette[i % palette.length];
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border p-4"
                    style={{ borderColor: `${c}33`, borderLeft: `3px solid ${c}`, backgroundColor: `${c}08` }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 mt-0.5 shrink-0" style={{ color: c }} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── Fee Structure & Refund Policy ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">Fee structure</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Transparent Pricing —{" "}
              <span style={{ color: primary }}>Two-Part Fee Structure</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              The total fee is split into two parts, paid at different stages of your journey.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feeStructure.map((fee) => (
                <div
                  key={fee.label}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${fee.color}33`, borderLeft: `3px solid ${fee.color}`, backgroundColor: `${fee.color}08` }}
                >
                  <div className="flex items-center gap-2">
                    <Euro className="h-5 w-5 shrink-0" style={{ color: fee.color }} />
                    <p className="text-sm font-semibold text-gray-900">{fee.label}</p>
                  </div>
                  <p className="mt-3 text-3xl font-bold text-gray-900">€{fee.amount}</p>
                  <p className="mt-1 text-xs text-gray-500">{fee.note}</p>

                  {/* Installment breakdown */}
                  {fee.installments && (
                    <div className="mt-3 space-y-1.5">
                      {fee.installments.map((inst, ii) => (
                        <div
                          key={ii}
                          className="flex items-center justify-between rounded-lg px-3 py-1.5"
                          style={{ backgroundColor: `${fee.color}10` }}
                        >
                          <span className="text-xs text-gray-600">{inst.label}</span>
                          <span className="text-xs font-bold" style={{ color: fee.color }}>€{inst.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-2 flex items-center gap-1.5">
                    {fee.refundable ? (
                      <>
                        <RefreshCcw className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-xs font-medium text-green-700">{fee.refundNote}</span>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400">{fee.refundNote}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total callout */}
            <div
              className="mt-4 rounded-2xl border p-4 flex items-center justify-between"
              style={{ borderColor: `${primary}22`, backgroundColor: `${primary}06` }}
            >
              <span className="text-sm font-semibold text-gray-700">Standard Package total</span>
              <span className="text-xl font-bold" style={{ color: primary }}>€800</span>
            </div>

            {/* Dependent add-on */}
            <div
              className="mt-4 rounded-2xl border p-4"
              style={{ borderColor: "#d9770633", borderLeft: "3px solid #d97706", backgroundColor: "#d9770608" }}
            >
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 mt-0.5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Spouse / Dependent Add-on</p>
                  <p className="mt-0.5 text-sm text-gray-600">
                    +75% of the total package fee per accompanying spouse or dependent.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund policy callout */}
            <div
              className="mt-4 rounded-2xl p-5 border"
              style={{ borderColor: "#05966933", borderLeft: "4px solid #059669", backgroundColor: "#05966908" }}
            >
              <p className="text-sm font-semibold text-gray-900">Visa Fee Refund Policy</p>
              <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                The €500 visa consultation fee is fully refundable if your visa application is denied by the consulate.
                The €300 admission consultation fee is non-refundable — it covers the university selection, document
                preparation and application work already completed on your behalf.
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
              Every stage of your journey, managed end to end.
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
                  We work exclusively on study-visa consultancy. We do not handle work, job or
                  employment-based relocation — and that focus is exactly why we do this so well.
                </p>
              </div>
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── Student Reviews ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-gray-500">From our students</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Real Journeys,{" "}
              <span style={{ color: primary }}>Real Results</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Shared by students who completed our consultancy package.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {relocationReviews.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                >
                  {/* ── Compact gradient header ── */}
                  <div
                    className="relative px-4 py-4 flex items-center gap-3"
                    style={{ background: `linear-gradient(135deg, #364bc5 0%, #5b6fd8 100%)` }}
                  >
                    <Plane
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 w-14 h-14 text-white pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/40 shadow-md">
                      <Image src={r.photo} alt={r.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white leading-tight">{r.name}</p>
                      <p className="text-xs text-white/70 mt-0.5 leading-snug line-clamp-1">{r.program}</p>
                      <p className="text-xs text-white/55 leading-snug truncate">{r.university}</p>
                      <div className="mt-1.5">
                        <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs text-white font-medium tracking-wide">
                          {r.route}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── White body ── */}
                  <div className="flex flex-col grow bg-white px-4 pt-4 pb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-3xl font-serif leading-none select-none"
                        style={{ color: `${primary}28` }}
                      >
                        ❝
                      </span>
                      <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-500 font-medium">{r.date}</span>
                    </div>
                    <div>
                      {r.text.split("\n\n").map((para, pi) => (
                        <p key={pi} className={`text-sm text-gray-700 leading-relaxed ${pi > 0 ? "mt-2.5" : ""}`}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1.5" style={{ backgroundColor: primary }} aria-hidden="true" />
        </div>

        {/* ── Disclaimer ── */}
        <div
          className="mt-8 rounded-2xl border p-5"
          style={{ borderColor: "#d9770633", borderLeft: "4px solid #d97706", backgroundColor: "#d9770606" }}
        >
          <p lang="bn" className="font-bn text-sm text-gray-700 leading-relaxed">
            উল্লেখ্য: ক্যারিয়ার এব্রোড মেন্টরস কোনো রকম এডমিশন, স্কলারশিপ কিংবা ভিসার গ্যারান্টি দেয় না, তবে এপ্লিকেন্টর জন্য সর্বোচ্চ এফোর্ট দেওয়ার চেষ্টা করে।
          </p>
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to start your study journey?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Tell us where you&apos;re headed and where you&apos;re moving from — we&apos;ll guide you from there.
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

        <RelatedServices exclude="/services" />

      </div>
    </section>
  );
}
