import exclusionsList from "../Exclusions.json";

export const isBlacklisted = (partNumber) =>
  (exclusionsList as any)
    .map((e) => e.PartNumber.toLowerCase())
    .includes(partNumber.toLowerCase());
