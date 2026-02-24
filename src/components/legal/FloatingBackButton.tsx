import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, ChevronLeft } from "lucide-react";
import i18n from "@/lib/i18n";

const FloatingBackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const Icon = isRTL ? ChevronRight : ChevronLeft;

  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
      className="fixed top-20 z-40 start-4 flex items-center gap-1.5 bg-foreground text-background rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:opacity-80 transition-opacity"
      aria-label={t("legal.back")}
    >
      <Icon className="w-4 h-4" />
      <span>{t("legal.back")}</span>
    </button>
  );
};

export default FloatingBackButton;
