import { Mail, MapPin, Clock, ExternalLink, ArrowDown, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COLOR_MAP = {
  blue:        { bg: "bg-[#4472C4]", text: "text-white" },
  yellow:      { bg: "bg-[#FFC000]", text: "text-gray-900" },
  gray:        { bg: "bg-[#A6A6A6]", text: "text-white" },
  green:       { bg: "bg-[#70AD47]", text: "text-white" },
  lightyellow: { bg: "bg-[#FFF2CC] border border-yellow-200", text: "text-gray-800" },
  silver:      { bg: "bg-[#767171]", text: "text-white" },
  orange:      { bg: "bg-[#F4B183]", text: "text-gray-900" },
  lightblue:   { bg: "bg-[#2E9DB5]", text: "text-white" },
  purple:      { bg: "bg-[#7030A0]", text: "text-white" },
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
        <div className="flex justify-center py-1 text-gray-500">
          <ArrowDown className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}

function NoticeText({ text }) {
  const match = text?.match(/^(NEW[^:]+:)\s*(.*)/is);
  if (!match) return <p className="text-sm text-green-800">{text}</p>;
  return (
    <p className="text-sm text-green-800">
      <span className="font-bold">{match[1]}</span>{" "}{match[2]}
    </p>
  );
}

// Reusable contact card — accent color driven by c.accent (hex string)
function ContactCard({ c }) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl border border-gray-200 border-l-4 shadow-sm hover:shadow-md transition-all duration-200"
      style={{ borderLeftColor: c.accent ?? "#364bc5" }}
    >
      {/* Header: name + logo */}
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
          {c.name}
        </p>
        {c.logo && (
          <div className="flex items-center justify-end h-8 w-24 shrink-0">
            <Image
              src={c.logo}
              alt={c.name}
              width={96}
              height={32}
              className="object-contain h-8 w-auto max-w-[96px]"
            />
          </div>
        )}
      </div>
      {/* Details */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <Link
          href={`mailto:${c.email}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#364bc5] hover:text-[#2d3fb1] hover:underline break-all transition-colors"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          {c.email}
        </Link>
        <p className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed">
          <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
          {c.address}
        </p>
        {c.hours && (
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-3.5 h-3.5 shrink-0 text-gray-400" />
            {c.hours}
          </p>
        )}
      </div>
    </div>
  );
}

// Belgium: right = cost steps + single contact card
function CostAndContactColumn({ costSteps, contact }) {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        {costSteps.map((step, i) => (
          <Step key={i} step={step} showArrow={i < costSteps.length - 1} />
        ))}
      </div>
      {contact && (
        <ContactCard c={{ ...contact, accent: contact.accent ?? "#E31837", name: contact.name ?? "Embassy / VAC Contact" }} />
      )}
    </div>
  );
}

// France: right = multiple contact cards only (no cost steps)
function MultiContactColumn({ contacts }) {
  return (
    <div className="p-5 flex flex-col gap-3 justify-between h-full">
      {contacts.map((c, i) => (
        <div key={i} className="flex-1">
          <ContactCard c={c} />
        </div>
      ))}
    </div>
  );
}

// Spain: right = cost steps + multiple contact cards below
function CostAndMultiContactColumn({ costSteps, contacts }) {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        {costSteps.map((step, i) => (
          <Step key={i} step={step} showArrow={i < costSteps.length - 1} />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {contacts.map((c, i) => (
          <ContactCard key={i} c={c} />
        ))}
      </div>
    </div>
  );
}

export default function VisaProcessSection({ data }) {
  if (!data) return null;

  const hasMultipleContacts = Array.isArray(data.contacts) && data.contacts.length > 0;
  const hasCostSteps = Array.isArray(data.costSteps) && data.costSteps.length > 0;

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
          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
          <NoticeText text={data.notice} />
        </div>
      )}

      {/* Single centered label */}
      <div className="border-b border-gray-100 bg-gray-50/60 px-5 py-2 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Process Steps &amp; Cost Breakdown
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

        {/* Left — Process Steps (always shown) */}
        <div className="p-5">
          {data.processSteps.map((step, i) => (
            <Step key={i} step={step} showArrow={i < data.processSteps.length - 1} />
          ))}
        </div>

        {/* Right — layout depends on data shape */}
        {hasMultipleContacts && hasCostSteps ? (
          <CostAndMultiContactColumn costSteps={data.costSteps} contacts={data.contacts} />
        ) : hasMultipleContacts ? (
          <MultiContactColumn contacts={data.contacts} />
        ) : (
          <CostAndContactColumn costSteps={data.costSteps ?? []} contact={data.contact} />
        )}
      </div>
    </div>
  );
}
