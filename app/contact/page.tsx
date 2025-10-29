"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "Message sent ✓" : "Something went wrong");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Navbar />
      <main className="container-p pt-28">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-white/70 mb-8">Tell us about your project.</p>
        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 max-w-xl grid gap-4">
          <input name="name" placeholder="Name" required className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
          <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
          <textarea name="message" placeholder="Message" rows={6} required className="bg-transparent border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
          <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10 w-fit">Send</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}

