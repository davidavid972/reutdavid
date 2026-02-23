import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const benefits = t("benefits.items", { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {t("benefits.title")}
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
};

export default BenefitsSection;
