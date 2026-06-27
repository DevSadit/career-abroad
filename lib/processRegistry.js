import belgiumProcess from "@/data/visa_process/belgium.json";

export const PROCESS_REGISTRY = {
  belgium: belgiumProcess,
};

export function getProcessData(country) {
  if (!country) return null;
  return PROCESS_REGISTRY[country.toLowerCase()] ?? null;
}
