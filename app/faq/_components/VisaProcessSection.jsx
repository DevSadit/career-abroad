import { Mail, MapPin, Clock, ExternalLink, ArrowDown, CheckCircle } from "lucide-react";
import Link from "next/link";

const COLOR_MAP = {
  blue:        "bg-[#4472C4] text-white",
  yellow:      "bg-[#FFC000] text-gray-900",
  gray:        "bg-[#A6A6A6] text-white",
  green:       "bg-[#70AD47] text-white",
  lightyellow: "bg-[#FFF2CC] text-gray-800 border border-yellow-200",
  silver:      "bg-[#767171] text-white",
  orange:      "bg-[#F4B183] text-gray-900",
};

function Step({ step, showArrow }) {
  const colorClass = COLOR_MAP[step.color] ?? "bg-gray-200 text-gray-800";
  return (
    <div className="flex flex-col items-stretch">
      <div className={`rounded-lg px-4 py-3 text-sm font-medium leading-snug ${colorClass}`}>
        <p className="whitespace-pre-line">{step.label}</p>
        {step.bullets?.length > 0 && (
          <ul className="mt-1.5 space-y-0.5 list-none pl-1">
            {step.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5 text-sm">
                <span className="mt-0.5 shrink-0">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showArrow && (
        <div className="flex justify-center py-1 text-gray-400">
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
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          {data.title}
        </h2>
        {data.infoLink && (
          <Link
            href={data.infoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#364bc5] hover:underline shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Information Link
          </Link>
        )}
      </div>

      {/* Notice banner */}
      {data.notice && (
        <div className="flex items-start gap-3 bg-green-50 border-b border-green-200 px-6 py-3">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">
            <span className="font-bold">NEW (since 16 Nov 2025):</span>{" "}
            {data.notice.replace(/^NEW[^:]+:\s*/, "")}
          </p>
        </div>
      )}

      {/* Two-column steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {/* Process steps */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Process Steps
          </p>
          <div className="space-y-0">
            {data.processSteps.map((step, i) => (
              <Step
                key={i}
                step={step}
                showArrow={i < data.processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Cost steps */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Cost Breakdown
          </p>
          <div className="space-y-0">
            {data.costSteps.map((step, i) => (
              <Step
                key={i}
                step={step}
                showArrow={i < data.costSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact footer */}
      {data.contact && (
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center gap-2 text-[#364bc5] font-medium hover:underline"
          >
            <Mail className="w-4 h-4 shrink-0" />
            {data.contact.email}
          </a>
          <span className="inline-flex items-start gap-2">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
            {data.contact.address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0 text-gray-400" />
            {data.contact.hours}
          </span>
        </div>
      )}
    </div>
  );
}
