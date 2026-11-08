import { NextResponse } from "next/server";

// Server-side cache: refresh once per hour
let cached = null;
let cachedAt = 0;
const TTL = 60 * 60 * 1000;

export async function GET() {
  if (cached && Date.now() - cachedAt < TTL) {
    return NextResponse.json(cached);
  }
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/EUR", {
      cache: "no-store",
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (data.result !== "success") throw new Error("API error");
    const r = data.rates;
    const rates = {
      EUR: Math.round(r.BDT * 100) / 100,
      PLN: Math.round((r.BDT / r.PLN) * 100) / 100,
      NOK: Math.round((r.BDT / r.NOK) * 100) / 100,
    };
    cached = rates;
    cachedAt = Date.now();
    return NextResponse.json(rates);
  } catch {
    return NextResponse.json({ EUR: 125, PLN: 28, NOK: 11 });
  }
}
