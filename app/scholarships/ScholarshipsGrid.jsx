"use client";
import { useEffect, useState } from "react";
import { CheckCircle2, Calendar, ArrowRight, Info, Tag } from "lucide-react";

const primary = "#364bc5";
const palette = ["#364bc5", "#7c3aed", "#0891b2", "#059669", "#d97706", "#0369a1"];
const registerUrl = "https://forms.gle/sKHwjRax2GVn3Seq7";

export default function ScholarshipsGrid({ scholarships }) {
  const [bdtRate, setBdtRate] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then((r) => r.json())
      .then((data) => {
        if (data.rates?.BDT) setBdtRate(data.rates.BDT);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {scholarships.map((s, idx) => {
        const color = palette[idx % palette.length];
        return (
          <div
            key={s.id}
            className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            {/* Hover border overlay */}
            <div
              className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ borderColor: color }}
            />

            {/* Top accent bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: `linear-gradient(to right, ${color}, ${color}99)` }}
            />

            <div className="p-5 flex flex-col grow">
              {/* Logo(s) or flag fallback */}
              <div className="flex items-center justify-between mb-3 gap-2">
                <div className="flex items-center gap-2">
                  {s.logos.length > 0 ? (
                    s.logos.map((logo, li) => (
                      <div
                        key={li}
                        className="h-10 w-auto flex items-center rounded-lg border border-gray-100 bg-white px-2 py-1 shadow-sm"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logo} alt={s.name} className="h-8 w-auto object-contain" />
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
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">{s.name}</h3>

              {/* Fees with BDT */}
              <div className={`mb-3 gap-2 ${s.fees.length > 1 ? "grid grid-cols-2" : "flex flex-col"}`}>
                {s.fees.map((f, fi) => (
                  <div
                    key={fi}
                    className="rounded-lg px-3 py-2"
                    style={{ background: `linear-gradient(to right, ${color}18, ${color}0a)` }}
                  >
                    {f.label && (
                      <p className="text-xs font-semibold text-gray-500 mb-0.5">{f.label}</p>
                    )}
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-bold" style={{ color }}>
                        €{f.amountEur}
                      </span>
                      {bdtRate ? (
                        <span className="text-sm font-semibold text-gray-400">
                          ≈ ৳{Math.round(f.amountEur * bdtRate).toLocaleString("en-BD")}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300">loading…</span>
                      )}
                    </div>
                    {f.note && <p className="text-xs text-gray-400 mt-0.5">{f.note}</p>}
                  </div>
                ))}
              </div>

              {/* Application window */}
              <div className="mb-4">
                {s.windows.map((w, wi) => (
                  <div key={wi} className="flex items-start gap-2 text-xs text-gray-500 mb-1">
                    <Calendar className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color }} />
                    <span>
                      {w.label && (
                        <span className="font-semibold text-gray-600">{w.label}: </span>
                      )}
                      {w.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="mb-4 grow">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  What&apos;s Included
                </p>
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
  );
}
