import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const leadSchema = z.object({
  name: z.string().trim().min(1, "שדה חובה").max(100),
  email: z.string().trim().email("כתובת אימייל לא תקינה").max(255),
  phone: z.string().trim().min(9, "מספר טלפון לא תקין").max(15),
});

type LeadForm = z.infer<typeof leadSchema>;

const LeadFormSection = () => {
  const [form, setForm] = useState<LeadForm>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof LeadForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError("אירעה שגיאה בשליחת הפרטים. נסו שוב.");
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
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">תודה!</h3>
            <p className="text-muted-foreground">הפרטים נשלחו בהצלחה. נחזור אליך בקרוב.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
          רוצים לשמוע עוד?
        </h2>
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
          {submitError && (
            <p className="text-destructive text-sm text-center">{submitError}</p>
          )}
          <div>
            <label htmlFor="lead-name" className="block font-body text-sm font-medium text-foreground mb-1">שם מלא</label>
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
            <label htmlFor="lead-email" className="block font-body text-sm font-medium text-foreground mb-1">אימייל</label>
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
            <label htmlFor="lead-phone" className="block font-body text-sm font-medium text-foreground mb-1">טלפון</label>
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
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-lg hover:bg-warm-brown-light transition-colors disabled:opacity-60"
          >
            {submitting ? "שולח..." : "שלחו לי פרטים"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
