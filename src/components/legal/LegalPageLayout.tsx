import FloatingBackButton from "./FloatingBackButton";

type LegalSection = {
  heading: string;
  content: string;
};

type Props = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const LegalPageLayout = ({ title, lastUpdated, sections }: Props) => (
  <main className="min-h-screen bg-background pt-20 pb-16 px-4">
    <FloatingBackButton />
    <div className="container mx-auto max-w-3xl">
      <header className="mb-10 border-b border-border pb-6">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm">{lastUpdated}</p>
      </header>

      <div className="space-y-10">
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
              {section.heading}
            </h2>
            <div className="font-body text-foreground/85 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  </main>
);

export default LegalPageLayout;
