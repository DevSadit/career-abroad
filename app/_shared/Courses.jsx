"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FolderOpen, FileText, X, GraduationCap, Award, BookOpen, Compass } from "lucide-react";

const relatedServices = [
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
    href: "/about-us",
    icon: BookOpen,
    label: "About Our Mentors",
    desc: "Meet the PhD researchers guiding you",
    color: "#7c3aed",
  },
];

const Courses = ({ courses }) => {
  const primary = "#364bc5";
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const closeModal = () => { setModal(false); setEmail(""); setStatus("idle"); };

  const handleAccess = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/resource-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.url) { window.open(data.url, "_blank", "noreferrer"); closeModal(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      {/* ── Email gate modal ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5" style={{ color: primary }} />
                <p className="text-base font-semibold text-gray-900">Higher Study Arsenal</p>
              </div>
              <button onClick={closeModal} className="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">Enter your enrolled student email to access the resource drive.</p>
            <form onSubmit={handleAccess} className="space-y-3">
              <input
                type="email" required value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="your.enrolled@email.com"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              />
              {status === "error" && (
                <p className="text-xs text-red-500 px-1">This email is not enrolled. Please contact us if you think this is a mistake.</p>
              )}
              <button
                type="submit" disabled={status === "loading"}
                className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white disabled:opacity-60 transition"
                style={{ backgroundColor: primary }}
              >
                {status === "loading" ? "Verifying…" : "Access Resource Drive"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div className="mt-10 sm:mt-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Course Contents</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">Course Contents & Students Login</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Explore our{" "}
              <a href="/#courses" className="font-semibold underline underline-offset-2 text-[#364bc5]">available courses</a>
              , course contents and resources for your application, scholarship and visa documentation. Only our enrolled students can access through their registered email.
            </p>
          </div>
          <div
            className="hidden md:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium border shrink-0"
            style={{ borderColor: `${primary}22`, backgroundColor: `${primary}08`, color: primary }}
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: primary }} />
            Courses
          </div>
        </div>

        {/* ── Courses grid ── */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => {
            const color = c.theme || primary;
            const isResource = c.type === "resource";
            const isFolder = c.type === "folder";

            return (
              <div
                key={c.title}
                className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderTop: `3px solid ${color}` }}
              >
                {/* Card header */}
                <div className="px-4 pt-4 pb-3">
                  <span
                    className="inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 mb-2"
                    style={{ backgroundColor: `${color}12`, color }}
                  >
                    Career Abroad Mentors
                  </span>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</p>
                </div>

                {/* Card media */}
                {isResource ? (
                  <div className="px-4 pb-4">
                    <div
                      className="aspect-video rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3"
                      style={{ borderColor: `${color}44`, backgroundColor: `${color}06` }}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                        <FolderOpen className="w-7 h-7" style={{ color }} />
                      </div>
                      <div className="text-center px-4">
                        <p className="text-sm font-semibold text-gray-800">Student Resource Drive</p>
                        <p className="text-xs text-gray-500 mt-1">{c.description}</p>
                      </div>
                      <span className="text-xs font-medium rounded-full px-3 py-1" style={{ backgroundColor: `${color}15`, color }}>
                        Access with enrolled student email
                      </span>
                    </div>
                  </div>
                ) : isFolder ? (
                  <div className="px-4 pb-4">
                    <div
                      className="aspect-video rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3"
                      style={{ borderColor: `${color}44`, backgroundColor: `${color}06` }}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                        <FileText className="w-7 h-7" style={{ color }} />
                      </div>
                      <div className="text-center px-4">
                        <p className="text-sm font-semibold text-gray-800">Visa Document Folder</p>
                        <p className="text-xs text-gray-500 mt-1">{c.description}</p>
                      </div>
                      <span className="text-xs font-medium rounded-full px-3 py-1" style={{ backgroundColor: `${color}15`, color }}>
                        Enrolled students only
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 pb-4">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-gray-100 bg-gray-100">
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

                {/* CTA button */}
                <div className="px-4 pb-5">
                  {isResource ? (
                    <button
                      onClick={() => setModal(true)}
                      className="block w-full text-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      style={{ backgroundColor: color }}
                    >
                      Open Resource Drive
                    </button>
                  ) : isFolder ? (
                    <Link
                      className="block w-full text-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      target="_blank" rel="noreferrer" href={c.course_link}
                      style={{ backgroundColor: color }}
                    >
                      Open Visa Folder
                    </Link>
                  ) : (
                    <Link
                      className="block w-full text-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      target="_blank" rel="noreferrer" href={c.course_link}
                      style={{ backgroundColor: color }}
                    >
                      Course Login
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Related Services ── */}
        <div className="mt-14 mb-4">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">Explore More</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">Our Other Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 hover:shadow-md transition-all duration-300"
                style={{ borderTop: `3px solid ${s.color}` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5" style={{ backgroundColor: `${s.color}12` }}>
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:underline underline-offset-2">{s.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
