import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AccessibilityPage = () => {
  const { t } = useTranslation();
  const sections = t("accessibilityStatement.sections", { returnObjects: true }) as Array<{
    heading: string;
    content: string;
  }>;

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-block mb-8 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          &larr; {t("legal.backHome")}
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t("accessibilityStatement.title")}
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          {t("accessibilityStatement.lastUpdated")}
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

export default AccessibilityPage;
