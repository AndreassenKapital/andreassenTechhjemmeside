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
      <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
        <div className="container-p">
          <div className="max-w-2xl mx-auto">
            {/* Header Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Contact</h1>
              <p className="text-lg opacity-80">
                We'd love to hear about your project. Whether you're looking for collaboration, consulting, or full-stack development, reach out below.
              </p>
            </section>

            {/* Form Card */}
            <form onSubmit={onSubmit} className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)] space-y-4 mb-12">
              <input 
                name="name" 
                placeholder="Name" 
                required 
                className="w-full rounded-lg bg-neutral-900/80 px-4 py-3 border border-white/10 focus:ring-2 focus:ring-cyan-400/50 outline-none transition"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="w-full rounded-lg bg-neutral-900/80 px-4 py-3 border border-white/10 focus:ring-2 focus:ring-cyan-400/50 outline-none transition"
              />
              <textarea 
                name="message" 
                placeholder="Message" 
                rows={6} 
                required 
                className="w-full rounded-lg bg-neutral-900/80 px-4 py-3 border border-white/10 focus:ring-2 focus:ring-cyan-400/50 outline-none transition resize-none"
              />
              <button 
                className="w-full rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20 transition-all py-3 font-semibold"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-center text-cyan-400">{status}</p>}
            </form>

            {/* Contact Info */}
            <div className="text-center text-sm opacity-70 space-y-2">
              <p>
                Email: <a href="mailto:hello@andreassentechnology.no" className="hover:underline text-cyan-400/80">hello@andreassentechnology.no</a>
              </p>
              <p>Bergen, Norway</p>
              <p>Mon–Fri, 09:00–17:00</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

