"use client";
import Link from "next/link";
import React, { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import ForgatAccountForm from "./ForgatAccountForm";
import CreateLogin from "./CreateLogin";

export default function UserCraete() {
  const [tab, setTab] = useState("Create");
  console.log("tab value",tab)
  return (
    <div className="bg-[url('/img/sign/sign1.webp')] h-screen  bg-center">
      <div className="bg-[rgba(0,0,0,0.71)] h-full flex items-center">
        <div className="w-full max-w-md mx-auto bg-white h-auto rounded-md shadow-lg">
          <div className="w-[90%] mx-auto h-2 bg-gradient-to-br from-[#4c7af1] to-[#7fccbb] mb-6 rounded"></div>

          <div className="px-6 py-3">
            <h5 className="text-center font-bold text-2xl mb-6 text-gray-700">
              {tab == "Create"
                ? " Create an Account"
                : tab == "Login"
                ? "Member Login"
                : tab == "Forgot"
                ? "Forgot password"
                : "Member Login"}
            </h5>
            {tab == "Create" ? (
              <CreateAccountForm />
            ) : tab == "Login" ? (
              <CreateLogin />
            ) : tab == "Forgot" ? (
              <ForgatAccountForm />
            ) : (
              <CreateLogin />
            )}

            <div className="flex justify-center text-gray-900 font-semibold items-center text-xs gap-x-5 mt-4">
              <button
                onClick={() => setTab("Login")}
                className="hover:underline"
              >
                Login?
              </button>
              <button
                onClick={() => setTab("Create")}
                className=" hover:underline"
              >
                Create an account?
              </button>
              <button
                onClick={() => setTab("Forgot")}
                className=" hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
