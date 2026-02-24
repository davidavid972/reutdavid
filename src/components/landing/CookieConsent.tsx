import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookie-consent";

export const getCookieConsent = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[70] p-4 pointer-events-none">
      <div className="pointer-events-auto container mx-auto max-w-3xl bg-card border border-border rounded-xl shadow-2xl p-5 md:p-6">
        <p className="font-body text-sm text-foreground/90 mb-4 leading-relaxed">
          {t("cookie.message")}{" "}
          <Link
            to="/privacy"
            className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
          >
            {t("cookie.learnMore")}
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-warm-brown-light transition-colors"
          >
            {t("cookie.accept")}
          </button>
          <button
            onClick={reject}
            className="border border-border text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
          >
            {t("cookie.reject")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
