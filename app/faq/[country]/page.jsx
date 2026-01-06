import { notFound } from "next/navigation";
import FaqClient from "./FaqClient";

import franceFaq from "../../../../data/france_faq.json";
import italyFaq from "../../../../data/italy_faq.json";
import belgiumFaq from "../../../../data//belgium_faq.json";

const FAQ_REGISTRY = {
  italy: { name: "Italy", flag: "/flags/it.svg", data: italyFaq },
  france: { name: "France", flag: "/flags/fr.svg", data: franceFaq },
  belgium: { name: "Belgium", flag: "/flags/be.svg", data: belgiumFaq },
};

export function generateStaticParams() {
  return Object.keys(FAQ_REGISTRY).map((country) => ({ country }));
}

export default async function Page({ params }) {
  const { country } = await params; // ✅ IMPORTANT FIX

  const key = country?.toLowerCase();
  const config = FAQ_REGISTRY[key];

  if (!config) notFound();

  return (
    <FaqClient
      countryName={config.name}
      flagSrc={config.flag}
      faqData={config.data}
    />
  );
}

//
