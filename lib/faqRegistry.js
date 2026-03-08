import franceFaq from "@/data/france_faq.json";
import italyFaq from "@/data/italy_faq.json";
import belgiumFaq from "@/data/belgium_faq.json";
import hungaryFaq from "@/data/hungary_faq.json";
import estoniaFaq from "@/data/estonia_faq.json";

export const FAQ_REGISTRY = {
  italy: { name: "Italy", flag: "/flags/it.svg", data: italyFaq },
  france: { name: "France", flag: "/flags/fr.svg", data: franceFaq },
  belgium: { name: "Belgium", flag: "/flags/be.svg", data: belgiumFaq },
  hungary: { name: "Hungary", flag: "/flags/hu.svg", data: hungaryFaq },
  estonia: { name: "Estonia", flag: "/flags/ee.svg", data: estoniaFaq },
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
    }));
  });
}
