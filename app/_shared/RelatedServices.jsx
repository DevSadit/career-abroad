import Link from "next/link";
import { GraduationCap, Award, Compass, BookOpen } from "lucide-react";

const ALL_SERVICES = [
  {
    href: "/complete-mentorship-program",
    icon: GraduationCap,
    label: "Mentorship Program",
    desc: "Live 1:1 sessions with mentors currently abroad",
    color: "#364bc5",
  },
  {
    href: "/scholarships",
    icon: Award,
    label: "Scholarship Guidance",
    desc: "National & regional funding opportunities",
    color: "#d97706",
  },
  {
    href: "/services",
    icon: Compass,
    label: "Consultancy Services",
    desc: "End-to-end application & visa support",
    color: "#059669",
  },
  {
    href: "/course-content",
    icon: BookOpen,
    label: "Course Contents",
    desc: "University, SOP, scholarship & visa courses",
    color: "#7c3aed",
  },
];

export default function RelatedServices({ exclude }) {
  const services = ALL_SERVICES.filter((s) => s.href !== exclude);
  return (
    <div className="mt-14 mb-4">
      <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">Explore More</p>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">Our Other Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 hover:shadow-md transition-all duration-300"
            style={{ borderTop: `3px solid ${s.color}` }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
              style={{ backgroundColor: `${s.color}12` }}
            >
              <s.icon className="w-5 h-5" style={{ color: s.color }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:underline underline-offset-2">
                {s.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
