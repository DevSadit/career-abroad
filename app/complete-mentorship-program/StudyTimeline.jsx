"use client";
import { useEffect, useState } from "react";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const INTENDED_SEM = 9; // September
const N = 12;
const ROW_H = 60;
const PRIMARY = "#364bc5";

const ROWS = [
  [
    { label: "Application",           s: 2,  e: 4,  bg: "#A6A6A6", fg: "#fff" },
    { label: "University Shortlist",  s: 5,  e: 8,  bg: "#F4A460", fg: "#1a1a1a" },
    { label: "Application",           s: 11, e: 12, bg: "#A6A6A6", fg: "#fff" },
  ],
  [
    { label: "Financial Preparation", s: 2, e: 5, bg: "#A9D18E", fg: "#1a1a1a" },
    { label: "Profile Building (CV, SOP, LOR, LinkedIn, Portfolio)", s: 5, e: 12, bg: "#4472C4", fg: "#fff" },
  ],
  [
    { label: "Regional Scholarship Approach", s: 4, e: 8, bg: "#C55A11", fg: "#fff" },
    { label: "National Scholarship Approach", s: 10, e: 12, bg: "#538135", fg: "#fff" },
  ],
  [
    { label: "Academic Emailing",     s: 1,  e: 4,  bg: "#595959", fg: "#fff" },
    { label: "Accommodation Booking", s: 4,  e: 8,  bg: "#F2F2F2", fg: "#333", outlined: true },
    { label: "Academic Emailing",     s: 10, e: 12, bg: "#595959", fg: "#fff" },
  ],
  [
    { label: "Visa Documentation",    s: 4,  e: 8,  bg: "#BDD7EE", fg: "#1a1a1a", large: true },
    { label: "Financial Preparation", s: 10, e: 12, bg: "#A9D18E", fg: "#1a1a1a" },
  ],
];

const pct  = (col)    => `${((col - 1) / N) * 100}%`;
const span = (s, e)   => `${((e - s + 1) / N) * 100}%`;

export default function StudyTimeline() {
  const [month, setMonth] = useState(null);
  useEffect(() => { setMonth(new Date().getMonth() + 1); }, []);

  const totalH = ROWS.length * ROW_H;

  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white overflow-hidden">

      {/* Card header */}
      <div className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: PRIMARY }}>
        <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
          Higher Study Preparation Timeline
        </h3>
        {month && (
          <span className="flex items-center gap-2 text-xs text-white/80 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
            </span>
            {MONTHS[month - 1]} (current)
          </span>
        )}
      </div>

      {/* Scrollable timeline */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">

          {/* Month header */}
          <div className="grid border-b border-gray-300" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
            {MONTHS.map((m, i) => {
              const col = i + 1;
              const isCur = month === col;
              const isInt = col === INTENDED_SEM;
              return (
                <div
                  key={m}
                  className="relative py-2 text-center text-xs font-bold border-r border-yellow-600/30 last:border-r-0"
                  style={{ backgroundColor: isInt ? "#FFD700" : isCur ? "#FFE566" : "#FFC000" }}
                >
                  <span style={{ color: isCur && !isInt ? PRIMARY : "#1a1a1a" }}>{m}</span>
                  {isCur && !isInt && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: PRIMARY }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Activity area */}
          <div className="relative" style={{ height: totalH }}>

            {/* Column background stripes */}
            <div className="absolute inset-0" style={{ display: "grid", gridTemplateColumns: `repeat(${N}, 1fr)` }}>
              {MONTHS.map((_, i) => (
                <div
                  key={i}
                  className="border-r border-gray-100 last:border-r-0 h-full"
                  style={{ backgroundColor: i % 2 === 0 ? "#f9fafb" : "#fff" }}
                />
              ))}
            </div>

            {/* Row dividers */}
            {ROWS.map((_, ri) =>
              ri > 0 ? (
                <div
                  key={ri}
                  className="absolute left-0 right-0 border-t border-gray-100 pointer-events-none"
                  style={{ top: ri * ROW_H }}
                />
              ) : null
            )}

            {/* Current month column highlight */}
            {month && month !== INTENDED_SEM && (
              <div
                className="absolute top-0 pointer-events-none"
                style={{
                  left: pct(month),
                  width: span(month, month),
                  height: totalH,
                  backgroundColor: `${PRIMARY}10`,
                  borderLeft: `2px dashed ${PRIMARY}55`,
                  borderRight: `2px dashed ${PRIMARY}55`,
                  zIndex: 5,
                }}
              />
            )}

            {/* Intended Sem. overlay */}
            <div
              className="absolute top-0 flex items-end justify-center pb-4 pointer-events-none"
              style={{
                left: pct(INTENDED_SEM),
                width: span(INTENDED_SEM, INTENDED_SEM),
                height: totalH,
                backgroundColor: "#FFD70050",
                borderLeft: "1px solid #FFD700bb",
                borderRight: "1px solid #FFD700bb",
                zIndex: 15,
              }}
            >
              <span
                className="font-extrabold text-yellow-800 select-none"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.12em", fontSize: "13px" }}
              >
                Intended Sem.
              </span>
            </div>

            {/* Activity blocks */}
            {ROWS.map((row, ri) =>
              row.map((item, ii) => (
                <div
                  key={`${ri}-${ii}`}
                  className="absolute rounded flex items-center justify-center text-center"
                  style={{
                    top: ri * ROW_H + 8,
                    height: ROW_H - 16,
                    left: pct(item.s),
                    width: span(item.s, item.e),
                    backgroundColor: item.bg,
                    color: item.fg,
                    border: item.outlined ? "1.5px solid #ccc" : "none",
                    fontSize: item.large ? "1rem" : "0.75rem",
                    fontWeight: item.large ? "700" : "600",
                    lineHeight: "1.25",
                    padding: "0 5px",
                    zIndex: 20,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                    overflow: "hidden",
                  }}
                >
                  {item.label}
                </div>
              ))
            )}
          </div>

          {/* Footer legend */}
          <div className="flex items-center justify-end px-5 py-2.5 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center gap-4 text-[10px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2.5 w-5 rounded"
                  style={{ backgroundColor: `${PRIMARY}18`, border: `1px dashed ${PRIMARY}66` }}
                />
                Current month
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-5 rounded" style={{ backgroundColor: "#FFD70055" }} />
                Intended Sem.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1.5" style={{ backgroundColor: PRIMARY }} />
    </div>
  );
}
