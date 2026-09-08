import { notFound } from "next/navigation";
import FaqClient from "./FaqClient";
import { FAQ_COUNTRY_KEYS, getFaqConfig } from "@/lib/faqRegistry";
import { getProcessData } from "@/lib/processRegistry";

export function generateStaticParams() {
  return FAQ_COUNTRY_KEYS.map((country) => ({ country }));
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const config = getFaqConfig(country);
  if (!config) return {};

  const title = `${config.name} FAQ — Career Abroad Mentor`;
  const description = `Frequently asked questions about studying in ${config.name}: visa process, costs, scholarships, and more — by Career Abroad Mentor.`;
  const url = `https://ahsansuny.com/faq/${country}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Career Abroad Mentor",
      images: [
        {
          url: "https://ahsansuny.com/unnamed.png",
          width: 800,
          height: 800,
          alt: "Career Abroad Mentor",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["https://ahsansuny.com/unnamed.png"],
    },
  };
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
      processData={getProcessData(country)}
    />
  );
}
