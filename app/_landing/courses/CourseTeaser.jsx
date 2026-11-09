import Link from "next/link";
import courses from "../../../data/courses.json";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CourseTeaser() {
  const visible = courses.filter((c) => !c.hidden);
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#364bc5] font-semibold mb-1">
              Courses
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Study Abroad Courses
            </h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#364bc5] text-white text-sm font-semibold hover:bg-[#2d3da8] transition shrink-0 shadow-sm"
          >
            Explore All Courses <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visible.map((course) => (
            <div
              key={course.id}
              className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#364bc5]/30 hover:bg-[#eef2ff]/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#364bc5]/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-[#364bc5]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                  {course.title}
                </p>
                <p className="text-xs text-gray-500">
                  {course.currency} {course.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
