import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t("instagram.title")}
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-8">
          {t("instagram.desc")}
        </p>
        <a
          href="https://www.instagram.com/reut_david10/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-warm-brown-light transition-colors"
        >
          <Instagram className="w-5 h-5" strokeWidth={1.5} />
          <span>{t("instagram.button")}</span>
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
