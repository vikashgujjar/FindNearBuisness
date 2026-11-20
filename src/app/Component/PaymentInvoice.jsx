"use client";

import { FaFileInvoice } from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { DashCard, TableWrap, StatusChip, iconBtn } from "@/app/ui/blocks";
import { useApi, formatDate, formatPrice } from "@/app/lib/api";
function Cc() {
  var e;
  let { data, error } = useApi("/vendor/payments", {
      cacheable: false,
    }),
    l = data?.data?.filter((e) => "paid" === e.status);
  return (
    <DashCard badge="Payment invoice" title="Your Invoices">
      <TableWrap>
        <table className="data-table min-w-[620px]">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="text-right">Open</th>
            </tr>
          </thead>
          <tbody>
            {(l || []).map((e) => (
              <tr key={e.id}>
                <td className="font-semibold text-night-900">{e.invoice_number}</td>
                <td>{formatDate(e.paid_at)}</td>
                <td>{e.description}</td>
                <td>{formatPrice(e.amount)}</td>
                <td>
                  <StatusChip status={e.status} />
                </td>
                <td>
                  <a
                    href={e.invoice_url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${iconBtn} ml-auto`}
                    title="Open invoice"
                    aria-label={`Open invoice ${e.invoice_number}`}
                  >
                    <FaFileInvoice className="text-xs" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
      {!l && !error && <p className="py-10 text-center text-slate-400">Loading…</p>}
      {error && (
        <p className="py-10 text-center text-sm text-rose-600" role="alert">
          {error.message}
        </p>
      )}
      {l?.length === 0 && (
        <p className="py-10 text-center text-slate-400">Invoices appear here once a payment is confirmed.</p>
      )}
    </DashCard>
  );
}
let PaymentInvoice = function () {
  return (
    <CommonDashLayout vendorOnly>
      <Cc />
    </CommonDashLayout>
  );
};
export default PaymentInvoice;
