import LegalPage from "@/app/Component/LegalPage";
import { getLegalPage, legalMetadata } from "@/app/lib/legal";

export const generateMetadata = () => legalMetadata("privacy", "Privacy Policy");

export default async function Page() {
  return <LegalPage slug="privacy" path="/privacy-policy" title="Privacy Policy" initial={await getLegalPage("privacy")} />;
}
