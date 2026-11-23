import LegalPage from "@/app/Component/LegalPage";
import { getLegalPage, legalMetadata } from "@/app/lib/legal";

export const generateMetadata = () => legalMetadata("terms", "Terms and Conditions");

export default async function Page() {
  return <LegalPage slug="terms" path="/terms-and-conditions" title="Terms and Conditions" initial={await getLegalPage("terms")} />;
}
