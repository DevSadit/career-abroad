import belgiumProcess from "@/data/visa_process/belgium.json";
import franceProcess from "@/data/visa_process/france.json";
import spainProcess from "@/data/visa_process/spain.json";
import italyProcess from "@/data/visa_process/italy.json";

export const PROCESS_REGISTRY = {
  belgium: belgiumProcess,
  france: franceProcess,
  spain: spainProcess,
  italy: italyProcess,
};

export function getProcessData(country) {
  if (!country) return null;
  return PROCESS_REGISTRY[country.toLowerCase()] ?? null;
}
