"use client";

import { logout } from "../actions/logout";
import { useRouter } from "next/navigation";


export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return <button onClick={handleLogout} className="font-serif text-sm">Logout</button>;
}
