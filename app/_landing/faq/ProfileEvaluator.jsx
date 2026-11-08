"use client";
import React, { useState, useMemo } from "react";
import { Target, ChevronRight, Calendar, CheckCircle2, AlertTriangle, XCircle, Star } from "lucide-react";

const primary = "#364bc5";

const COUNTRIES = [
  {
    id: "france", name: "France", flag: "🇫🇷", color: "#364bc5",
    tuition: "€4,000–6,000/yr", fund: "Show fund (embassy + tuition)",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Eiffel", "IDEX"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "italy", name: "Italy", flag: "🇮🇹", color: "#059669",
    tuition: "€300–4,000/yr", fund: "Show fund (embassy + tuition)",
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "MAECI", "IYT", "DSU"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0, dsuForAll: true,
  },
  {
    id: "belgium", name: "Belgium", flag: "🇧🇪", color: "#d97706",
    tuition: "€1,200–7,000/yr", fund: "Block money €14,000/yr",
    minCgpa: 3.3, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Mastermind"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "spain", name: "Spain", flag: "🇪🇸", color: "#dc2626",
    tuition: "€3,000–7,000/yr", fund: "Show fund (embassy + tuition, 1 yr)",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "hungary", name: "Hungary", flag: "🇭🇺", color: "#8b5cf6",
    tuition: "€1,500–8,000/yr", fund: "Show fund: €600/mo + tuition",
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "germany", name: "Germany", flag: "🇩🇪", color: "#374151",
    tuition: "FREE (0 tuition!)", fund: "Block money €12,000/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["DAAD"],
    scholarshipCgpa: 3.0, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "norway", name: "Norway", flag: "🇳🇴", color: "#be123c",
    tuition: "9–30 lac BDT/yr", fund: "Block money 22,15,000 BDT/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "netherlands", name: "Netherlands", flag: "🇳🇱", color: "#f97316",
    tuition: "€10,000–30,000/yr", fund: "Show fund: 20–25 lac BDT/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "sweden", name: "Sweden", flag: "🇸🇪", color: "#1d4ed8",
    tuition: "€12,000–25,000/yr", fund: "Show fund: 16–20 lac BDT/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Swedish Institute (SI)"],
    scholarshipCgpa: 3.5, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "estonia", name: "Estonia", flag: "🇪🇪", color: "#0891b2",
    tuition: "€4,000–8,000/yr", fund: "Show fund: €700/mo (1 yr)",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India", "China", "Singapore"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "austria", name: "Austria", flag: "🇦🇹", color: "#e11d48",
    tuition: "Section 1 unis only", fund: "Show fund: 25–30 lac BDT (6mo)",
    minCgpa: 3.5, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "poland", name: "Poland", flag: "🇵🇱", color: "#dc2626",
    tuition: "€500–6,000/yr", fund: "Show fund: 10,912 PLN",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "lithuania", name: "Lithuania", flag: "🇱🇹", color: "#16a34a",
    tuition: "€1,500–6,000/yr", fund: "Show fund: €10,000/yr",
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "denmark", name: "Denmark", flag: "🇩🇰", color: "#dc2626",
    tuition: "€10,000–15,000/yr", fund: "Show fund: 16–20 lac BDT/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "finland", name: "Finland", flag: "🇫🇮", color: "#1d4ed8",
    tuition: "€12,000–20,000/yr", fund: "Show fund: 15–20 lac BDT/yr",
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
];

function evaluate(country, p) {
  let score = 100;
  const pros = [];
  const cons = [];

  // CGPA
  if (p.cgpa > 0) {
    if (p.cgpa < country.minCgpa) {
      if (country.cgpaFlexible) { score -= 15; cons.push(`CGPA ${country.minCgpa}+ preferred (flexible admission)`); }
      else { score -= 45; cons.push(`CGPA ${country.minCgpa}+ required`); }
    } else {
      pros.push(`CGPA requirement met`);
    }
  }

  // IELTS
  if (p.ielts > 0) {
    if (p.ielts < country.minIelts) {
      score -= 40;
      cons.push(`IELTS ${country.minIelts}+ needed (you have ${p.ielts})`);
    } else {
      pros.push(`IELTS meets requirement`);
    }
  }

  // Spouse
  if (p.hasSpouse) {
    if (!country.spouseAllowed) { score -= 20; cons.push("Spouse dependent not permitted"); }
    else pros.push("Spouse dependent allowed ✓");
  }

  // Child
  if (p.hasChild) {
    if (!country.childAllowed) { score -= 20; cons.push("Child dependent not permitted"); }
    else pros.push("Child dependent allowed ✓");
  }

  // Visa city
  const dhakaVisa = country.visaCities.includes("Dhaka");
  if (!p.canTravelIndia && !dhakaVisa) {
    score -= 20;
    cons.push(`Visa submit in ${country.visaCities[0]} (not Dhaka)`);
  } else if (dhakaVisa) {
    pros.push("Visa submit in Dhaka ✓");
  } else {
    cons.push(`Visa in ${country.visaCities.join(" / ")}`);
  }

  // Scholarship
  if (p.wantScholarship && country.hasScholarship) {
    const cgpaOk = !country.scholarshipCgpa || p.cgpa >= country.scholarshipCgpa;
    const pubsOk = !country.scholarshipPubs || p.publications >= country.scholarshipPubs;
    const workOk = !country.scholarshipWorkExp || p.workExp >= country.scholarshipWorkExp;
    if (cgpaOk && pubsOk && workOk && p.cgpa > 0) {
      score += 15;
      pros.push(`Scholarship eligible: ${country.scholarships.join(", ")}`);
    } else {
      const need = [];
      if (!cgpaOk) need.push(`${country.scholarshipCgpa}+ CGPA`);
      if (!pubsOk) need.push(`${country.scholarshipPubs}+ publication`);
      if (!workOk) need.push(`${country.scholarshipWorkExp}yr work exp`);
      cons.push(`Scholarship needs: ${need.join(", ")}`);
    }
  } else if (p.wantScholarship && country.dsuForAll) {
    pros.push("DSU scholarship available for all ✓");
    score += 10;
  }

  let matchLevel = "challenging";
  if (score >= 90) matchLevel = "strong";
  else if (score >= 70) matchLevel = "good";
  else if (score >= 50) matchLevel = "possible";

  return { score, matchLevel, pros, cons };
}

const MATCH = {
  strong:      { label: "Strong Match",  bg: "#059669", ring: "#059669" },
  good:        { label: "Good Match",    bg: primary,   ring: primary },
  possible:    { label: "Possible",      bg: "#d97706", ring: "#d97706" },
  challenging: { label: "Challenging",   bg: "#dc2626", ring: "#dc2626" },
};

const Toggle = ({ value, onChange, label }) => (
  <button
    type="button"
    onClick={() => onChange(!value)}
    className="flex items-center gap-2 text-sm font-medium text-gray-700 select-none"
  >
    <div
      className="relative w-10 h-5 rounded-full transition-colors duration-200"
      style={{ backgroundColor: value ? primary : "#d1d5db" }}
    >
      <div
        className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
        style={{ transform: value ? "translateX(1.25rem)" : "translateX(0.125rem)" }}
      />
    </div>
    {label}
  </button>
);

const PillGroup = ({ options, value, onChange }) => (
  <div className="flex gap-1.5 flex-wrap">
    {options.map((opt) => (
      <button
        key={opt.value}
        type="button"
        onClick={() => onChange(opt.value)}
        className="rounded-full px-3 py-1 text-xs font-semibold transition-all"
        style={
          value === opt.value
            ? { backgroundColor: primary, color: "#fff" }
            : { backgroundColor: "#f3f4f6", color: "#374151" }
        }
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default function ProfileEvaluator() {
  const [cgpa, setCgpa] = useState("");
  const [ielts, setIelts] = useState("0");
  const [publications, setPublications] = useState(0);
  const [workExp, setWorkExp] = useState(0);
  const [hasSpouse, setHasSpouse] = useState(false);
  const [hasChild, setHasChild] = useState(false);
  const [wantScholarship, setWantScholarship] = useState(false);
  const [canTravelIndia, setCanTravelIndia] = useState(true);

  const hasProfile = cgpa !== "" && parseFloat(cgpa) > 0;

  const results = useMemo(() => {
    if (!hasProfile) return [];
    const p = {
      cgpa: parseFloat(cgpa) || 0,
      ielts: parseFloat(ielts) || 0,
      publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia,
    };
    return COUNTRIES
      .map((c) => ({ country: c, ...evaluate(c, p) }))
      .sort((a, b) => b.score - a.score);
  }, [cgpa, ielts, publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia, hasProfile]);

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${primary}12`, color: primary }}
          >
            <Target className="w-3.5 h-3.5" />
            Free Profile Evaluator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Which Countries Match Your Profile?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Enter your academic details and instantly see which European countries are the best fit for your higher study journey.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CGPA */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                CGPA (out of 4.0)
              </label>
              <input
                type="number"
                min="0" max="4" step="0.01"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="e.g. 3.20"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>

            {/* IELTS */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                IELTS Score
              </label>
              <select
                value={ielts}
                onChange={(e) => setIelts(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white"
              >
                <option value="0">Not yet appeared</option>
                <option value="5.0">5.0 — Below B2</option>
                <option value="5.5">5.5 — B2 (minimum)</option>
                <option value="6.0">6.0 — B2+</option>
                <option value="6.5">6.5</option>
                <option value="7.0">7.0+</option>
              </select>
            </div>

            {/* Publications */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Publications
              </label>
              <PillGroup
                value={publications}
                onChange={setPublications}
                options={[
                  { label: "None", value: 0 },
                  { label: "1", value: 1 },
                  { label: "2+", value: 2 },
                ]}
              />
            </div>

            {/* Work Experience */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Work Experience
              </label>
              <PillGroup
                value={workExp}
                onChange={setWorkExp}
                options={[
                  { label: "None", value: 0 },
                  { label: "1 yr", value: 1 },
                  { label: "2+ yrs", value: 2 },
                ]}
              />
            </div>

            {/* Spouse */}
            <div className="flex items-center">
              <Toggle value={hasSpouse} onChange={setHasSpouse} label="Bringing Spouse" />
            </div>

            {/* Child */}
            <div className="flex items-center">
              <Toggle value={hasChild} onChange={setHasChild} label="Bringing Child" />
            </div>

            {/* Scholarship */}
            <div className="flex items-center">
              <Toggle value={wantScholarship} onChange={setWantScholarship} label="Need Scholarship" />
            </div>

            {/* India visa */}
            <div className="flex items-center">
              <Toggle value={canTravelIndia} onChange={setCanTravelIndia} label="Can apply from India" />
            </div>

          </div>
        </div>

        {/* Results */}
        {!hasProfile ? (
          <div className="text-center py-12 text-gray-400">
            <Target className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">Enter your CGPA above to see matching countries</p>
          </div>
        ) : (
          <>
            {/* Match legend */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {Object.entries(MATCH).map(([key, m]) => (
                <span key={key} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: m.bg }}>
                  {m.label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {results.map(({ country, matchLevel, pros, cons }) => {
                const m = MATCH[matchLevel];
                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
                    style={{ borderTop: `3px solid ${m.bg}` }}
                  >
                    {/* Card header */}
                    <div className="px-4 pt-4 pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-bold text-gray-900 text-sm">{country.name}</span>
                      </div>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                        style={{ backgroundColor: m.bg }}
                      >
                        {m.label}
                      </span>
                    </div>

                    {/* Fees */}
                    <div className="px-4 pb-3 border-b border-gray-50">
                      <p className="text-xs text-gray-500">{country.tuition}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{country.fund}</p>
                    </div>

                    {/* Pros */}
                    {pros.length > 0 && (
                      <div className="px-4 pt-3 space-y-1">
                        {pros.slice(0, 2).map((p, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-xs text-gray-600">{p}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cons */}
                    {cons.length > 0 && (
                      <div className="px-4 pt-2 pb-4 space-y-1">
                        {cons.slice(0, 2).map((c, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <AlertTriangle className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                            <span className="text-xs text-gray-500">{c}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: `${primary}12`, color: primary }}
          >
            Learn more about each country
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: primary }}
          >
            <Calendar className="w-4 h-4" />
            Book a consultation with our mentors
          </a>
        </div>

      </div>
    </section>
  );
}
