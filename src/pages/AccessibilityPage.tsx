import { useTranslation } from "react-i18next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const AccessibilityPage = () => {
  const { t } = useTranslation();
  const sections = t("accessibilityStatement.sections", { returnObjects: true }) as Array<{
    heading: string;
    content: string;
  }>;

  return (
    <LegalPageLayout
      title={t("accessibilityStatement.title")}
      lastUpdated={t("accessibilityStatement.lastUpdated")}
      sections={sections}
    />
  );
};

export default AccessibilityPage;
