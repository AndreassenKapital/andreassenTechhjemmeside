import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andreassen Technology",
  description: "Modern software & AI by Andreassen Technology AS",
  openGraph: {
    title: "Andreassen Technology",
    description: "Modern software & AI by Andreassen Technology AS",
    url: "https://andreassentechnology.com",
    siteName: "Andreassen Technology",
    images: [],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#0b0d10] text-[#e6e6e6]">
      <body className={inter.className}>
        <div className="min-h-dvh flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

