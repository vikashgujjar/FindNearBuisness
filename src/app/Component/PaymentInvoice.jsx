"use client";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { DashCard, TableWrap } from "../ui/blocks";
import { cityHref, useUserLocation } from "../context/LocationContext";

const invoicesData = [
  { id: 1, paymentDate: "28, Dec 2019", amount: "$150", invoiceName: "Invoice-1", available: true },
  { id: 2, paymentDate: "28, Dec 2019", amount: "$50", invoiceName: "Invoice-2", available: true },
  { id: 3, paymentDate: "28, Dec 2019", amount: "$120", invoiceName: "Invoice-3", available: true },
  { id: 4, paymentDate: "29, Dec 2019", amount: "$15", invoiceName: "N/A", available: false },
].map((i) => ({ ...i, name: "Premium Plus Plan" }));

function PaymentInvoice() {
  const { location } = useUserLocation();

  return (
    <CommonDashLayout>
      <DashCard badge="Invoices" title="Payment Invoices">
        <TableWrap>
          <table className="data-table">
            <thead>
              <tr><th>No</th><th>Name</th><th>Payment Date</th><th>Amount</th><th className="text-right">Download</th></tr>
            </thead>
            <tbody>
              {invoicesData.map((invoice, index) => (
                <tr key={invoice.id}>
                  <td className="font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</td>
                  <td className="font-semibold text-night-900">{invoice.name}</td>
                  <td>{invoice.paymentDate}</td>
                  <td><span className="font-display font-extrabold text-night-900">{invoice.amount}</span></td>
                  <td className="text-right">
                    {invoice.available ? (
                      <a href={cityHref(location, "invoice")} download={invoice.invoiceName} className="btn-ghost btn-sm">
                        <FaDownload /> Download
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">Invoice N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
      </DashCard>
    </CommonDashLayout>
  );
}

export default PaymentInvoice;
