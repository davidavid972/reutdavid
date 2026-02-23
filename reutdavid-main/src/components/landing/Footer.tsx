const Footer = () => (
  <footer className="py-12 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <p className="font-body text-sm mb-6 text-primary-foreground/80">כל הזכויות שמורות © רעות דוד</p>
      <div className="flex items-center justify-center gap-8 text-sm text-primary-foreground/70">
        <button className="hover:text-primary-foreground transition-colors">מדיניות פרטיות</button>
        <button className="hover:text-primary-foreground transition-colors">תנאי שימוש</button>
        <button className="hover:text-primary-foreground transition-colors">הצהרת נגישות</button>
        <a
          href="https://www.instagram.com/reut_david10/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-foreground transition-colors"
        >
          אינסטגרם
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
