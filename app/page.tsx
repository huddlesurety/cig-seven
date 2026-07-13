"use client";

import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState<string>();

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-white gap-4">
      <button
        onClick={() => setMsg("-20 mins of yo life")}
        className="bg-black p-4 text-white rounded-xl cursor-pointer text-2xl hover:opacity-80 transition-all active:scale-90"
      >
        I just smoked a 🚬
      </button>
      <p className="text-black">{msg}</p>
    </main>
  );
}
