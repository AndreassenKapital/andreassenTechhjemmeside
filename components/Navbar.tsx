"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/staff", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-4 inset-x-0 z-50">
      <div className="container-p">
        <div className="glass rounded-2xl px-4 py-2 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">
            Andreassen Technology
          </Link>
          <div className="flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1 rounded-xl transition ${
                  path === l.href ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

