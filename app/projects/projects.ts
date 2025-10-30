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
    subtitle: "Website design, development and ongoing management"
  },
  {
    title: "Andreassen Kapital",
    href: "https://www.andreassenkapital.no/",
    imageSrc: "/andreassenKapitalaTech.png",
    subtitle: "Corporate website — designed, developed and maintained"
  },
  {
    title: "Private Consulting",
    href: "/projects/andreassen-technology",
    imageSrc: "/andreassentechconsults.png",
    subtitle: "Tailored tech solutions and advisory"
  },
  {
    title: "StudyAI",
    href: "/projects/studyai",
    imageSrc: "/studyaiAtech.png",
    subtitle: "AI-driven app and website study tool — coming soon"
  }
];

