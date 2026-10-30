import React from "react";
import Link from "next/link";

export default function CreateAccountForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ca-name" className="field-label">Name</label>
          <input id="ca-name" type="text" placeholder="Name" className="field" />
        </div>
        <div>
          <label htmlFor="ca-phone" className="field-label">Phone</label>
          <input id="ca-phone" type="tel" placeholder="Phone" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="ca-email" className="field-label">Email</label>
        <input id="ca-email" type="email" placeholder="Email ID*" className="field" />
      </div>
      <div>
        <label htmlFor="ca-password" className="field-label">Password</label>
        <input id="ca-password" type="password" placeholder="Password" className="field" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="ca-type" className="field-label">User Type</label>
          <Link href="/user-type" className="mb-1.5 text-xs font-semibold text-brand-600 hover:underline">What’s the difference?</Link>
        </div>
        <select id="ca-type" className="field" defaultValue="">
          <option value="" disabled>User Type</option>
          <option value="General user">General User</option>
          <option value="Service Provider">Service Provider</option>
        </select>
      </div>
      <button type="submit" className="btn-primary w-full py-3.5 text-base">Register Now</button>
    </form>
  );
}
