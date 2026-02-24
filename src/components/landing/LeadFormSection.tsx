import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const linkClass = "text-primary underline underline-offset-2 hover:text-primary/80 transition-colors";

const LeadFormSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "phone", string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const createSchema = () => {
    return z.object({
      name: z.string().trim().min(1, t("lead.validation.nameRequired")).max(100),
      email: z.string().trim().email(t("lead.validation.emailInvalid")).max(255),
      phone: z.string().trim().min(9, t("lead.validation.phoneInvalid")).max(15),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!consent) {
      setConsentError(true);
    }

    const leadSchema = createSchema();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof typeof fieldErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    if (!consent) return;
    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError(t("lead.error"));
      return;
    }

    setForm({ name: "", email: "", phone: "" });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {t("lead.success.title")}
            </h3>
            <p className="text-muted-foreground">{t("lead.success.message")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
          {t("lead.title")}
        </h2>
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
          {submitError && (
            <p className="text-destructive text-sm text-center">{submitError}</p>
          )}
          <div>
            <label htmlFor="lead-name" className="block font-body text-sm font-medium text-foreground mb-1">
              {t("lead.name")}
            </label>
            <input
              id="lead-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="lead-email" className="block font-body text-sm font-medium text-foreground mb-1">
              {t("lead.email")}
            </label>
            <input
              id="lead-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              dir="ltr"
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="lead-phone" className="block font-body text-sm font-medium text-foreground mb-1">
              {t("lead.phone")}
            </label>
            <input
              id="lead-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              dir="ltr"
            />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
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
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-lg hover:bg-warm-brown-light transition-colors disabled:opacity-60"
          >
            {submitting ? t("lead.submitting") : t("lead.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
