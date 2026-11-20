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
    h = async (e, t) =>
      m(
        await apiFetch("/auth/login", {
          method: "POST",
          body: {
            email: e,
            password: t,
          },
          auth: false,
        }),
      ),
    u = async (e) => {
      let t = await apiFetch("/auth/register", {
        method: "POST",
        body: e,
        auth: false,
      });
      return t.token ? m(t) : t;
    },
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
        register: u,
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
