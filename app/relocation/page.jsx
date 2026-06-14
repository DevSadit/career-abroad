import Link from "next/link";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const primary = "#364bc5";

const services = [
  "University application & documents (SOP, CV, cover letter)",
  "Admission, enrolment & degree equivalency",
  "Scholarship & funding support",
  "Visa appointment & full visa application",
  "Financial documents, notary & translation",
  "Accommodation, insurance & travel guidance",
  "Mock visa interview preparation",
];

const trustedRoutes = [
  "UK → Spain",
  "China → France",
  "Hungary → France",
  "KSA → France",
];

export const metadata = {
  title: "Student Relocation Service | Career Abroad Mentor",
  description:
    "Relocating to Europe to study? We guide you step by step — visa, documents, accommodation and more.",
};

export default function RelocationPage() {
  return (
    <section className="min-h-screen bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="rounded-3xl bg-white overflow-hidden">
          <div>
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
              Student Relocation Service
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Relocating to Europe to Study?{" "}
              <span style={{ color: primary }}>Let's Make It Simple.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              Moving for your studies — from the UK, USA, China, Malaysia, or
              within Europe? Confused about the steps ahead? Don't worry. We
              guide you, step by step, all the way there.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="https://wa.me/34613593236"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white"
                style={{ backgroundColor: primary }}
              >
                Request a Quote →
              </Link>
            </div>

            {/* Trusted routes pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {trustedRoutes.map((route) => (
                <span
                  key={route}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: `${primary}33`,
                    color: primary,
                    backgroundColor: `${primary}08`,
                  }}
                >
                  {route}
                </span>
              ))}
              <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                and more
              </span>
            </div>
          </div>

          <div className="h-1.5 mt-10" style={{ backgroundColor: primary }} />
        </div>

        {/* ABOUT THE SERVICE + WHAT WE COVER */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* About */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 h-full">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                About the Service
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-gray-800">
                University application, admission, visa, documents,
                accommodation, travel — it's a lot, and in the right order. We
                handle the whole journey for you, so you can focus on what
                matters: your studies.
              </p>
              <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-gray-800">
                Trusted by students relocating UK → Spain, China → France,
                Hungary → France, KSA → France, and more.
              </p>
              <div
                className="mt-6 rounded-2xl border p-4"
                style={{
                  borderColor: `${primary}22`,
                  backgroundColor: `${primary}08`,
                }}
              >
                <p className="text-sm font-semibold" style={{ color: primary }}>
                  Study-visa relocation only
                </p>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  We specialise exclusively in study-visa relocation — no work
                  or job relocation services.
                </p>
              </div>
            </div>
          </div>

          {/* What We Cover */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 bg-gray-50 h-full">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                What We Cover
              </p>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="shrink-0 mt-1 flex items-center justify-center h-5 w-5 rounded-full"
                      style={{ backgroundColor: primary }}
                    >
                      <FaCheck className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-sm sm:text-[15px] text-gray-800 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* GET A QUOTE CTA */}
        <div className="mt-8">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Get a Quote
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Tell us where you're headed and where you're moving from — we'll
                guide you from there.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
                <a
                  href="https://wa.me/34613593236"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gray-900"
                >
                  <FaWhatsapp className="h-4 w-4 text-green-500" />
                  +34 613 593 236
                </a>
                <a
                  href="mailto:mentors.career.abroad26@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-gray-900"
                >
                  <MdEmail className="h-4 w-4" style={{ color: primary }} />
                  mentors.career.abroad26@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="https://wa.me/34613593236"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto rounded-2xl px-6 py-3.5 text-sm font-semibold text-white text-center"
                style={{ backgroundColor: primary }}
              >
                Request a Quote →
              </Link>
              <a
                href="mailto:mentors.career.abroad26@gmail.com"
                className="w-full md:w-auto rounded-2xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
