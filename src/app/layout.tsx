import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Ghonem | Quality Assurance & Software Testing Engineer",
  description:
    "Portfolio of Ahmed Ghonem, Junior QA Engineer at Sarmady (Vodafone Company) with a Software Engineering & Backend foundation. Specializing in functional web testing, REST API validation with Postman, and defect isolation.",
  metadataBase: new URL("https://ahmed-ghonem-portfolio.vercel.app"),
  openGraph: {
    title: "Ahmed Ghonem | Quality Assurance Engineer",
    description:
      "Software Engineering graduate and Junior QA Engineer at Sarmady. Explore functional test suites, Postman API collections, and defect root-cause logs.",
    url: "https://ahmed-ghonem-portfolio.vercel.app",
    siteName: "Ahmed Ghonem Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Ahmed Ghonem - QA Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ghonem | QA Engineer",
    description:
      "Code-aware QA Engineer specializing in functional testing, REST API validation, and software quality assurance.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}