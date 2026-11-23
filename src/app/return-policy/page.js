import LegalPage from "@/app/Component/LegalPage";
import { getLegalPage, legalMetadata } from "@/app/lib/legal";

export const generateMetadata = () => legalMetadata("return-policy", "Return Policy");

export default async function Page() {
  return <LegalPage slug="return-policy" path="/return-policy" title="Return Policy" initial={await getLegalPage("return-policy")} />;
}
