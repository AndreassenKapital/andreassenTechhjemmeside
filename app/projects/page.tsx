import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
  const cards = Array.from({ length: 6 });
  return (
    <>
      <Navbar />
      <main className="container-p pt-28">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <p className="text-white/70 mb-8">Coming soon. Selected work will appear here.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((_, i) => (
            <div key={i} className="glass rounded-2xl p-6 h-40 flex items-end">
              <span className="text-white/40">Placeholder #{i+1}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

