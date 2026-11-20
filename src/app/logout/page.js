"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
let LogoutPage = () => {
  let e = useRouter(),
    { logout } = useAuth();
  return (
    useEffect(() => {
      logout().finally(() => e.replace("/"));
    }, []),
    (<p className="py-24 text-center text-slate-500">Signing you out…</p>)
  );
};
export default LogoutPage;
