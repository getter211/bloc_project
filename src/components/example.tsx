"use client";

import { useUserContext } from "@/context/UserContext";

export default function Example() {
  const { user } = useUserContext();
  const username = user?.nombre ?? "usuario";
  return <h1 className="text-3xl font-bold mb-6">Hola {username}</h1>;
}
