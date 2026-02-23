import { Wheat, Droplets, Hand, Palette, Scissors, Flame } from "lucide-react";

const courses = [
  { title: "בניית מחמצת מאפס", icon: Wheat, description: "תהליך ברור ומדויק מהיום הראשון ועד מחמצת פעילה ויציבה." },
  { title: "האכלות ותסיסות", icon: Droplets, description: "נבין איך לקרוא את המחמצת ולדעת בדיוק מתי היא בשיאה." },
  { title: "קיפולים נכונים", icon: Hand, description: "נלמד כיצד לפתח רשת גלוטן חזקה שתעניק ללחם נפח ואווריריות מושלמת." },
  { title: "עיצוב וכדרור", icon: Palette, description: "נלמד לעצב בצק מתוח וחלק לפני ההתפחה הסופית." },
  { title: "חריצה מקצועית", icon: Scissors, description: "טכניקות חריצה שיאפשרו ללחם להיפתח יפה ומבוקר באפייה." },
  { title: "אפייה בתנור ביתי", icon: Flame, description: "נלמד ליצור אדים נכונים ולהפיק תוצאה מקצועית גם בתנור ביתי." },
];

const CourseContentSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        מה לומדים בקורס
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="group bg-card border border-border rounded-xl p-6 text-center hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <c.icon className="w-8 h-8 mx-auto mb-3 text-primary" strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseContentSection;
