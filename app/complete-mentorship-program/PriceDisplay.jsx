"use client";
import { useEffect, useState } from "react";

export default function PriceDisplay({ amountEur }) {
  const [bdt, setBdt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then((r) => r.json())
      .then((data) => {
        const rate = data.rates?.BDT;
        if (rate) setBdt(Math.round(amountEur * rate));
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [amountEur]);

  return (
    <div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-4xl font-semibold tracking-tight text-gray-900">
          €{amountEur}
        </span>
        {bdt && (
          <span className="text-2xl font-semibold text-gray-400">
            / ৳{bdt.toLocaleString("en-BD")}
          </span>
        )}
      </div>
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-400">
        {loading ? (
          "Fetching live rate…"
        ) : error ? (
          <span className="text-red-400">Rate unavailable</span>
        ) : (
          <>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            Live EUR → BDT rate
          </>
        )}
      </p>
    </div>
  );
}
