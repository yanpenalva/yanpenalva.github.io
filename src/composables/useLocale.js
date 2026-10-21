import { ref } from "vue";
import enUS from "@/i18n/en-US";
import ptBR from "@/i18n/pt-BR";

const dicts = { "en-US": enUS, "pt-BR": ptBR };
const STORAGE_KEY = "locale";

const isLocale = (value) => Object.prototype.hasOwnProperty.call(dicts, value);

const localeFromPath = () => {
  if (typeof window === "undefined") return "en-US";
  return /^\/pt-br(?:\/|$)/i.test(window.location.pathname) ? "pt-BR" : "en-US";
};

const persist = (value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {}
};

const resolve = (dict, key) =>
  key.split(".").reduce((node, part) => (node && typeof node === "object" ? node[part] : undefined), dict);

const locale = ref(localeFromPath());

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

const t = (key, params) => {
  const value = resolve(dicts[locale.value], key);
  if (typeof value !== "string") return key;
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (match, name) =>
    params[name] === undefined ? match : String(params[name])
  );
};

export function useLocale() {
  return { locale, setLocale, t };
}
