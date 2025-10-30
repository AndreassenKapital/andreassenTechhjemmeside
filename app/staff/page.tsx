import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimpleProfileCard from "@/components/SimpleProfileCard";

export default function StaffPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-neutral-100 relative pt-28 pb-20">
        <div className="container-p px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Our Team</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Meet the people and collaborators behind Andreassen Technology.
            </p>
          </div>

          {/* Core Team */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6">Core Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <SimpleProfileCard
                name="Chief Technology Officer"
                role="Leading innovation and product development at Andreassen Technology"
                imageSrc="/CTOaTech.png"
                accent="cyan"
                intensity={0.25}
              />
              {/* Placeholder for future team members */}
              <div className="rounded-3xl border border-white/10 p-6 text-center opacity-70 bg-neutral-900/50">
                <div className="text-lg font-medium">More team profiles coming soon</div>
              </div>
            </div>
          </section>

          {/* Advisors & Collaborators */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Advisors & Collaborators</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 opacity-80">
              <li className="px-4 py-3 rounded-xl bg-neutral-900/50 border border-white/10">Design partner — TBD</li>
              <li className="px-4 py-3 rounded-xl bg-neutral-900/50 border border-white/10">Cloud/Infra — TBD</li>
              <li className="px-4 py-3 rounded-xl bg-neutral-900/50 border border-white/10">Academic collaboration — TBD</li>
            </ul>
          </section>

          {/* Open Roles / Work with us */}
          <section>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">Work with us</h3>
              <p className="opacity-80 mb-4">
                We collaborate with freelancers and partners. If you're into AI, web, or data engineering, reach out.
              </p>
              <a href="/contact" className="inline-flex rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/10 hover:bg-white/15 transition">
                Contact
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

