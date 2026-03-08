"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I am MentorBOT. I can answer basic questions using our France, Italy, Belgium, Hungary, and Estonia FAQs.",
};

const BOOKING_LINK = "https://cal.com/ahsansuny2026/40min";

const PROMPT_SUGGESTIONS = {
  all: [
    "Which country is better for scholarship?",
    "What documents do I need for application?",
    "How does the visa process usually work?",
  ],
  france: [
    "When does France application usually open?",
    "What should I know about Eiffel scholarship?",
    "Can I apply before finishing my bachelor?",
  ],
  italy: [
    "How do I apply for masters in Italy?",
    "What documents are needed for Italy application?",
    "Is Italy visa risk manageable?",
  ],
  belgium: [
    "What are scholarship options in Belgium?",
    "Do universities in Belgium accept DET?",
    "How should I prepare Belgium application documents?",
  ],
  hungary: [
    "How does Stipendium Hungaricum work?",
    "What should I know before applying to Hungary?",
    "What documents are important for Hungary visa?",
  ],
  estonia: [
    "Is Estonia good for affordable study?",
    "What should I know about Estonia application?",
    "How can I improve my Estonia visa profile?",
  ],
};

function containsBangla(text) {
  return /[\u0980-\u09FF]/.test(text ?? "");
}

function getCountryFromPathname(pathname) {
  if (!pathname?.startsWith("/faq/")) return "all";

  const country = pathname.split("/")[2]?.toLowerCase();

  return PROMPT_SUGGESTIONS[country] ? country : "all";
}

function formatCountryLabel(country) {
  if (country === "all") return "All countries";

  return country.charAt(0).toUpperCase() + country.slice(1);
}

export default function AIMentorWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [soundArmed, setSoundArmed] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const messagesRef = useRef(null);
  const audioContextRef = useRef(null);
  const country = getCountryFromPathname(pathname);
  const countryLabel = formatCountryLabel(country);
  const promptSuggestions = PROMPT_SUGGESTIONS[country] ?? PROMPT_SUGGESTIONS.all;

  useEffect(() => {
    if (!messagesRef.current) return;

    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextCtor) return undefined;

    const unlockSound = async () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContextCtor();
        }

        if (audioContextRef.current.state === "suspended") {
          await audioContextRef.current.resume();
        }

        setSoundArmed(true);
        window.removeEventListener("pointerdown", unlockSound);
        window.removeEventListener("keydown", unlockSound);
      } catch {
        // Ignore audio init failures and keep the widget functional.
      }
    };

    window.addEventListener("pointerdown", unlockSound);
    window.addEventListener("keydown", unlockSound);

    return () => {
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("keydown", unlockSound);

      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!soundArmed || isOpen) return undefined;

    const playAttentionChime = async () => {
      const context = audioContextRef.current;

      if (!context || document.visibilityState !== "visible") return;

      try {
        if (context.state === "suspended") {
          await context.resume();
        }

        const now = context.currentTime;
        const gain = context.createGain();
        gain.connect(context.destination);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.03, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

        [
          { frequency: 587, start: 0, duration: 0.18 },
          { frequency: 784, start: 0.16, duration: 0.24 },
        ].forEach((tone) => {
          const oscillator = context.createOscillator();
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(tone.frequency, now + tone.start);
          oscillator.connect(gain);
          oscillator.start(now + tone.start);
          oscillator.stop(now + tone.start + tone.duration);
        });
      } catch {
        // Ignore intermittent audio playback failures.
      }
    };

    const timeoutId = window.setTimeout(() => {
      playAttentionChime();
    }, 12000);

    const intervalId = window.setInterval(() => {
      playAttentionChime();
    }, 22000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [isOpen, soundArmed]);

  const sendMessage = async (nextQuestion = input) => {
    const question = nextQuestion.trim();

    if (!question || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          country,
        }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text:
            data.reply ??
            "I could not get an answer right now. Please try again.",
          sourceCountry: data.country ?? null,
          sourceQuestion: data.matchedQuestion ?? null,
          sourceHref: data.sourceHref ?? null,
          sourceLabel: data.sourceLabel ?? null,
          fallback: !data.found,
          suggestions: data.suggestions ?? [],
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text:
            "I could not reach the FAQ service right now. Please try again in a moment.",
          fallback: true,
          suggestions: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen ? (
        <div className="fixed bottom-5 right-4 z-[70]">
          <div className="pointer-events-none absolute -top-12 right-0 rounded-full border border-[#364bc5]/15 bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#364bc5] shadow-lg backdrop-blur">
            MentorBOT
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#364bc5]/20 animate-ping" />
          <div className="pointer-events-none absolute -inset-2 rounded-full border border-[#364bc5]/20" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-linear-to-br from-[#1f2b80] via-[#364bc5] to-[#5b71e5] text-white shadow-[0_18px_50px_rgba(54,75,197,0.42)] transition-transform duration-300 hover:-translate-y-1"
            aria-label="Open MentorBOT"
          >
            <Bot className="mb-1 h-7 w-7" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">
              BOT
            </span>
            <span className="absolute -right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#364bc5] shadow-md">
              <Sparkles className="h-3 w-3" />
            </span>
          </button>
        </div>
      ) : null}

      {isOpen ? (
        <section className="fixed bottom-4 right-4 z-[70] flex h-[min(78vh,640px)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.24)]">
          <div className="bg-linear-to-r from-[#1f2b80] via-[#364bc5] to-[#5267de] px-5 pb-4 pt-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                  <MessageCircle className="h-4 w-4" />
                  MentorBOT
                </div>
                <h3 className="text-xl font-semibold">MentorBOT</h3>
                <p className="mt-1 text-sm text-white/85">
                  Answers are limited to our FAQ content.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Context: {countryLabel}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/12 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Close MentorBOT"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div className="rounded-2xl border border-[#364bc5]/12 bg-white px-3 py-2.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#364bc5]">
                    Paid 1:1 Session
                  </p>
                  <h4 className="mt-0.5 text-sm font-semibold text-slate-900">
                    Book with Ahsan
                  </h4>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Fee: 720/-
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 shrink-0 text-[#364bc5]" />
                  <Link
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#364bc5] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2d3fb1]"
                  >
                    Book 1:1
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={messagesRef}
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Quick Start
                </p>
                <span className="rounded-full bg-[#364bc5]/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#364bc5]">
                  {countryLabel}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {promptSuggestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    disabled={isLoading}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-[#364bc5]/18 bg-[#364bc5]/6 px-3 py-2 text-left text-xs font-semibold text-[#364bc5] transition-colors hover:bg-[#364bc5]/12 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {messages.map((message) => {
              const isAssistant = message.role === "assistant";
              const answerIsBangla = containsBangla(message.text);
              const questionIsBangla = containsBangla(message.sourceQuestion);

              return (
                <div
                  key={message.id}
                  className={`flex ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-3xl px-4 py-3 shadow-sm ${
                      isAssistant
                        ? "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                        : "rounded-br-md bg-[#364bc5] text-white"
                    }`}
                  >
                    {isAssistant && message.sourceCountry ? (
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        <span>{message.sourceCountry}</span>
                      </div>
                    ) : null}

                    {isAssistant && message.sourceQuestion ? (
                      <p
                        lang={questionIsBangla ? "bn" : undefined}
                        className={`mb-2 text-sm font-semibold text-slate-900 ${
                          questionIsBangla ? "font-bn" : ""
                        }`}
                      >
                        {message.sourceQuestion}
                      </p>
                    ) : null}

                    <p
                      lang={answerIsBangla ? "bn" : undefined}
                      className={`text-sm leading-6 whitespace-pre-line ${
                        answerIsBangla ? "font-bn" : ""
                      }`}
                    >
                      {message.text}
                    </p>

                    {isAssistant && message.suggestions?.length ? (
                      <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Suggested FAQ topics
                        </p>
                        <div className="space-y-2">
                          {message.suggestions.map((suggestion) => {
                            const suggestionIsBangla = containsBangla(
                              suggestion.question,
                            );

                            return (
                              <div key={`${suggestion.country}-${suggestion.question}`}>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#364bc5]">
                                  {suggestion.country}
                                </p>
                                {suggestion.href ? (
                                  <Link
                                    href={suggestion.href}
                                    onClick={() => setIsOpen(false)}
                                    lang={suggestionIsBangla ? "bn" : undefined}
                                    className={`inline-flex text-sm text-slate-700 hover:text-[#364bc5] ${
                                      suggestionIsBangla ? "font-bn" : ""
                                    }`}
                                  >
                                    {suggestion.question}
                                  </Link>
                                ) : (
                                  <p
                                    lang={suggestionIsBangla ? "bn" : undefined}
                                    className={`text-sm text-slate-700 ${
                                      suggestionIsBangla ? "font-bn" : ""
                                    }`}
                                  >
                                    {suggestion.question}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}

                    {isAssistant && message.sourceHref ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Link
                          href={message.sourceHref}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200"
                        >
                          {message.sourceLabel ?? "FAQ source"}
                        </Link>
                        <Link
                          href={message.sourceHref}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#364bc5]/8 px-3 py-1.5 text-xs font-semibold text-[#364bc5] transition-colors hover:bg-[#364bc5]/14"
                        >
                          Open full FAQ
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    ) : null}

                    {isAssistant && message.fallback ? (
                      <Link
                        href="mailto:mentors.career.abroad26@gmail.com"
                        className="mt-3 inline-flex text-sm font-semibold text-[#364bc5] hover:text-[#1f2b80]"
                      >
                        Contact Us
                      </Link>
                    ) : null}

                    {isAssistant ? (
                      <Link
                        href={BOOKING_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#364bc5] hover:text-[#1f2b80]"
                      >
                        Book 1:1 with Ahsan (720/-)
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            })}

            {isLoading ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  MentorBOT is searching...
                </div>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="border-t border-slate-200 bg-white p-4"
          >
            <label htmlFor="mentorbot-input" className="sr-only">
              Ask MentorBOT
            </label>
            <div className="flex items-end gap-3">
              <input
                id="mentorbot-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask MentorBOT from the FAQ..."
                className="min-w-0 flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#364bc5]"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#364bc5] text-white transition-colors hover:bg-[#2d3fb1] disabled:cursor-not-allowed disabled:bg-slate-300"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </>
  );
}
