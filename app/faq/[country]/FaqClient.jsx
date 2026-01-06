"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FaqClient({ countryName, flagSrc, faqData }) {
  const [openId, setOpenId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  const filteredFAQs = useMemo(() => {
    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [faqData, searchTerm]);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-16 md:pt-14 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Head text */}
        <div className="space-y-2 text-center md:space-y-4 mb-12">
          <span className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            {countryName}{" "}
            <Image
              src={flagSrc}
              width={20}
              height={20}
              alt={countryName}
              className="inline"
            />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="flex justify-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* Search bar (you had state but no input, so add it) */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search in ${countryName} FAQs...`}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#364bc5]/30"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-6xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left gap-4 transition-colors duration-300 hover:bg-gray-50"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`mt-1 p-2 rounded-lg transition-all duration-300 ${
                        openId === faq.id
                          ? "bg-[#364bc5] text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#364bc5]/10 group-hover:text-[#364bc5]"
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        openId === faq.id
                          ? "text-[#364bc5]"
                          : "text-gray-800 group-hover:text-[#364bc5]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`mt-1 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-6 h-6 transition-colors duration-300 ${
                        openId === faq.id
                          ? "text-[#364bc5]"
                          : "text-gray-400 group-hover:text-[#364bc5]"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openId === faq.id
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-[76px]">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <div className="bg-linear-to-r from-[#364bc5] to-[#4a5fd9] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Our team is here to help you with your {countryName} study journey
            </p>
            <Link
              href={"mailto:mentors.career.abroad26@gmail.com"}
              className="bg-white text-[#364bc5] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
