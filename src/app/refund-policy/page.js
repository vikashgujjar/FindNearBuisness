import LegalPage from "@/app/Component/LegalPage";
import { getLegalPage, legalMetadata } from "@/app/lib/legal";

export const generateMetadata = () => legalMetadata("refund-policy", "Refund Policy");

export default async function Page() {
  return <LegalPage slug="refund-policy" path="/refund-policy" title="Refund Policy" initial={await getLegalPage("refund-policy")} />;
}
