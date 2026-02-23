const testimonials = [
  {
    text: "אף פעם לא האמנתי שאצליח להכין לחם כזה בבית. היום אני לא קונה יותר במאפייה.",
    name: "דנה לוי",
  },
  {
    text: "ההסברים של רעות ברורים ופשוטים. הכל פתאום הסתדר לי.",
    name: "מיכל כהן",
  },
  {
    text: "הקורס הזה שינה לי את המטבח. התמכרתי לריח של לחם טרי.",
    name: "שירה אוחיון",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        מה אומרות תלמידות שלי
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background border border-border rounded-xl p-6">
            <p className="font-body text-foreground leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-display font-semibold text-primary">– {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
