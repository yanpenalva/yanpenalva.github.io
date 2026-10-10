import { ref } from "vue";
import enUS from "@/i18n/en-US";
import ptBR from "@/i18n/pt-BR";

const dicts = { "en-US": enUS, "pt-BR": ptBR };
const STORAGE_KEY = "locale";

const isLocale = (value) => Object.prototype.hasOwnProperty.call(dicts, value);

const read = () => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const persist = (value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {}
};

const resolve = (dict, key) =>
  key.split(".").reduce((node, part) => (node && typeof node === "object" ? node[part] : undefined), dict);

const stored = read();
const locale = ref(isLocale(stored) ? stored : "en-US");

const syncLang = () => {
  if (typeof document !== "undefined") document.documentElement.lang = locale.value;
};

syncLang();

const setLocale = (value) => {
  if (!isLocale(value)) return;
  locale.value = value;
  persist(value);
  syncLang();
};

const toggleLocale = () => setLocale(locale.value === "en-US" ? "pt-BR" : "en-US");

const t = (key, params) => {
  const value = resolve(dicts[locale.value], key) ?? resolve(enUS, key);
  if (typeof value !== "string") return key;
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (match, name) =>
    params[name] === undefined ? match : String(params[name])
  );
};

export function useLocale() {
  return { locale, setLocale, toggleLocale, t };
}
