"use client";

interface SimpleProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

export default function SimpleProfileCard({ name, role, imageSrc }: SimpleProfileCardProps) {
  return (
    <div className="relative mx-auto max-w-md rounded-3xl p-[2px]">
      {/* Subtil border/halo */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/15 via-teal-300/10 to-sky-400/15 blur-[6px]"></div>

      {/* Card body */}
      <div className="relative rounded-3xl bg-neutral-900/80 ring-1 ring-white/10 overflow-hidden">
        <div className="relative h-72 md:h-80">
          <img src={imageSrc} alt={name} className="h-full w-full object-cover grayscale-0" loading="lazy" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="px-5 py-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{name}</h2>
          <p className="mt-1 text-sm md:text-base opacity-80">{role}</p>
        </div>
      </div>
    </div>
  );
}

