"use client";

import PinLocation from "@/app/Component/PinLocation";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { BecomeVendor } from "@/app/Component/BecomeVendor";
function BecomeVendorPage() {
  return (
    <>
      <PinLocation />
      <CommonDashLayout>
        <BecomeVendor />
      </CommonDashLayout>
    </>
  );
}
export default BecomeVendorPage;
