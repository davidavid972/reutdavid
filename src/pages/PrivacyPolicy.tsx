import { useTranslation } from "react-i18next";
import FloatingBackButton from "@/components/legal/FloatingBackButton";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const sections = t("privacyPolicy.sections", { returnObjects: true }) as Array<{
    heading: string;
    content: string;
  }>;

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <FloatingBackButton />
      <div className="container mx-auto max-w-3xl">

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t("privacyPolicy.title")}
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          {t("privacyPolicy.lastUpdated")}
        </p>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {section.heading}
              </h2>
              <p className="font-body text-foreground/85 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
