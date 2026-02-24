import { useTranslation } from "react-i18next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const sections = t("privacyPolicy.sections", { returnObjects: true }) as Array<{
    heading: string;
    content: string;
  }>;

  return (
    <LegalPageLayout
      title={t("privacyPolicy.title")}
      lastUpdated={t("privacyPolicy.lastUpdated")}
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
