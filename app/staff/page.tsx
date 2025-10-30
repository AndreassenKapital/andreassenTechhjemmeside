import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

export default function StaffPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-neutral-100 relative pt-28 pb-20">
        <div className="container-p flex flex-col items-center px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="mb-10 text-center text-lg opacity-80 max-w-xl">
            Meet the people driving Andreassen Technology.
          </p>
          <div className="w-full max-w-md">
            <ProfileCard
              avatarUrl="/CTOaTech.png"
              name="Chief Technology Officer"
              title="Leading innovation and product development at Andreassen Technology"
              handle=""
              status=""
              contactText=""
              showUserInfo={false}
              enableTilt={true}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

