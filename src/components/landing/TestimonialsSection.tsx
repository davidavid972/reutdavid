import { useTranslation } from "react-i18next";

interface Testimonial {
  text: string;
  name: string;
}

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {t("testimonials.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-6">
              <p className="font-body text-foreground leading-relaxed mb-4">"{testimonial.text}"</p>
              <p className="font-display font-semibold text-primary">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
