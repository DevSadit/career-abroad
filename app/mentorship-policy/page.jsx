import Link from "next/link";

export const metadata = {
  title: "Mentorship Program Policy | Career Abroad Mentors",
  description: "Terms, eligibility, scope of guidance, fee structure, and participant obligations for the Career Abroad Mentorship Program 2026-27.",
  openGraph: {
    title: "Mentorship Program Policy | Career Abroad Mentors",
    url: "https://ahsansuny.com/mentorship-policy",
    siteName: "Career Abroad Mentors",
  },
};

const primary = "#364bc5";

const sections = [
  { id: "overview",        label: "1. Program Overview" },
  { id: "eligibility",     label: "2. Eligibility" },
  { id: "scope",           label: "3. Scope of Guidance" },
  { id: "limitations",     label: "4. Limitations" },
  { id: "fees",            label: "5. Fee & Payment" },
  { id: "cancellation",    label: "6. Cancellation" },
  { id: "ip",              label: "7. Intellectual Property" },
  { id: "data",            label: "8. Data & Privacy" },
  { id: "disclaimer",      label: "9. Disclaimer" },
];

function PolicySection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2
        className="text-base font-semibold mb-3 pb-2 border-b"
        style={{ color: primary, borderColor: `${primary}20` }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-start gap-4 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 shrink-0 w-36">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

export default function MentorshipPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Career Abroad Mentors</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Mentorship Program Policy</h1>
          <p className="mt-2 text-sm text-gray-500 max-w-xl">
            This policy governs the Career Abroad Mentorship Program. By enrolling, participants agree to these terms.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Effective: 2026–27 Academic Cycle</span>
            <span>·</span>
            <span>Last updated: November 2026</span>
            <span>·</span>
            <span>Applies to: Mentorship Program enrollees</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">

          {/* Sidebar nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 px-2">Contents</p>
              <nav className="space-y-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block px-2 py-1.5 text-xs text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy body */}
          <div className="space-y-10">

            {/* 1. Overview */}
            <PolicySection id="overview" title="1. Program Overview">
              <p>
                The <strong>Career Abroad Mentorship Program</strong> is a structured, mentor-led guidance initiative offered by Career Abroad Mentors for the 2026–27 academic cycle. It is designed for self-motivated students from Bangladesh who intend to pursue higher education abroad and are capable of independently executing their application journey with expert direction.
              </p>
              <p>
                The program is delivered by a team of five mentors based in the USA and Europe, all of whom are currently engaged in advanced academic research or professional work. Guidance spans the full higher-study pipeline — from university selection through to visa preparation — via regular one-on-one and recorded sessions.
              </p>

              {/* Key details table */}
              <div className="mt-4 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Format" value="Weekly Zoom / Google Meet sessions (weekends)" />
                <Row label="Duration" value="One academic year (until offer letter + visa stage)" />
                <Row label="Live sessions" value="20 live sessions + 10 recorded sessions per year" />
                <Row label="Recorded content" value="Full website content library — accessible throughout" />
                <Row label="Mentors" value="5 mentors across USA and Europe" />
                <Row label="Language" value="English & Bengali" />
              </div>
            </PolicySection>

            {/* 2. Eligibility */}
            <PolicySection id="eligibility" title="2. Eligibility Requirements">
              <p>Participation in the Mentorship Program requires meeting the following minimum academic standards:</p>
              <div className="mt-3 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Master's applicants" value="Minimum CGPA 2.80 / 4.00" />
                <Row label="Bachelor's applicants" value="Minimum GPA 4.50 in both SSC and HSC" />
              </div>
              <p className="mt-3">
                Meeting the minimum criteria does not guarantee selection. Career Abroad Mentors reserves the right to decline enrollment based on profile assessment. Students who do not meet these thresholds are encouraged to explore the <Link href="/services" className="underline underline-offset-2 font-medium" style={{ color: primary }}>Service Package</Link>, which offers a more hands-on approach.
              </p>
              <p>
                Applicants must possess or be in the process of obtaining a dual-currency bank card, as all third-party payments (university fees, accommodation, insurance, visa fees) must be made independently by the participant.
              </p>
            </PolicySection>

            {/* 3. Scope */}
            <PolicySection id="scope" title="3. Scope of Guidance">
              <p>The Mentorship Program covers the following areas of support:</p>

              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "University & Program Selection",
                    desc: "Mentors review the participant's academic and professional profile and provide a shortlist of target universities (Plan A — Ambitious, Plan B — Moderate, Plan C — Safe).",
                  },
                  {
                    title: "Application Document Preparation",
                    desc: "Guidance on crafting the Statement of Purpose (SOP), CV, and Cover Letter based on the participant's study motivation and goals.",
                  },
                  {
                    title: "Scholarship Guidance",
                    desc: "Where applicable, mentors advise on scholarship eligibility and document preparation throughout the application period.",
                  },
                  {
                    title: "Visa Preparation",
                    desc: "Guidance on financial document structuring, affidavit, notary, and translation requirements. Mock visa interview sessions are conducted prior to the visa appointment.",
                  },
                  {
                    title: "Session Access",
                    desc: "20 live group/individual sessions per academic year. 10 recorded sessions. Full access to all recorded content on the website throughout enrollment.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-100 bg-white p-4"
                  >
                    <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 4. Limitations */}
            <PolicySection id="limitations" title="4. Limitations of Service">
              <p>
                The Mentorship Program is a <strong>guidance and advisory service</strong>. The following activities are explicitly outside its scope:
              </p>
              <div className="mt-3 space-y-2">
                {[
                  "Career Abroad Mentors does not search for or select universities on behalf of participants — mentors provide a shortlist and direction; final decisions rest with the participant.",
                  "Mentors do not prepare, write, or submit application documents on behalf of participants. Participants are responsible for executing their applications.",
                  "Mentors do not sit evaluation tests, assessments, or interviews on behalf of any participant.",
                  "No financial sponsorship is provided. Participants are responsible for all application fees, university deposits, accommodation payments, visa fees, insurance, and travel costs.",
                  "Career Abroad Mentors does not procure, verify, or submit any fabricated financial documents or fake fund statements.",
                  "Appointment booking at embassies or VFS centres is attempted on a best-effort basis from the participant's email, but cannot be guaranteed.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 5. Fees */}
            <PolicySection id="fees" title="5. Fee Structure & Payment Terms">
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Total program fee" value="€150 (approx. ৳21,000 BDT)" />
                <Row label="Payment structure" value="Two installments" />
                <Row label="Installment 1" value="Due at enrollment — non-refundable" />
                <Row label="Installment 2" value="Due after the offer letter stage" />
                <Row label="Currency" value="Euro (EUR) preferred; BDT accepted" />
              </div>
              <p className="mt-3">
                Payments are accepted via bKash (Send Money), NRBC Bank Transfer, Wise, or PayPal. The first installment is non-refundable in all circumstances, as it covers assessment, onboarding, and resource access.
              </p>
              <p>
                Application fees payable to universities are separate from the mentorship fee and are the participant's sole responsibility. Where a participant has no access to a dual-currency card, Career Abroad Mentors may advance up to €150 equivalent in application fees, to be reimbursed.
              </p>
            </PolicySection>

            {/* 6. Cancellation */}
            <PolicySection id="cancellation" title="6. Cancellation Policy">
              <p>
                Participants who choose to withdraw from the program after enrollment will be charged a <strong>€50 cancellation fee</strong>, deducted from any refundable balance. The first installment is non-refundable under all circumstances.
              </p>
              <p>
                Career Abroad Mentors reserves the right to terminate a participant's enrollment without refund in cases of:
              </p>
              <div className="mt-2 space-y-1.5">
                {[
                  "Sharing program materials, recordings, or intellectual property outside the program.",
                  "Providing false or misleading information during the application process.",
                  "Requesting or submitting fraudulent financial documents.",
                  "Conduct detrimental to the program, mentors, or other participants.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 7. IP */}
            <PolicySection id="ip" title="7. Intellectual Property & Confidentiality">
              <p>
                All materials shared with participants — including study guides, session recordings, SOP templates, scholarship databases, and research resources — are the intellectual property of Career Abroad Mentors. Participants may not reproduce, distribute, or share these materials with any third party, institution, or platform outside the program.
              </p>
              <p>
                Participants consent to the recording of live sessions for internal quality and reference purposes. Recordings remain the property of Career Abroad Mentors and will not be shared publicly without participant consent.
              </p>
            </PolicySection>

            {/* 8. Data */}
            <PolicySection id="data" title="8. Data & Privacy">
              <p>
                By enrolling, participants authorize Career Abroad Mentors to:
              </p>
              <div className="mt-2 space-y-1.5">
                {[
                  "Process and store personal information provided during the application for internal program management purposes.",
                  "Share the participant's profile with assigned mentors within the organization for effective matching and guidance.",
                  "Feature the participant's name, photo, institution, and outcome on the Career Abroad Mentors website, WhatsApp channels, and social media as an alumnus or successful student — with the option to opt out by written request.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: primary }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                Career Abroad Mentors does not sell or share participant data with external organizations. All personal information is handled in accordance with applicable data protection principles.
              </p>
            </PolicySection>

            {/* 9. Disclaimer */}
            <PolicySection id="disclaimer" title="9. Disclaimer">
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "#d9770630", borderLeft: "3px solid #d97706", backgroundColor: "#d9770608" }}
              >
                <p className="text-amber-800 leading-relaxed">
                  Career Abroad Mentors does not guarantee admission to any university, award of any scholarship, or approval of any visa application. All outcomes depend on the participant's academic merit, the decisions of universities and embassies, and factors outside Career Abroad Mentors' control. Career Abroad Mentors commits to providing the highest standard of guidance and support throughout the process.
                </p>
              </div>
            </PolicySection>

            {/* Contact */}
            <div
              className="rounded-2xl border p-5"
              style={{ borderColor: `${primary}22`, borderLeft: `3px solid ${primary}`, backgroundColor: `${primary}06` }}
            >
              <p className="text-sm font-medium text-gray-900 mb-1">Questions about this policy?</p>
              <p className="text-sm text-gray-600">
                Contact us at{" "}
                <a href="mailto:mentors.career.abroad26@gmail.com" className="underline underline-offset-2" style={{ color: primary }}>
                  mentors.career.abroad26@gmail.com
                </a>{" "}
                or via{" "}
                <a href="https://wa.me/34743093378" target="_blank" rel="noreferrer" className="underline underline-offset-2" style={{ color: "#25D366" }}>
                  WhatsApp
                </a>.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/complete-mentorship-program"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: primary }}
              >
                View Mentorship Program
              </Link>
              <Link
                href="/service-policy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Service Package Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
