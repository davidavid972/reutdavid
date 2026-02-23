import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const links = t("footer.links").split(" | ");

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm mb-6 text-primary-foreground/80">
          {t("footer.rights")}
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-primary-foreground/70 flex-wrap">
          {links.slice(0, -1).map((link, i) => (
            <button key={i} className="hover:text-primary-foreground transition-colors">
              {link}
            </button>
          ))}
          <a
            href="https://www.instagram.com/reut_david10/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground transition-colors"
          >
            {links[links.length - 1]}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
