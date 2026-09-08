import belgiumProcess from "@/data/visa_process/belgium.json";
import franceProcess from "@/data/visa_process/france.json";
import spainProcess from "@/data/visa_process/spain.json";
import italyProcess from "@/data/visa_process/italy.json";
import austriaProcess from "@/data/visa_process/austria.json";
import norwayProcess from "@/data/visa_process/norway.json";

export const PROCESS_REGISTRY = {
  belgium: belgiumProcess,
  france: franceProcess,
  spain: spainProcess,
  italy: italyProcess,
  austria: austriaProcess,
  norway: norwayProcess,
};

export function getProcessData(country) {
  if (!country) return null;
  return PROCESS_REGISTRY[country.toLowerCase()] ?? null;
}
