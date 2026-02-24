import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

const Header = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const scrollToPurchase = () => {
    document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "he" ? "en" : "he";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 start-0 end-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-[10px] min-w-0 py-1">
          <img
            src="/images/logo.jpeg"
            alt=""
            className="h-9 w-auto max-h-[36px] md:h-12 md:max-h-[48px] lg:h-14 lg:max-h-[56px] object-contain shrink-0"
          />
          <span className="font-display text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
            <span className="md:hidden">{t("header.titleShort")}</span>
            <span className="hidden md:inline truncate">{t("header.title")}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
            aria-label={currentLang === "he" ? "Switch to English" : "עבור לעברית"}
          >
            <span
              lang="en"
              dir="ltr"
              className="lang-switcher-label"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              <span className={currentLang === "en" ? "font-semibold" : "opacity-70"}>EN</span>
              <span className="opacity-50 ms-1 me-1">|</span>
              <span className={currentLang === "he" ? "font-semibold" : "opacity-70"}>HE</span>
            </span>
          </button>
          <button
            onClick={scrollToPurchase}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:bg-warm-brown-light transition-colors"
          >
            {t("header.button")}
          </button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center pt-16"
      aria-label={t("hero.headline")}
    >
      {/* Full-screen background: cover on mobile, contain on desktop; centered */}
      <div
        className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/H1.png')",
          backgroundPosition: "center center",
        }}
      />
      {/* Subtle dark overlay (40% opacity max) */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-4">
          {t("hero.headline")}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-md">
          {t("hero.name")}
        </h1>
        <p className="font-display text-xl md:text-3xl text-primary-foreground/90">
          {t("hero.sub")}
        </p>
      </div>
    </section>
  );
};

export { Header, HeroSection };
