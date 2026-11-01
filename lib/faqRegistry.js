import franceFaq from "@/data/france_faq.json";
import italyFaq from "@/data/italy_faq.json";
import belgiumFaq from "@/data/belgium_faq.json";
import hungaryFaq from "@/data/hungary_faq.json";
import estoniaFaq from "@/data/estonia_faq.json";
import spainFaq from "@/data/spain_faq.json";
import austriaFaq from "@/data/austria_faq.json";
import norwayFaq from "@/data/norway_faq.json";
import germanyFaq from "@/data/germany_faq.json";
import netherlandsFaq from "@/data/netherlands_faq.json";
import polandFaq from "@/data/poland_faq.json";
import lithuaniaFaq from "@/data/lithuania_faq.json";
import swedenFaq from "@/data/sweden_faq.json";
import denmarkFaq from "@/data/denmark_faq.json";
import finlandFaq from "@/data/finland_faq.json";

export const FAQ_REGISTRY = {
  italy: { name: "Italy", flag: "/flags/it.svg", data: italyFaq },
  france: { name: "France", flag: "/flags/fr.svg", data: franceFaq },
  belgium: { name: "Belgium", flag: "/flags/be.svg", data: belgiumFaq },
  hungary: { name: "Hungary", flag: "/flags/hu.svg", data: hungaryFaq },
  estonia: { name: "Estonia", flag: "/flags/ee.svg", data: estoniaFaq },
  spain: { name: "Spain", flag: "/flags/es.svg", data: spainFaq },
  austria: { name: "Austria", flag: "/flags/at.svg", data: austriaFaq },
  norway: { name: "Norway", flag: "/flags/no.svg", data: norwayFaq },
  germany: { name: "Germany", flag: "/flags/de.svg", data: germanyFaq },
  netherlands: { name: "Netherlands", flag: "/flags/nl.svg", data: netherlandsFaq },
  poland: { name: "Poland", flag: "/flags/pl.svg", data: polandFaq },
  lithuania: { name: "Lithuania", flag: "/flags/lt.svg", data: lithuaniaFaq },
  sweden: { name: "Sweden", flag: "/flags/se.svg", data: swedenFaq },
  denmark: { name: "Denmark", flag: "/flags/dk.svg", data: denmarkFaq },
  finland: { name: "Finland", flag: "/flags/fi.svg", data: finlandFaq },
};

export const FAQ_COUNTRY_KEYS = Object.keys(FAQ_REGISTRY);

export function getFaqConfig(country) {
  if (!country) return null;

  return FAQ_REGISTRY[country.toLowerCase()] ?? null;
}

export function getFaqEntries(country = "all") {
  const keys =
    country && country !== "all"
      ? FAQ_COUNTRY_KEYS.filter((key) => key === country.toLowerCase())
      : FAQ_COUNTRY_KEYS;

  return keys.flatMap((key) => {
    const config = FAQ_REGISTRY[key];

    return config.data.map((faq) => ({
      ...faq,
      country: key,
      countryName: config.name,
      flagSrc: config.flag,
      href: `/faq/${key}#faq-${faq.id}`,
    }));
  });
}
