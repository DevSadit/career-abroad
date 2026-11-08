"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Target, ChevronRight, Calendar, CheckCircle2, AlertTriangle, Wallet } from "lucide-react";

const primary = "#364bc5";

// fundCurrency + fundAmount store the amount in original currency for live conversion
// EUR, PLN, BDT supported
const COUNTRIES = [
  {
    id: "france", name: "France", flag: "🇫🇷",
    tuitionOrig: "€4,000–6,000/yr",
    fundType: "show", fundOrig: "€14,000–16,000", fundCurrency: "EUR", fundAmount: 15000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Eiffel", "IDEX"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "italy", name: "Italy", flag: "🇮🇹",
    tuitionOrig: "€300–4,000/yr",
    fundType: "show", fundOrig: "€12,000–14,000", fundCurrency: "EUR", fundAmount: 13000,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "MAECI", "DSU"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0, dsuForAll: true,
  },
  {
    id: "belgium", name: "Belgium", flag: "🇧🇪",
    tuitionOrig: "€1,200–7,000/yr",
    fundType: "block", fundOrig: "€14,000/yr", fundCurrency: "EUR", fundAmount: 14000,
    minCgpa: 3.3, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus", "Mastermind"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "spain", name: "Spain", flag: "🇪🇸",
    tuitionOrig: "€3,000–7,000/yr",
    fundType: "show", fundOrig: "€13,000–15,000", fundCurrency: "EUR", fundAmount: 14000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Erasmus"],
    scholarshipCgpa: 3.5, scholarshipPubs: 1, scholarshipWorkExp: 0,
  },
  {
    id: "hungary", name: "Hungary", flag: "🇭🇺",
    tuitionOrig: "€1,500–8,000/yr",
    fundType: "show", fundOrig: "€600/mo + tuition", fundCurrency: "EUR", fundAmount: 12000,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "germany", name: "Germany", flag: "🇩🇪",
    tuitionOrig: "FREE (0 tuition!)",
    fundType: "block", fundOrig: "€12,000/yr", fundCurrency: "EUR", fundAmount: 12000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["DAAD"],
    scholarshipCgpa: 3.0, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "norway", name: "Norway", flag: "🇳🇴",
    tuitionOrig: "৳9–30 lac/yr",
    fundType: "block", fundOrig: "৳22,15,000/yr", fundCurrency: "BDT", fundAmount: 2215000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "netherlands", name: "Netherlands", flag: "🇳🇱",
    tuitionOrig: "€10,000–30,000/yr",
    fundType: "show", fundOrig: "৳20–25 lac + tuition", fundCurrency: "BDT", fundAmount: 2000000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "sweden", name: "Sweden", flag: "🇸🇪",
    tuitionOrig: "€12,000–25,000/yr",
    fundType: "show", fundOrig: "৳16–20 lac + tuition", fundCurrency: "BDT", fundAmount: 1600000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["Dhaka"],
    hasScholarship: true, scholarships: ["Swedish Institute (SI)"],
    scholarshipCgpa: 3.5, scholarshipPubs: 0, scholarshipWorkExp: 2,
  },
  {
    id: "estonia", name: "Estonia", flag: "🇪🇪",
    tuitionOrig: "€4,000–8,000/yr",
    fundType: "show", fundOrig: "€700/mo + tuition (1yr)", fundCurrency: "EUR", fundAmount: 14000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India", "China", "Singapore"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "austria", name: "Austria", flag: "🇦🇹",
    tuitionOrig: "Section 1 unis only",
    fundType: "show", fundOrig: "৳25–30 lac (6 months)", fundCurrency: "BDT", fundAmount: 2500000,
    minCgpa: 3.5, cgpaFlexible: false, minIelts: 6.5,
    spouseAllowed: true, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "poland", name: "Poland", flag: "🇵🇱",
    tuitionOrig: "€500–6,000/yr",
    fundType: "show", fundOrig: "10,912 PLN + tuition", fundCurrency: "PLN", fundAmount: 10912,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "lithuania", name: "Lithuania", flag: "🇱🇹",
    tuitionOrig: "€1,500–6,000/yr",
    fundType: "show", fundOrig: "€10,000 + tuition", fundCurrency: "EUR", fundAmount: 10000,
    minCgpa: 3.0, cgpaFlexible: true, minIelts: 6.0,
    spouseAllowed: true, childAllowed: true, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "denmark", name: "Denmark", flag: "🇩🇰",
    tuitionOrig: "€10,000–15,000/yr",
    fundType: "show", fundOrig: "৳16–20 lac + tuition", fundCurrency: "BDT", fundAmount: 1600000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["Dhaka"],
    hasScholarship: false, scholarships: [],
  },
  {
    id: "finland", name: "Finland", flag: "🇫🇮",
    tuitionOrig: "€12,000–20,000/yr",
    fundType: "show", fundOrig: "৳15–20 lac + tuition", fundCurrency: "BDT", fundAmount: 1500000,
    minCgpa: 3.0, cgpaFlexible: false, minIelts: 6.0,
    spouseAllowed: false, childAllowed: false, visaCities: ["India"],
    hasScholarship: false, scholarships: [],
  },
];

function toFundLac(amount, currency, rates) {
  if (currency === "BDT") return amount / 100000;
  if (currency === "EUR") return (amount * rates.EUR) / 100000;
  if (currency === "PLN") return (amount * rates.PLN) / 100000;
  return 0;
}

function formatLac(val) {
  return Math.round(val * 10) / 10;
}

// spouse needs same as student (+1×), child needs half (+0.5×)
function effectiveFundLac(country, p) {
  let mult = 1;
  if (p.hasSpouse) mult += 1;
  if (p.hasChild) mult += 0.5;
  return Math.round(country.minFundLac * mult * 10) / 10;
}

function isEligible(country, p) {
  if (p.cgpa > 0 && p.cgpa < country.minCgpa && !country.cgpaFlexible) return false;
  if (p.ielts > 0 && p.ielts < country.minIelts) return false;
  if (p.budget > 0 && p.budget < effectiveFundLac(country, p)) return false;
  if (p.hasSpouse && !country.spouseAllowed) return false;
  if (p.hasChild && !country.childAllowed) return false;
  if (!p.canTravelIndia && !country.visaCities.includes("Dhaka")) return false;
  return true;
}

function evaluate(country, p) {
  let score = 100;
  const pros = [];
  const cons = [];
  let budgetStatus = null;

  if (p.cgpa > 0 && p.cgpa < country.minCgpa && country.cgpaFlexible) {
    score -= 15;
    cons.push(`CGPA ${country.minCgpa}+ preferred (flexible admission possible)`);
  }

  const reqFund = effectiveFundLac(country, p);
  if (p.budget > 0) {
    const diff = p.budget - reqFund;
    if (diff >= 0) {
      budgetStatus = "ok";
      score += 5;
    } else if (diff >= -(reqFund * 0.25)) {
      budgetStatus = "tight";
      score -= 20;
    } else {
      budgetStatus = "low";
      score -= 40;
    }
  }

  const dhakaVisa = country.visaCities.includes("Dhaka");
  if (!dhakaVisa) {
    cons.push(`Visa submit in ${country.visaCities[0]}`);
    score -= 10;
  }

  if (p.hasSpouse && country.spouseAllowed) pros.push("Spouse dependent allowed");
  if (p.hasChild && country.childAllowed) pros.push("Child dependent allowed");

  if (p.wantScholarship && country.hasScholarship) {
    const cgpaOk = !country.scholarshipCgpa || p.cgpa >= country.scholarshipCgpa;
    const pubsOk = !country.scholarshipPubs || p.publications >= country.scholarshipPubs;
    const workOk = !country.scholarshipWorkExp || p.workExp >= country.scholarshipWorkExp;
    if (cgpaOk && pubsOk && workOk && p.cgpa > 0) {
      score += 15;
      pros.push(`Scholarship: ${country.scholarships.join(", ")}`);
    } else {
      const need = [];
      if (!cgpaOk) need.push(`${country.scholarshipCgpa}+ CGPA`);
      if (!pubsOk) need.push(`${country.scholarshipPubs}+ pub`);
      if (!workOk) need.push(`${country.scholarshipWorkExp}yr exp`);
      cons.push(`Scholarship needs: ${need.join(", ")}`);
    }
  } else if (p.wantScholarship && country.dsuForAll) {
    pros.push("DSU scholarship for all students");
    score += 10;
  }

  let matchLevel = "possible";
  if (score >= 110) matchLevel = "strong";
  else if (score >= 90) matchLevel = "good";

  return { score, matchLevel, pros, cons, budgetStatus, reqFund };
}

const MATCH = {
  strong:   { label: "Strong Match", bg: "#059669", light: "#dcfce7", text: "#15803d" },
  good:     { label: "Good Match",   bg: primary,   light: "#e0e7ff", text: primary },
  possible: { label: "Possible",     bg: "#d97706", light: "#fef3c7", text: "#b45309" },
};

const BUDGET_BADGE = {
  ok:    { label: "Within budget ✓", bg: "#dcfce7", text: "#15803d" },
  tight: { label: "Budget tight",    bg: "#fef3c7", text: "#b45309" },
  low:   { label: "Budget low",      bg: "#fee2e2", text: "#b91c1c" },
};

const Toggle = ({ value, onChange, label }) => (
  <button
    type="button"
    onClick={() => onChange(!value)}
    className="flex items-center gap-2.5 select-none group"
  >
    <div
      className="relative w-10 h-5 rounded-full transition-colors duration-200 shrink-0"
      style={{ backgroundColor: value ? primary : "#d1d5db" }}
    >
      <div
        className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
        style={{ transform: value ? "translateX(1.25rem)" : "translateX(0.125rem)" }}
      />
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </button>
);

const PillGroup = ({ options, value, onChange, dark }) => (
  <div className="flex gap-1.5">
    {options.map((opt) => (
      <button
        key={opt.value}
        type="button"
        onClick={() => onChange(opt.value)}
        className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all"
        style={
          value === opt.value
            ? { backgroundColor: primary, color: "#fff" }
            : dark
            ? { backgroundColor: "rgba(255,255,255,0.12)", color: "#cbd5e1" }
            : { backgroundColor: "#f1f5f9", color: "#475569" }
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
  const [rates, setRates] = useState({ EUR: 125, PLN: 28, NOK: 11 });

  useEffect(() => {
    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then((d) => setRates(d))
      .catch(() => {});
  }, []);

  const computedCountries = useMemo(
    () => COUNTRIES.map((c) => ({ ...c, minFundLac: formatLac(toFundLac(c.fundAmount, c.fundCurrency, rates)) })),
    [rates]
  );

  const hasProfile = cgpa !== "" && parseFloat(cgpa) > 0;

  const results = useMemo(() => {
    if (!hasProfile) return [];
    const p = {
      cgpa: parseFloat(cgpa) || 0,
      ielts: parseFloat(ielts) || 0,
      budget: parseFloat(budget) || 0,
      publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia,
    };
    return computedCountries
      .filter((c) => isEligible(c, p))
      .map((c) => ({ country: c, ...evaluate(c, p) }))
      .sort((a, b) => b.score - a.score);
  }, [cgpa, ielts, budget, publications, workExp, hasSpouse, hasChild, wantScholarship, canTravelIndia, hasProfile, computedCountries]);

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Outer card — matches SessionInfoBanner style */}
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-white overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 md:p-10">

            {/* Header */}
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
                style={{ backgroundColor: `${primary}12`, color: primary }}
              >
                <Target className="w-3.5 h-3.5" />
                Free Profile Evaluator
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Find Your Best Study Destination
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
                Enter your academic profile and budget — see only the countries where you genuinely qualify.
              </p>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7 mb-6">

              {/* Row 1 — numeric inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
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
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    IELTS Score
                  </label>
                  <select
                    value={ielts}
                    onChange={(e) => setIelts(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white cursor-pointer"
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
                    Available Budget (lac ৳)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">৳</span>
                    <input
                      type="number"
                      min="0" step="1"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g. 15"
                      className="w-full rounded-xl border border-gray-200 pl-7 pr-14 py-2.5 text-sm font-semibold text-gray-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition bg-white"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">lac</span>
                  </div>
                </div>
              </div>

              {/* Row 2 — pill selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                    Publications
                  </label>
                  <PillGroup value={publications} onChange={setPublications}
                    options={[{ label: "None", value: 0 }, { label: "1", value: 1 }, { label: "2+", value: 2 }]}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                    Work Experience
                  </label>
                  <PillGroup value={workExp} onChange={setWorkExp}
                    options={[{ label: "None", value: 0 }, { label: "1 yr", value: 1 }, { label: "2+ yrs", value: 2 }]}
                  />
                </div>
              </div>

              {/* Row 3 — toggles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4">
                <Toggle value={hasSpouse} onChange={setHasSpouse} label="Bringing Spouse" />
                <Toggle value={hasChild} onChange={setHasChild} label="Bringing Child" />
                <Toggle value={wantScholarship} onChange={setWantScholarship} label="Need Scholarship" />
                <Toggle value={canTravelIndia} onChange={setCanTravelIndia} label="Visa via 3rd Country" />
              </div>
            </div>

            {/* Results */}
            {hasProfile && (
              <>
                {results.length === 0 ? (
                  <div className="text-center py-8 bg-white rounded-2xl border border-gray-100 mb-6">
                    <p className="text-gray-700 font-semibold text-sm">No countries match your current profile</p>
                    <p className="text-gray-400 text-xs mt-1">Try adjusting budget, IELTS score, or dependent options.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2 mb-5 items-center justify-center">
                      <span className="text-gray-500 text-xs font-medium mr-1">{results.length} countries matched ·</span>
                      {Object.entries(MATCH).map(([key, m]) => (
                        <span key={key} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: m.bg }}>
                          {m.label}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {results.map(({ country, matchLevel, pros, cons, budgetStatus, reqFund }) => {
                        const m = MATCH[matchLevel] ?? MATCH.possible;
                        const bb = budgetStatus ? BUDGET_BADGE[budgetStatus] : null;
                        return (
                          <div
                            key={country.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                            style={{ borderTop: `3px solid ${m.bg}` }}
                          >
                            <div className="px-4 pt-4 pb-2 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-xl shrink-0">{country.flag}</span>
                                <span className="font-bold text-gray-900 text-sm truncate">{country.name}</span>
                              </div>
                              <span className="rounded-full px-2 py-0.5 text-xs font-bold text-white shrink-0" style={{ backgroundColor: m.bg }}>
                                {m.label}
                              </span>
                            </div>

                            <div className="px-4 pb-2">
                              <p className="text-xs text-gray-500">
                                <span className="text-gray-400">Tuition: </span>
                                <span className="font-medium text-gray-700">{country.tuitionOrig}</span>
                              </p>
                            </div>

                            <div className="mx-3 mb-3 rounded-xl px-3 py-2.5 bg-gray-50 border border-gray-100">
                              <div className="flex items-center justify-between gap-1">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <Wallet className="w-3 h-3 text-gray-400 shrink-0" />
                                  <div className="min-w-0">
                                    <p className="text-xs font-semibold text-gray-700 truncate">
                                      {country.fundType === "block" ? "Block Money" : "Show Fund"}
                                    </p>
                                    <p className="text-xs text-gray-400 truncate">{country.fundOrig}</p>
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <p className="text-xs font-bold" style={{ color: primary }}>
                                    ≈৳{reqFund ?? country.minFundLac} lac
                                  </p>
                                  {(hasSpouse || hasChild) && (
                                    <p className="text-xs text-gray-400">family total</p>
                                  )}
                                  {bb && (
                                    <span className="inline-block rounded-full px-1.5 py-0.5 text-xs font-semibold mt-0.5" style={{ backgroundColor: bb.bg, color: bb.text }}>
                                      {bb.label}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

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
              </>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: `${primary}12`, color: primary }}
              >
                Learn more about each country
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#mentors"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-md"
                style={{ backgroundColor: primary }}
              >
                <Calendar className="w-4 h-4" />
                Book appointment with our experts
              </a>
            </div>

          </div>
          {/* Bottom accent bar — matches SessionInfoBanner */}
          <div className="h-1.5 bg-[#364bc5]" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
