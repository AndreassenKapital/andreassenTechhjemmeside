import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-20">
        <div className="container-p max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <h1 className="text-4xl font-bold mb-6">404</h1>
            <p className="text-lg text-white/80 mb-6">
              This page could not be found.
            </p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

