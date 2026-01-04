import Link from "next/link";
import { CheckCircle2, Play, BookOpen, ArrowRight, Award } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
      {/* Accent bar */}
      <div className="h-1.5 w-full bg-linear-to-r from-[#364bc5] to-[#5b6fd8]"></div>

      <div className="p-4 flex flex-col grow justify-between">
        {/* Header */}
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 h-15 line-clamp-2 group-hover:text-[#364bc5] transition-colors">
            {course.title}
          </h2>
          <p className="text-md text-gray-600 line-clamp-2 h-12">
            {course.goal || "\u00A0"}
          </p>
        </div>

        {/* Price Badge */}
        <div className="inline-flex items-baseline gap-2 mb-4 bg-linear-to-r from-[#364bc5]/10 to-[#5b6fd8]/10 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold text-[#364bc5]">
            {course.currency} {course.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            {course.fake_price} ৳
          </span>
        </div>

        {/* Best For Badge */}
        {/* <div className="mb-4 h-20 flex items-start gap-2 min-h-11">
          <Award size={20} className="text-[#364bc5] mt-0.5 shrink-0" />
          <p className="text-md text-gray-700 leading-relaxed line-clamp-2">
            {course.bestFor || "\u00A0"}
          </p>
        </div> */}

        {/* Classes Info - Compact */}
        {course.classes && (
          <div className="mb-4 text-md flex items-center gap-3">
            <div className="flex items-center text-md gap-1.5">
              <BookOpen size={14} className="text-[#364bc5]" />
              <span className="font-semibold text-gray-900">
                {course.classes.total}
              </span>
              <span className="text-gray-500">Classes</span>
            </div>
            {course.classes.live && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">
                  {course.classes.live} Live
                </span>
              </>
            )}
            {course.classes.recorded && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">
                  {course.classes.recorded} Recorded
                </span>
              </>
            )}
          </div>
        )}

        {/* Key Topics - Compact List */}
        <div className="mb-4 grow">
          <p className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            What {"You'll"} Learn
          </p>
          <ul className="space-y-1.5 min-h-30">
            {course.topics &&
              course.topics.slice(0, 4).map((topic, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-md text-gray-700"
                >
                  <CheckCircle2
                    size={12}
                    className="text-[#364bc5] mt-0.5 shrink-0"
                  />
                  <span className="line-clamp-1">{topic}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5 min-h-8">
          {course.includes &&
            course.includes.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-gray-300 text-black text-xs font-bold"
              >
                {item}
              </span>
            ))}
          {course.includes && course.includes.length > 3 && (
            <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
              +{course.includes.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button - Fixed at bottom */}
        <div className="mt-auto">
          <Link
            href={`/courses/${course.slug}`}
            className="group/btn flex items-center justify-center gap-2 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#364bc5] hover:bg-[#2d3da8] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Register Now
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-[#364bc5] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}
