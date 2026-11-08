"use client";
import React, { useState, useMemo } from "react";
import { Target, ChevronRight, Calendar, CheckCircle2, AlertTriangle, Wallet } from "lucide-react";

const primary = "#364bc5";

// Approximate exchange rates (BDT, 2025)
// 1 EUR ≈ ৳125 · 1 NOK ≈ ৳11 · 1 PLN ≈ ৳28
// All minFundLac values are in lac BDT (1 lac = 1,00,000 ৳)
const COUNTRIES = [
  {
    id: "france", name: "France", flag: "🇫🇷", color: "#364bc5",
    tuitionOrig: "€4,000–6,000/yr", tuitionBdt: "৳5–7.5 lac/yr",
    fundType: "show", fundOrig: "€14,000–16,000", minFundLac: 18,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Eiffel", "IDEX"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "italy", name: "Italy", flag: "🇮🇹", color: "#059669",
    tuitionOrig: "€300–4,000/yr", tuitionBdt: "৳0.4–5 lac/yr",
    fundType: "show", fundOrig: "€12,000–14,000", minFundLac: 15,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "MAECI", "IYT", "DSU"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0, dsuForAll: true,
  },
  {
    id: "belgium", name: "Belgium", flag: "🇧🇪", color: "#d97706",
    tuitionOrig: "€1,200–7,000/yr", tuitionBdt: "৳1.5–8.75 lac/yr",
    fundType: "block", fundOrig: "€14,000/yr (block)", minFundLac: 18,
    minCgpa: 3.3, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Mastermind"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "spain", name: "Spain", flag: "🇪🇸", color: "#dc2626",
    tuitionOrig: "€3,000–7,000/yr", tuitionBdt: "৳3.75–8.75 lac/yr",
    fundType: "show", fundOrig: "€13,000–15,000", minFundLac: 16,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "hungary", name: "Hungary", flag: "🇭🇺", color: "#8b5cf6",
    tuitionOrig: "€1,500–8,000/yr", tuitionBdt: "৳1.9–10 lac/yr",
    fundType: "show", fundOrig: "€600/mo + tuition", minFundLac: 12,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "germany", name: "Germany", flag: "🇩🇪", color: "#374151",
    tuitionOrig: "FREE (0 tuition!)", tuitionBdt: "No tuition fee",
    fundType: "block", fundOrig: "€12,000/yr (block)", minFundLac: 15,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["DAAD"],
    scholarshipCgpa: 3.0, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "norway", name: "Norway", flag: "🇳🇴", color: "#be123c",
    tuitionOrig: "9–30 lac ৳/yr", tuitionBdt: "৳9–30 lac/yr",
    fundType: "block", fundOrig: "৳22,15,000/yr (block)", minFundLac: 22,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "netherlands", name: "Netherlands", flag: "🇳🇱", color: "#f97316",
    tuitionOrig: "€10,000–30,000/yr", tuitionBdt: "৳12.5–37.5 lac/yr",
    fundType: "show", fundOrig: "৳20–25 lac + tuition", minFundLac: 20,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "sweden", name: "Sweden", flag: "🇸🇪", color: "#1d4ed8",
    tuitionOrig: "€12,000–25,000/yr", tuitionBdt: "৳15–31 lac/yr",
    fundType: "show", fundOrig: "৳16–20 lac + tuition", minFundLac: 16,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Swedish Institute (SI)"],
    scholarshipCgpa: 3.5, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "estonia", name: "Estonia", flag: "🇪🇪", color: "#0891b2",
    tuitionOrig: "€4,000–8,000/yr", tuitionBdt: "৳5–10 lac/yr",
    fundType: "show", fundOrig: "€700/mo + tuition (1yr)", minFundLac: 15,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India", "China", "Singapore"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "austria", name: "Austria", flag: "🇦🇹", color: "#e11d48",
    tuitionOrig: "Section 1 unis only", tuitionBdt: "Varies by programme",
    fundType: "show", fundOrig: "৳25–30 lac (6 months)", minFundLac: 25,
    minCgpa: 3.5, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "poland", name: "Poland", flag: "🇵🇱", color: "#dc2626",
    tuitionOrig: "€500–6,000/yr", tuitionBdt: "৳0.6–7.5 lac/yr",
    fundType: "show", fundOrig: "10,912 PLN + tuition", minFundLac: 7,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "lithuania", name: "Lithuania", flag: "🇱🇹", color: "#16a34a",
    tuitionOrig: "€1,500–6,000/yr", tuitionBdt: "৳1.9–7.5 lac/yr",
    fundType: "show", fundOrig: "€10,000 + tuition", minFundLac: 13,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "denmark", name: "Denmark", flag: "🇩🇰", color: "#dc2626",
    tuitionOrig: "€10,000–15,000/yr", tuitionBdt: "৳12.5–19 lac/yr",
    fundType: "show", fundOrig: "৳16–20 lac + tuition", minFundLac: 16,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "finland", name: "Finland", flag: "🇫🇮", color: "#1d4ed8",
    tuitionOrig: "€12,000–20,000/yr", tuitionBdt: "৳15–25 lac/yr",
    fundType: "show", fundOrig: "৳15–20 lac + tuition", minFundLac: 15,
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
      if (country.cgpaFlexible) { score -= 15; cons.push(`CGPA ${country.minCgpa}+ preferred (flexible)`); }
      else { score -= 45; cons.push(`CGPA ${country.minCgpa}+ required`); }
    } else {
      pros.push("CGPA requirement met");
    }
  }

  // IELTS
  if (p.ielts > 0) {
    if (p.ielts < country.minIelts) {
      score -= 40;
      cons.push(`IELTS ${country.minIelts}+ needed (you have ${p.ielts})`);
    } else {
      pros.push("IELTS meets requirement");
    }
  }

  // Budget
  let budgetStatus = null;
  if (p.budget > 0) {
    const diff = p.budget - country.minFundLac;
    if (diff >= 0) {
      budgetStatus = "ok";
      pros.push(`Budget sufficient (need ≈৳${country.minFundLac} lac)`);
      score += 5;
    } else if (diff >= -(country.minFundLac * 0.25)) {
      budgetStatus = "tight";
      score -= 20;
      cons.push(`Budget tight — need ≈৳${country.minFundLac} lac (short ৳${Math.abs(diff).toFixed(0)} lac)`);
    } else {
      budgetStatus = "low";
      score -= 40;
      cons.push(`Budget insufficient — need ≈৳${country.minFundLac} lac`);
    }
  }

  // Spouse
  if (p.hasSpouse) {
    if (!country.spouseAllowed) { score -= 20; cons.push("Spouse dependent not permitted"); }
    else pros.push("Spouse dependent allowed");
  }

  // Child
  if (p.hasChild) {
    if (!country.childAllowed) { score -= 20; cons.push("Child dependent not permitted"); }
    else pros.push("Child dependent allowed");
  }

  // Visa city
  const dhakaVisa = country.visaCities.includes("Dhaka");
  if (!p.canTravelIndia && !dhakaVisa) {
    score -= 20;
    cons.push(`Visa submit in ${country.visaCities[0]} (not Dhaka)`);
  } else if (dhakaVisa) {
    pros.push("Visa submit in Dhaka");
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
      if (!pubsOk) need.push(`${country.scholarshipPubs}+ pub`);
      if (!workOk) need.push(`${country.scholarshipWorkExp}yr work exp`);
      cons.push(`Scholarship needs: ${need.join(", ")}`);
    }
  } else if (p.wantScholarship && country.dsuForAll) {
    pros.push("DSU scholarship for all students");
    score += 10;
  }

  let matchLevel = "challenging";
  if (score >= 90) matchLevel = "strong";
  else if (score >= 70) matchLevel = "good";
  else if (score >= 50) matchLevel = "possible";

  return { score, matchLevel, pros, cons, budgetStatus };
}

const MATCH = {
  strong:      { label: "Strong Match",  bg: "#059669" },
  good:        { label: "Good Match",    bg: primary },
  possible:    { label: "Possible",      bg: "#d97706" },
  challenging: { label: "Challenging",   bg: "#dc2626" },
};

const BUDGET_BADGE = {
  ok:   { label: "Within budget", bg: "#dcfce7", text: "#15803d" },
  tight:{ label: "Budget tight",  bg: "#fef3c7", text: "#b45309" },
  low:  { label: "Budget low",    bg: "#fee2e2", text: "#b91c1c" },
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
  const [budget, setBudget] = useState("");
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
      budget: parseFloat(budget) || 0,
      publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia,
    };
    return COUNTRIES
      .map((c) => ({ country: c, ...evaluate(c, p) }))
      .sort((a, b) => b.score - a.score);
  }, [cgpa, ielts, budget, publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia, hasProfile]);

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
            Enter your academic profile and budget to instantly see which European countries are the best fit for your higher study journey.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 sm:p-8 mb-3">

          {/* Row 1 — numeric inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
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

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Available Budget
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">৳</span>
                <input
                  type="number"
                  min="0" step="1"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. 15"
                  className="w-full rounded-xl border border-gray-200 pl-7 pr-14 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">lac</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Total funds you can show/block</p>
            </div>
          </div>

          {/* Row 2 — pill selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
          </div>

          {/* Row 3 — toggles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Toggle value={hasSpouse} onChange={setHasSpouse} label="Bringing Spouse" />
            <Toggle value={hasChild} onChange={setHasChild} label="Bringing Child" />
            <Toggle value={wantScholarship} onChange={setWantScholarship} label="Need Scholarship" />
            <Toggle value={canTravelIndia} onChange={setCanTravelIndia} label="Can apply from India" />
          </div>
        </div>

        {/* Exchange rate note */}
        <p className="text-center text-xs text-gray-400 mb-8">
          * Fund &amp; tuition estimates converted at approx. rates: 1 EUR ≈ ৳125 · 1 NOK ≈ ৳11 · 1 PLN ≈ ৳28 &nbsp;(indicative, 2025)
        </p>

        {/* Results */}
        {!hasProfile ? (
          <div className="text-center py-12 text-gray-400">
            <Target className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">Enter your CGPA above to see matching countries</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {Object.entries(MATCH).map(([key, m]) => (
                <span key={key} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: m.bg }}>
                  {m.label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {results.map(({ country, matchLevel, pros, cons, budgetStatus }) => {
                const m = MATCH[matchLevel];
                const bb = budgetStatus ? BUDGET_BADGE[budgetStatus] : null;
                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
                    style={{ borderTop: `3px solid ${m.bg}` }}
                  >
                    {/* Header */}
                    <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-bold text-gray-900 text-sm">{country.name}</span>
                      </div>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white shrink-0"
                        style={{ backgroundColor: m.bg }}
                      >
                        {m.label}
                      </span>
                    </div>

                    {/* Tuition */}
                    <div className="px-4 pb-2">
                      <p className="text-xs text-gray-500 font-medium">
                        Tuition: <span className="text-gray-700">{country.tuitionOrig}</span>
                      </p>
                      <p className="text-xs text-gray-400">{country.tuitionBdt}</p>
                    </div>

                    {/* Fund row */}
                    <div className="mx-4 mb-3 rounded-xl px-3 py-2 border border-gray-100 bg-gray-50">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <Wallet className="w-3 h-3 text-gray-400 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-gray-700">
                              {country.fundType === "block" ? "Block Money" : "Show Fund"}
                            </p>
                            <p className="text-xs text-gray-400">{country.fundOrig}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-bold" style={{ color: primary }}>≈৳{country.minFundLac} lac</p>
                          {bb && (
                            <span
                              className="inline-block rounded-full px-1.5 py-0.5 text-xs font-semibold mt-0.5"
                              style={{ backgroundColor: bb.bg, color: bb.text }}
                            >
                              {bb.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Pros */}
                    {pros.length > 0 && (
                      <div className="px-4 space-y-1 mb-1">
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
                      <div className="px-4 pb-4 space-y-1 mt-1">
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
