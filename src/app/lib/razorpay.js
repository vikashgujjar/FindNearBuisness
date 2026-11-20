"use client";

// Razorpay Standard Checkout in the browser. The server creates the order and decides the
// amount (POST /vendor/payments returns `checkout`); this only opens the payment window.
const SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";
let loading = null;

function loadScript() {
  if (typeof window !== "undefined" && window.Razorpay) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT;
      s.async = true;
      s.onload = resolve;
      s.onerror = () => {
        loading = null;
        reject(new Error("Could not load the payment window. Check your internet connection and try again."));
      };
      document.body.appendChild(s);
    });
  }
  return loading;
}

// Opens Checkout. Resolves with { razorpay_order_id, razorpay_payment_id, razorpay_signature }
// after a successful payment; rejects with { cancelled: true } when the window is closed.
export async function openRazorpay(checkout) {
  await loadScript();
  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      ...checkout,
      theme: { color: "#0A8EF8" },
      handler: resolve,
      modal: { ondismiss: () => reject(Object.assign(new Error("Payment cancelled."), { cancelled: true })) },
    });
    // A failed attempt keeps the window open so the customer can retry; nothing to do here.
    rzp.on("payment.failed", () => {});
    rzp.open();
  });
}
