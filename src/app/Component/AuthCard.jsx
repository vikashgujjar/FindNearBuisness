"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapGrid, Glow } from "@/app/ui/decor";
import { Reveal } from "@/app/ui/motion";
import CreateAccountForm from "@/app/Component/CreateAccountForm";
import ForgatAccountForm from "@/app/Component/ForgatAccountForm";
import CreateLogin from "@/app/Component/CreateLogin";
let y = [
  {
    id: "Login",
    label: "Login",
    title: "Welcome back",
    subtitle: "Sign in to manage your listings and leads.",
  },
  {
    id: "Create",
    label: "Create account",
    title: "Create an account",
    subtitle: "Join as a customer, or list your business and reach customers nearby.",
  },
];
// "Forgot" is not a tab, but it still needs a heading (the live site crashed here: d was undefined).
const forgotView = {
  id: "Forgot",
  title: "Reset your password",
  subtitle: "Enter your email and we'll send you a link to set a new password.",
};
function AuthCard(props) {
  let { defaultTab = "Login" } = props,
    [a, c] = useState(defaultTab),
    d = [...y, forgotView].find((e) => e.id === a) || y[0];
  return (
    <section className="relative overflow-hidden bg-night-950 px-4 py-12 sm:py-20">
      <MapGrid opacity={0.55} />
      <Glow className="-left-24 top-10 h-80 w-80" color="bg-brand-600/35" />
      <Glow className="-right-24 bottom-10 h-80 w-80" color="bg-magenta-500/25" />
      <Reveal
        y={30}
        className="relative mx-auto grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-card-hover md:grid-cols-[1fr_1.1fr]"
      >
        <div className="relative hidden flex-col justify-between overflow-hidden bg-brand-gradient p-10 text-white md:flex">
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <img src="/img/logo/findbee.webp" alt="Findbee" className="relative w-40 rounded-xl bg-white p-2" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-tight">Your city’s businesses, one tap away.</h2>
            <p className="mt-3 text-sm text-white/80">Join 2k+ premium users growing with Findbee.</p>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex gap-1 rounded-full bg-mist p-1" role="tablist">
            {y.map((e) => (
              <button
                key={e.id}
                type="button"
                role="tab"
                aria-selected={a === e.id}
                onClick={() => c(e.id)}
                className={`relative flex-1 rounded-full px-2 py-2 text-xs font-semibold transition sm:text-sm ${a === e.id ? "text-white" : "text-slate-500 hover:text-night-900"}`}
              >
                {a === e.id && (
                  <motion.span
                    layoutId="auth-tab"
                    className="absolute inset-0 rounded-full bg-night-900"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative">{e.label}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={a}
              initial={{
                opacity: 0,
                x: 16,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -16,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <h1 className="mt-7 text-2xl font-extrabold text-night-900 sm:text-3xl">{d.title}</h1>
              <p className="mt-1 text-sm text-slate-500">{d.subtitle}</p>
              <div className="mt-6">
                {"Create" === a ? (
                  <CreateAccountForm onLogin={() => c("Login")} />
                ) : "Forgot" === a ? (
                  <ForgatAccountForm />
                ) : (
                  <CreateLogin onForgot={() => c("Forgot")} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
export { AuthCard };
