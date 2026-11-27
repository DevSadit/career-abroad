import Link from "next/link";

export const metadata = {
  title: "Service Package Policy | Career Abroad Mentors",
  description: "Scope of services, payment terms, client responsibilities, and limitations for Career Abroad Mentors consultancy service packages — 2026/2027.",
  openGraph: {
    title: "Service Package Policy | Career Abroad Mentors",
    url: "https://ahsansuny.com/service-policy",
    siteName: "Career Abroad Mentors",
  },
};

const primary = "#364bc5";

const sections = [
  { id: "overview",         label: "1. Service Overview" },
  { id: "scope",            label: "2. Scope of Services" },
  { id: "phase1",           label: "   Phase 1 — Onboarding" },
  { id: "phase2",           label: "   Phase 2 — Application" },
  { id: "phase3",           label: "   Phase 3 — Post-Offer" },
  { id: "phase4",           label: "   Phase 4 — Visa" },
  { id: "payment",          label: "3. Payment Terms" },
  { id: "client-duties",    label: "4. Client Responsibilities" },
  { id: "limitations",      label: "5. Limitations" },
  { id: "refund",           label: "6. Refund Policy" },
  { id: "disclaimer",       label: "7. Disclaimer" },
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

function SubSection({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-start gap-4 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 shrink-0 w-40">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

function PhaseCard({ number, bengaliTitle, englishTitle, items, color = primary }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ backgroundColor: `${color}08`, borderBottom: `1px solid ${color}18` }}
      >
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full text-white shrink-0"
          style={{ backgroundColor: color }}
        >
          Phase {number}
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-900">{englishTitle}</p>
          {bengaliTitle && (
            <p lang="bn" className="font-bn text-xs text-gray-500 mt-0.5">{bengaliTitle}</p>
          )}
        </div>
      </div>
      <ul className="p-5 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <span
              className="mt-1 shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {i + 1}
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Career Abroad Mentors</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Service Package Policy</h1>
          <p className="mt-2 text-sm text-gray-500 max-w-xl">
            This policy outlines the scope, deliverables, payment structure, and mutual obligations for Career Abroad Mentors consultancy service packages.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Effective: 2026–27 Admission Cycle</span>
            <span>·</span>
            <span>Last updated: November 2026</span>
            <span>·</span>
            <span>Applies to: Service Package clients</span>
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
            <PolicySection id="overview" title="1. Service Overview">
              <p>
                The <strong>Career Abroad Mentors Service Package</strong> is a full-service consultancy offering for students seeking comprehensive, hands-on support throughout their international higher education journey — from initial assessment through visa approval. Unlike the mentorship program, the service package involves active document preparation, submission coordination, and step-by-step processing by Career Abroad Mentors on behalf of the client.
              </p>
              <div className="mt-3 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Coverage" value="University application → Offer letter → Visa" />
                <Row label="Max. universities" value="5 applications included; €60/application beyond that" />
                <Row label="Payment structure" value="3 installments tied to milestones" />
                <Row label="Email account" value="Shared email created for the client post-enrollment" />
                <Row label="Meeting schedule" value="Weekends only; booking link provided at onboarding" />
              </div>
            </PolicySection>

            {/* 2. Scope */}
            <PolicySection id="scope" title="2. Scope of Services">
              <p>
                Services are delivered in four sequential phases. Career Abroad Mentors' obligations and the client's responsibilities at each stage are defined below.
              </p>

              {/* Phase 1 */}
              <SubSection id="phase1" title="">
                <PhaseCard
                  number="1"
                  englishTitle="Onboarding & Assessment"
                  bengaliTitle="অনবোর্ডিং ও অ্যাসেসমেন্ট"
                  items={[
                    "An itemized invoice covering all 3 installments is issued to the client at enrollment.",
                    "Upon receipt of the first installment and all required documents by email, a dedicated email account is created in the client's name — with shared access for both parties. The client may also share a separately created application email if preferred.",
                    "A session booking link is shared for meetings and discussions. All meetings are held on weekends. Meeting fees are included in the overall service fee — no additional session charges apply.",
                    "Following assessment, a shortlist of best-fit universities is provided. An overall booklet may be shared covering general information; university research is conducted based on the client's academic profile.",
                  ]}
                />
              </SubSection>

              {/* Phase 2 */}
              <SubSection id="phase2" title="">
                <PhaseCard
                  number="2"
                  englishTitle="Application"
                  bengaliTitle="আবেদন"
                  items={[
                    "Applications are prepared and submitted step by step. The client shares their study motivation in discussion sessions; Career Abroad Mentors prepares the application documents, SOP, CV, and Cover Letter accordingly.",
                    "Application fees are preferably paid from the client's own dual-currency card. Where the client has no access, Career Abroad Mentors may advance up to €150 equivalent in fees.",
                    "The second installment is due upon completion of university applications — non-refundable.",
                    "The service covers a maximum of 5 university applications. Additional applications beyond this are charged at €60 each.",
                    "If a university requires an evaluation test or interview, Career Abroad Mentors provides preparation guidance and guideline review only. Sitting any test on behalf of the client or any form of academic dishonesty is strictly prohibited.",
                    "Where the client is eligible for scholarships or university funding during the application period, Career Abroad Mentors provides document preparation support.",
                  ]}
                />
              </SubSection>

              {/* Phase 3 */}
              <SubSection id="phase3" title="">
                <PhaseCard
                  number="3"
                  englishTitle="Post-Offer Letter"
                  bengaliTitle="অফার লেটার পাওয়ার পর"
                  color="#059669"
                  items={[
                    "After an offer letter is received, Career Abroad Mentors advises on accepting the offer. The client independently opens the student portal and submits any deposit or tuition installment. CIMEA (Italy), Homologation (Spain), or degree/transcript equivalency applications are submitted by Career Abroad Mentors; application fees are the client's responsibility.",
                    "Career Abroad Mentors makes best-effort visa appointment attempts from the client's email, including contacting BLS or VFS centres. In some cases the client may need to call directly.",
                    "If the embassy or VFS centre is not available in Bangladesh, appointment and information support is provided for third-country submission. All travel costs, tickets, and payments are the client's responsibility.",
                    "Insurance purchase: Career Abroad Mentors provides website links and information only. The client purchases and manages their own policy.",
                    "Accommodation: Career Abroad Mentors searches for and shares accommodation options on a best-effort basis. All bookings and payments are the client's responsibility.",
                    "Health certificate: obtained independently by the client from any government-approved medical centre.",
                    "Financial documents (bank statements, affidavits, notary, translations): Career Abroad Mentors reviews, advises, and prepares these in discussion with the client. No fabricated or fraudulent financial documents are prepared or supported.",
                    "One-way ticket and travel insurance: purchased independently by the client; Career Abroad Mentors provides information guidance.",
                  ]}
                />
              </SubSection>

              {/* Phase 4 */}
              <SubSection id="phase4" title="">
                <PhaseCard
                  number="4"
                  englishTitle="Visa"
                  bengaliTitle="ভিসা"
                  color="#7c3aed"
                  items={[
                    "The client is prepared for the visa interview through one or more mock interview sessions.",
                    "For applications covering a spouse or dependent, an additional charge of 75% of the total consultancy fee applies.",
                    "The final installment is due at the time of visa application submission. This installment is refundable only in the event of a visa rejection. For clients who do not require shared email access, the final installment may be paid after the visa decision. If the client retains email access, Career Abroad Mentors sends a representative to the embassy, VFS, or BLS to collect the passport upon completion of the final installment.",
                  ]}
                />
              </SubSection>
            </PolicySection>

            {/* 3. Payment */}
            <PolicySection id="payment" title="3. Payment Terms">
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Installment 1" value="Due at enrollment — non-refundable — unlocks onboarding and email setup" />
                <Row label="Installment 2" value="Due after university applications are complete — non-refundable" />
                <Row label="Installment 3" value="Due at visa application stage — refundable on visa rejection only" />
                <Row label="Payment methods" value="bKash (Send Money), NRBC Bank Transfer, Wise, PayPal" />
              </div>
              <p className="mt-3">
                All installments must be paid before the corresponding phase of work begins. Career Abroad Mentors will not advance to the next phase until the milestone payment has been received and confirmed. Payment receipts must be shared via WhatsApp or email.
              </p>
            </PolicySection>

            {/* 4. Client Responsibilities */}
            <PolicySection id="client-duties" title="4. Client Responsibilities">
              <p>The client is solely responsible for the following throughout the engagement:</p>
              <div className="mt-3 space-y-2">
                {[
                  "Providing complete, truthful, and up-to-date personal and academic documents.",
                  "Attending scheduled sessions and responding to communications in a timely manner.",
                  "Making all third-party payments — including university fees, accommodation deposits, insurance, visa fees, and travel costs — from their own dual-currency bank card.",
                  "Executing their own student portal enrolment, offer acceptance, and deposit payments.",
                  "Independently obtaining health certificates and purchasing travel insurance.",
                  "Ensuring all financial documents (bank statements, fund sources) are genuine and verifiable.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: primary }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 5. Limitations */}
            <PolicySection id="limitations" title="5. Limitations of Service">
              <p>The following are explicitly outside the scope of the Service Package:</p>
              <div className="mt-3 space-y-2">
                {[
                  "Career Abroad Mentors does not guarantee visa appointments at a specific centre or on a specific date.",
                  "Career Abroad Mentors does not physically accompany clients to embassies, VFS, or BLS centres — except for passport collection under the shared-email arrangement after the final installment.",
                  "Career Abroad Mentors does not provide or assist in obtaining fabricated, forged, or misleading financial documents, visa support letters, or any form of fraudulent support.",
                  "Career Abroad Mentors does not sit examinations, tests, or interviews on behalf of clients.",
                  "Career Abroad Mentors cannot guarantee outcomes from universities or embassies, as these decisions are entirely at the discretion of those institutions.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            {/* 6. Refund */}
            <PolicySection id="refund" title="6. Refund Policy">
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <Row label="Installment 1" value="Non-refundable in all circumstances" />
                <Row label="Installment 2" value="Non-refundable in all circumstances" />
                <Row label="Installment 3" value="Refundable only upon confirmed visa rejection" />
              </div>
              <p className="mt-3">
                Refunds, where applicable, are processed within 14 business days of the qualifying event. Career Abroad Mentors reserves the right to withhold refunds if the client has violated any terms of this policy, including submission of fraudulent documents or sharing proprietary materials.
              </p>
            </PolicySection>

            {/* 7. Disclaimer */}
            <PolicySection id="disclaimer" title="7. Disclaimer">
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "#d9770630", borderLeft: "3px solid #d97706", backgroundColor: "#d9770608" }}
              >
                <p className="text-amber-800 leading-relaxed">
                  Career Abroad Mentors does not guarantee admission to any university, the award of any scholarship, or the approval of any visa. All outcomes are determined by universities, scholarship bodies, and embassies whose decisions are independent of Career Abroad Mentors. Career Abroad Mentors commits to providing the highest standard of professional guidance and effort at every stage of the process.
                </p>
              </div>
              <p lang="bn" className="font-bn text-gray-500 text-xs mt-3">
                উল্লেখ্য: ক্যারিয়ার এব্রোড মেন্টরস কোনো রকম এডমিশন, স্কলারশিপ কিংবা ভিসার গ্যারান্টি দেয় না, তবে এপ্লিকেন্টের জন্য সর্বোচ্চ এফোর্ট দেওয়ার চেষ্টা করে।
              </p>
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
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: primary }}
              >
                View Service Packages
              </Link>
              <Link
                href="/mentorship-policy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Mentorship Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
