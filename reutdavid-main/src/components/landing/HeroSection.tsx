import heroBg from "@/assets/hero-bg.jpg";

const Header = () => {
  const scrollToPurchase = () => {
    document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-display text-lg md:text-xl font-bold text-foreground">
          רעות דוד | קורס מחמצת ביתי
        </span>
        <button
          onClick={scrollToPurchase}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:bg-warm-brown-light transition-colors"
        >
          הצטרפו לקורס
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-16">
    <div className="absolute inset-0">
      <img src={heroBg} alt="מטבח כפרי עם לחם מחמצת" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-4">
        ברוכים הבאים לעולם המחמצת
      </p>
      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
        רעות דוד
      </h1>
      <p className="font-display text-xl md:text-3xl text-primary-foreground/90">
        לחם אמיתי. ביתי. כמו פעם.
      </p>
    </div>
  </section>
);

export { Header, HeroSection };
