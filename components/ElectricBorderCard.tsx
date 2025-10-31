"use client";

import ElectricBorder from "./ElectricBorder";

interface ElectricBorderCardProps {
  title: string;
  href: string;
  imageSrc: string;
  subtitle?: string;
}

export default function ElectricBorderCard({ title, href, imageSrc, subtitle }: ElectricBorderCardProps) {
  const isExternal = href.startsWith('http');
  const displayHref = href === '#' ? '/projects' : href;

  return (
    <a
      href={displayHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-xl transition-transform hover:scale-105"
    >
      <ElectricBorder
        color="#340893"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
        className="h-full"
      >
        <div className="relative h-full min-h-[260px] flex flex-col">
          <div className="relative h-52 overflow-hidden rounded-t-xl">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {subtitle && (
              <p className="text-base text-white/70">{subtitle}</p>
            )}
          </div>
        </div>
      </ElectricBorder>
    </a>
  );
}

