"use client";

import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  href: string;
  imageSrc: string;
  subtitle?: string;
}

export default function ProjectCard({ title, href, imageSrc, subtitle }: ProjectCardProps) {
  const isExternal = href.startsWith('http');
  const displayHref = href === '#' ? '/projects' : href;

  return (
    <a
      href={displayHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-neutral-950 h-full group"
    >
      <div className="project-card bg-white/5 backdrop-blur-sm rounded-2xl h-full flex flex-col border shadow-[0_0_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(32,41,44,0.15)]">
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    </a>
  );
}

