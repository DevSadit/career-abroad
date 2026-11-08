"use client";

import React, { useState, useEffect } from "react";
import { Mail, Download, PlayCircle, BookOpen, FileText, FileSpreadsheet, X, GraduationCap } from "lucide-react";

const primary = "#364bc5";

const STORAGE_KEY = "career-abroad-class-email";

const fileIcon = (type) => {
  if (type === "xlsx" || type === "excel") return <FileSpreadsheet className="w-3.5 h-3.5" />;
  if (type === "pdf") return <FileText className="w-3.5 h-3.5" />;
  return <BookOpen className="w-3.5 h-3.5" />;
};

const ClassesClient = () => {
  const [phase, setPhase] = useState("gate"); // "gate" | "unlocked"
  const [email, setEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "error"
  const [courses, setCourses] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);
  const [downloading, setDownloading] = useState({}); // resourceId -> bool

  // Restore verified email from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setInputEmail(saved);
        verifyEmail(saved);
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyEmail = async (emailToVerify) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/class-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailToVerify }),
      });
      const data = await res.json();
      if (data.courses) {
        setCourses(data.courses);
        setEmail(emailToVerify);
        setActiveCountry(data.courses[0]?.id ?? null);
        setPhase("unlocked");
        setStatus("idle");
        try { localStorage.setItem(STORAGE_KEY, emailToVerify); } catch {}
      } else {
        setStatus("error");
        try { localStorage.removeItem(STORAGE_KEY); } catch {}
      }
    } catch {
      setStatus("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyEmail(inputEmail.trim());
  };

  const handleDownload = async (resourceId) => {
    setDownloading((prev) => ({ ...prev, [resourceId]: true }));
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resourceId }),
      });
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank", "noreferrer");
    } catch {}
    setDownloading((prev) => ({ ...prev, [resourceId]: false }));
  };

  const activeCourse = courses.find((c) => c.id === activeCountry);

  // ── Gate phase ──────────────────────────────────────────────────────────────
  if (phase === "gate") {
    return (
      <div className="mt-10 sm:mt-16 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 max-w-xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${primary}10`, color: primary }}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Enrolled Students Only
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
            Class Recordings
          </h1>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            France · Italy · Belgium · Estonia course recordings. Enter your enrolled student email to watch the classes and download resources.
          </p>
        </div>

        {/* Email form card */}
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white shadow-md p-7">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-5 h-5" style={{ color: primary }} />
            <p className="text-base font-semibold text-gray-900">Student Verification</p>
          </div>
          <p className="text-sm text-gray-500 mb-6">Enter your enrolled email address to access the recordings.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={inputEmail}
              onChange={(e) => { setInputEmail(e.target.value); setStatus("idle"); }}
              placeholder="your.enrolled@email.com"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
            {status === "error" && (
              <p className="text-xs text-red-500 px-1">
                This email is not enrolled. Contact us if you think this is a mistake.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white disabled:opacity-60 transition hover:opacity-90"
              style={{ backgroundColor: primary }}
            >
              {status === "loading" ? "Verifying…" : "Access Class Recordings"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Unlocked phase ───────────────────────────────────────────────────────────
  return (
    <div className="mt-10 sm:mt-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Class Recordings</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-gray-900">Your Course Videos</h2>
          <p className="mt-1 text-sm text-gray-500">
            Logged in as <span className="font-medium text-gray-700">{email}</span>
          </p>
        </div>
        <button
          onClick={() => {
            setPhase("gate");
            setEmail("");
            setInputEmail("");
            setStatus("idle");
            try { localStorage.removeItem(STORAGE_KEY); } catch {}
          }}
          className="shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition"
        >
          <X className="w-3.5 h-3.5" /> Log out
        </button>
      </div>

      {/* Country tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => setActiveCountry(course.id)}
            className="flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-200"
            style={
              activeCountry === course.id
                ? { backgroundColor: course.color, color: "#fff" }
                : { backgroundColor: `${course.color}10`, color: course.color }
            }
          >
            <span>{course.flag}</span>
            <span>{course.id.charAt(0).toUpperCase() + course.id.slice(1)}</span>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-bold"
              style={
                activeCountry === course.id
                  ? { backgroundColor: "rgba(255,255,255,0.25)", color: "#fff" }
                  : { backgroundColor: `${course.color}20`, color: course.color }
              }
            >
              {course.classes.length}
            </span>
          </button>
        ))}
      </div>

      {/* Class list */}
      {activeCourse && (
        <div className="space-y-6">
          <div
            className="flex items-center gap-2 mb-2 text-sm font-medium"
            style={{ color: activeCourse.color }}
          >
            <span>{activeCourse.flag}</span>
            <span>{activeCourse.title}</span>
          </div>

          {activeCourse.classes.map((cls) => (
            <div
              key={cls.number}
              className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm"
              style={{ borderTop: `3px solid ${activeCourse.color}` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0">
                {/* Video embed */}
                <div className="p-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <iframe
                      src={`https://www.youtube.com/embed/${cls.youtubeId}?rel=0&modestbranding=1&iv_load_policy=3`}
                      title={`${activeCourse.title} — ${cls.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                    {/* Block "Watch on YouTube" button — bottom-right */}
                    <div className="absolute bottom-0 right-0 w-44 h-10 z-10" />
                    {/* Block share button — bottom-left */}
                    <div className="absolute bottom-0 left-0 w-12 h-10 z-10" />
                  </div>
                </div>

                {/* Class info + resources */}
                <div className="flex flex-col justify-center px-4 pb-4 lg:py-4 lg:pl-0 lg:pr-5">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold mb-3 w-fit"
                    style={{ backgroundColor: `${activeCourse.color}12`, color: activeCourse.color }}
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    Class {cls.number}
                  </div>

                  <p className="text-sm font-semibold text-gray-900 mb-1">{cls.title}</p>
                  <p className="text-xs text-gray-500 mb-4">{activeCourse.title}</p>

                  {cls.resources.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Downloads</p>
                      {cls.resources.map((res) => (
                        <button
                          key={res.id}
                          onClick={() => handleDownload(res.id)}
                          disabled={downloading[res.id]}
                          className="flex items-center gap-2 w-full rounded-xl px-3 py-2.5 text-xs font-semibold transition hover:opacity-80 disabled:opacity-50"
                          style={{ backgroundColor: `${activeCourse.color}10`, color: activeCourse.color }}
                        >
                          {fileIcon(res.type)}
                          <span className="flex-1 text-left">{res.label}</span>
                          <Download className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">Resources coming soon</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassesClient;
