import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PurchaseSection = () => {
  const { t } = useTranslation();
  const features = t("purchase.features", { returnObjects: true }) as string[];
  const [digitalConsent, setDigitalConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const scrollToLead = () => {
    if (!digitalConsent) {
      setConsentError(true);
      return;
    }
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="purchase" className="py-16 md:py-24 bg-warm-sand">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          {t("purchase.title")}
        </h2>

        <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <span className="text-muted-foreground/60 line-through text-xl">280₪</span>
            <div className="mt-1">
              <span className="font-display text-6xl font-bold text-primary">150₪</span>
            </div>
          </div>
          <p className="text-sm text-warm-gold font-semibold mb-6">{t("purchase.offer")}</p>

          <ul className="space-y-3 text-foreground font-body text-start mb-6">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-warm-gold shrink-0" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Digital product consent checkbox */}
          <div className="text-start mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={digitalConsent}
                onChange={(e) => {
                  setDigitalConsent(e.target.checked);
                  if (e.target.checked) setConsentError(false);
                }}
                className="mt-1 h-4 w-4 shrink-0 rounded border-input accent-primary"
              />
              <span className="font-body text-xs text-foreground/70 leading-relaxed">
                {t("purchase.digitalConsent")}
              </span>
            </label>
            {consentError && (
              <p className="text-destructive text-xs mt-1.5 ps-7">
                {t("purchase.digitalConsentRequired")}
              </p>
            )}
          </div>

          {/* Legal links */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4 flex-wrap">
            <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="underline underline-offset-2 hover:text-foreground transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to="/accessibility" className="underline underline-offset-2 hover:text-foreground transition-colors">
              {t("footer.accessibility")}
            </Link>
          </div>

          <button
            onClick={scrollToLead}
            disabled={!digitalConsent}
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-warm-brown-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("purchase.button")}
          </button>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-muted-foreground text-xs">
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{t("purchase.note")}</span>
          </div>
          <p className="mt-2 text-muted-foreground/60 text-[11px] leading-relaxed">
            {t("purchase.paymentDisclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
