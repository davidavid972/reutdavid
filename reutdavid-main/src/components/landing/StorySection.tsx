import { useTranslation } from "react-i18next";

const StorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="font-body text-lg md:text-xl leading-[2.2] text-foreground space-y-6">
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">
            {t("story.p1")}
          </p>
          
          <p>{t("story.p2")}</p>
          
          <p>{t("story.p3")}</p>
          
          <p className="font-display text-xl font-semibold text-primary">
            {t("story.p4")}
          </p>
          
          <p>{t("story.p5")}</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
