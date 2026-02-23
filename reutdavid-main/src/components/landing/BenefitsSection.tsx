import { Check } from "lucide-react";

const benefits = [
  "תוציאו לחם מהתנור ותתרגשו מחדש",
  "תבינו באמת איך מחמצת עובדת",
  "תפסיקו לפחד מבצק",
  "תכינו לחם ברמה של מאפייה",
  "תרגישו ביטחון אמיתי באפייה ביתית",
];

const BenefitsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        מה יוצא לכם מזה?
      </h2>
      <ul className="space-y-5">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-lg font-body">
            <Check className="w-5 h-5 text-warm-gold mt-1 shrink-0" strokeWidth={2.5} />
            <span className="text-foreground">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default BenefitsSection;
