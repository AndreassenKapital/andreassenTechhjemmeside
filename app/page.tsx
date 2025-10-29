import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrueFocus from "@/components/TrueFocus";
import DecryptedText from "@/components/DecryptedText";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-28">
        <section className="relative h-[70vh] min-h-[560px]">
          <div className="absolute inset-0">
            <DarkVeil className="rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container-p">
            <TrueFocus sentence="Andreassen Technology" className="mb-6" />
            <DecryptedText
              text="Modern software & AI for ambitious teams"
              animateOn="view"
              className="font-medium"
              parentClassName="text-lg md:text-xl text-white/80"
            />
            <div className="mt-10 flex gap-3">
              <a href="/projects" className="glass px-5 py-3 rounded-xl hover:bg-white/10 transition">View Projects</a>
              <a href="/contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10">Contact</a>
            </div>
          </div>
        </section>

        <section className="container-p mt-20 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">What we do</h3>
            <p className="text-white/70">Design and build web apps, APIs and AI-driven tools with a focus on performance and DX.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">How we work</h3>
            <p className="text-white/70">Small, senior team. Rapid iterations. Clean code, clean UI.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Tech</h3>
            <p className="text-white/70">Next.js, TypeScript, Postgres, edge functions, and modern motion graphics.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

