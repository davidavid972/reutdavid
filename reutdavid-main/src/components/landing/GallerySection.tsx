import { useTranslation } from "react-i18next";
import bread1 from "@/assets/bread-1.jpg";
import bread2 from "@/assets/bread-2.jpg";
import bread3 from "@/assets/bread-3.jpg";
import bread4 from "@/assets/bread-4.jpg";
import bread5 from "@/assets/bread-5.jpg";
import bread6 from "@/assets/bread-6.jpg";

const images = [bread1, bread2, bread3, bread4, bread5, bread6];

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
