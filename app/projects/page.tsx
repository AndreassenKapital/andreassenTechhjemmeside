import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CircularGallery from "@/components/CircularGallery";
import { projects } from "./projects";

export default function Projects() {
  // Transform projects data to match CircularGallery format
  const galleryItems = projects.map((project) => ({
    image: project.imageSrc,
    text: project.title,
    href: project.href
  }));

  return (
    <>
      <Navbar />
      <main className="relative pt-28 pb-20">
        <div className="container-p mb-12">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-white/70">
            Klikk på et prosjekt for å se mer. Scroll med musepekeren eller swipe på mobile enheter.
          </p>
        </div>
        <div style={{ height: '70vh', minHeight: '600px' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            font="bold 2rem Inter, sans-serif"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

