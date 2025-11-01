"use client";
import Link from "next/link";
import React, { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import ForgatAccountForm from "./ForgatAccountForm";
import CreateLogin from "./CreateLogin";

export default function UserCraete() {
  const [tab, setTab] = useState("Login");

  return (
    <div className="min-h-screen bg-[url('/img/sign/sign1.webp')] bg-center">
      <div className="bg-black/70 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          {/* Top Gradient Line */}
          <div className="w-[90%] mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] rounded mt-4 mb-6" />

          {/* Form Card Content */}
          <div className="px-6 py-6 sm:px-8">
            <h5 className="text-center text-xl sm:text-2xl font-bold text-gray-700 mb-6">
              {tab === "Create"
                ? "Create an Account"
                : tab === "Login"
                ? "Member Login"
                : tab === "Forgot"
                ? "Forgot Password"
                : "Welcome"}
            </h5>

            {/* Conditional Form Rendering */}
            {tab === "Create" ? (
              <CreateAccountForm />
            ) : tab === "Login" ? (
              <CreateLogin />
            ) : tab === "Forgot" ? (
              <ForgatAccountForm />
            ) : (
              <CreateLogin />
            )}

            {/* Tab Switch Buttons */}
            <div className="flex flex-wrap justify-center gap-3 text-gray-900 font-medium text-sm mt-6">
              <button
                onClick={() => setTab("Login")}
                className={`hover:underline ${
                  tab === "Login" && "text-blue-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setTab("Create")}
                className={`hover:underline ${
                  tab === "Create" && "text-blue-600"
                }`}
              >
                Create Account
              </button>
              <button
                onClick={() => setTab("Forgot")}
                className={`hover:underline ${
                  tab === "Forgot" && "text-blue-600"
                }`}
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
