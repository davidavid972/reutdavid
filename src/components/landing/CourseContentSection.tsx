import { useTranslation } from "react-i18next";
import { Hand, Droplets, Wheat, Flame, Scissors, Palette } from "lucide-react";

interface CourseItem {
  title: string;
  desc: string;
}

const ICONS = [Hand, Droplets, Wheat, Flame, Scissors, Palette];

const DISPLAY_ORDER = [2, 1, 0, 5, 4, 3];

const CourseContentSection = () => {
  const { t } = useTranslation();
  const courses = t("course.items", { returnObjects: true }) as CourseItem[];
  const ordered = DISPLAY_ORDER.map((i) => courses[i]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {t("course.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ordered.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer transition-shadow hover:shadow-md"
              >
                <Icon
                  className="w-12 h-12 text-primary mb-4"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
