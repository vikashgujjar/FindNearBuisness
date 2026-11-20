"use client";

import { createContext, useState, useCallback, useEffect, useContext } from "react";
import { getToken, apiFetch, setToken, clearApiCache } from "@/app/lib/api";
let n = createContext(null);
function AuthProvider(props) {
  let { children } = props,
    [a, r] = useState(null),
    [o, c] = useState(false),
    d = useCallback(async () => {
      if (!getToken()) return r(null), c(true), null;
      try {
        let { data } = await apiFetch("/auth/me");
        return r(data), data;
      } catch (e) {
        return r(null), null;
      } finally {
        c(true);
      }
    }, []);
  useEffect(() => {
    d();
  }, [d]);
  let m = (e) => (setToken(e.token), r(e.user), clearApiCache(), e),
    // Email + password login always continues with an SMS code: this returns
    // { otp_required, needs_phone, login_token, message }; finish with verifyLogin().
    h = (email, password) => apiFetch("/auth/login", { method: "POST", body: { email, password }, auth: false }),
    loginAddPhone = (login_token, phone) => apiFetch("/auth/login/phone", { method: "POST", body: { login_token, phone }, auth: false }),
    resendLoginOtp = (login_token) => apiFetch("/auth/login/resend", { method: "POST", body: { login_token }, auth: false }),
    verifyLogin = async (login_token, otp) =>
      m(await apiFetch("/auth/login/verify", { method: "POST", body: { login_token, otp }, auth: false })),
    // Sign-up: register(form + otp) after sendRegisterOtp(form) texted the code.
    u = async (e) => {
      let t = await apiFetch("/auth/register", {
        method: "POST",
        body: e,
        auth: false,
      });
      return t.token ? m(t) : t;
    },
    sendRegisterOtp = (form) => apiFetch("/auth/register/otp", { method: "POST", body: form, auth: false }),
    // Mobile login: sendLoginOtp(phone), then loginWithOtp(phone, code).
    sendLoginOtp = (phone) => apiFetch("/auth/login/otp", { method: "POST", body: { phone }, auth: false }),
    loginWithOtp = async (phone, otp) =>
      m(await apiFetch("/auth/login/otp/verify", { method: "POST", body: { phone, otp }, auth: false })),
    x = async () => {
      try {
        await apiFetch("/auth/logout", {
          method: "POST",
        });
      } catch (e) {}
      setToken(null), r(null), clearApiCache();
    };
  return (
    <n.Provider
      value={{
        user: a,
        ready: o,
        isLoggedIn: !!a,
        login: h,
        loginAddPhone,
        resendLoginOtp,
        verifyLogin,
        register: u,
        sendRegisterOtp,
        sendLoginOtp,
        loginWithOtp,
        logout: x,
        refresh: d,
        setUser: r,
      }}
    >
      {children}
    </n.Provider>
  );
}
function useAuth() {
  return useContext(n);
}
export { useAuth, AuthProvider };
