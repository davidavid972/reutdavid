import bread1 from "@/assets/bread-1.jpg";
import bread2 from "@/assets/bread-2.jpg";
import bread3 from "@/assets/bread-3.jpg";
import bread4 from "@/assets/bread-4.jpg";
import bread5 from "@/assets/bread-5.jpg";
import bread6 from "@/assets/bread-6.jpg";

const images = [
  { src: bread1, alt: "לחם מחמצת חתוך" },
  { src: bread2, alt: "מחמצת בצנצנת" },
  { src: bread3, alt: "לישת בצק" },
  { src: bread4, alt: "לחם מחמצת פרוס" },
  { src: bread5, alt: "כיכרות לחם מצטננות" },
  { src: bread6, alt: "חריצה מקצועית" },
];

const GallerySection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        מהמטבח שלי
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
