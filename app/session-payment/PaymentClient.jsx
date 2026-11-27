"use client";
import React, { useState } from "react";
import {
  AlertCircle,
  Clock,
  Video,
  Mail,
  X,
  Copy,
  Check,
} from "lucide-react";

const primary = "#364bc5";

const BKASH = {
  id: "bkash",
  title: "Pay via bKash",
  color: "#e2136e",
  bg: "#fdf2f8",
  rows: [
    { label: "Name", value: "Shahmiraj Ehesan" },
    { label: "bKash Number", value: "01806293786" },
  ],
  note: 'Use "Send Money" — not "Payment".',
};

const BANK = {
  id: "bank",
  title: "Pay via Bank Transfer (BDT)",
  color: primary,
  bg: "#eef0fb",
  rows: [
    { label: "Bank Name", value: "NRB Commercial Bank" },
    { label: "Branch", value: "OR Nizam Road Branch" },
    { label: "Account Number", value: "011831400000041" },
    { label: "Account Name", value: "Shahmiraj Ehesan" },
    { label: "SWIFT Code", value: "NRBBBDDHORN" },
  ],
  note: null,
};

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy ${value}`}
      className="ml-2 p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function Modal({ modal, onClose }) {
  if (!modal) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className="text-sm font-bold pb-3 mb-4 border-b"
          style={{ color: modal.color, borderColor: `${modal.color}22` }}
        >
          {modal.title}
        </div>

        <div className="space-y-3">
          {modal.rows.map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-500 shrink-0">{label}</span>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-900 text-right font-mono">{value}</span>
                <CopyButton value={value} />
              </div>
            </div>
          ))}
        </div>

        {modal.note && (
          <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-xl px-3 py-2">
            {modal.note}
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full py-2.5 rounded-2xl text-sm font-semibold text-white"
          style={{ backgroundColor: modal.color }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function PaymentClient() {
  const [activeModal, setActiveModal] = useState(null);
  const modal = activeModal === "bkash" ? BKASH : activeModal === "bank" ? BANK : null;

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 md:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {/* Page heading */}
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">1-on-1 Session</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Session Payment</h1>
            <p className="mt-2 text-sm text-gray-500">
              You&apos;ve booked a session — here&apos;s how to complete your payment.
            </p>
          </div>

          {/* Fee + deadline banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Pay within 24 hours</strong> of booking to avoid automatic cancellation.
            </p>
          </div>

          {/* Fee pills */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden mb-5">
            <div className="p-6 sm:p-8">

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Session Fee</p>
                  <h2 className="mt-1 text-lg font-semibold text-gray-900">40-Minute Mentoring Session</h2>
                </div>
                <div className="flex gap-2 sm:gap-3 sm:ml-auto shrink-0">
                  <div className="rounded-xl sm:rounded-2xl bg-[#364bc5] px-3 sm:px-4 py-2 sm:py-2.5 text-center min-w-[88px] sm:min-w-[100px]">
                    <p className="text-[10px] sm:text-xs text-blue-200 font-medium mb-0.5">From Bangladesh</p>
                    <p className="text-base sm:text-lg font-bold text-white leading-tight">৳1,000</p>
                    <p className="text-[10px] sm:text-xs text-blue-300">BDT</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl bg-[#364bc5] px-3 sm:px-4 py-2 sm:py-2.5 text-center min-w-[88px] sm:min-w-[100px]">
                    <p className="text-[10px] sm:text-xs text-blue-200 font-medium mb-0.5">From Abroad</p>
                    <p className="text-base sm:text-lg font-bold text-white leading-tight">€10</p>
                    <p className="text-[10px] sm:text-xs text-blue-300">Euro / US$10</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                  <Clock className="h-3.5 w-3.5 text-[#364bc5]" /> 40 Minutes
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                  <Video className="h-3.5 w-3.5 text-[#364bc5]" /> Zoom
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-[#364bc5]" aria-hidden="true" />
          </div>

          {/* Pay in Bangladesh */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden mb-5">
            <div className="p-6 sm:p-8">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Pay in Bangladesh</h2>
              <div className="flex flex-wrap gap-3">

                {/* bKash */}
                <button
                  onClick={() => setActiveModal("bkash")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold cursor-pointer transition-opacity hover:opacity-80"
                  style={{ borderColor: "#e2136e44", color: "#e2136e", background: "#fdf2f8" }}
                >
                  <span className="font-bold">b</span> bKash — Send Money
                </button>

                {/* Bank Transfer */}
                <button
                  onClick={() => setActiveModal("bank")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 bg-gray-50 cursor-pointer transition-opacity hover:opacity-80"
                >
                  🏦 NRBC Bank Transfer
                </button>
              </div>

              {/* bKash inline hint */}
              <p className="mt-4 text-xs text-gray-400">
                For bKash: tap the button above to see the number, then use <strong>Send Money</strong> in bKash — not &quot;Payment&quot;.
              </p>
            </div>
          </div>

          {/* Pay internationally */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden mb-5">
            <div className="p-6 sm:p-8">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Pay Internationally</h2>
              <div className="flex flex-wrap gap-3">

                {/* Wise */}
                <a
                  href="https://wise.com/pay/me/mdshahnauzea"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ borderColor: "#1FD14A33", color: "#16a34a", background: "#f0fdf4" }}
                >
                  Wise ↗
                </a>

                {/* PayPal */}
                <a
                  href="https://www.paypal.com/paypalme/ahsan7280"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ borderColor: "#00308733", color: "#003087", background: "#eff6ff" }}
                >
                  PayPal ↗
                </a>
              </div>
            </div>
          </div>

          {/* After payment */}
          <div
            className="rounded-2xl border p-5 mb-6"
            style={{
              borderColor: `${primary}33`,
              borderLeft: `3px solid ${primary}`,
              backgroundColor: `${primary}06`,
            }}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              After paying, <strong>reply to your booking confirmation email or WhatsApp message</strong> with your receipt.
              If you&apos;ve already sent it, you&apos;re all set.
            </p>
          </div>

          {/* Contact row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/34743093378"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              {WA_SVG} Send receipt via WhatsApp
            </a>
            <a
              href="mailto:mentors.career.abroad26@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" /> Send receipt via Email
            </a>
          </div>

        </div>
      </div>

      <Modal modal={modal} onClose={() => setActiveModal(null)} />
    </>
  );
}
