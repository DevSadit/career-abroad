"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  LoaderCircle,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I am MentorBOT. I can answer basic questions using our France, Italy, Belgium, Hungary, and Estonia FAQs.",
};

const BOOKING_LINK = "https://cal.com/ahsansuny2026/40min";
const WHATSAPP_LINK = "https://wa.me/34613593236";
const CONTACT_EMAIL = "mailto:mentors.career.abroad26@gmail.com";
const QUICK_START_COUNTRY = "france";
const STORAGE_KEY = "mentorbot-session-v1";
const SOUND_PREF_KEY = "mentorbot-sound-enabled-v1";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const MAX_PERSISTED_MESSAGES = 20;
const FALLBACK_STREAK_THRESHOLD = 2;
const COUNTRY_OPTIONS = [
  "france",
  "italy",
  "belgium",
  "hungary",
  "estonia",
];

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

function normalizeScopeCountry(country, fallback = "all") {
  if (!country) return fallback;

  const normalized = country.toLowerCase();

  if (normalized === "all") return "all";

  return PROMPT_SUGGESTIONS[normalized] ? normalized : fallback;
}

function normalizeWidgetCountry(country) {
  if (!country) return QUICK_START_COUNTRY;

  const normalized = country.toLowerCase();

  return PROMPT_SUGGESTIONS[normalized] ? normalized : QUICK_START_COUNTRY;
}

function getFaqHref(country) {
  const normalizedCountry = country && country !== "all" ? country : QUICK_START_COUNTRY;

  return `/faq/${normalizedCountry}`;
}

function getFallbackStreak(messages) {
  const assistantMessages = messages.filter(
    (message) =>
      message.role === "assistant" && message.id !== INITIAL_MESSAGE.id,
  );

  let streak = 0;

  for (let index = assistantMessages.length - 1; index >= 0; index -= 1) {
    if (!assistantMessages[index].fallback) break;

    streak += 1;
  }

  return streak;
}

function detectAnalyticsTopic(text) {
  const normalized = (text ?? "").toLowerCase();

  if (/visa|embassy|vfs|permit|rejection|visachance/.test(normalized)) {
    return "visa";
  }

  if (/scholarship|funding|waiver|stipend|eiffel|dsu|maeci/.test(normalized)) {
    return "scholarship";
  }

  if (/document|documents|paper|papers|bank|financial|statement|checklist/.test(normalized)) {
    return "documents";
  }

  if (/sop|motivation|lor|cv|linkedin|resume|portfolio/.test(normalized)) {
    return "profile";
  }

  if (/apply|application|admission|deadline|intake|portal|pre enrol/.test(normalized)) {
    return "application";
  }

  if (/tuition|fee|cost|living/.test(normalized)) {
    return "cost";
  }

  return "general";
}

function getMessageShortcutCountry(message, fallbackCountry) {
  return normalizeWidgetCountry(
    message.sourceCountry ?? message.activeCountry ?? fallbackCountry,
  );
}

function buildLeadBody({ name, contact, question, country }) {
  return [
    "MentorBOT lead",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Preferred country: ${formatCountryLabel(country)}`,
    `Question: ${question}`,
  ].join("\n");
}

function buildLeadEmailHref({ name, contact, question, country }) {
  const subject = encodeURIComponent("MentorBOT lead");
  const body = encodeURIComponent(
    buildLeadBody({ name, contact, question, country }),
  );

  return `${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function AIMentorWidget() {
  const pathname = usePathname();
  const pageCountry = getCountryFromPathname(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [soundArmed, setSoundArmed] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [conversationCountry, setConversationCountry] = useState(pageCountry);
  const [hasRestoredSession, setHasRestoredSession] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    contact: "",
    question: "",
    country: QUICK_START_COUNTRY,
  });
  const [leadFormError, setLeadFormError] = useState("");
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const audioContextRef = useRef(null);
  const lastChimeAtRef = useRef(0);
  const lastReplyAtRef = useRef(0);
  const leadCaptureTrackedRef = useRef(false);
  const soundEnabledRef = useRef(soundEnabled);
  const isOpenRef = useRef(isOpen);
  const lastAssistantMessageIdRef = useRef(INITIAL_MESSAGE.id);
  const replySoundReadyRef = useRef(false);
  const activeCountry = conversationCountry ?? pageCountry;
  const countryLabel = formatCountryLabel(activeCountry);
  const quickStartCountryLabel = formatCountryLabel(QUICK_START_COUNTRY);
  const promptSuggestions =
    PROMPT_SUGGESTIONS[QUICK_START_COUNTRY] ?? PROMPT_SUGGESTIONS.all;
  const fallbackStreak = getFallbackStreak(messages);
  const showLeadCapture = fallbackStreak >= FALLBACK_STREAK_THRESHOLD;

  const trackMentorbotEvent = useCallback((eventName, params = {}) => {
    if (typeof window === "undefined") return;

    const payload = {
      event_category: "mentorbot",
      ...params,
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
      return;
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...payload,
      });
    }
  }, []);

  useEffect(() => {
    try {
      const storedSoundPreference = window.localStorage.getItem(SOUND_PREF_KEY);

      if (storedSoundPreference !== null) {
        setSoundEnabled(storedSoundPreference === "true");
      }
    } catch {
      // Ignore storage access failures and use the default sound setting.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(SOUND_PREF_KEY, String(soundEnabled));
    } catch {
      // Ignore storage access failures and keep the widget functional.
    }
  }, [soundEnabled]);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    try {
      const savedSession = window.localStorage.getItem(STORAGE_KEY);

      if (!savedSession) {
        setHasRestoredSession(true);
        return;
      }

      const parsedSession = JSON.parse(savedSession);
      const isExpired =
        !parsedSession?.savedAt ||
        Date.now() - parsedSession.savedAt > SESSION_TTL_MS;

      if (isExpired) {
        window.localStorage.removeItem(STORAGE_KEY);
        setHasRestoredSession(true);
        return;
      }

      if (Array.isArray(parsedSession.messages) && parsedSession.messages.length) {
        setMessages(parsedSession.messages);
      }

      if (typeof parsedSession.conversationCountry === "string") {
        setConversationCountry(parsedSession.conversationCountry);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHasRestoredSession(true);
    }
  }, []);

  useEffect(() => {
    if (!hasRestoredSession) return;

    if (pageCountry !== "all") {
      setConversationCountry(pageCountry);
    }
  }, [hasRestoredSession, pageCountry]);

  useEffect(() => {
    if (!hasRestoredSession) return;

    try {
      if (messages.length <= 1) {
        window.localStorage.removeItem(STORAGE_KEY);
        return;
      }

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          savedAt: Date.now(),
          conversationCountry: activeCountry,
          messages: messages.slice(-MAX_PERSISTED_MESSAGES),
        }),
      );
    } catch {
      // Ignore storage quota/private mode failures.
    }
  }, [activeCountry, hasRestoredSession, messages]);

  useEffect(() => {
    if (!messagesRef.current) return;

    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    if (!hasRestoredSession) return;
    if (replySoundReadyRef.current) return;

    const lastAssistantMessage = [...messages]
      .reverse()
      .find(
        (message) =>
          message.role === "assistant" && message.id !== INITIAL_MESSAGE.id,
      );

    lastAssistantMessageIdRef.current =
      lastAssistantMessage?.id ?? INITIAL_MESSAGE.id;
    replySoundReadyRef.current = true;
  }, [hasRestoredSession, messages]);

  useEffect(() => {
    if (!showLeadCapture) {
      leadCaptureTrackedRef.current = false;
      return;
    }

    const lastUserMessage =
      [...messages].reverse().find((message) => message.role === "user")?.text ??
      "";
    const preferredCountry =
      normalizeScopeCountry(activeCountry) === "all"
        ? QUICK_START_COUNTRY
        : normalizeWidgetCountry(activeCountry);

    setLeadForm((current) => {
      const hasStartedForm =
        current.name.trim() || current.contact.trim() || current.question.trim();

      return {
        ...current,
        country: hasStartedForm ? current.country : preferredCountry,
        question: current.question || lastUserMessage,
      };
    });
    setLeadFormError("");

    if (!leadCaptureTrackedRef.current) {
      trackMentorbotEvent("mentorbot_lead_capture_shown", {
        country: preferredCountry,
        fallback_streak: fallbackStreak,
      });
      leadCaptureTrackedRef.current = true;
    }
  }, [activeCountry, fallbackStreak, messages, showLeadCapture, trackMentorbotEvent]);

  const playMentorChime = useCallback(
    async ({ force = false, mode = "attention" } = {}) => {
    const context = audioContextRef.current;

    if (!context || document.visibilityState !== "visible") return false;
      if (!force && !soundEnabledRef.current) return false;
      if (mode === "attention" && !force && isOpenRef.current) return false;

    const nowMs = Date.now();

      if (mode === "attention" && !force && nowMs - lastChimeAtRef.current < 12000) {
        return false;
      }

      if (mode === "reply" && !force && nowMs - lastReplyAtRef.current < 1200) {
        return false;
      }

      try {
        if (context.state === "suspended") {
          await context.resume();
        }

        const now = context.currentTime;
        const masterGain = context.createGain();
        const tones =
          mode === "reply"
            ? [
                { frequency: 988, start: 0, duration: 0.14, type: "triangle" },
                { frequency: 1318, start: 0.12, duration: 0.18, type: "sine" },
              ]
            : [
                { frequency: 740, start: 0, duration: 0.18, type: "triangle" },
                { frequency: 988, start: 0.14, duration: 0.24, type: "triangle" },
                { frequency: 1245, start: 0.34, duration: 0.24, type: "sine" },
              ];
        const endTime =
          mode === "reply"
            ? now + 0.42
            : now + 0.95;
        const peakGain = mode === "reply" ? 0.06 : 0.09;

        masterGain.connect(context.destination);
        masterGain.gain.setValueAtTime(0.0001, now);
        masterGain.gain.exponentialRampToValueAtTime(peakGain, now + 0.03);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, endTime);

        tones.forEach((tone) => {
          const oscillator = context.createOscillator();
          const toneGain = context.createGain();
          oscillator.type = tone.type;
          oscillator.frequency.setValueAtTime(tone.frequency, now + tone.start);
          toneGain.gain.setValueAtTime(0.0001, now + tone.start);
          toneGain.gain.exponentialRampToValueAtTime(
            0.92,
            now + tone.start + 0.03,
          );
          toneGain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + tone.start + tone.duration,
          );
          oscillator.connect(toneGain);
          toneGain.connect(masterGain);
          oscillator.start(now + tone.start);
          oscillator.stop(now + tone.start + tone.duration);
        });

        if (mode === "reply") {
          lastReplyAtRef.current = nowMs;
        } else {
          lastChimeAtRef.current = nowMs;
        }

        return true;
      } catch {
        return false;
      }
    },
    [],
  );

  useEffect(() => {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextCtor) return undefined;

    const unlockSound = async () => {
      try {
        if (
          !audioContextRef.current ||
          audioContextRef.current.state === "closed"
        ) {
          audioContextRef.current = new AudioContextCtor();
        }

        if (audioContextRef.current.state === "suspended") {
          await audioContextRef.current.resume();
        }

        setSoundArmed(true);
        if (soundEnabledRef.current) {
          await playMentorChime({
            force: true,
            mode: isOpenRef.current ? "reply" : "attention",
          });
        }
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
        audioContextRef.current = null;
      }
    };
  }, [playMentorChime]);

  useEffect(() => {
    if (!soundArmed || !soundEnabled || isOpen) return undefined;

    const timeoutId = window.setTimeout(() => {
      playMentorChime({ mode: "attention" });
    }, 4500);

    const intervalId = window.setInterval(() => {
      playMentorChime({ mode: "attention" });
    }, 16000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [isOpen, playMentorChime, soundArmed, soundEnabled]);

  useEffect(() => {
    const lastAssistantMessage = [...messages]
      .reverse()
      .find(
        (message) =>
          message.role === "assistant" && message.id !== INITIAL_MESSAGE.id,
      );

    if (!replySoundReadyRef.current) return;
    if (!lastAssistantMessage) return;
    if (lastAssistantMessage.id === lastAssistantMessageIdRef.current) return;

    lastAssistantMessageIdRef.current = lastAssistantMessage.id;

    if (!soundArmed || !soundEnabled) return;

    playMentorChime({ force: true, mode: "reply" });
  }, [messages, playMentorChime, soundArmed, soundEnabled]);

  const sendMessage = async (
    nextQuestion = input,
    options = { country: activeCountry, source: "manual" },
  ) => {
    const question = nextQuestion.trim();

    if (!question || isLoading) return;

    const searchCountry = normalizeScopeCountry(
      options.country ?? activeCountry,
      "all",
    );
    const source = options.source ?? "manual";
    const analyticsTopic = detectAnalyticsTopic(question);

    const history = messages
      .filter((message) => message.id !== INITIAL_MESSAGE.id)
      .slice(-6)
      .map((message) => ({
        role: message.role,
        text: message.text,
        sourceCountry: message.sourceCountry ?? null,
        sourceQuestion: message.sourceQuestion ?? null,
      }));

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: question,
    };

    trackMentorbotEvent("mentorbot_question_asked", {
      country: searchCountry,
      source,
      topic: analyticsTopic,
    });
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
          country: searchCountry,
          history,
        }),
      });

      const data = await response.json();

      trackMentorbotEvent(
        data.found ? "mentorbot_answer_found" : "mentorbot_answer_failed",
        {
          country: data.activeCountry ?? searchCountry,
          matched_country:
            normalizeScopeCountry(data.country, "all") === "all"
              ? undefined
              : normalizeScopeCountry(data.country, "all"),
          source,
          topic: analyticsTopic,
        },
      );

      if (data.activeCountry) {
        setConversationCountry(data.activeCountry);
      }

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text:
            data.reply ??
            "I could not get an answer right now. Please try again.",
          activeCountry: data.activeCountry ?? searchCountry,
          sourceCountry: data.country ?? null,
          sourceQuestion: data.matchedQuestion ?? null,
          sourceHref: data.sourceHref ?? null,
          sourceLabel: data.sourceLabel ?? null,
          fallback: !data.found,
          suggestions: data.suggestions ?? [],
        },
      ]);
    } catch {
      trackMentorbotEvent("mentorbot_answer_failed", {
        country: searchCountry,
        source,
        topic: analyticsTopic,
        error_type: "network",
      });
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text:
            "I could not reach the FAQ service right now. Please try again in a moment.",
          activeCountry: activeCountry,
          fallback: true,
          suggestions: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReplyShortcut = async (message, shortcutType) => {
    const shortcutCountry = getMessageShortcutCountry(message, activeCountry);
    const shortcutCountryLabel = formatCountryLabel(shortcutCountry);
    const shortcutQuestions = {
      follow_up: message.sourceQuestion
        ? `Can you explain more about "${message.sourceQuestion}" for ${shortcutCountryLabel}?`
        : `Can you explain this more for ${shortcutCountryLabel}?`,
      visa: `What should I know about visa for ${shortcutCountryLabel}?`,
      scholarship: `What scholarships are available in ${shortcutCountryLabel}?`,
    };
    const nextQuestion = shortcutQuestions[shortcutType];

    if (!nextQuestion) return;

    trackMentorbotEvent("mentorbot_reply_shortcut_clicked", {
      country: shortcutCountry,
      shortcut: shortcutType,
      topic: detectAnalyticsTopic(nextQuestion),
    });

    if (shortcutType === "follow_up") {
      setInput(nextQuestion);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return;
    }

    await sendMessage(nextQuestion, {
      country: shortcutCountry,
      source: "reply_shortcut",
    });
  };

  const handleLeadSubmit = () => {
    const normalizedCountry = normalizeWidgetCountry(leadForm.country);
    const trimmedName = leadForm.name.trim();
    const trimmedContact = leadForm.contact.trim();
    const trimmedQuestion = leadForm.question.trim();

    if (!trimmedName || !trimmedContact || !trimmedQuestion) {
      setLeadFormError("Please add your name, contact, and question.");
      return;
    }

    const leadPayload = {
      name: trimmedName,
      contact: trimmedContact,
      question: trimmedQuestion,
      country: normalizedCountry,
    };

    setLeadFormError("");
    trackMentorbotEvent("mentorbot_lead_submitted", {
      country: normalizedCountry,
      topic: detectAnalyticsTopic(trimmedQuestion),
      fallback_streak: fallbackStreak,
    });
    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(buildLeadBody(leadPayload))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      {!isOpen ? (
        <div className="fixed bottom-5 right-4 z-[70]">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[#364bc5]/20 animate-ping" />
          <div className="pointer-events-none absolute -inset-2 rounded-full border border-[#364bc5]/20" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative h-20 w-20 rounded-full bg-linear-to-br from-[#1f2b80] via-[#364bc5] to-[#5b71e5] text-white shadow-[0_18px_50px_rgba(54,75,197,0.42)] transition-transform duration-300 hover:-translate-y-1"
            aria-label="Open MentorBOT"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
              <Bot className="mb-1 h-5 w-5" />
              <span className="text-[10px] font-semibold tracking-[0.12em]">
                Mentor
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em]">
                BOT
              </span>
            </div>
            <span className="absolute -right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#364bc5] shadow-md">
              <Sparkles className="h-3 w-3" />
            </span>
          </button>
        </div>
      ) : null}

      {isOpen ? (
        <section className="fixed bottom-4 right-4 z-[70] flex h-[min(78vh,640px)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.24)]">
          <div className="bg-linear-to-r from-[#1f2b80] via-[#364bc5] to-[#5267de] px-4 pb-2 pt-2 text-white">
            <div className="flex items-start justify-between gap-2.5">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/12">
                    <MessageCircle className="h-[18px] w-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.7rem] font-semibold leading-none">
                      MentorBOT
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Context: {countryLabel}
                    </p>
                  </div>
                </div>
                <p className="mt-1 text-[12px] leading-5 text-white/85">
                  Answers are limited to our FAQ.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    const nextEnabled = !soundEnabled;
                    setSoundEnabled(nextEnabled);

                    if (
                      nextEnabled &&
                      (soundArmed ||
                        (audioContextRef.current &&
                          audioContextRef.current.state !== "closed"))
                    ) {
                      await playMentorChime({
                        force: true,
                        mode: isOpen ? "reply" : "attention",
                      });
                    }
                  }}
                  className="rounded-full bg-white/12 p-1.5 text-white transition-colors hover:bg-white/20"
                  aria-label={soundEnabled ? "Mute MentorBOT sound" : "Unmute MentorBOT sound"}
                  title={soundEnabled ? "Sound on" : "Sound off"}
                >
                  {soundEnabled ? (
                    <Volume2 className="h-5 w-5" />
                  ) : (
                    <VolumeX className="h-5 w-5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/12 p-1.5 text-white transition-colors hover:bg-white/20"
                  aria-label="Close MentorBOT"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
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
            <div className="rounded-[22px] border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Quick Start
                </p>
                <span className="rounded-full bg-[#364bc5]/8 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#364bc5]">
                  {quickStartCountryLabel}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {promptSuggestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    disabled={isLoading}
                    onClick={() =>
                      sendMessage(prompt, {
                        country: QUICK_START_COUNTRY,
                        source: "quick_start",
                      })
                    }
                    className="rounded-full border border-[#364bc5]/18 bg-[#364bc5]/6 px-2.5 py-1 text-left text-[10px] font-semibold leading-[1.35] text-[#364bc5] transition-colors hover:bg-[#364bc5]/12 disabled:cursor-not-allowed disabled:opacity-60"
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
              const fallbackFaqHref = getFaqHref(message.activeCountry);
              const fallbackCountryLabel = formatCountryLabel(
                message.activeCountry ?? QUICK_START_COUNTRY,
              );
              const showReplyShortcuts =
                isAssistant &&
                message.id !== INITIAL_MESSAGE.id &&
                !message.fallback;

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

                    {showReplyShortcuts ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() =>
                            handleReplyShortcut(message, "follow_up")
                          }
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Ask follow-up
                        </button>
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => handleReplyShortcut(message, "visa")}
                          className="rounded-full bg-[#364bc5]/8 px-3 py-1.5 text-xs font-semibold text-[#364bc5] transition-colors hover:bg-[#364bc5]/14 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Visa help
                        </button>
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() =>
                            handleReplyShortcut(message, "scholarship")
                          }
                          className="rounded-full bg-[#364bc5]/8 px-3 py-1.5 text-xs font-semibold text-[#364bc5] transition-colors hover:bg-[#364bc5]/14 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Scholarship help
                        </button>
                      </div>
                    ) : null}

                    {isAssistant && message.fallback ? (
                      <div className="mt-3 rounded-2xl border border-[#364bc5]/12 bg-[#364bc5]/5 p-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#364bc5]">
                          Best Next Step
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <Link
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#364bc5] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2d3fb1]"
                          >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                          </Link>
                          <Link
                            href={BOOKING_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#364bc5] ring-1 ring-[#364bc5]/20 transition-colors hover:bg-[#364bc5]/6"
                          >
                            <CalendarDays className="h-4 w-4" />
                            Book 1:1
                          </Link>
                          <Link
                            href={fallbackFaqHref}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                          >
                            {fallbackCountryLabel} FAQ
                          </Link>
                          <Link
                            href={CONTACT_EMAIL}
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </Link>
                        </div>
                      </div>
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

            {showLeadCapture ? (
              <div className="rounded-3xl border border-[#364bc5]/12 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#364bc5]">
                      Need a personal answer?
                    </p>
                    <h4 className="mt-1 text-sm font-semibold text-slate-900">
                      Leave your question for Ahsan
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      After repeated misses, you can send your exact question
                      directly.
                    </p>
                  </div>
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#364bc5]" />
                </div>

                <div className="mt-3 grid gap-2">
                  <input
                    type="text"
                    value={leadForm.name}
                    onChange={(event) =>
                      {
                        setLeadFormError("");
                        setLeadForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }));
                      }
                    }
                    placeholder="Your name"
                    className="rounded-2xl border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#364bc5]"
                  />
                  <input
                    type="text"
                    value={leadForm.contact}
                    onChange={(event) =>
                      {
                        setLeadFormError("");
                        setLeadForm((current) => ({
                          ...current,
                          contact: event.target.value,
                        }));
                      }
                    }
                    placeholder="WhatsApp number or email"
                    className="rounded-2xl border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#364bc5]"
                  />
                  <select
                    value={leadForm.country}
                    onChange={(event) =>
                      {
                        setLeadFormError("");
                        setLeadForm((current) => ({
                          ...current,
                          country: normalizeWidgetCountry(event.target.value),
                        }));
                      }
                    }
                    className="rounded-2xl border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-[#364bc5]"
                  >
                    {COUNTRY_OPTIONS.map((country) => (
                      <option key={country} value={country}>
                        {formatCountryLabel(country)}
                      </option>
                    ))}
                  </select>
                  <textarea
                    rows={3}
                    value={leadForm.question}
                    onChange={(event) =>
                      {
                        setLeadFormError("");
                        setLeadForm((current) => ({
                          ...current,
                          question: event.target.value,
                        }));
                      }
                    }
                    placeholder="Write your exact question"
                    className="resize-none rounded-2xl border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#364bc5]"
                  />

                  {leadFormError ? (
                    <p className="text-xs font-medium text-rose-600">
                      {leadFormError}
                    </p>
                  ) : null}

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleLeadSubmit}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#364bc5] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2d3fb1]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </button>
                    <Link
                      href={buildLeadEmailHref({
                        name: leadForm.name.trim() || "Unknown",
                        contact: leadForm.contact.trim() || "Not provided",
                        question: leadForm.question.trim() || "No question provided",
                        country: normalizeWidgetCountry(leadForm.country),
                      })}
                      onClick={() =>
                        trackMentorbotEvent("mentorbot_lead_email_clicked", {
                          country: normalizeWidgetCountry(leadForm.country),
                          topic: detectAnalyticsTopic(leadForm.question),
                          fallback_streak: fallbackStreak,
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      <Mail className="h-4 w-4" />
                      Email us
                    </Link>
                  </div>
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
                ref={inputRef}
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
