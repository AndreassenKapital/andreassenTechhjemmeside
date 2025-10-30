export interface Project {
  title: string;
  href: string;
  imageSrc: string;
  subtitle?: string;
}

export const projects: Project[] = [
  {
    title: "Bergen Badstu",
    href: "https://www.bergenbadstu.no/",
    imageSrc: "https://picsum.photos/seed/bergen/800/600?grayscale",
    subtitle: "Nettside og booking"
  },
  {
    title: "Andreassen Kapital",
    href: "https://www.andreassenkapital.no/",
    imageSrc: "https://picsum.photos/seed/kapital/800/600?grayscale",
    subtitle: "Investeringsselskap"
  },
  {
    title: "Andreassen Technology",
    href: "#",
    imageSrc: "https://picsum.photos/seed/tech/800/600?grayscale",
    subtitle: "Tech & utvikling"
  },
  {
    title: "StudyAI",
    href: "#",
    imageSrc: "https://picsum.photos/seed/studyai/800/600?grayscale",
    subtitle: "AI-basert læring"
  }
];

