import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "צריך ניסיון קודם?",
    a: "ממש לא. הקורס בנוי גם למי שמעולם לא נגע במחמצת.",
  },
  {
    q: "צריך ציוד מיוחד?",
    a: "לא. תנור ביתי רגיל וכלי מטבח בסיסיים מספיקים.",
  },
  {
    q: "כמה זמן יש גישה לקורס?",
    a: "גישה מלאה למשך 6 חודשים.",
  },
  {
    q: "ואם לא מצליח לי?",
    a: "יש ליווי ותמיכה כדי שלא תישארו לבד בתהליך.",
  },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        שאלות נפוצות
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
            <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
