import { useTranslation } from "react-i18next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const TermsOfUse = () => {
  const { t } = useTranslation();
  const sections = t("termsOfUse.sections", { returnObjects: true }) as Array<{
    heading: string;
    content: string;
  }>;

  return (
    <LegalPageLayout
      title={t("termsOfUse.title")}
      lastUpdated={t("termsOfUse.lastUpdated")}
      sections={sections}
    />
  );
};

export default TermsOfUse;
