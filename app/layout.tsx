import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://suchitra-m.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Suchitra M — Aspiring Software Developer",
  description:
    "Portfolio of Suchitra M, an AI & Machine Learning engineering student and Java Full Stack Developer building scalable web applications. Seeking internship opportunities.",
  keywords: [
    "Suchitra M",
    "Java Full Stack Developer",
    "AI Machine Learning Engineer",
    "Spring Boot Developer",
    "React Developer",
    "Software Engineering Intern",
    "Portfolio",
  ],
  authors: [{ name: "Suchitra M" }],
  openGraph: {
    title: "Suchitra M — Aspiring Software Developer",
    description:
      "AI & Machine Learning engineering student and Java Full Stack Developer building scalable web applications.",
    url: siteUrl,
    siteName: "Suchitra M Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suchitra M — Aspiring Software Developer",
    description:
      "AI & Machine Learning engineering student and Java Full Stack Developer building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
