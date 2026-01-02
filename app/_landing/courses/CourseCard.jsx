import Link from "next/link";
import { CheckCircle2, Play, BookOpen } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group m-3 relative bg-white rounded-2xl border-2 border-[#1b38da] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-4">
        {/* Header Section */}
        <div className="mb-5">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-3xl font-extrabold text-[#364bc5] leading-tight mb-1  transition-colors duration-300">
                {course.title}
              </h2>
              {/* Subtle underline accent */}
              <div className="h-1 w-16 bg-[#364bc5] rounded-full mt-2"></div>
            </div>
            {/* 
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap">
              <Play size={12} />
              LIVE + Recordings
            </span> */}
          </div>

          {/* Goal Description */}
          {course.goal && (
            <p className="text-gray-600 text-base leading-relaxed mt-3">
              {course.goal}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="py-4 mb-4 border-y border-gray-100">
          <span className="text-3xl font-bold text-gray-900">
            {course.currency} {course.price}{" "}
            <span className="text-gray-400 text-xl line-through ml-2">
              {course.fake_price}
            </span>
          </span>
        </div>

        {/* Best For */}
        {course.bestFor && (
          <div className="mb-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Best for:</span>{" "}
              {course.bestFor}
            </p>
          </div>
        )}

        {/* Classes Information */}
        {course.classes && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-900 mb-2.5 flex items-center gap-2">
              <BookOpen size={16} className="text-[#364bc5]" />
              Classes
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xl font-bold text-gray-900">
                  {course.classes.total}
                </p>
                <p className="text-xs text-gray-600 mt-1">Total</p>
              </div>
              {course.classes.live && (
                <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <p className="text-xl font-bold text-gray-900">
                    {course.classes.live}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Live</p>
                </div>
              )}
              {course.classes.recorded && (
                <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <p className="text-xl font-bold text-gray-900">
                    {course.classes.recorded}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Recorded</p>
                </div>
              )}
              {course.classes.mock && (
                <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <p className="text-xl font-bold text-gray-900">
                    {course.classes.mock}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Mock</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Includes */}
        {course.includes && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-900 mb-2.5">
              Includes
            </p>
            <div className="flex flex-wrap gap-2">
              {course.includes.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables */}
        {course.deliverables && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-900 mb-2.5">
              Deliverables
            </p>
            <ul className="space-y-2">
              {course.deliverables.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={14}
                    className="text-gray-400 mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What You'll Learn */}
        {course.topics && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-2.5">
              What {"you'll"} learn
            </p>
            <ul className="space-y-2 max-h-32 overflow-y-auto">
              {course.topics.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[16px] text-gray-900"
                >
                  <CheckCircle2
                    size={14}
                    className="text-gray-400 mt-0.5 shrink-0"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100 flex justify-center">
          <Link
            href={`/courses/${course.slug}`}
            className="w-1/2 rounded-md px-4 py-3.5 text-center text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: "#364bc5" }}
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
