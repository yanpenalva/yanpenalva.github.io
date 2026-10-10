export const isValidHttpUrl = (value) => {
  if (typeof value !== "string" || value.trim() === "") return false;

  try {
    const url = new URL(value.trim());
    return ["http:", "https:"].includes(url.protocol) && Boolean(url.hostname);
  } catch {
    return false;
  }
};

export const isValidUrl = (value) => {
  if (isValidHttpUrl(value)) return true;
  if (typeof value !== "string" || !value.trim().toLowerCase().startsWith("mailto:")) return false;

  try {
    const url = new URL(value.trim());
    return url.protocol === "mailto:" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.pathname);
  } catch {
    return false;
  }
};

export const normalizePublicUrl = (value) => {
  if (typeof value !== "string" || value.trim() === "") return "";

  const reference = value.trim();
  if (/internal|no public url/i.test(reference)) return "";

  const candidate = /^https?:\/\//i.test(reference)
    ? reference
    : `https://${reference.replace(/^\/\//, "")}`;

  return isValidHttpUrl(candidate) ? candidate : "";
};
