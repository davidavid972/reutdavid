import { useTranslation } from "react-i18next";

const images = [
  "/images/bread-1.jpeg",
  "/images/bread-2.jpeg",
  "/images/bread-3.jpeg",
  "/images/bread-4.jpeg",
  "/images/bread-5.jpeg",
  "/images/bread-6.jpeg",
];

const GallerySection = () => {
  const { t } = useTranslation();
  const galleryImages = t("gallery.images", { returnObjects: true }) as Array<{ alt: string }>;

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {t("gallery.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt={galleryImages[i]?.alt || ""}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
