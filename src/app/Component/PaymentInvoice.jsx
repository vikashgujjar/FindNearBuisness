"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import CommonDashLayout from "./CommonDashLayout";
function PaymentInvoice() {
  const invoicesData = [
    {
      id: 1,
      name: "Premium Plus Plan",
      paymentDate: "28, Dec 2019",
      amount: "$150",
      downloadLink: "/RajpuraTahsil/invoice",
      invoiceName: "Invoice-1",
    },
    {
      id: 2,
      name: "Premium Plus Plan",
      paymentDate: "28, Dec 2019",
      amount: "$50",
      downloadLink: "/RajpuraTahsil/invoice",
      invoiceName: "Invoice-2",
    },
    {
      id: 3,
      name: "Premium Plus Plan",
      paymentDate: "28, Dec 2019",
      amount: "$120",
      downloadLink: "/RajpuraTahsil/invoice",
      invoiceName: "Invoice-3",
    },
    {
      id: 4,
      name: "Premium Plus Plan",
      paymentDate: "29, Dec 2019",
      amount: "$15",
      downloadLink: "#",
      invoiceName: "N/A",
    },
  ];

  const [activeTab, setActiveTab] = useState("");

  return (
    


<CommonDashLayout>
      <div>
            <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            {/* Title Section */}
            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              invoices
            </div>
            <div className="container mx-auto p-4">
              <h2 className="text-base font-semibold mb-4">Payment Invoices</h2>

              <div className="overflow-x-auto w-[300px] md:w-full">
                <table className="w-full min-w-[600px] border-b border-gray-300 rounded-lg text-[13px]">
                  <thead className=" text-gray-700">
                    <tr className="text-center">
                      <th className="p-3 border-b">No</th>
                      <th className="p-3 border-b">Name</th>
                      <th className="p-3 border-b">Payment Date</th>
                      <th className="p-3 border-b">Amount</th>
                      <th className="p-3 border-b">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoicesData.map((invoice, index) => (
                      <tr
                        key={invoice.id}
                        className="border-b hover:bg-gray-50 text-center"
                      >
                        <td className="p-3 border-b">{index + 1}</td>
                        <td className="p-3 border-b">{invoice.name}</td>
                        <td className="p-3 border-b">{invoice.paymentDate}</td>
                        <td className="p-3 border-b">
                          <span className="font-semibold text-gray-800 bg-[#f7ed94] px-2 py-1 text-xs">
                            {invoice.amount}
                          </span>
                        </td>
                        <td className="p-3 border-b">
                          {invoice.downloadLink !== "#" ? (
                            <a
                              href={invoice.downloadLink}
                              download={invoice.invoiceName}
                              className="text-[#39708b] hover:text-blue-700 border font-semibold border-[#becdd5] py-1 flex items-center justify-center gap-2"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="download"
                                className="w-5 h-5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                                ></path>
                              </svg>
                              Download Invoice
                            </a>
                          ) : (
                            <span className="text-gray-500">Invoice N/A</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</CommonDashLayout>


  );
}

export default PaymentInvoice;
