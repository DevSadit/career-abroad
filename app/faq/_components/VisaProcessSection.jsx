import { Mail, MapPin, Clock, ExternalLink, ArrowDown, CheckCircle } from "lucide-react";
import Link from "next/link";

const COLOR_MAP = {
  blue:        { bg: "bg-[#4472C4]", text: "text-white" },
  yellow:      { bg: "bg-[#FFC000]", text: "text-gray-900" },
  gray:        { bg: "bg-[#A6A6A6]", text: "text-white" },
  green:       { bg: "bg-[#70AD47]", text: "text-white" },
  lightyellow: { bg: "bg-[#FFF2CC] border border-yellow-200", text: "text-gray-800" },
  silver:      { bg: "bg-[#767171]", text: "text-white" },
  orange:      { bg: "bg-[#F4B183]", text: "text-gray-900" },
};

function Step({ step, showArrow }) {
  const { bg, text } = COLOR_MAP[step.color] ?? { bg: "bg-gray-200", text: "text-gray-800" };
  return (
    <div className="flex flex-col">
      <div className={`rounded-lg px-4 py-3 text-sm font-medium leading-snug ${bg} ${text}`}>
        <p className="whitespace-pre-line">{step.label}</p>
        {step.bullets?.length > 0 && (
          <ul className="mt-2 space-y-1 pl-1">
            {step.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5 text-sm">
                <span className="shrink-0 mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showArrow && (
        <div className="flex justify-center py-1 text-gray-300">
          <ArrowDown className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}

export default function VisaProcessSection({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-base md:text-lg font-bold text-gray-900">{data.title}</h2>
        {data.infoLink && (
          <Link
            href={data.infoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#364bc5] bg-[#364bc5]/8 border border-[#364bc5]/20 px-3 py-1.5 rounded-full hover:bg-[#364bc5]/15 transition-colors shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Official Source
          </Link>
        )}
      </div>

      {/* Notice banner */}
      {data.notice && (
        <div className="flex items-start gap-3 bg-green-50 border-b border-green-200 px-6 py-3">
          <CheckCircle className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">
            <span className="font-bold">NEW (since 16 Nov 2025):</span>{" "}
            {data.notice.replace(/^NEW[^:]+:\s*/i, "")}
          </p>
        </div>
      )}

      {/* Column headers — single row */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50/60 px-5 py-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Process Steps</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 md:pl-5">Cost Breakdown</p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

        {/* Left — Process Steps */}
        <div className="p-5">
          <div>
            {data.processSteps.map((step, i) => (
              <Step key={i} step={step} showArrow={i < data.processSteps.length - 1} />
            ))}
          </div>
        </div>

        {/* Right — Cost Breakdown + Contact */}
        <div className="p-5 flex flex-col gap-5">

          {/* Cost steps */}
          <div>
            {data.costSteps.map((step, i) => (
              <Step key={i} step={step} showArrow={i < data.costSteps.length - 1} />
            ))}
          </div>

          {/* Embassy contact card — fills remaining space */}
          {data.contact && (
            <div className="flex-1 rounded-xl border border-[#364bc5]/20 bg-gradient-to-br from-[#364bc5]/5 to-indigo-50 p-4 flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#364bc5]">
                Embassy / VAC Contact
              </p>
              <Link
                href={`mailto:${data.contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#364bc5] hover:underline break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {data.contact.email}
              </Link>
              <p className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
                {data.contact.address}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 shrink-0 text-gray-400" />
                {data.contact.hours}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
