import belgiumProcess from "@/data/visa_process/belgium.json";
import franceProcess from "@/data/visa_process/france.json";
import spainProcess from "@/data/visa_process/spain.json";
import italyProcess from "@/data/visa_process/italy.json";
import austriaProcess from "@/data/visa_process/austria.json";
import norwayProcess from "@/data/visa_process/norway.json";
import germanyProcess from "@/data/visa_process/germany.json";
import netherlandsProcess from "@/data/visa_process/netherlands.json";
import polandProcess from "@/data/visa_process/poland.json";
import lithuaniaProcess from "@/data/visa_process/lithuania.json";
import swedenProcess from "@/data/visa_process/sweden.json";
import denmarkProcess from "@/data/visa_process/denmark.json";
import finlandProcess from "@/data/visa_process/finland.json";
import hungaryProcess from "@/data/visa_process/hungary.json";
import estoniaProcess from "@/data/visa_process/estonia.json";

export const PROCESS_REGISTRY = {
  belgium: belgiumProcess,
  france: franceProcess,
  spain: spainProcess,
  italy: italyProcess,
  austria: austriaProcess,
  norway: norwayProcess,
  germany: germanyProcess,
  netherlands: netherlandsProcess,
  poland: polandProcess,
  lithuania: lithuaniaProcess,
  sweden: swedenProcess,
  denmark: denmarkProcess,
  finland: finlandProcess,
  hungary: hungaryProcess,
  estonia: estoniaProcess,
};

export function getProcessData(country) {
  if (!country) return null;
  return PROCESS_REGISTRY[country.toLowerCase()] ?? null;
}
