import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "./projects";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-neutral-100 relative pt-28">
        <section className="mx-auto max-w-6xl px-4 py-12 container-p">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {projects.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

