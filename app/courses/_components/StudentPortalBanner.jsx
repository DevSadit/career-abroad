import Link from "next/link";
import { GraduationCap, PlayCircle, ArrowRight, Lock, BookOpen } from "lucide-react";

const primary = "#364bc5";

export default function StudentPortalBanner({ className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" }) {
  return (
    <div className={className}>
      <div
        className="relative overflow-hidden rounded-3xl border p-6 sm:p-8"
        style={{ borderColor: `${primary}22`, backgroundColor: `${primary}06` }}
      >
        {/* Background decoration */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-5"
          style={{ backgroundColor: primary }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 right-32 h-32 w-32 rounded-full opacity-5"
          style={{ backgroundColor: primary }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">

          {/* Icon */}
          <div
            className="shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl"
            style={{ backgroundColor: `${primary}12` }}
          >
            <Lock className="h-6 w-6" style={{ color: primary }} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold mb-2"
              style={{ backgroundColor: `${primary}12`, color: primary }}
            >
              <GraduationCap className="h-3 w-3" />
              Enrolled Students
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Already enrolled in a Mentorship or Service Program?
            </h2>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Access your class recordings, downloadable materials, and country-specific session archives — all in one place.
            </p>

            {/* What's inside */}
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { icon: PlayCircle, label: "Class Recordings" },
                { icon: GraduationCap, label: "Course Materials" },
                { icon: BookOpen, label: "SOP Book" },
                { icon: ArrowRight, label: "Scholarship Notes" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: primary }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Link
              href="/courses/content"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-sm"
              style={{ backgroundColor: primary }}
            >
              Access Student Portal
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-center text-xs text-gray-400">
              🇫🇷 🇮🇹 🇧🇪 🇪🇪 🇪🇸 🇭🇺 &amp; more
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
