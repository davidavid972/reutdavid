import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm mb-6 text-primary-foreground/80">
          {t("footer.rights")}
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-primary-foreground/70 flex-wrap">
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
            {t("footer.privacy")}
          </Link>
          <Link to="/terms" className="hover:text-primary-foreground transition-colors">
            {t("footer.terms")}
          </Link>
          <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">
            {t("footer.accessibility")}
          </Link>
          <a
            href="https://www.instagram.com/reut_david10/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground transition-colors"
          >
            {t("footer.instagram")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
