import { notFound } from "next/navigation";
import FaqClient from "./FaqClient";
import { FAQ_COUNTRY_KEYS, getFaqConfig } from "@/lib/faqRegistry";

export function generateStaticParams() {
  return FAQ_COUNTRY_KEYS.map((country) => ({ country }));
}

export default async function Page({ params }) {
  const { country } = await params;
  const config = getFaqConfig(country);

  if (!config) notFound();

  return (
    <FaqClient
      countryName={config.name}
      flagSrc={config.flag}
      faqData={config.data}
    />
  );
}
