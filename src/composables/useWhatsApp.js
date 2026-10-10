import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import { WHATSAPP_NUMBER } from "@/data/contacts";

export function useWhatsApp() {
  const { t } = useLocale();
  const href = computed(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("contact.whatsappMessage"))}`
  );

  return { href };
}
