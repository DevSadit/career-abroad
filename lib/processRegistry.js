import belgiumProcess from "@/data/visa_process/belgium.json";
import franceProcess from "@/data/visa_process/france.json";

export const PROCESS_REGISTRY = {
  belgium: belgiumProcess,
  france: franceProcess,
};

export function getProcessData(country) {
  if (!country) return null;
  return PROCESS_REGISTRY[country.toLowerCase()] ?? null;
}
