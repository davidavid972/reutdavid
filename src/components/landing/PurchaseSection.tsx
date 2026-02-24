import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Check, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const linkClass = "text-primary underline underline-offset-2 hover:text-primary/80 transition-colors";

const PurchaseSection = () => {
  const { t } = useTranslation();
  const features = t("purchase.features", { returnObjects: true }) as string[];
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const scrollToLead = () => {
    if (!consent) {
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

          {/* Unified consent checkbox */}
          <div className="text-start mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setConsentError(false);
                }}
                className="mt-1 h-4 w-4 shrink-0 rounded border-input accent-primary"
              />
              <span className="font-body text-xs text-foreground/70 leading-relaxed">
                <Trans
                  i18nKey="purchase.unifiedConsent"
                  components={{
                    termsLink: <Link to="/terms" className={linkClass} />,
                    privacyLink: <Link to="/privacy" className={linkClass} />,
                  }}
                />
              </span>
            </label>
            {consentError && (
              <p className="text-destructive text-xs mt-1.5 ps-7">
                {t("purchase.unifiedConsentRequired")}
              </p>
            )}
          </div>

          <button
            onClick={scrollToLead}
            disabled={!consent}
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
