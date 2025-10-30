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
    imageSrc: "/bergenBadstueAtech.png",
    subtitle: "Nettside og booking"
  },
  {
    title: "Andreassen Kapital",
    href: "https://www.andreassenkapital.no/",
    imageSrc: "/andreassenKapitalaTech.png",
    subtitle: "Investeringsselskap"
  },
  {
    title: "Andreassen Technology",
    href: "/projects/andreassen-technology",
    imageSrc: "https://picsum.photos/seed/tech/800/600?grayscale",
    subtitle: "Tech & utvikling"
  },
  {
    title: "StudyAI",
    href: "/projects/studyai",
    imageSrc: "https://picsum.photos/seed/studyai/800/600?grayscale",
    subtitle: "AI-basert læring"
  }
];

