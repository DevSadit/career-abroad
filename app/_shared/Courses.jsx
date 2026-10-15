import Link from "next/link";
import React from "react";
import { FolderOpen } from "lucide-react";

const Courses = ({ courses }) => {
  const primary = "#364bc5";
  return (
    <div className="mt-10 sm:mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500">
            Course Contents
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            Course Contents & Students Login
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
            Explore our available courses introductory videos. Only enrolled
            students can login by using their email address. Please enroll in
            your prospective program to get the access of our contents.
          </p>
        </div>

        <div
          className="hidden md:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border"
          style={{
            borderColor: `${primary}22`,
            backgroundColor: `${primary}08`,
            color: primary,
          }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: primary }}
          />
          Courses
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-gray-200 bg-white overflow-hidden"
          >
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <p className="mt-1 text-xs text-gray-500">
                Career Abroad Mentorship
              </p>
            </div>

            {c.type === "resource" ? (
              <div className="px-4 pb-4">
                <div className="aspect-video rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3"
                  style={{ borderColor: `${primary}44`, backgroundColor: `${primary}06` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${primary}15` }}>
                    <FolderOpen className="w-7 h-7" style={{ color: primary }} />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-sm font-semibold text-gray-800">Student Resource Drive</p>
                    <p className="text-xs text-gray-500 mt-1">{c.description}</p>
                  </div>
                  <span className="text-xs font-medium rounded-full px-3 py-1"
                    style={{ backgroundColor: `${primary}15`, color: primary }}>
                    Access with enrolled student email
                  </span>
                </div>
              </div>
            ) : (
              <div className="px-4 pb-4">
                <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src={c.url}
                    title={c.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="px-4 pb-5">
              <Link
                className="block w-full text-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                target="_blank"
                rel="noreferrer"
                href={c.course_link}
                style={{ backgroundColor: primary }}
              >
                {c.type === "resource" ? "Open Resource Drive" : "Course Login"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
